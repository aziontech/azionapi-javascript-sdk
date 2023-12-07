# ObjectStorage.BucketsApi

All URIs are relative to *https://api.azion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1StorageBucketsCreate**](BucketsApi.md#apiV1StorageBucketsCreate) | **POST** /v4/storage/buckets | /v4/storage/buckets
[**apiV1StorageBucketsDestroy**](BucketsApi.md#apiV1StorageBucketsDestroy) | **DELETE** /v4/storage/buckets/{name} | /v4/storage/buckets/:name
[**apiV1StorageBucketsList**](BucketsApi.md#apiV1StorageBucketsList) | **GET** /v4/storage/buckets | /v4/storage/buckets
[**apiV1StorageBucketsPartialUpdate**](BucketsApi.md#apiV1StorageBucketsPartialUpdate) | **PATCH** /v4/storage/buckets/{name} | /v4/storage/buckets/:name



## apiV1StorageBucketsCreate

> ResponseBucket apiV1StorageBucketsCreate(bucketCreate)

/v4/storage/buckets



### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.BucketsApi();
let bucketCreate = new ObjectStorage.BucketCreate(); // BucketCreate | 
apiInstance.apiV1StorageBucketsCreate(bucketCreate, (error, data, response) => {
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
 **bucketCreate** | [**BucketCreate**](BucketCreate.md)|  | 

### Return type

[**ResponseBucket**](ResponseBucket.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV1StorageBucketsDestroy

> ResponseDeleteBucket apiV1StorageBucketsDestroy(name)

/v4/storage/buckets/:name



### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.BucketsApi();
let name = "name_example"; // String | 
apiInstance.apiV1StorageBucketsDestroy(name, (error, data, response) => {
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
 **name** | **String**|  | 

### Return type

[**ResponseDeleteBucket**](ResponseDeleteBucket.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1StorageBucketsList

> PaginatedBucketList apiV1StorageBucketsList(opts)

/v4/storage/buckets



### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.BucketsApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.apiV1StorageBucketsList(opts, (error, data, response) => {
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
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**PaginatedBucketList**](PaginatedBucketList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1StorageBucketsPartialUpdate

> ResponseBucket apiV1StorageBucketsPartialUpdate(name, opts)

/v4/storage/buckets/:name



### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.BucketsApi();
let name = "name_example"; // String | 
let opts = {
  'patchedBucket': new ObjectStorage.PatchedBucket() // PatchedBucket | 
};
apiInstance.apiV1StorageBucketsPartialUpdate(name, opts, (error, data, response) => {
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
 **name** | **String**|  | 
 **patchedBucket** | [**PatchedBucket**](PatchedBucket.md)|  | [optional] 

### Return type

[**ResponseBucket**](ResponseBucket.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

