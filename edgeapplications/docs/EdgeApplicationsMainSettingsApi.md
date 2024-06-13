# EdgeApplicationApi.EdgeApplicationsMainSettingsApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeApplicationsGet**](EdgeApplicationsMainSettingsApi.md#edgeApplicationsGet) | **GET** /edge_applications | /edge_applications
[**edgeApplicationsIdDelete**](EdgeApplicationsMainSettingsApi.md#edgeApplicationsIdDelete) | **DELETE** /edge_applications/{id} | /edge_applications/:id
[**edgeApplicationsIdGet**](EdgeApplicationsMainSettingsApi.md#edgeApplicationsIdGet) | **GET** /edge_applications/{id} | /edge_applications/:id
[**edgeApplicationsIdPatch**](EdgeApplicationsMainSettingsApi.md#edgeApplicationsIdPatch) | **PATCH** /edge_applications/{id} | /edge_applications/:id
[**edgeApplicationsIdPut**](EdgeApplicationsMainSettingsApi.md#edgeApplicationsIdPut) | **PUT** /edge_applications/{id} | /edge_applications/:id
[**edgeApplicationsPost**](EdgeApplicationsMainSettingsApi.md#edgeApplicationsPost) | **POST** /edge_applications | /edge_applications



## edgeApplicationsGet

> GetApplicationsResponse edgeApplicationsGet(opts)

/edge_applications

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsMainSettingsApi();
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example", // String | 
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsGet(opts, (error, data, response) => {
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
 **filter** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **accept** | **String**|  | [optional] 

### Return type

[**GetApplicationsResponse**](GetApplicationsResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsIdDelete

> edgeApplicationsIdDelete(id, opts)

/edge_applications/:id

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsMainSettingsApi();
let id = "id_example"; // String | The id of the edge application that you plan to delete.
let opts = {
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsIdDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the edge application that you plan to delete. | 
 **accept** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeApplicationsIdGet

> GetApplicationResponse edgeApplicationsIdGet(id, opts)

/edge_applications/:id

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsMainSettingsApi();
let id = "id_example"; // String | 
let opts = {
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsIdGet(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **accept** | **String**|  | [optional] 

### Return type

[**GetApplicationResponse**](GetApplicationResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsIdPatch

> ApplicationUpdateResponse edgeApplicationsIdPatch(id, opts)

/edge_applications/:id

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsMainSettingsApi();
let id = "id_example"; // String | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'applicationUpdateRequest': new EdgeApplicationApi.ApplicationUpdateRequest() // ApplicationUpdateRequest | 
};
apiInstance.edgeApplicationsIdPatch(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **applicationUpdateRequest** | [**ApplicationUpdateRequest**](ApplicationUpdateRequest.md)|  | [optional] 

### Return type

[**ApplicationUpdateResponse**](ApplicationUpdateResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsIdPut

> ApplicationPutResult edgeApplicationsIdPut(id, opts)

/edge_applications/:id

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsMainSettingsApi();
let id = "id_example"; // String | The Id of the edge application to be overwritten. 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'applicationPutRequest': new EdgeApplicationApi.ApplicationPutRequest() // ApplicationPutRequest | 
};
apiInstance.edgeApplicationsIdPut(id, opts, (error, data, response) => {
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
 **id** | **String**| The Id of the edge application to be overwritten.  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **applicationPutRequest** | [**ApplicationPutRequest**](ApplicationPutRequest.md)|  | [optional] 

### Return type

[**ApplicationPutResult**](ApplicationPutResult.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsPost

> CreateApplicationResult edgeApplicationsPost(opts)

/edge_applications

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsMainSettingsApi();
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'createApplicationRequest': new EdgeApplicationApi.CreateApplicationRequest() // CreateApplicationRequest | 
};
apiInstance.edgeApplicationsPost(opts, (error, data, response) => {
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
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **createApplicationRequest** | [**CreateApplicationRequest**](CreateApplicationRequest.md)|  | [optional] 

### Return type

[**CreateApplicationResult**](CreateApplicationResult.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

