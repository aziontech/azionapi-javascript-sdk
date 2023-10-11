# EdgeFunctionsInstancesApi.DefaultApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdDelete**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdDelete) | **DELETE** /edge_firewall/{edge_firewall_id}/functions_instances/{edge_function_instance_id} | Delete an Edge Functions Instance by uuid
[**edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdGet**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdGet) | **GET** /edge_firewall/{edge_firewall_id}/functions_instances/{edge_function_instance_id} | Retrieve an Edge Functions Instance set by uuid
[**edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPatch**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPatch) | **PATCH** /edge_firewall/{edge_firewall_id}/functions_instances/{edge_function_instance_id} | Update some Edge Functions Instance attributes
[**edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPut**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPut) | **PUT** /edge_firewall/{edge_firewall_id}/functions_instances/{edge_function_instance_id} | Overwrite some Edge Functions Instance attributes
[**edgeFirewallEdgeFirewallIdFunctionsInstancesGet**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesGet) | **GET** /edge_firewall/{edge_firewall_id}/functions_instances | List all user Edge Functions Instances
[**edgeFirewallEdgeFirewallIdFunctionsInstancesPost**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesPost) | **POST** /edge_firewall/{edge_firewall_id}/functions_instances | Create an Edge Functions Instance



## edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdDelete

> edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdDelete(edgeFirewallId, edgeFunctionInstanceId)

Delete an Edge Functions Instance by uuid

### Example

```javascript
import EdgeFunctionsInstancesApi from 'edge_functions_instances_api';
let defaultClient = EdgeFunctionsInstancesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionsInstancesApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let edgeFunctionInstanceId = 789; // Number | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdDelete(edgeFirewallId, edgeFunctionInstanceId, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **edgeFunctionInstanceId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdGet

> EdgeFunctionsInstanceResponse edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdGet(edgeFirewallId, edgeFunctionInstanceId)

Retrieve an Edge Functions Instance set by uuid

### Example

```javascript
import EdgeFunctionsInstancesApi from 'edge_functions_instances_api';
let defaultClient = EdgeFunctionsInstancesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionsInstancesApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let edgeFunctionInstanceId = 789; // Number | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdGet(edgeFirewallId, edgeFunctionInstanceId, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **edgeFunctionInstanceId** | **Number**|  | 

### Return type

[**EdgeFunctionsInstanceResponse**](EdgeFunctionsInstanceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPatch

> EdgeFunctionsInstanceResponse edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPatch(edgeFirewallId, edgeFunctionInstanceId, body)

Update some Edge Functions Instance attributes

### Example

```javascript
import EdgeFunctionsInstancesApi from 'edge_functions_instances_api';
let defaultClient = EdgeFunctionsInstancesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionsInstancesApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let edgeFunctionInstanceId = 789; // Number | 
let body = new EdgeFunctionsInstancesApi.CreateEdgeFunctionsInstancesRequest(); // CreateEdgeFunctionsInstancesRequest | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPatch(edgeFirewallId, edgeFunctionInstanceId, body, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **edgeFunctionInstanceId** | **Number**|  | 
 **body** | **CreateEdgeFunctionsInstancesRequest**|  | 

### Return type

[**EdgeFunctionsInstanceResponse**](EdgeFunctionsInstanceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPut

> EdgeFunctionsInstanceResponse edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPut(edgeFirewallId, edgeFunctionInstanceId, body)

Overwrite some Edge Functions Instance attributes

### Example

```javascript
import EdgeFunctionsInstancesApi from 'edge_functions_instances_api';
let defaultClient = EdgeFunctionsInstancesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionsInstancesApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let edgeFunctionInstanceId = 789; // Number | 
let body = new EdgeFunctionsInstancesApi.CreateEdgeFunctionsInstancesRequest(); // CreateEdgeFunctionsInstancesRequest | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesEdgeFunctionInstanceIdPut(edgeFirewallId, edgeFunctionInstanceId, body, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **edgeFunctionInstanceId** | **Number**|  | 
 **body** | **CreateEdgeFunctionsInstancesRequest**|  | 

### Return type

[**EdgeFunctionsInstanceResponse**](EdgeFunctionsInstanceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## edgeFirewallEdgeFirewallIdFunctionsInstancesGet

> ListEdgeFunctionsInstancesResponse edgeFirewallEdgeFirewallIdFunctionsInstancesGet(edgeFirewallId, opts)

List all user Edge Functions Instances

### Example

```javascript
import EdgeFunctionsInstancesApi from 'edge_functions_instances_api';
let defaultClient = EdgeFunctionsInstancesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionsInstancesApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'sort': "sort_example", // String | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesGet(edgeFirewallId, opts, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**ListEdgeFunctionsInstancesResponse**](ListEdgeFunctionsInstancesResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFirewallEdgeFirewallIdFunctionsInstancesPost

> EdgeFunctionsInstanceResponse edgeFirewallEdgeFirewallIdFunctionsInstancesPost(edgeFirewallId, createEdgeFunctionsInstancesRequest)

Create an Edge Functions Instance

### Example

```javascript
import EdgeFunctionsInstancesApi from 'edge_functions_instances_api';
let defaultClient = EdgeFunctionsInstancesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFunctionsInstancesApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let createEdgeFunctionsInstancesRequest = new EdgeFunctionsInstancesApi.CreateEdgeFunctionsInstancesRequest(); // CreateEdgeFunctionsInstancesRequest | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesPost(edgeFirewallId, createEdgeFunctionsInstancesRequest, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **createEdgeFunctionsInstancesRequest** | [**CreateEdgeFunctionsInstancesRequest**](CreateEdgeFunctionsInstancesRequest.md)|  | 

### Return type

[**EdgeFunctionsInstanceResponse**](EdgeFunctionsInstanceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

