# EdgeFunctionApi.EdgeFunctionsApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeFunctionsGet**](EdgeFunctionsApi.md#edgeFunctionsGet) | **GET** /edge_functions | edge_functions
[**edgeFunctionsIdDelete**](EdgeFunctionsApi.md#edgeFunctionsIdDelete) | **DELETE** /edge_functions/{id} | edge_functions
[**edgeFunctionsIdGet**](EdgeFunctionsApi.md#edgeFunctionsIdGet) | **GET** /edge_functions/{id} | edge_functions
[**edgeFunctionsIdPatch**](EdgeFunctionsApi.md#edgeFunctionsIdPatch) | **PATCH** /edge_functions/{id} | edge_functions
[**edgeFunctionsIdPut**](EdgeFunctionsApi.md#edgeFunctionsIdPut) | **PUT** /edge_functions/{id} | edge_functions
[**edgeFunctionsPost**](EdgeFunctionsApi.md#edgeFunctionsPost) | **POST** /edge_functions | edge_functions



## edgeFunctionsGet

> ListEdgeFunctionResponse edgeFunctionsGet(opts)

edge_functions

### Example

```javascript
import EdgeFunctionApi from 'edge_function_api';
let defaultClient = EdgeFunctionApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionApi.EdgeFunctionsApi();
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'sort': "sort_example", // String | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.edgeFunctionsGet(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**ListEdgeFunctionResponse**](ListEdgeFunctionResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3, application/json


## edgeFunctionsIdDelete

> edgeFunctionsIdDelete(id)

edge_functions

### Example

```javascript
import EdgeFunctionApi from 'edge_function_api';
let defaultClient = EdgeFunctionApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionApi.EdgeFunctionsApi();
let id = 789; // Number | 
apiInstance.edgeFunctionsIdDelete(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFunctionsIdGet

> EdgeFunctionResponse edgeFunctionsIdGet(id)

edge_functions

### Example

```javascript
import EdgeFunctionApi from 'edge_function_api';
let defaultClient = EdgeFunctionApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionApi.EdgeFunctionsApi();
let id = 789; // Number | 
apiInstance.edgeFunctionsIdGet(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**EdgeFunctionResponse**](EdgeFunctionResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFunctionsIdPatch

> EdgeFunctionResponse edgeFunctionsIdPatch(id, patchEdgeFunctionRequest)

edge_functions

### Example

```javascript
import EdgeFunctionApi from 'edge_function_api';
let defaultClient = EdgeFunctionApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionApi.EdgeFunctionsApi();
let id = 789; // Number | 
let patchEdgeFunctionRequest = new EdgeFunctionApi.PatchEdgeFunctionRequest(); // PatchEdgeFunctionRequest | 
apiInstance.edgeFunctionsIdPatch(id, patchEdgeFunctionRequest, (error, data, response) => {
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
 **id** | **Number**|  | 
 **patchEdgeFunctionRequest** | [**PatchEdgeFunctionRequest**](PatchEdgeFunctionRequest.md)|  | 

### Return type

[**EdgeFunctionResponse**](EdgeFunctionResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json


## edgeFunctionsIdPut

> EdgeFunctionResponse edgeFunctionsIdPut(id, putEdgeFunctionRequest)

edge_functions

### Example

```javascript
import EdgeFunctionApi from 'edge_function_api';
let defaultClient = EdgeFunctionApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionApi.EdgeFunctionsApi();
let id = 789; // Number | 
let putEdgeFunctionRequest = new EdgeFunctionApi.PutEdgeFunctionRequest(); // PutEdgeFunctionRequest | 
apiInstance.edgeFunctionsIdPut(id, putEdgeFunctionRequest, (error, data, response) => {
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
 **id** | **Number**|  | 
 **putEdgeFunctionRequest** | [**PutEdgeFunctionRequest**](PutEdgeFunctionRequest.md)|  | 

### Return type

[**EdgeFunctionResponse**](EdgeFunctionResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json


## edgeFunctionsPost

> EdgeFunctionResponse edgeFunctionsPost(createEdgeFunctionRequest)

edge_functions

### Example

```javascript
import EdgeFunctionApi from 'edge_function_api';
let defaultClient = EdgeFunctionApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionApi.EdgeFunctionsApi();
let createEdgeFunctionRequest = new EdgeFunctionApi.CreateEdgeFunctionRequest(); // CreateEdgeFunctionRequest | 
apiInstance.edgeFunctionsPost(createEdgeFunctionRequest, (error, data, response) => {
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
 **createEdgeFunctionRequest** | [**CreateEdgeFunctionRequest**](CreateEdgeFunctionRequest.md)|  | 

### Return type

[**EdgeFunctionResponse**](EdgeFunctionResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

