# ServicesApi.DefaultApi

All URIs are relative to *http://bff.azion.net:3002*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteResource**](DefaultApi.md#deleteResource) | **DELETE** /edge_services/{serviceId}/resources/{resourceId} | Delete Service Resource by ID
[**deleteService**](DefaultApi.md#deleteService) | **DELETE** /edge_services/{id} | Delete Service by ID
[**getResource**](DefaultApi.md#getResource) | **GET** /edge_services/{serviceId}/resources/{resourceId} | Return Service Resource by ID
[**getResources**](DefaultApi.md#getResources) | **GET** /edge_services/{serviceId}/resources | Return Service Resources by page
[**getService**](DefaultApi.md#getService) | **GET** /edge_services/{id} | Return Service by ID
[**getServices**](DefaultApi.md#getServices) | **GET** /edge_services | Return Services by page
[**newService**](DefaultApi.md#newService) | **POST** /edge_services | Create Service
[**patchService**](DefaultApi.md#patchService) | **PATCH** /edge_services/{id} | Update Service by ID
[**patchServiceResource**](DefaultApi.md#patchServiceResource) | **PATCH** /edge_services/{serviceId}/resources/{resourceId} | Update Service Resource by ID
[**postResource**](DefaultApi.md#postResource) | **POST** /edge_services/{serviceId}/resources | Create Service Resource



## deleteResource

> deleteResource(serviceId, resourceId)

Delete Service Resource by ID

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let serviceId = 789; // Number | 
let resourceId = 789; // Number | 
apiInstance.deleteResource(serviceId, resourceId, (error, data, response) => {
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
 **serviceId** | **Number**|  | 
 **resourceId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteService

> deleteService(id)

Delete Service by ID

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let id = 789; // Number | 
apiInstance.deleteService(id, (error, data, response) => {
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
- **Accept**: Not defined


## getResource

> ResourceDetail getResource(serviceId, resourceId)

Return Service Resource by ID

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let serviceId = 789; // Number | 
let resourceId = 789; // Number | 
apiInstance.getResource(serviceId, resourceId, (error, data, response) => {
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
 **serviceId** | **Number**|  | 
 **resourceId** | **Number**|  | 

### Return type

[**ResourceDetail**](ResourceDetail.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResources

> Object getResources(serviceId, opts)

Return Service Resources by page

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let serviceId = 789; // Number | 
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example" // String | 
};
apiInstance.getResources(serviceId, opts, (error, data, response) => {
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
 **serviceId** | **Number**|  | 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **filter** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getService

> ServiceResponse getService(id, opts)

Return Service by ID

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let id = 789; // Number | 
let opts = {
  'withVars': true // Boolean | 
};
apiInstance.getService(id, opts, (error, data, response) => {
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
 **withVars** | **Boolean**|  | [optional] 

### Return type

[**ServiceResponse**](ServiceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServices

> ServiceResponseWithTotals getServices(opts)

Return Services by page

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example" // String | 
};
apiInstance.getServices(opts, (error, data, response) => {
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

### Return type

[**ServiceResponseWithTotals**](ServiceResponseWithTotals.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## newService

> ServiceResponse newService(createServiceRequest)

Create Service

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let createServiceRequest = new ServicesApi.CreateServiceRequest(); // CreateServiceRequest | 
apiInstance.newService(createServiceRequest, (error, data, response) => {
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
 **createServiceRequest** | [**CreateServiceRequest**](CreateServiceRequest.md)|  | 

### Return type

[**ServiceResponse**](ServiceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchService

> ServiceResponse patchService(id, updateServiceRequest)

Update Service by ID

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let id = 789; // Number | 
let updateServiceRequest = new ServicesApi.UpdateServiceRequest(); // UpdateServiceRequest | 
apiInstance.patchService(id, updateServiceRequest, (error, data, response) => {
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
 **updateServiceRequest** | [**UpdateServiceRequest**](UpdateServiceRequest.md)|  | 

### Return type

[**ServiceResponse**](ServiceResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchServiceResource

> ResourceDetail patchServiceResource(serviceId, resourceId, updateResourceRequest)

Update Service Resource by ID

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let serviceId = 789; // Number | 
let resourceId = 789; // Number | 
let updateResourceRequest = new ServicesApi.UpdateResourceRequest(); // UpdateResourceRequest | 
apiInstance.patchServiceResource(serviceId, resourceId, updateResourceRequest, (error, data, response) => {
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
 **serviceId** | **Number**|  | 
 **resourceId** | **Number**|  | 
 **updateResourceRequest** | [**UpdateResourceRequest**](UpdateResourceRequest.md)|  | 

### Return type

[**ResourceDetail**](ResourceDetail.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postResource

> ResourceDetail postResource(serviceId, createResourceRequest)

Create Service Resource

### Example

```javascript
import ServicesApi from 'services_api';
let defaultClient = ServicesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ServicesApi.DefaultApi();
let serviceId = 789; // Number | 
let createResourceRequest = new ServicesApi.CreateResourceRequest(); // CreateResourceRequest | 
apiInstance.postResource(serviceId, createResourceRequest, (error, data, response) => {
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
 **serviceId** | **Number**|  | 
 **createResourceRequest** | [**CreateResourceRequest**](CreateResourceRequest.md)|  | 

### Return type

[**ResourceDetail**](ResourceDetail.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

