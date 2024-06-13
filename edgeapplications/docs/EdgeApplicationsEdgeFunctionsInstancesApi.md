# EdgeApplicationApi.EdgeApplicationsEdgeFunctionsInstancesApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdDelete**](EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdDelete) | **DELETE** /edge_applications/{edge_application_id}/functions_instances/{functions_instances_id} | /edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:
[**edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdGet**](EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdGet) | **GET** /edge_applications/{edge_application_id}/functions_instances/{functions_instances_id} | /edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:
[**edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPatch**](EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPatch) | **PATCH** /edge_applications/{edge_application_id}/functions_instances/{functions_instances_id} | /edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:
[**edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPut**](EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPut) | **PUT** /edge_applications/{edge_application_id}/functions_instances/{functions_instances_id} | /edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:
[**edgeApplicationsEdgeApplicationIdFunctionsInstancesGet**](EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesGet) | **GET** /edge_applications/{edge_application_id}/functions_instances | /edge_applications/:edge_application_id:/functions_instances
[**edgeApplicationsEdgeApplicationIdFunctionsInstancesPost**](EdgeApplicationsEdgeFunctionsInstancesApi.md#edgeApplicationsEdgeApplicationIdFunctionsInstancesPost) | **POST** /edge_applications/{edge_application_id}/functions_instances | edge_application/:edge_application_id:/functions_instances



## edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdDelete

> edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdDelete(edgeApplicationId, functionsInstancesId, opts)

/edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsEdgeFunctionsInstancesApi();
let edgeApplicationId = "edgeApplicationId_example"; // String | 
let functionsInstancesId = "functionsInstancesId_example"; // String | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json" // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
};
apiInstance.edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdDelete(edgeApplicationId, functionsInstancesId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edgeApplicationId** | **String**|  | 
 **functionsInstancesId** | **String**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdGet

> ApplicationInstancesGetOneResponse edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdGet(edgeApplicationId, functionsInstancesId, opts)

/edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsEdgeFunctionsInstancesApi();
let edgeApplicationId = 789; // Number | 
let functionsInstancesId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3" // String | The id of the edge function instance you plan to query. 
};
apiInstance.edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdGet(edgeApplicationId, functionsInstancesId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edgeApplicationId** | **Number**|  | 
 **functionsInstancesId** | **Number**|  | 
 **accept** | **String**| The id of the edge function instance you plan to query.  | [optional] 

### Return type

[**ApplicationInstancesGetOneResponse**](ApplicationInstancesGetOneResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPatch

> ApplicationInstanceResults edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPatch(edgeApplicationId, functionsInstancesId, opts)

/edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsEdgeFunctionsInstancesApi();
let edgeApplicationId = "edgeApplicationId_example"; // String | The id of the edge application you plan to overwrite 
let functionsInstancesId = "functionsInstancesId_example"; // String | The id of the edge function instance you plan to overwrite.
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'applicationUpdateInstanceRequest': new EdgeApplicationApi.ApplicationUpdateInstanceRequest() // ApplicationUpdateInstanceRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPatch(edgeApplicationId, functionsInstancesId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edgeApplicationId** | **String**| The id of the edge application you plan to overwrite  | 
 **functionsInstancesId** | **String**| The id of the edge function instance you plan to overwrite. | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **applicationUpdateInstanceRequest** | [**ApplicationUpdateInstanceRequest**](ApplicationUpdateInstanceRequest.md)|  | [optional] 

### Return type

[**ApplicationInstanceResults**](ApplicationInstanceResults.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPut

> ApplicationInstanceResults edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPut(edgeApplicationId, functionsInstancesId, opts)

/edge_applications/:edge_application_id:/functions_instances/:functions_instances_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsEdgeFunctionsInstancesApi();
let edgeApplicationId = "edgeApplicationId_example"; // String | The id of the edge application you plan to overwrite 
let functionsInstancesId = "functionsInstancesId_example"; // String | The id of the edge function instance you plan to overwrite.
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'applicationPutInstanceRequest': new EdgeApplicationApi.ApplicationPutInstanceRequest() // ApplicationPutInstanceRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdFunctionsInstancesFunctionsInstancesIdPut(edgeApplicationId, functionsInstancesId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edgeApplicationId** | **String**| The id of the edge application you plan to overwrite  | 
 **functionsInstancesId** | **String**| The id of the edge function instance you plan to overwrite. | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **applicationPutInstanceRequest** | [**ApplicationPutInstanceRequest**](ApplicationPutInstanceRequest.md)|  | [optional] 

### Return type

[**ApplicationInstanceResults**](ApplicationInstanceResults.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdFunctionsInstancesGet

> ApplicationInstancesGetResponse edgeApplicationsEdgeApplicationIdFunctionsInstancesGet(edgeApplicationId, opts)

/edge_applications/:edge_application_id:/functions_instances

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsEdgeFunctionsInstancesApi();
let edgeApplicationId = 789; // Number | 
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example", // String | 
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsEdgeApplicationIdFunctionsInstancesGet(edgeApplicationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edgeApplicationId** | **Number**|  | 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **filter** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **accept** | **String**|  | [optional] 

### Return type

[**ApplicationInstancesGetResponse**](ApplicationInstancesGetResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdFunctionsInstancesPost

> ApplicationInstanceResults edgeApplicationsEdgeApplicationIdFunctionsInstancesPost(edgeApplicationId, opts)

edge_application/:edge_application_id:/functions_instances

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsEdgeFunctionsInstancesApi();
let edgeApplicationId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'applicationCreateInstanceRequest': new EdgeApplicationApi.ApplicationCreateInstanceRequest() // ApplicationCreateInstanceRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdFunctionsInstancesPost(edgeApplicationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edgeApplicationId** | **Number**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **applicationCreateInstanceRequest** | [**ApplicationCreateInstanceRequest**](ApplicationCreateInstanceRequest.md)|  | [optional] 

### Return type

[**ApplicationInstanceResults**](ApplicationInstanceResults.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

