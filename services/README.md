# services_api

ServicesApi - JavaScript client for services_api
Azion Services
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 2.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install services_api --save
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

To use the link you just defined in your project, switch to the directory you want to use your services_api from, and run:

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
var ServicesApi = require('services_api');

var defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new ServicesApi.DefaultApi()
var serviceId = 789; // {Number} 
var resourceId = 789; // {Number} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteResource(serviceId, resourceId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3002*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ServicesApi.DefaultApi* | [**deleteResource**](docs/DefaultApi.md#deleteResource) | **DELETE** /edge_services/{serviceId}/resources/{resourceId} | Delete Service Resource by ID
*ServicesApi.DefaultApi* | [**deleteService**](docs/DefaultApi.md#deleteService) | **DELETE** /edge_services/{id} | Delete Service by ID
*ServicesApi.DefaultApi* | [**getResource**](docs/DefaultApi.md#getResource) | **GET** /edge_services/{serviceId}/resources/{resourceId} | Return Service Resource by ID
*ServicesApi.DefaultApi* | [**getResources**](docs/DefaultApi.md#getResources) | **GET** /edge_services/{serviceId}/resources | Return Service Resources by page
*ServicesApi.DefaultApi* | [**getService**](docs/DefaultApi.md#getService) | **GET** /edge_services/{id} | Return Service by ID
*ServicesApi.DefaultApi* | [**getServices**](docs/DefaultApi.md#getServices) | **GET** /edge_services/ | Return Services by page
*ServicesApi.DefaultApi* | [**newService**](docs/DefaultApi.md#newService) | **POST** /edge_services/ | Create Service
*ServicesApi.DefaultApi* | [**patchService**](docs/DefaultApi.md#patchService) | **PATCH** /edge_services/{id} | Update Service by ID
*ServicesApi.DefaultApi* | [**patchServiceResource**](docs/DefaultApi.md#patchServiceResource) | **PATCH** /edge_services/{serviceId}/resources/{resourceId} | Update Service Resource by ID
*ServicesApi.DefaultApi* | [**postResource**](docs/DefaultApi.md#postResource) | **POST** /edge_services/{serviceId}/resources | Create Service Resource


## Documentation for Models

 - [ServicesApi.CreateResourceRequest](docs/CreateResourceRequest.md)
 - [ServicesApi.CreateServiceRequest](docs/CreateServiceRequest.md)
 - [ServicesApi.ResourceDetail](docs/ResourceDetail.md)
 - [ServicesApi.ResourceResponse](docs/ResourceResponse.md)
 - [ServicesApi.ResourceResponseWithTotal](docs/ResourceResponseWithTotal.md)
 - [ServicesApi.ServiceResponse](docs/ServiceResponse.md)
 - [ServicesApi.ServiceResponseWithTotals](docs/ServiceResponseWithTotals.md)
 - [ServicesApi.UpdateResourceRequest](docs/UpdateResourceRequest.md)
 - [ServicesApi.UpdateServiceRequest](docs/UpdateServiceRequest.md)
 - [ServicesApi.Variable](docs/Variable.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### tokenAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
