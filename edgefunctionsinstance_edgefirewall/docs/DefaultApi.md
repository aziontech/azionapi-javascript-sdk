# EdgeFunctionsInstancesApi.DefaultApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeFirewallEdgeFirewallIdFunctionsInstancesGet**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesGet) | **GET** /edge_firewall/:edge_firewall_id:/functions_instances | List all user Edge Functions Instances
[**edgeFirewallEdgeFirewallIdFunctionsInstancesPost**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesPost) | **POST** /edge_firewall/:edge_firewall_id:/functions_instances | Create an Edge Functions Instance
[**edgeFirewallEdgeFirewallIdFunctionsInstancesUuidDelete**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesUuidDelete) | **DELETE** /edge_firewall/:edge_firewall_id:/functions_instances/{uuid} | Delete an Edge Functions Instance by uuid
[**edgeFirewallEdgeFirewallIdFunctionsInstancesUuidGet**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesUuidGet) | **GET** /edge_firewall/:edge_firewall_id:/functions_instances/{uuid} | Retrieve an Edge Functions Instance set by uuid
[**edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPatch**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPatch) | **PATCH** /edge_firewall/:edge_firewall_id:/functions_instances/{uuid} | Update some Edge Functions Instance attributes
[**edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPut**](DefaultApi.md#edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPut) | **PUT** /edge_firewall/:edge_firewall_id:/functions_instances/{uuid} | Overwrite some Edge Functions Instance attributes



## edgeFirewallEdgeFirewallIdFunctionsInstancesGet

> ListEdgeFunctionsInstancesResponse edgeFirewallEdgeFirewallIdFunctionsInstancesGet(opts)

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
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'sort': "sort_example", // String | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesGet(opts, (error, data, response) => {
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

[**ListEdgeFunctionsInstancesResponse**](ListEdgeFunctionsInstancesResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFirewallEdgeFirewallIdFunctionsInstancesPost

> EdgeFunctionsInstanceResponse edgeFirewallEdgeFirewallIdFunctionsInstancesPost(createEdgeFunctionsInstancesRequest)

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
let createEdgeFunctionsInstancesRequest = new EdgeFunctionsInstancesApi.CreateEdgeFunctionsInstancesRequest(); // CreateEdgeFunctionsInstancesRequest | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesPost(createEdgeFunctionsInstancesRequest, (error, data, response) => {
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
 **createEdgeFunctionsInstancesRequest** | [**CreateEdgeFunctionsInstancesRequest**](CreateEdgeFunctionsInstancesRequest.md)|  | 

### Return type

[**EdgeFunctionsInstanceResponse**](EdgeFunctionsInstanceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## edgeFirewallEdgeFirewallIdFunctionsInstancesUuidDelete

> edgeFirewallEdgeFirewallIdFunctionsInstancesUuidDelete(uuid)

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
let uuid = "uuid_example"; // String | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesUuidDelete(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeFirewallEdgeFirewallIdFunctionsInstancesUuidGet

> EdgeFunctionsInstanceResponse edgeFirewallEdgeFirewallIdFunctionsInstancesUuidGet(uuid)

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
let uuid = "uuid_example"; // String | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesUuidGet(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

[**EdgeFunctionsInstanceResponse**](EdgeFunctionsInstanceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPatch

> EdgeFunctionsInstanceResponse edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPatch(uuid, body)

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
let uuid = "uuid_example"; // String | 
let body = new EdgeFunctionsInstancesApi.CreateEdgeFunctionsInstancesRequest(); // CreateEdgeFunctionsInstancesRequest | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPatch(uuid, body, (error, data, response) => {
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
 **uuid** | **String**|  | 
 **body** | **CreateEdgeFunctionsInstancesRequest**|  | 

### Return type

[**EdgeFunctionsInstanceResponse**](EdgeFunctionsInstanceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPut

> EdgeFunctionsInstanceResponse edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPut(uuid, body)

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
let uuid = "uuid_example"; // String | 
let body = new EdgeFunctionsInstancesApi.CreateEdgeFunctionsInstancesRequest(); // CreateEdgeFunctionsInstancesRequest | 
apiInstance.edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPut(uuid, body, (error, data, response) => {
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
 **uuid** | **String**|  | 
 **body** | **CreateEdgeFunctionsInstancesRequest**|  | 

### Return type

[**EdgeFunctionsInstanceResponse**](EdgeFunctionsInstanceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

