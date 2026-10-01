import { execFile } from 'node:child_process'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { createServer, type IncomingMessage, type Server } from 'node:http'
import type { AddressInfo } from 'node:net'
import path from 'node:path'
import { promisify } from 'node:util'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const run = promisify(execFile)
const ROOT = path.resolve(__dirname, '../../..')
const PROBE = path.resolve(__dirname, '../harness/probe.cjs')

// Every top-level directory with a package.json and src/index.js is a generated package.
const PACKAGES = readdirSync(ROOT).filter((d) => {
  const dir = path.join(ROOT, d)
  return statSync(dir).isDirectory() && d !== 'tests' && !d.startsWith('.') && safeExists(path.join(dir, 'src', 'index.js'))
})

function safeExists(file: string): boolean {
  try {
    return statSync(file).isFile()
  } catch {
    return false
  }
}

interface Route { className: string; name: string; method: string | null; route: string | null }

async function probe(pkg: string, ...args: string[]) {
  const { stdout } = await run(process.execPath, [PROBE, path.join(ROOT, pkg), ...args], { maxBuffer: 16 * 1024 * 1024 })
  return JSON.parse(stdout)
}

// Endpoint table of the package README: *Module.ApiClass* | [**method**](...) | **VERB** /path | ...
function documentedEndpoints(pkg: string) {
  const readme = readFileSync(path.join(ROOT, pkg, 'README.md'), 'utf8')
  const rows = [...readme.matchAll(/^\*\w+\.(\w+)\* \| \[\*\*(\w+)\*\*\]\([^)]*\) \| \*\*(\w+)\*\* (\S+) \|/gm)]
  return rows.map(([, className, name, method, route]) => ({ className, name, method, route }))
}

describe('generated packages', () => {
  it('finds every package of the SDK', () => {
    expect(PACKAGES.length).toBeGreaterThanOrEqual(18)
  })

  describe.each(PACKAGES)('%s', (pkg) => {
    it('loads and maps every documented endpoint to the right HTTP verb and route', async () => {
      const { basePath, routes } = (await probe(pkg, 'routes')) as { basePath: string; routes: Route[] }
      expect(basePath).toMatch(/^https?:\/\/[^/]+$/)
      const documented = documentedEndpoints(pkg)
      expect(documented.length).toBeGreaterThan(0)
      const key = (r: { className: string; name: string; method: string | null; route: string | null }) =>
        `${r.className}.${r.name} ${r.method} ${r.route}`
      expect(routes.map(key).sort()).toEqual(documented.map(key).sort())
    })
  })
})

interface Captured { method: string; url: string; headers: IncomingMessage['headers']; body: string }

describe('HTTP round trip against a local API double', () => {
  let server: Server
  let baseUrl: string
  const captured: Captured[] = []
  const responses = new Map<string, { status: number; body: unknown }>()

  beforeAll(async () => {
    server = createServer((req, res) => {
      let body = ''
      req.on('data', (chunk) => (body += chunk))
      req.on('end', () => {
        captured.push({ method: req.method ?? '', url: req.url ?? '', headers: req.headers, body })
        const reply = responses.get(`${req.method} ${req.url}`) ?? { status: 404, body: { detail: 'Not found.' } }
        res.writeHead(reply.status, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(reply.body))
      })
    })
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve))
    baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`
  })

  afterAll(() => new Promise<void>((resolve) => server.close(() => resolve())))

  async function call(pkg: string, api: string, method: string, args: unknown[]) {
    const before = captured.length
    const result = await probe(pkg, 'call', baseUrl, api, method, JSON.stringify(args))
    expect(captured.length).toBe(before + 1)
    return { result, request: captured[captured.length - 1] }
  }

  it('personal_tokens: GET by id sends the token header and deserializes the model', async () => {
    responses.set('GET /iam/personal_tokens/7f3a', {
      status: 200,
      body: { uuid: '7f3a', name: 'ci', created: '2026-01-02T03:04:05Z', expires_at: '2027-01-02T03:04:05Z', description: 'pipeline' },
    })
    const { result, request } = await call('personal_tokens', 'PersonalTokenApi', 'getPersonalToken', ['7f3a'])
    expect(request.method).toBe('GET')
    expect(request.headers.authorization).toBe('Token test-token')
    expect(request.headers.accept).toContain('application/json')
    expect(result.error).toBeNull()
    expect(result.status).toBe(200)
    expect(result.dataType).toBe('PersonalTokenResponseGet')
    expect(result.data).toMatchObject({ uuid: '7f3a', name: 'ci', description: 'pipeline' })
    expect(result.data.created).toBe('2026-01-02T03:04:05.000Z')
  })

  it('variables: list returns typed Variable objects', async () => {
    const variable = { uuid: 'a1', key: 'API_URL', value: 'https://example.test', secret: false, last_editor: 'ci', created_at: '2026-01-01T00:00:00Z', updated_at: '2026-01-01T00:00:00Z' }
    responses.set('GET /variables', { status: 200, body: [variable] })
    const { result, request } = await call('variables', 'VariablesApi', 'apiVariablesList', [])
    expect(request.headers.authorization).toBe('Token test-token')
    expect(result.error).toBeNull()
    expect(result.dataType).toBe('Array')
    expect(result.data).toHaveLength(1)
    expect(result.data[0]).toMatchObject({ uuid: 'a1', key: 'API_URL', value: 'https://example.test', secret: false })
  })

  it('domains: POST serializes the JSON body and honours the versioned Accept header', async () => {
    responses.set('POST /domains', {
      status: 201,
      body: { results: { id: 10, name: 'site', cnames: ['www.example.test'], cname_access_only: false, digital_certificate_id: null, edge_application_id: 5, is_active: true, domain_name: 'abc.map.azionedge.net' }, schema_version: 3 },
    })
    const payload = { name: 'site', cnames: ['www.example.test'], cname_access_only: false, edge_application_id: 5, is_active: true }
    const { result, request } = await call('domains', 'DomainsApi', 'createDomain', [{ createDomainRequest: payload }])
    expect(request.method).toBe('POST')
    expect(request.headers['content-type']).toBe('application/json; version=3')
    expect(request.headers.accept).toBe('application/json; version=3')
    expect(JSON.parse(request.body)).toEqual(payload)
    expect(result.error).toBeNull()
    expect(result.status).toBe(201)
    expect(result.dataType).toBe('DomainResponseWithResult')
    expect(result.data.results).toMatchObject({ id: 10, name: 'site', cnames: ['www.example.test'] })
  })

  it('domains: path parameters are encoded into the route', async () => {
    responses.set('GET /domains/42', { status: 200, body: { results: { id: 42, name: 'x' }, schema_version: 3 } })
    const { result, request } = await call('domains', 'DomainsApi', 'getDomain', [42, {}])
    expect(request.url).toBe('/domains/42')
    expect(result.data.results.id).toBe(42)
  })

  it('surfaces HTTP errors to the callback', async () => {
    const { result, request } = await call('domains', 'DomainsApi', 'getDomain', [999, {}])
    expect(request.url).toBe('/domains/999')
    expect(result.error).toMatchObject({ status: 404 })
    expect(result.data).toBeNull()
  })
})
