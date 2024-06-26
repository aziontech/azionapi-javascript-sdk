# domain_api

DomainApi - JavaScript client for domain_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 2.0.0
- Generator version: 7.5.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install domain_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your domain_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DomainApi = require('domain_api');

var defaultClient = DomainApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new DomainApi.DomainsApi()
var opts = {
  'accept': "application/json; version=3", // {String} 
  'contentType': "application/json", // {String} 
  'createDomainRequest': new DomainApi.CreateDomainRequest() // {CreateDomainRequest} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createDomain(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.azionapi.net*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DomainApi.DomainsApi* | [**createDomain**](docs/DomainsApi.md#createDomain) | **POST** /domains | /domains
*DomainApi.DomainsApi* | [**delDomain**](docs/DomainsApi.md#delDomain) | **DELETE** /domains/{id} | /domains/:id
*DomainApi.DomainsApi* | [**getDomain**](docs/DomainsApi.md#getDomain) | **GET** /domains/{id} | /domains/:id
*DomainApi.DomainsApi* | [**getDomains**](docs/DomainsApi.md#getDomains) | **GET** /domains | /domains
*DomainApi.DomainsApi* | [**putDomain**](docs/DomainsApi.md#putDomain) | **PUT** /domains/{id} | /domains:/:id
*DomainApi.DomainsApi* | [**updateDomain**](docs/DomainsApi.md#updateDomain) | **PATCH** /domains/{id} | /domains/:id


## Documentation for Models

 - [DomainApi.CreateDomainRequest](docs/CreateDomainRequest.md)
 - [DomainApi.DomainData](docs/DomainData.md)
 - [DomainApi.DomainDataResponse](docs/DomainDataResponse.md)
 - [DomainApi.DomainEntity](docs/DomainEntity.md)
 - [DomainApi.DomainEntityResponse](docs/DomainEntityResponse.md)
 - [DomainApi.DomainLinks](docs/DomainLinks.md)
 - [DomainApi.DomainResponseWithResult](docs/DomainResponseWithResult.md)
 - [DomainApi.DomainResponseWithResults](docs/DomainResponseWithResults.md)
 - [DomainApi.PutDomainRequest](docs/PutDomainRequest.md)
 - [DomainApi.UpdateDomainRequest](docs/UpdateDomainRequest.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### tokenAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

