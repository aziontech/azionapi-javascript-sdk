# AzionApi.DefaultApi

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
import AzionApi from 'azion_api';

let apiInstance = new AzionApi.DefaultApi();
let opts = {
  'page': 56 // Number | 
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

### Return type

[**ListNetworkListsResponse**](ListNetworkListsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## networkListsPost

> networkListsPost(createNetworkListsRequest)

Create a Network Lists

### Example

```javascript
import AzionApi from 'azion_api';

let apiInstance = new AzionApi.DefaultApi();
let createNetworkListsRequest = new AzionApi.CreateNetworkListsRequest(); // CreateNetworkListsRequest | 
apiInstance.networkListsPost(createNetworkListsRequest, (error, data, response) => {
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
 **createNetworkListsRequest** | [**CreateNetworkListsRequest**](CreateNetworkListsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## networkListsUuidGet

> NetworkListsResponse networkListsUuidGet(uuid)

Retrieve a Network Lists set by uuid

### Example

```javascript
import AzionApi from 'azion_api';

let apiInstance = new AzionApi.DefaultApi();
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

[**NetworkListsResponse**](NetworkListsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## networkListsUuidPut

> ListNetworkListsResponse networkListsUuidPut(uuid, updateNetworkListsRequest)

Overwrite some Network Lists attributes

### Example

```javascript
import AzionApi from 'azion_api';

let apiInstance = new AzionApi.DefaultApi();
let uuid = "uuid_example"; // String | 
let updateNetworkListsRequest = new AzionApi.UpdateNetworkListsRequest(); // UpdateNetworkListsRequest | 
apiInstance.networkListsUuidPut(uuid, updateNetworkListsRequest, (error, data, response) => {
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
 **updateNetworkListsRequest** | [**UpdateNetworkListsRequest**](UpdateNetworkListsRequest.md)|  | 

### Return type

[**ListNetworkListsResponse**](ListNetworkListsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

