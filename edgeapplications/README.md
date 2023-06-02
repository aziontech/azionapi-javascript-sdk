# edge_application

EdgeApplication - JavaScript client for edge_application
## Welcome to the Azion API!

With the following APIs you can check, remove or update existing settings, besides creating new ones.

* * *

## Overview

The Azion API is a RESTful API, based on HTTPS requests, that allows you to integrate your systems with our platform, simply, quickly, and securely.

Here you will find instructions on how our API works and what functionality is available.

This documentation is being constantly updated. Make sure you verify if there are any updates or changes before you perform any development in your application, even if you are familiar with our API.

* * *

Both HTTPS requests and responses must be in JavaScript Object Notation (JSON) format. All HTTPS requests and responses must follow these conventions.

**Base URL**

The base URL of the API, which must be used, is:

[**https://api.azionapi.net/_**](https://api.azionapi.net/)

**HTTP Methods**

Each HTTP method defines the type of operation that will be run.

| HTTP Method | CRUD | Whole Collection (e.g. /items) | Specific Item (e.g. /items/:item_id) |
| --- | --- | --- | --- |
| GET | Read | It retrieves the list of items in a Collection. | It retrieves a specific item in a Collection. |
| POST | Create | It creates a new item in the Collection. | \\- |
| PUT | Update/Replace | It replaces a whole Collection with a new one. | It replaces an item in a Collection with a new one. |
| PATCH | Update/Modify | It partially updates a Collection. | It partially updates an item in a Collection |
| DELETE | Delete | It deletes a whole Collection. | It deletes an item in a Collection. |

* * *

**Status Codes**

The HTTP return code defines the status – successful or not – after the requested operation is run.

| Status Code | Meaning |
| --- | --- |
| 200 OK | General Status for a successful operation. |
| 201 CREATED | Successfully created a collection or item, by means of POST or PUT. |
| 204 NO CONTENT | Successful operation, but without any content to be return to the Body. Generally used for DELETE or PUT operations. |
| 207 MULTI-STATUS | A batch of operations were triggered by a single request, which resulted in different return codes when it was run, for some of the operations. The codes are displayed in the “status” field, in the body of the response, for each sub-batch of operations for whichever are applicable. |
| 400 BAD REQUEST | Request error, such as invalid parameters, missing mandatory parameters or others. |
| 401 UNAUTHORIZED | Error caused by a missing HTTP Authentication header. |
| 403 FORBIDDEN | User does not have the permissions to run the requested operation. |
| 404 NOT FOUND | The requested resource does not exist. |
| 405 METHOD NOT ALLOWED | The requested method is not applicable with the URL. |
| 406 NOT ACCEPTABLE | Accept header missing from the HTTP request or the header contains formatting or the version is not supported by the API. |
| 409 CONFLICT | Conflict generated in running the request, such as a request to create an already existing record. |
| 429 TOO MANY REQUESTS | The request was temporarily rejected, due to exceeding the limit on operations. Wait for the time defined in the X-Ratelimit-Reset header and try again. |
| 500 INTERNAL SERVER ERROR | Unintentional error, due to an unidentified failure in the request process. |
| \\--- |  |
| **HTTP Headers** |  |

All requests must be generated with the HTTP header specifying the desired code format for responses and the API version used. The current version of the API is 3 and the format is application/json.

```
Accept: application/json; version=3

```

* * *

**Rate Limit**

The limit of operations that can be run via the API is defined by 3 HTTP response headers:

*   **X-ratelimit-limit:** number of operations allowed in one time-frame;
*   **X-ratelimit-remaining:** number of operations still available in one time-frame;
*   **X-ratelimit-reset:** is the date and time, in IOS 8601 format, which represents the point in the future when the time-frame will be closed and when the limits will, therefore, be reset.
    

Example of HTTP response headers and a request:

```
Date: Thu, 02 Nov 2017 12:30:28 GMT
X-ratelimit-remaining: 199
X-ratelimit-limit: 200
X-ratelimit-reset: 2017-11-02T12:31:28.675446

```

In the example provided, 200 operations are allowed within a 1-minute time frame. Of those, there are 199 still available, because one has already been run. The total limit will be reset after 1 minute.

When the X-ratelimit-limit is reached, or in other words, when the X-ratelimit-remaining reaches zero, the API will give the error, HTTP 429 TOO MANY REQUESTS. If your application receives this error, you will need to wait until the time defined in X-ratelimit-reset has passed, to make another request.

*   **X-ratelimit-limit by product**
    

The *X-ratelimit limit* variations by product are the following:

*   **Real-Time Metrics:** 20 requests per minute.
*   **Real-Time Purge:** 200 requests per minute; except for the Wildcard, which is 2000 a day.
    

> The rate-limit values are based on the client_id.

* * *

**Optional Parameters**

In this version, it is possible to include some optional parameters as part of the GET method, which can help and modify the form in which your data will be returned.

You can combine these parameters to get the result you want.

They are:

| Parameter | Description | Accepted values: |
| --- | --- | --- |
| order_by | Identifies which field the return should be sorted by. The default ordering is ascending. | Depends on the fields available from the endpoint structure |
| sort | Defines which ordering to be used: ascending or descending. | asc  <br>  <br>desc |
| page | Identifies which page should be returned, if the return is paginated. The default value is 1. | Page number. |
| page_size | Identifies how many items should be returned per page. The default value is 10. | Desired number of items. |

* * *

**Request Exemple**

You can use one parameter, or a combination. See the example below, which uses all of them in the same request.

```
GET /domains?order_by=name&page_size=20&sort=desc&page=3
Accept: application/json; version=3
Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75

```

* * *

# Authentication

Authentication and authorization of operations via Azion API is done through Tokens.

The first step is to create the Token through authenticating a user registered in [Real-Time Manager](https://sso.azion.com/login).

* * *

## Encoding Username and Password in Base64

Only token creation and cancelling operations are performed through Basic Authentication, that is, with a username and password. You can create and cancel the token through the API itself, but for that you need to encode your username and password in base64.

Base64 encoding can be done from the command line on a Unix terminal:

```
$ echo 'user@domain:password'|base64
dXNlckBkb21haW46cGFzc3dvcmQK

```

If you do not have a Unix terminal available, you can use the free online service at [https://www.base64encode.org/](https://www.base64encode.org/)
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
npm install edge_application --save
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

To use the link you just defined in your project, switch to the directory you want to use your edge_application from, and run:

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
var EdgeApplication = require('edge_application');

var defaultClient = EdgeApplication.ApiClient.instance;
// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix['Authorization'] = "Token"

var api = new EdgeApplication.EdgeApplicationsCacheSettingsApi()
var edgeApplicationId = 789; // {Number} 
var cacheSettings = 789; // {Number} 
var opts = {
  'accept': application/json; version=3, // {String} 
  'contentType': application/json // {String} The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsDelete(edgeApplicationId, cacheSettings, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.azionapi.net*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EdgeApplication.EdgeApplicationsCacheSettingsApi* | [**edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsDelete**](docs/EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsDelete) | **DELETE** /edge_applications/{edge_application_id}/cache_settings/{cache_settings} | /edge_applications/:edge_application_id:/cache_settings/:cache_settings:
*EdgeApplication.EdgeApplicationsCacheSettingsApi* | [**edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet**](docs/EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet) | **GET** /edge_applications/{edge_application_id}/cache_settings/{cache_settings_id} | /edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:
*EdgeApplication.EdgeApplicationsCacheSettingsApi* | [**edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut**](docs/EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut) | **PUT** /edge_applications/{edge_application_id}/cache_settings/{cache_settings_id} | /edge_applications/:edge_application_id:/cache_settings/ca
*EdgeApplication.EdgeApplicationsCacheSettingsApi* | [**edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsPatch**](docs/EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsPatch) | **PATCH** /edge_applications/{edge_application_id}/cache_settings/{cache_settings} | /edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:
*EdgeApplication.EdgeApplicationsCacheSettingsApi* | [**edgeApplicationsEdgeApplicationIdCacheSettingsGet**](docs/EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsGet) | **GET** /edge_applications/{edge_application_id}/cache_settings | /edge_applications/{edge_application_id}/cache_settings
*EdgeApplication.EdgeApplicationsCacheSettingsApi* | [**edgeApplicationsEdgeApplicationIdCacheSettingsPost**](docs/EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsPost) | **POST** /edge_applications/{edge_application_id}/cache_settings | /edge_applications/:edge_application_id:/cache_settings
*EdgeApplication.EdgeApplicationsDeviceGroupsApi* | [**edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete**](docs/EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete) | **DELETE** /edge_applications/{edge_application_id}/device_groups/{device_group_id} | /edge_applications/{edge_application_id}/device_groups/{device_group_id}
*EdgeApplication.EdgeApplicationsDeviceGroupsApi* | [**edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet**](docs/EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet) | **GET** /edge_applications/{edge_application_id}/device_groups/{device_group_id} | /edge_applications/{edge_application_id}/device_groups/{device_group_id}
*EdgeApplication.EdgeApplicationsDeviceGroupsApi* | [**edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch**](docs/EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch) | **PATCH** /edge_applications/{edge_application_id}/device_groups/{device_group_id} | /edge_applications/{edge_application_id}/device_groups/{device_group_id}
*EdgeApplication.EdgeApplicationsDeviceGroupsApi* | [**edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut**](docs/EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut) | **PUT** /edge_applications/{edge_application_id}/device_groups/{device_group_id} | /edge_applications/{edge_application_id}/device_groups/{device_group_id}
*EdgeApplication.EdgeApplicationsDeviceGroupsApi* | [**edgeApplicationsEdgeApplicationIdDeviceGroupsGet**](docs/EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsGet) | **GET** /edge_applications/{edge_application_id}/device_groups | /edge_applications/{edge_application_id}/device_groups
*EdgeApplication.EdgeApplicationsDeviceGroupsApi* | [**edgeApplicationsEdgeApplicationIdDeviceGroupsPost**](docs/EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsPost) | **POST** /edge_applications/{edge_application_id}/device_groups | /edge_applications/{edge_application_id}/device_groups
*EdgeApplication.EdgeApplicationsEdgeFunctionsInstancesApi* | [**edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdDelete**](docs/EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdDelete) | **DELETE** /edge_applications/{edge_application_id}/functions_instances/{functions_instances_id} | /edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:
*EdgeApplication.EdgeApplicationsEdgeFunctionsInstancesApi* | [**edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdGet**](docs/EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdGet) | **GET** /edge_applications/{edge_application_id}/functions_instances/{functions_instances_id} | /edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:
*EdgeApplication.EdgeApplicationsEdgeFunctionsInstancesApi* | [**edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPatch**](docs/EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPatch) | **PATCH** /edge_applications/{edge_application_id}/functions_instances/{functions_instances_id} | /edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:
*EdgeApplication.EdgeApplicationsEdgeFunctionsInstancesApi* | [**edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPut**](docs/EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPut) | **PUT** /edge_applications/{edge_application_id}/functions_instances/{functions_instances_id} | /edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:
*EdgeApplication.EdgeApplicationsEdgeFunctionsInstancesApi* | [**edgeApplicationsEdgeApplicationIdFunctionsInstancesGet**](docs/EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesGet) | **GET** /edge_applications/{edge_application_id}/functions_instances | /edge_applications/:edge_application_id:/functions_instances
*EdgeApplication.EdgeApplicationsEdgeFunctionsInstancesApi* | [**edgeApplicationsEdgeApplicationIdFunctionsInstancesPost**](docs/EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesPost) | **POST** /edge_applications/{edge_application_id}/functions_instances | edge_application/:edge_application_id:/functions_instances
*EdgeApplication.EdgeApplicationsMainSettingsApi* | [**edgeApplicationsGet**](docs/EdgeApplicationsMainSettingsApi.md#edgeApplicationsGet) | **GET** /edge_applications | /edge_applications
*EdgeApplication.EdgeApplicationsMainSettingsApi* | [**edgeApplicationsIdDelete**](docs/EdgeApplicationsMainSettingsApi.md#edgeApplicationsIdDelete) | **DELETE** /edge_applications/{id} | /edge_applications/:id
*EdgeApplication.EdgeApplicationsMainSettingsApi* | [**edgeApplicationsIdGet**](docs/EdgeApplicationsMainSettingsApi.md#edgeApplicationsIdGet) | **GET** /edge_applications/{id} | /edge_applications/:id
*EdgeApplication.EdgeApplicationsMainSettingsApi* | [**edgeApplicationsIdPatch**](docs/EdgeApplicationsMainSettingsApi.md#edgeApplicationsIdPatch) | **PATCH** /edge_applications/{id} | /edge_applications/:id
*EdgeApplication.EdgeApplicationsMainSettingsApi* | [**edgeApplicationsIdPut**](docs/EdgeApplicationsMainSettingsApi.md#edgeApplicationsIdPut) | **PUT** /edge_applications/{id} | /edge_applications/:id
*EdgeApplication.EdgeApplicationsMainSettingsApi* | [**edgeApplicationsPost**](docs/EdgeApplicationsMainSettingsApi.md#edgeApplicationsPost) | **POST** /edge_applications | /edge_applications
*EdgeApplication.EdgeApplicationsOriginsApi* | [**edgeApplicationsEdgeApplicationIdOriginsGet**](docs/EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsGet) | **GET** /edge_applications/{edge_application_id}/origins | /edge_applications/{edge_application_id}/origins
*EdgeApplication.EdgeApplicationsOriginsApi* | [**edgeApplicationsEdgeApplicationIdOriginsOriginKeyDelete**](docs/EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsOriginKeyDelete) | **DELETE** /edge_applications/{edge_application_id}/origins/{origin_key} | /edge_applications/{edge_application_id}/origins/{origin_id}
*EdgeApplication.EdgeApplicationsOriginsApi* | [**edgeApplicationsEdgeApplicationIdOriginsOriginKeyGet**](docs/EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsOriginKeyGet) | **GET** /edge_applications/{edge_application_id}/origins/{origin_key} | /edge_applications/{edge_application_id}/origins/{origin_key}
*EdgeApplication.EdgeApplicationsOriginsApi* | [**edgeApplicationsEdgeApplicationIdOriginsOriginKeyPatch**](docs/EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsOriginKeyPatch) | **PATCH** /edge_applications/{edge_application_id}/origins/{origin_key} | /edge_applications/:edge_application_id:/origins/:origin_id:
*EdgeApplication.EdgeApplicationsOriginsApi* | [**edgeApplicationsEdgeApplicationIdOriginsOriginKeyPut**](docs/EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsOriginKeyPut) | **PUT** /edge_applications/{edge_application_id}/origins/{origin_key} | /edge_applications/{edge_application_id}/origins/{origin_id}
*EdgeApplication.EdgeApplicationsOriginsApi* | [**edgeApplicationsEdgeApplicationIdOriginsPost**](docs/EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsPost) | **POST** /edge_applications/{edge_application_id}/origins | /edge_applications/{edge_application_id}/origins
*EdgeApplication.EdgeApplicationsRulesEngineApi* | [**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesGet**](docs/EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesGet) | **GET** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules | /edge_applications/{edge_application_id}/rules_engine/{phase}/rules
*EdgeApplication.EdgeApplicationsRulesEngineApi* | [**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesPost**](docs/EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesPost) | **POST** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules | /edge_applications/{edge_application_id}/rules_engine/{phase}/rules
*EdgeApplication.EdgeApplicationsRulesEngineApi* | [**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdDelete**](docs/EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdDelete) | **DELETE** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules/{rule_id} | /edge_applications/{edge_application_id}/rules_engine/{phase}/rules
*EdgeApplication.EdgeApplicationsRulesEngineApi* | [**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdGet**](docs/EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdGet) | **GET** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules/{rule_id} | /edge_applications/{edge_application_id}/rules_engine/{phase}/rules
*EdgeApplication.EdgeApplicationsRulesEngineApi* | [**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPatch**](docs/EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPatch) | **PATCH** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules/{rule_id} | /edge_applications/:edge_application_id:/rules_engine/:phase:/rules/:rule_id:
*EdgeApplication.EdgeApplicationsRulesEngineApi* | [**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPut**](docs/EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPut) | **PUT** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules/{rule_id} | /edge_applications/:edge_application_id:/rules_engine/:phase:/rules/:rule_id:


## Documentation for Models

 - [EdgeApplication.ApplicationCacheCreateRequest](docs/ApplicationCacheCreateRequest.md)
 - [EdgeApplication.ApplicationCacheCreateResponse](docs/ApplicationCacheCreateResponse.md)
 - [EdgeApplication.ApplicationCacheCreateResults](docs/ApplicationCacheCreateResults.md)
 - [EdgeApplication.ApplicationCacheGetOneResponse](docs/ApplicationCacheGetOneResponse.md)
 - [EdgeApplication.ApplicationCacheGetResponse](docs/ApplicationCacheGetResponse.md)
 - [EdgeApplication.ApplicationCachePatchRequest](docs/ApplicationCachePatchRequest.md)
 - [EdgeApplication.ApplicationCachePatchResponse](docs/ApplicationCachePatchResponse.md)
 - [EdgeApplication.ApplicationCachePutRequest](docs/ApplicationCachePutRequest.md)
 - [EdgeApplication.ApplicationCachePutResponse](docs/ApplicationCachePutResponse.md)
 - [EdgeApplication.ApplicationCacheResponseDetails](docs/ApplicationCacheResponseDetails.md)
 - [EdgeApplication.ApplicationCacheResults](docs/ApplicationCacheResults.md)
 - [EdgeApplication.ApplicationCreateInstanceRequest](docs/ApplicationCreateInstanceRequest.md)
 - [EdgeApplication.ApplicationInstanceResults](docs/ApplicationInstanceResults.md)
 - [EdgeApplication.ApplicationInstancesGetOneResponse](docs/ApplicationInstancesGetOneResponse.md)
 - [EdgeApplication.ApplicationInstancesGetResponse](docs/ApplicationInstancesGetResponse.md)
 - [EdgeApplication.ApplicationInstancesResults](docs/ApplicationInstancesResults.md)
 - [EdgeApplication.ApplicationLinks](docs/ApplicationLinks.md)
 - [EdgeApplication.ApplicationOrigins](docs/ApplicationOrigins.md)
 - [EdgeApplication.ApplicationPutInstanceRequest](docs/ApplicationPutInstanceRequest.md)
 - [EdgeApplication.ApplicationPutRequest](docs/ApplicationPutRequest.md)
 - [EdgeApplication.ApplicationPutResult](docs/ApplicationPutResult.md)
 - [EdgeApplication.ApplicationResults](docs/ApplicationResults.md)
 - [EdgeApplication.ApplicationResultsCreate](docs/ApplicationResultsCreate.md)
 - [EdgeApplication.ApplicationUpdateInstanceRequest](docs/ApplicationUpdateInstanceRequest.md)
 - [EdgeApplication.ApplicationUpdateRequest](docs/ApplicationUpdateRequest.md)
 - [EdgeApplication.ApplicationUpdateResponse](docs/ApplicationUpdateResponse.md)
 - [EdgeApplication.ApplicationUpdateResults](docs/ApplicationUpdateResults.md)
 - [EdgeApplication.ApplicationsResults](docs/ApplicationsResults.md)
 - [EdgeApplication.CreateApplicationRequest](docs/CreateApplicationRequest.md)
 - [EdgeApplication.CreateApplicationResult](docs/CreateApplicationResult.md)
 - [EdgeApplication.CreateDeviceGroupsRequest](docs/CreateDeviceGroupsRequest.md)
 - [EdgeApplication.CreateOriginsRequest](docs/CreateOriginsRequest.md)
 - [EdgeApplication.CreateOriginsRequestAddresses](docs/CreateOriginsRequestAddresses.md)
 - [EdgeApplication.CreateRulesEngineRequest](docs/CreateRulesEngineRequest.md)
 - [EdgeApplication.DeviceGroupsIdResponse](docs/DeviceGroupsIdResponse.md)
 - [EdgeApplication.DeviceGroupsResponse](docs/DeviceGroupsResponse.md)
 - [EdgeApplication.DeviceGroupsResponseLinks](docs/DeviceGroupsResponseLinks.md)
 - [EdgeApplication.DeviceGroupsResultResponse](docs/DeviceGroupsResultResponse.md)
 - [EdgeApplication.GetApplicationResponse](docs/GetApplicationResponse.md)
 - [EdgeApplication.GetApplicationsResponse](docs/GetApplicationsResponse.md)
 - [EdgeApplication.OriginsIdResponse](docs/OriginsIdResponse.md)
 - [EdgeApplication.OriginsResponse](docs/OriginsResponse.md)
 - [EdgeApplication.OriginsResponseLinks](docs/OriginsResponseLinks.md)
 - [EdgeApplication.OriginsResultResponse](docs/OriginsResultResponse.md)
 - [EdgeApplication.OriginsResultResponseAddresses](docs/OriginsResultResponseAddresses.md)
 - [EdgeApplication.PatchDeviceGroupsRequest](docs/PatchDeviceGroupsRequest.md)
 - [EdgeApplication.PatchOriginsRequest](docs/PatchOriginsRequest.md)
 - [EdgeApplication.PatchRulesEngineRequest](docs/PatchRulesEngineRequest.md)
 - [EdgeApplication.RulesEngineBehavior](docs/RulesEngineBehavior.md)
 - [EdgeApplication.RulesEngineCriteria](docs/RulesEngineCriteria.md)
 - [EdgeApplication.RulesEngineIdResponse](docs/RulesEngineIdResponse.md)
 - [EdgeApplication.RulesEngineResponse](docs/RulesEngineResponse.md)
 - [EdgeApplication.RulesEngineResultResponse](docs/RulesEngineResultResponse.md)
 - [EdgeApplication.RulesEngineResultResponseBehaviors](docs/RulesEngineResultResponseBehaviors.md)
 - [EdgeApplication.UpdateDeviceGroupsRequest](docs/UpdateDeviceGroupsRequest.md)
 - [EdgeApplication.UpdateOriginsRequest](docs/UpdateOriginsRequest.md)
 - [EdgeApplication.UpdateRulesEngineRequest](docs/UpdateRulesEngineRequest.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### JWT


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

