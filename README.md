# azionapi-javascript-sdk

JavaScript client packages for the Azion APIs, generated with
[OpenAPI Generator](https://openapi-generator.tech) (`javascript` generator, ES6 modules
transpiled with Babel, HTTP through `superagent`). Each top-level directory is an
independent package with its own `package.json`, `README.md` (endpoint and model
reference) and `docs/`.

## Packages

| Directory | Package name | API classes |
|-----------|--------------|-------------|
| `credentials` | `credentials_api` | `DefaultApi` |
| `data_streaming` | `data_streaming_open_api` | `DataStreamingApi`, `DataStreamingDomainApi`, `DataStreamingTemplatesApi` |
| `digital_certificates` | `digital_certificates_api` | certificate create/list/retrieve/update/delete and CSR APIs |
| `domains` | `domain_api` | `DomainsApi` |
| `edgeapplications` | `edge_application_api` | cache settings, device groups, function instances, main settings, origins, rules engine |
| `edgefirewall` | `edge_firewall_api` | `DefaultApi` |
| `edgefunctions` | `edge_function_api` | `EdgeFunctionsApi` |
| `edgefunctionsinstance_edgefirewall` | `edge_functions_instances_api` | `DefaultApi` |
| `edgenode` | `edge_node_api` | `DefaultApi` |
| `idns` | `intelligent_dns_api` | `DNSSECApi`, `RecordsApi`, `ZonesApi` |
| `networklist` | `network_lists_api` | `DefaultApi` |
| `personal_tokens` | `personal_tokens_open_api` | `PersonalTokenApi` |
| `realtimepurge` | `purge_api` | `RealTimePurgeApi` |
| `services` | `services_api` | `DefaultApi` |
| `storage` | `object_storage` | `BucketsApi`, `StorageApi` |
| `storageapi` | `storage_api` | `DefaultApi` |
| `variables` | `variables_api` | `ApiApi`, `VariablesApi` |
| `waf` | `web_application_firewall_api` | `WAFApi` |

## Requirements

- Node.js with npm (the packages build with Babel 7)

## Installation

Build a package from its directory and use it from your project:

```bash
cd personal_tokens
npm install        # also runs the Babel build (prepare script) into dist/
cd ../my-project
npm install ../azionapi-javascript-sdk/personal_tokens
```

## Usage

Authenticate with an Azion personal token in the `Authorization` header using the
`Token` prefix:

```javascript
const PersonalTokensOpenApi = require('personal_tokens_open_api')

const client = PersonalTokensOpenApi.ApiClient.instance
client.authentications.tokenAuth.apiKey = process.env.AZION_TOKEN
client.authentications.tokenAuth.apiKeyPrefix = 'Token'

const api = new PersonalTokensOpenApi.PersonalTokenApi()
api.listPersonalToken((error, data) => {
  if (error) throw error
  console.log(data.results)
})
```

Each package README lists every endpoint and model of that API.

## Tests

Functional tests live in `tests/vitest/` and run in CI (`.github/workflows/ci-tests.yml`):

```bash
cd tests/vitest
npm ci
npm test
```

They load every package from source, check that every endpoint documented in the
package README is generated with the right HTTP verb and route, and run real HTTP calls
against a local API double (authentication header, JSON body, path parameters, model
deserialization and error handling).

## Versioning

Every push to `main` is tagged with the next SemVer version (`vX.Y.Z`) by
`.github/workflows/bump_version.yml`. Notable changes are recorded in `CHANGELOG.md`.

## Contributing and security

See [CONTRIBUTING.md](CONTRIBUTING.md). Report vulnerabilities privately as described in
[SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE)
