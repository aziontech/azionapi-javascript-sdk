# NetworkListsApi.DefaultApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**networkListsGet**](DefaultApi.md#networkListsGet) | **GET** /network_lists | List all user Network Lists
[**networkListsPost**](DefaultApi.md#networkListsPost) | **POST** /network_lists | Create a Network Lists
[**networkListsUuidGet**](DefaultApi.md#networkListsUuidGet) | **GET** /network_lists/{uuid} | Retrieve a Network Lists set by uuid
[**networkListsUuidPut**](DefaultApi.md#networkListsUuidPut) | **PUT** /network_lists/{uuid} | Overwrite some Network Lists attributes



## networkListsGet

> ListNetworkListsResponse networkListsGet(opts)

List all user Network Lists

### Example

```javascript
import NetworkListsApi from 'network_lists_api';
let defaultClient = NetworkListsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NetworkListsApi.DefaultApi();
let opts = {
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.networkListsGet(opts, (error, data, response) => {
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

[**ListNetworkListsResponse**](ListNetworkListsResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html


## networkListsPost

> NetworkListsResponse networkListsPost(createNetworkListsRequest)

Create a Network Lists

### Example

```javascript
import NetworkListsApi from 'network_lists_api';
let defaultClient = NetworkListsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NetworkListsApi.DefaultApi();
let createNetworkListsRequest = new NetworkListsApi.CreateNetworkListsRequest(); // CreateNetworkListsRequest | 
apiInstance.networkListsPost(createNetworkListsRequest, (error, data, response) => {
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
 **createNetworkListsRequest** | [**CreateNetworkListsRequest**](CreateNetworkListsRequest.md)|  | 

### Return type

[**NetworkListsResponse**](NetworkListsResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html


## networkListsUuidGet

> NetworkListUuidResponse networkListsUuidGet(uuid)

Retrieve a Network Lists set by uuid

### Example

```javascript
import NetworkListsApi from 'network_lists_api';
let defaultClient = NetworkListsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NetworkListsApi.DefaultApi();
let uuid = "uuid_example"; // String | 
apiInstance.networkListsUuidGet(uuid, (error, data, response) => {
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

[**NetworkListUuidResponse**](NetworkListUuidResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html


## networkListsUuidPut

> NetworkListsResponse networkListsUuidPut(uuid, createNetworkListsRequest)

Overwrite some Network Lists attributes

### Example

```javascript
import NetworkListsApi from 'network_lists_api';
let defaultClient = NetworkListsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NetworkListsApi.DefaultApi();
let uuid = "uuid_example"; // String | 
let createNetworkListsRequest = new NetworkListsApi.CreateNetworkListsRequest(); // CreateNetworkListsRequest | 
apiInstance.networkListsUuidPut(uuid, createNetworkListsRequest, (error, data, response) => {
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
 **createNetworkListsRequest** | [**CreateNetworkListsRequest**](CreateNetworkListsRequest.md)|  | 

### Return type

[**NetworkListsResponse**](NetworkListsResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html

