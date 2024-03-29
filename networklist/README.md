# network_lists_api

NetworkListsApi - JavaScript client for network_lists_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install network_lists_api --save
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

To use the link you just defined in your project, switch to the directory you want to use your network_lists_api from, and run:

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
var NetworkListsApi = require('network_lists_api');

var defaultClient = NetworkListsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new NetworkListsApi.DefaultApi()
var opts = {
  'page': 56, // {Number} 
  'pageSize': 56, // {Number} 
  'sort': "sort_example", // {String} 
  'orderBy': "orderBy_example" // {String} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.networkListsGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.azionapi.net*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NetworkListsApi.DefaultApi* | [**networkListsGet**](docs/DefaultApi.md#networkListsGet) | **GET** /network_lists | List all user Network Lists
*NetworkListsApi.DefaultApi* | [**networkListsPost**](docs/DefaultApi.md#networkListsPost) | **POST** /network_lists | Create a Network Lists
*NetworkListsApi.DefaultApi* | [**networkListsUuidDelete**](docs/DefaultApi.md#networkListsUuidDelete) | **DELETE** /network_lists/{uuid} | Delete a Network Lists set by uuid
*NetworkListsApi.DefaultApi* | [**networkListsUuidGet**](docs/DefaultApi.md#networkListsUuidGet) | **GET** /network_lists/{uuid} | Retrieve a Network Lists set by uuid
*NetworkListsApi.DefaultApi* | [**networkListsUuidPut**](docs/DefaultApi.md#networkListsUuidPut) | **PUT** /network_lists/{uuid} | Overwrite some Network Lists attributes


## Documentation for Models

 - [NetworkListsApi.BadRequestResponse](docs/BadRequestResponse.md)
 - [NetworkListsApi.CreateNetworkListsRequest](docs/CreateNetworkListsRequest.md)
 - [NetworkListsApi.ErrorModel](docs/ErrorModel.md)
 - [NetworkListsApi.Links](docs/Links.md)
 - [NetworkListsApi.ListNetworkListsResponse](docs/ListNetworkListsResponse.md)
 - [NetworkListsApi.NetworkListResponseEntry](docs/NetworkListResponseEntry.md)
 - [NetworkListsApi.NetworkListUuidResponse](docs/NetworkListUuidResponse.md)
 - [NetworkListsApi.NetworkListUuidResponseEntry](docs/NetworkListUuidResponseEntry.md)
 - [NetworkListsApi.NetworkListUuidResponseEntryInt](docs/NetworkListUuidResponseEntryInt.md)
 - [NetworkListsApi.NetworkListUuidResponseEntryString](docs/NetworkListUuidResponseEntryString.md)
 - [NetworkListsApi.NetworkLists](docs/NetworkLists.md)
 - [NetworkListsApi.NetworkListsResponse](docs/NetworkListsResponse.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### tokenAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

