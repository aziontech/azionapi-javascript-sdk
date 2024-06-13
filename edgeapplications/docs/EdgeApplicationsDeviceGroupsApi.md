# EdgeApplicationApi.EdgeApplicationsDeviceGroupsApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete**](EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete) | **DELETE** /edge_applications/{edge_application_id}/device_groups/{device_group_id} | /edge_applications/{edge_application_id}/device_groups/{device_group_id}
[**edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet**](EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet) | **GET** /edge_applications/{edge_application_id}/device_groups/{device_group_id} | /edge_applications/{edge_application_id}/device_groups/{device_group_id}
[**edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch**](EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch) | **PATCH** /edge_applications/{edge_application_id}/device_groups/{device_group_id} | /edge_applications/{edge_application_id}/device_groups/{device_group_id}
[**edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut**](EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut) | **PUT** /edge_applications/{edge_application_id}/device_groups/{device_group_id} | /edge_applications/{edge_application_id}/device_groups/{device_group_id}
[**edgeApplicationsEdgeApplicationIdDeviceGroupsGet**](EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsGet) | **GET** /edge_applications/{edge_application_id}/device_groups | /edge_applications/{edge_application_id}/device_groups
[**edgeApplicationsEdgeApplicationIdDeviceGroupsPost**](EdgeApplicationsDeviceGroupsApi.md#edgeApplicationsEdgeApplicationIdDeviceGroupsPost) | **POST** /edge_applications/{edge_application_id}/device_groups | /edge_applications/{edge_application_id}/device_groups



## edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete

> edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete(edgeApplicationId, deviceGroupId, opts)

/edge_applications/{edge_application_id}/device_groups/{device_group_id}

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsDeviceGroupsApi();
let edgeApplicationId = 789; // Number | 
let deviceGroupId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3" // String | The id of the Device Groups that you plan to delete.
};
apiInstance.edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete(edgeApplicationId, deviceGroupId, opts, (error, data, response) => {
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
 **deviceGroupId** | **Number**|  | 
 **accept** | **String**| The id of the Device Groups that you plan to delete. | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet

> DeviceGroupsIdResponse edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet(edgeApplicationId, deviceGroupId, opts)

/edge_applications/{edge_application_id}/device_groups/{device_group_id}

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsDeviceGroupsApi();
let edgeApplicationId = 789; // Number | 
let deviceGroupId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3" // String | The id of the Device Groups that you plan to query.
};
apiInstance.edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet(edgeApplicationId, deviceGroupId, opts, (error, data, response) => {
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
 **deviceGroupId** | **Number**|  | 
 **accept** | **String**| The id of the Device Groups that you plan to query. | [optional] 

### Return type

[**DeviceGroupsIdResponse**](DeviceGroupsIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch

> DeviceGroupsIdResponse edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch(edgeApplicationId, deviceGroupId, opts)

/edge_applications/{edge_application_id}/device_groups/{device_group_id}

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsDeviceGroupsApi();
let edgeApplicationId = 789; // Number | 
let deviceGroupId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'patchDeviceGroupsRequest': new EdgeApplicationApi.PatchDeviceGroupsRequest() // PatchDeviceGroupsRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch(edgeApplicationId, deviceGroupId, opts, (error, data, response) => {
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
 **deviceGroupId** | **Number**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **patchDeviceGroupsRequest** | [**PatchDeviceGroupsRequest**](PatchDeviceGroupsRequest.md)|  | [optional] 

### Return type

[**DeviceGroupsIdResponse**](DeviceGroupsIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut

> DeviceGroupsIdResponse edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut(edgeApplicationId, deviceGroupId, opts)

/edge_applications/{edge_application_id}/device_groups/{device_group_id}

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsDeviceGroupsApi();
let edgeApplicationId = 789; // Number | 
let deviceGroupId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'updateDeviceGroupsRequest': new EdgeApplicationApi.UpdateDeviceGroupsRequest() // UpdateDeviceGroupsRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut(edgeApplicationId, deviceGroupId, opts, (error, data, response) => {
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
 **deviceGroupId** | **Number**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **updateDeviceGroupsRequest** | [**UpdateDeviceGroupsRequest**](UpdateDeviceGroupsRequest.md)|  | [optional] 

### Return type

[**DeviceGroupsIdResponse**](DeviceGroupsIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdDeviceGroupsGet

> DeviceGroupsResponse edgeApplicationsEdgeApplicationIdDeviceGroupsGet(edgeApplicationId, opts)

/edge_applications/{edge_application_id}/device_groups

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsDeviceGroupsApi();
let edgeApplicationId = 789; // Number | 
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example", // String | 
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsEdgeApplicationIdDeviceGroupsGet(edgeApplicationId, opts, (error, data, response) => {
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

[**DeviceGroupsResponse**](DeviceGroupsResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdDeviceGroupsPost

> DeviceGroupsIdResponse edgeApplicationsEdgeApplicationIdDeviceGroupsPost(edgeApplicationId, opts)

/edge_applications/{edge_application_id}/device_groups

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsDeviceGroupsApi();
let edgeApplicationId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'createDeviceGroupsRequest': new EdgeApplicationApi.CreateDeviceGroupsRequest() // CreateDeviceGroupsRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdDeviceGroupsPost(edgeApplicationId, opts, (error, data, response) => {
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
 **createDeviceGroupsRequest** | [**CreateDeviceGroupsRequest**](CreateDeviceGroupsRequest.md)|  | [optional] 

### Return type

[**DeviceGroupsIdResponse**](DeviceGroupsIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

