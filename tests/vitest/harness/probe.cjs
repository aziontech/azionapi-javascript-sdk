// Loads one generated SDK package from source (ES modules transpiled on the fly with
// Babel, as the package's own build does) and reports either the HTTP route of every
// API method ("routes") or the result of a real HTTP call ("call").
// Usage: node probe.cjs <package-dir> routes
//        node probe.cjs <package-dir> call <base-url> <ApiClass> <method> <json-args>
'use strict'
const path = require('node:path')
const Module = require('node:module')

// The generated packages import their runtime dependencies (superagent, querystring)
// by bare name; resolve them from this test project's node_modules.
process.env.NODE_PATH = path.resolve(__dirname, '..', 'node_modules')
Module._initPaths()

require('@babel/register')({
  babelrc: false,
  configFile: false,
  cache: false,
  presets: [[require.resolve('@babel/preset-env'), { targets: { node: 'current' } }]],
  ignore: [/node_modules/],
})

const [pkgDir, mode, ...rest] = process.argv.slice(2)
const sdk = require(path.join(pkgDir, 'src', 'index.js'))

function apiClasses() {
  return Object.entries(sdk).filter(([name, value]) => name.endsWith('Api') && name !== 'ApiClient' && typeof value === 'function')
}

if (mode === 'routes') {
  const routes = []
  for (const [className, Api] of apiClasses()) {
    const client = new sdk.ApiClient()
    let last = null
    client.callApi = (route, method) => {
      last = { route, method }
    }
    const api = new Api(client)
    for (const name of Object.getOwnPropertyNames(Api.prototype)) {
      if (name === 'constructor') continue
      const fn = api[name]
      last = null
      // Required parameters only need to be non-null; optional "opts" accepts any object.
      const count = Math.max(fn.length - 1, 0)
      try {
        fn.call(api, ...Array.from({ length: count }, () => '1'), () => {})
      } catch {
        // Some parameters are collections (csv/multi); retry with list placeholders.
        fn.call(api, ...Array.from({ length: count }, () => ['1']), () => {})
      }
      routes.push({ className, name, method: last && last.method, route: last && last.route })
    }
  }
  process.stdout.write(JSON.stringify({ basePath: new sdk.ApiClient().basePath, routes }))
} else if (mode === 'call') {
  const [baseUrl, className, method, argsJson] = rest
  const client = new sdk.ApiClient(baseUrl)
  client.authentications.tokenAuth.apiKey = 'test-token'
  client.authentications.tokenAuth.apiKeyPrefix = 'Token'
  const api = new sdk[className](client)
  const args = JSON.parse(argsJson)
  api[method](...args, (error, data, response) => {
    const out = {
      error: error ? { status: error.status, message: String(error.message) } : null,
      dataType: data && data.constructor ? data.constructor.name : typeof data,
      data,
      status: response ? response.status : null,
    }
    process.stdout.write(JSON.stringify(out))
  })
} else {
  console.error(`unknown mode ${mode}`)
  process.exit(2)
}
