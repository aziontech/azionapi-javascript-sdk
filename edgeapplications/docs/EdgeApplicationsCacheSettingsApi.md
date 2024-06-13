# EdgeApplicationApi.EdgeApplicationsCacheSettingsApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdDelete**](EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdDelete) | **DELETE** /edge_applications/{edge_application_id}/cache_settings/{cache_settings_id} | /edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:
[**edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet**](EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet) | **GET** /edge_applications/{edge_application_id}/cache_settings/{cache_settings_id} | /edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:
[**edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPatch**](EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPatch) | **PATCH** /edge_applications/{edge_application_id}/cache_settings/{cache_settings_id} | /edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:
[**edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut**](EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut) | **PUT** /edge_applications/{edge_application_id}/cache_settings/{cache_settings_id} | /edge_applications/:edge_application_id:/cache_settings/ca
[**edgeApplicationsEdgeApplicationIdCacheSettingsGet**](EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsGet) | **GET** /edge_applications/{edge_application_id}/cache_settings | /edge_applications/{edge_application_id}/cache_settings
[**edgeApplicationsEdgeApplicationIdCacheSettingsPost**](EdgeApplicationsCacheSettingsApi.md#edgeApplicationsEdgeApplicationIdCacheSettingsPost) | **POST** /edge_applications/{edge_application_id}/cache_settings | /edge_applications/:edge_application_id:/cache_settings



## edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdDelete

> edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdDelete(edgeApplicationId, cacheSettingsId, opts)

/edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsCacheSettingsApi();
let edgeApplicationId = 789; // Number | 
let cacheSettingsId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json" // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
};
apiInstance.edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdDelete(edgeApplicationId, cacheSettingsId, opts, (error, data, response) => {
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
 **cacheSettingsId** | **Number**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet

> ApplicationCacheGetOneResponse edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet(edgeApplicationId, cacheSettingsId, opts)

/edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsCacheSettingsApi();
let edgeApplicationId = 789; // Number | 
let cacheSettingsId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet(edgeApplicationId, cacheSettingsId, opts, (error, data, response) => {
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
 **cacheSettingsId** | **Number**|  | 
 **accept** | **String**|  | [optional] 

### Return type

[**ApplicationCacheGetOneResponse**](ApplicationCacheGetOneResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPatch

> ApplicationCachePatchResponse edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPatch(edgeApplicationId, cacheSettingsId, opts)

/edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsCacheSettingsApi();
let edgeApplicationId = 789; // Number | 
let cacheSettingsId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'applicationCachePatchRequest': new EdgeApplicationApi.ApplicationCachePatchRequest() // ApplicationCachePatchRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPatch(edgeApplicationId, cacheSettingsId, opts, (error, data, response) => {
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
 **cacheSettingsId** | **Number**|  | 
 **accept** | **String**|  | [optional] 
 **applicationCachePatchRequest** | [**ApplicationCachePatchRequest**](ApplicationCachePatchRequest.md)|  | [optional] 

### Return type

[**ApplicationCachePatchResponse**](ApplicationCachePatchResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut

> ApplicationCachePutResponse edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut(edgeApplicationId, cacheSettingsId, opts)

/edge_applications/:edge_application_id:/cache_settings/ca

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsCacheSettingsApi();
let edgeApplicationId = 789; // Number | 
let cacheSettingsId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'applicationCachePutRequest': new EdgeApplicationApi.ApplicationCachePutRequest() // ApplicationCachePutRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut(edgeApplicationId, cacheSettingsId, opts, (error, data, response) => {
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
 **cacheSettingsId** | **Number**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **applicationCachePutRequest** | [**ApplicationCachePutRequest**](ApplicationCachePutRequest.md)|  | [optional] 

### Return type

[**ApplicationCachePutResponse**](ApplicationCachePutResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdCacheSettingsGet

> ApplicationCacheGetResponse edgeApplicationsEdgeApplicationIdCacheSettingsGet(edgeApplicationId, opts)

/edge_applications/{edge_application_id}/cache_settings

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsCacheSettingsApi();
let edgeApplicationId = 789; // Number | 
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example", // String | 
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsEdgeApplicationIdCacheSettingsGet(edgeApplicationId, opts, (error, data, response) => {
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

[**ApplicationCacheGetResponse**](ApplicationCacheGetResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdCacheSettingsPost

> ApplicationCacheCreateResponse edgeApplicationsEdgeApplicationIdCacheSettingsPost(edgeApplicationId, opts)

/edge_applications/:edge_application_id:/cache_settings

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsCacheSettingsApi();
let edgeApplicationId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'applicationCacheCreateRequest': new EdgeApplicationApi.ApplicationCacheCreateRequest() // ApplicationCacheCreateRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdCacheSettingsPost(edgeApplicationId, opts, (error, data, response) => {
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
 **applicationCacheCreateRequest** | [**ApplicationCacheCreateRequest**](ApplicationCacheCreateRequest.md)|  | [optional] 

### Return type

[**ApplicationCacheCreateResponse**](ApplicationCacheCreateResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

