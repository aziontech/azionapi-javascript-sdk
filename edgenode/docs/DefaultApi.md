# EdgeNodeApi.DefaultApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizeEdgeNode**](DefaultApi.md#authorizeEdgeNode) | **PATCH** /edge_nodes/authorize | Authorize edge-node
[**createEdgeNodeSvcs**](DefaultApi.md#createEdgeNodeSvcs) | **POST** /edge_nodes/{edgenodeId}/services | Create an edge-node Service association
[**delEdgeNode**](DefaultApi.md#delEdgeNode) | **DELETE** /edge_nodes/{edgenodeId} | Delete edge-node by ID
[**delEdgeNodeSvc**](DefaultApi.md#delEdgeNodeSvc) | **DELETE** /edge_nodes/{edgenodeId}/services/{bindId} | Delete an edge-node Service association
[**getEdgeNode**](DefaultApi.md#getEdgeNode) | **GET** /edge_nodes/{edgenodeId} | Return edge-node by ID
[**getEdgeNodeGroups**](DefaultApi.md#getEdgeNodeGroups) | **GET** /edge_nodes/groups | Return edge-node groups
[**getEdgeNodeSvcDetail**](DefaultApi.md#getEdgeNodeSvcDetail) | **GET** /edge_nodes/{edgenodeId}/services/{bindId} | Return edge-node Service association by ID
[**getEdgeNodeSvcs**](DefaultApi.md#getEdgeNodeSvcs) | **GET** /edge_nodes/{edgenodeId}/services | Return edge-node Services association
[**getEdgeNodes**](DefaultApi.md#getEdgeNodes) | **GET** /edge_nodes | Return edge-nodes
[**updateEdgeNode**](DefaultApi.md#updateEdgeNode) | **PATCH** /edge_nodes/{edgenodeId} | Update edge-node
[**updateEdgeNodeSvcDetail**](DefaultApi.md#updateEdgeNodeSvcDetail) | **PATCH** /edge_nodes/{edgenodeId}/services/{bindId} | Update edge-node Service association by ID



## authorizeEdgeNode

> AuthorizeEdgeNodesResponse authorizeEdgeNode(authorizeEdgeNodesRequest)

Authorize edge-node

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let authorizeEdgeNodesRequest = new EdgeNodeApi.AuthorizeEdgeNodesRequest(); // AuthorizeEdgeNodesRequest | 
apiInstance.authorizeEdgeNode(authorizeEdgeNodesRequest, (error, data, response) => {
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
 **authorizeEdgeNodesRequest** | [**AuthorizeEdgeNodesRequest**](AuthorizeEdgeNodesRequest.md)|  | 

### Return type

[**AuthorizeEdgeNodesResponse**](AuthorizeEdgeNodesResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## createEdgeNodeSvcs

> ServiceBindDetailResponse createEdgeNodeSvcs(edgenodeId, serviceBindRequest)

Create an edge-node Service association

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let edgenodeId = 789; // Number | 
let serviceBindRequest = new EdgeNodeApi.ServiceBindRequest(); // ServiceBindRequest | 
apiInstance.createEdgeNodeSvcs(edgenodeId, serviceBindRequest, (error, data, response) => {
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
 **edgenodeId** | **Number**|  | 
 **serviceBindRequest** | [**ServiceBindRequest**](ServiceBindRequest.md)|  | 

### Return type

[**ServiceBindDetailResponse**](ServiceBindDetailResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## delEdgeNode

> delEdgeNode(edgenodeId)

Delete edge-node by ID

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let edgenodeId = 789; // Number | 
apiInstance.delEdgeNode(edgenodeId, (error, data, response) => {
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
 **edgenodeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## delEdgeNodeSvc

> delEdgeNodeSvc(edgenodeId, bindId)

Delete an edge-node Service association

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let edgenodeId = 789; // Number | 
let bindId = 789; // Number | 
apiInstance.delEdgeNodeSvc(edgenodeId, bindId, (error, data, response) => {
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
 **edgenodeId** | **Number**|  | 
 **bindId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getEdgeNode

> EdgeNodeDetailResponse getEdgeNode(edgenodeId)

Return edge-node by ID

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let edgenodeId = 789; // Number | 
apiInstance.getEdgeNode(edgenodeId, (error, data, response) => {
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
 **edgenodeId** | **Number**|  | 

### Return type

[**EdgeNodeDetailResponse**](EdgeNodeDetailResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## getEdgeNodeGroups

> [NodeGroupResponse] getEdgeNodeGroups()

Return edge-node groups

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
apiInstance.getEdgeNodeGroups((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[NodeGroupResponse]**](NodeGroupResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## getEdgeNodeSvcDetail

> ServiceBindDetailResponse getEdgeNodeSvcDetail(edgenodeId, bindId)

Return edge-node Service association by ID

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let edgenodeId = 789; // Number | 
let bindId = 789; // Number | 
apiInstance.getEdgeNodeSvcDetail(edgenodeId, bindId, (error, data, response) => {
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
 **edgenodeId** | **Number**|  | 
 **bindId** | **Number**|  | 

### Return type

[**ServiceBindDetailResponse**](ServiceBindDetailResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## getEdgeNodeSvcs

> ServiceResponseWithTotal getEdgeNodeSvcs(edgenodeId, opts)

Return edge-node Services association

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let edgenodeId = 789; // Number | 
let opts = {
  'isBound': true, // Boolean | 
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example", // String | 
  'page': 789, // Number | 
  'pageSize': 789 // Number | 
};
apiInstance.getEdgeNodeSvcs(edgenodeId, opts, (error, data, response) => {
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
 **edgenodeId** | **Number**|  | 
 **isBound** | **Boolean**|  | [optional] 
 **filter** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**ServiceResponseWithTotal**](ServiceResponseWithTotal.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## getEdgeNodes

> EdgeNodeResponseWithTotal getEdgeNodes(opts)

Return edge-nodes

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let opts = {
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example", // String | 
  'onlyIds': true, // Boolean | 
  'pageSize': 789 // Number | 
};
apiInstance.getEdgeNodes(opts, (error, data, response) => {
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
 **filter** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **onlyIds** | **Boolean**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**EdgeNodeResponseWithTotal**](EdgeNodeResponseWithTotal.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## updateEdgeNode

> UpdateEdgeNodeResponse updateEdgeNode(edgenodeId)

Update edge-node

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let edgenodeId = 789; // Number | 
apiInstance.updateEdgeNode(edgenodeId, (error, data, response) => {
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
 **edgenodeId** | **Number**|  | 

### Return type

[**UpdateEdgeNodeResponse**](UpdateEdgeNodeResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## updateEdgeNodeSvcDetail

> ServiceBindDetailResponse updateEdgeNodeSvcDetail(edgenodeId, bindId, updateServiceBindRequest)

Update edge-node Service association by ID

### Example

```javascript
import EdgeNodeApi from 'edge_node_api';
let defaultClient = EdgeNodeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeNodeApi.DefaultApi();
let edgenodeId = 789; // Number | 
let bindId = 789; // Number | 
let updateServiceBindRequest = new EdgeNodeApi.UpdateServiceBindRequest(); // UpdateServiceBindRequest | 
apiInstance.updateEdgeNodeSvcDetail(edgenodeId, bindId, updateServiceBindRequest, (error, data, response) => {
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
 **edgenodeId** | **Number**|  | 
 **bindId** | **Number**|  | 
 **updateServiceBindRequest** | [**UpdateServiceBindRequest**](UpdateServiceBindRequest.md)|  | 

### Return type

[**ServiceBindDetailResponse**](ServiceBindDetailResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

