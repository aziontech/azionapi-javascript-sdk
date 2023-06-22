# EdgeFirewallApi.DefaultApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeFirewallGet**](DefaultApi.md#edgeFirewallGet) | **GET** /edge_firewall | List all user edge firewall
[**edgeFirewallPost**](DefaultApi.md#edgeFirewallPost) | **POST** /edge_firewall | Create a edge firewall
[**edgeFirewallUuidDelete**](DefaultApi.md#edgeFirewallUuidDelete) | **DELETE** /edge_firewall/{uuid} | Delete an edge firewall by uuid
[**edgeFirewallUuidGet**](DefaultApi.md#edgeFirewallUuidGet) | **GET** /edge_firewall/{uuid} | Retrieve an edge firewall set by uuid
[**edgeFirewallUuidPatch**](DefaultApi.md#edgeFirewallUuidPatch) | **PATCH** /edge_firewall/{uuid} | Update some edge firewall attributes, like \&quot;active\&quot;
[**edgeFirewallUuidPut**](DefaultApi.md#edgeFirewallUuidPut) | **PUT** /edge_firewall/{uuid} | Overwrite some edge firewall attributes, like \&quot;active\&quot;



## edgeFirewallGet

> ListEdgeFirewallResponse edgeFirewallGet(opts)

List all user edge firewall

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let opts = {
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.edgeFirewallGet(opts, (error, data, response) => {
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

[**ListEdgeFirewallResponse**](ListEdgeFirewallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFirewallPost

> edgeFirewallPost(createEdgeFirewallRequest)

Create a edge firewall

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let createEdgeFirewallRequest = new EdgeFirewallApi.CreateEdgeFirewallRequest(); // CreateEdgeFirewallRequest | 
apiInstance.edgeFirewallPost(createEdgeFirewallRequest, (error, data, response) => {
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
 **createEdgeFirewallRequest** | [**CreateEdgeFirewallRequest**](CreateEdgeFirewallRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## edgeFirewallUuidDelete

> edgeFirewallUuidDelete(uuid)

Delete an edge firewall by uuid

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let uuid = "uuid_example"; // String | 
apiInstance.edgeFirewallUuidDelete(uuid, (error, data, response) => {
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


## edgeFirewallUuidGet

> EdgeFirewallResponse edgeFirewallUuidGet(uuid)

Retrieve an edge firewall set by uuid

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let uuid = "uuid_example"; // String | 
apiInstance.edgeFirewallUuidGet(uuid, (error, data, response) => {
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

[**EdgeFirewallResponse**](EdgeFirewallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFirewallUuidPatch

> ListEdgeFirewallResponse edgeFirewallUuidPatch(uuid, body)

Update some edge firewall attributes, like \&quot;active\&quot;

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let uuid = "uuid_example"; // String | 
let body = new EdgeFirewallApi.ListEdgeFirewallResponse(); // ListEdgeFirewallResponse | 
apiInstance.edgeFirewallUuidPatch(uuid, body, (error, data, response) => {
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
 **body** | **ListEdgeFirewallResponse**|  | 

### Return type

[**ListEdgeFirewallResponse**](ListEdgeFirewallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## edgeFirewallUuidPut

> ListEdgeFirewallResponse edgeFirewallUuidPut(uuid, body)

Overwrite some edge firewall attributes, like \&quot;active\&quot;

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let uuid = "uuid_example"; // String | 
let body = new EdgeFirewallApi.ListEdgeFirewallResponse(); // ListEdgeFirewallResponse | 
apiInstance.edgeFirewallUuidPut(uuid, body, (error, data, response) => {
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
 **body** | **ListEdgeFirewallResponse**|  | 

### Return type

[**ListEdgeFirewallResponse**](ListEdgeFirewallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

