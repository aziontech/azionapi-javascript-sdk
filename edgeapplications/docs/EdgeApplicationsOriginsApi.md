# EdgeApplicationApi.EdgeApplicationsOriginsApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeApplicationsEdgeApplicationIdOriginsGet**](EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsGet) | **GET** /edge_applications/{edge_application_id}/origins | /edge_applications/{edge_application_id}/origins
[**edgeApplicationsEdgeApplicationIdOriginsOriginKeyDelete**](EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsOriginKeyDelete) | **DELETE** /edge_applications/{edge_application_id}/origins/{origin_key} | /edge_applications/{edge_application_id}/origins/{origin_id}
[**edgeApplicationsEdgeApplicationIdOriginsOriginKeyGet**](EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsOriginKeyGet) | **GET** /edge_applications/{edge_application_id}/origins/{origin_key} | /edge_applications/{edge_application_id}/origins/{origin_key}
[**edgeApplicationsEdgeApplicationIdOriginsOriginKeyPatch**](EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsOriginKeyPatch) | **PATCH** /edge_applications/{edge_application_id}/origins/{origin_key} | /edge_applications/:edge_application_id:/origins/:origin_id:
[**edgeApplicationsEdgeApplicationIdOriginsOriginKeyPut**](EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsOriginKeyPut) | **PUT** /edge_applications/{edge_application_id}/origins/{origin_key} | /edge_applications/{edge_application_id}/origins/{origin_id}
[**edgeApplicationsEdgeApplicationIdOriginsPost**](EdgeApplicationsOriginsApi.md#edgeApplicationsEdgeApplicationIdOriginsPost) | **POST** /edge_applications/{edge_application_id}/origins | /edge_applications/{edge_application_id}/origins



## edgeApplicationsEdgeApplicationIdOriginsGet

> OriginsResponse edgeApplicationsEdgeApplicationIdOriginsGet(edgeApplicationId, opts)

/edge_applications/{edge_application_id}/origins

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsOriginsApi();
let edgeApplicationId = 789; // Number | 
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example", // String | 
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsEdgeApplicationIdOriginsGet(edgeApplicationId, opts, (error, data, response) => {
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

[**OriginsResponse**](OriginsResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdOriginsOriginKeyDelete

> edgeApplicationsEdgeApplicationIdOriginsOriginKeyDelete(edgeApplicationId, originKey, opts)

/edge_applications/{edge_application_id}/origins/{origin_id}

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsOriginsApi();
let edgeApplicationId = 789; // Number | 
let originKey = "originKey_example"; // String | 
let opts = {
  'accept': "application/json; version=3" // String | The id of the Origin that you plan to delete.
};
apiInstance.edgeApplicationsEdgeApplicationIdOriginsOriginKeyDelete(edgeApplicationId, originKey, opts, (error, data, response) => {
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
 **edgeApplicationId** | **Number**|  | 
 **originKey** | **String**|  | 
 **accept** | **String**| The id of the Origin that you plan to delete. | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeApplicationsEdgeApplicationIdOriginsOriginKeyGet

> OriginsIdResponse edgeApplicationsEdgeApplicationIdOriginsOriginKeyGet(edgeApplicationId, originKey, opts)

/edge_applications/{edge_application_id}/origins/{origin_key}

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsOriginsApi();
let edgeApplicationId = 789; // Number | 
let originKey = "originKey_example"; // String | 
let opts = {
  'accept': "application/json; version=3" // String | The id of the Origin that you plan to query.
};
apiInstance.edgeApplicationsEdgeApplicationIdOriginsOriginKeyGet(edgeApplicationId, originKey, opts, (error, data, response) => {
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
 **originKey** | **String**|  | 
 **accept** | **String**| The id of the Origin that you plan to query. | [optional] 

### Return type

[**OriginsIdResponse**](OriginsIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdOriginsOriginKeyPatch

> OriginsIdResponse edgeApplicationsEdgeApplicationIdOriginsOriginKeyPatch(edgeApplicationId, originKey, opts)

/edge_applications/:edge_application_id:/origins/:origin_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsOriginsApi();
let edgeApplicationId = 789; // Number | 
let originKey = "originKey_example"; // String | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'patchOriginsRequest': new EdgeApplicationApi.PatchOriginsRequest() // PatchOriginsRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdOriginsOriginKeyPatch(edgeApplicationId, originKey, opts, (error, data, response) => {
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
 **originKey** | **String**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **patchOriginsRequest** | [**PatchOriginsRequest**](PatchOriginsRequest.md)|  | [optional] 

### Return type

[**OriginsIdResponse**](OriginsIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdOriginsOriginKeyPut

> OriginsIdResponse edgeApplicationsEdgeApplicationIdOriginsOriginKeyPut(edgeApplicationId, originKey, opts)

/edge_applications/{edge_application_id}/origins/{origin_id}

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsOriginsApi();
let edgeApplicationId = 789; // Number | 
let originKey = "originKey_example"; // String | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'updateOriginsRequest': new EdgeApplicationApi.UpdateOriginsRequest() // UpdateOriginsRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdOriginsOriginKeyPut(edgeApplicationId, originKey, opts, (error, data, response) => {
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
 **originKey** | **String**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **updateOriginsRequest** | [**UpdateOriginsRequest**](UpdateOriginsRequest.md)|  | [optional] 

### Return type

[**OriginsIdResponse**](OriginsIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdOriginsPost

> OriginsIdResponse edgeApplicationsEdgeApplicationIdOriginsPost(edgeApplicationId, opts)

/edge_applications/{edge_application_id}/origins

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsOriginsApi();
let edgeApplicationId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'createOriginsRequest': new EdgeApplicationApi.CreateOriginsRequest() // CreateOriginsRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdOriginsPost(edgeApplicationId, opts, (error, data, response) => {
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
 **createOriginsRequest** | [**CreateOriginsRequest**](CreateOriginsRequest.md)|  | [optional] 

### Return type

[**OriginsIdResponse**](OriginsIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

