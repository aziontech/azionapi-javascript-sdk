# ObjectStorage.StorageApi

All URIs are relative to *https://api.azion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storageApiBucketsCreate**](StorageApi.md#storageApiBucketsCreate) | **POST** /v4/storage/buckets | Create a new bucket
[**storageApiBucketsDestroy**](StorageApi.md#storageApiBucketsDestroy) | **DELETE** /v4/storage/buckets/{name} | Delete a bucket
[**storageApiBucketsList**](StorageApi.md#storageApiBucketsList) | **GET** /v4/storage/buckets | List buckets
[**storageApiBucketsObjectsCreate**](StorageApi.md#storageApiBucketsObjectsCreate) | **POST** /v4/storage/buckets/{bucket_name}/objects/{object_key} | Create new object key
[**storageApiBucketsObjectsDestroy**](StorageApi.md#storageApiBucketsObjectsDestroy) | **DELETE** /v4/storage/buckets/{bucket_name}/objects/{object_key} | Delete object key
[**storageApiBucketsObjectsList**](StorageApi.md#storageApiBucketsObjectsList) | **GET** /v4/storage/buckets/{bucket_name}/objects | List buckets objects
[**storageApiBucketsObjectsRetrieve**](StorageApi.md#storageApiBucketsObjectsRetrieve) | **GET** /v4/storage/buckets/{bucket_name}/objects/{object_key} | Download object
[**storageApiBucketsObjectsUpdate**](StorageApi.md#storageApiBucketsObjectsUpdate) | **PUT** /v4/storage/buckets/{bucket_name}/objects/{object_key} | Update the object key
[**storageApiBucketsPartialUpdate**](StorageApi.md#storageApiBucketsPartialUpdate) | **PATCH** /v4/storage/buckets/{name} | Update bucket info



## storageApiBucketsCreate

> ResponseBucket storageApiBucketsCreate(bucketCreate)

Create a new bucket



### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.StorageApi();
let bucketCreate = new ObjectStorage.BucketCreate(); // BucketCreate | 
apiInstance.storageApiBucketsCreate(bucketCreate, (error, data, response) => {
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


## storageApiBucketsDestroy

> SuccessBucketOperation storageApiBucketsDestroy(name)

Delete a bucket



### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.StorageApi();
let name = "name_example"; // String | 
apiInstance.storageApiBucketsDestroy(name, (error, data, response) => {
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

[**SuccessBucketOperation**](SuccessBucketOperation.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## storageApiBucketsList

> PaginatedBucketList storageApiBucketsList(opts)

List buckets



### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.StorageApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.storageApiBucketsList(opts, (error, data, response) => {
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


## storageApiBucketsObjectsCreate

> SuccessObjectOperation storageApiBucketsObjectsCreate(bucketName, objectKey, opts)

Create new object key

Create a new object key in the bucket.

### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.StorageApi();
let bucketName = "bucketName_example"; // String | 
let objectKey = "objectKey_example"; // String | 
let opts = {
  'contentType': "contentType_example", // String | The content type of the file (Example: text/plain).
  'body': "/path/to/file" // File | 
};
apiInstance.storageApiBucketsObjectsCreate(bucketName, objectKey, opts, (error, data, response) => {
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
 **bucketName** | **String**|  | 
 **objectKey** | **String**|  | 
 **contentType** | **String**| The content type of the file (Example: text/plain). | [optional] 
 **body** | **File**|  | [optional] 

### Return type

[**SuccessObjectOperation**](SuccessObjectOperation.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json


## storageApiBucketsObjectsDestroy

> SuccessObjectOperation storageApiBucketsObjectsDestroy(bucketName, objectKey)

Delete object key

Delete an object key from bucket

### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.StorageApi();
let bucketName = "bucketName_example"; // String | 
let objectKey = "objectKey_example"; // String | 
apiInstance.storageApiBucketsObjectsDestroy(bucketName, objectKey, (error, data, response) => {
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
 **bucketName** | **String**|  | 
 **objectKey** | **String**|  | 

### Return type

[**SuccessObjectOperation**](SuccessObjectOperation.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## storageApiBucketsObjectsList

> PaginatedBucketObjectList storageApiBucketsObjectsList(bucketName, opts)

List buckets objects



### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.StorageApi();
let bucketName = "bucketName_example"; // String | 
let opts = {
  'continuationToken': "continuationToken_example", // String | Token for next page.
  'maxObjectCount': 56 // Number | Number of results to return per page.
};
apiInstance.storageApiBucketsObjectsList(bucketName, opts, (error, data, response) => {
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
 **bucketName** | **String**|  | 
 **continuationToken** | **String**| Token for next page. | [optional] 
 **maxObjectCount** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**PaginatedBucketObjectList**](PaginatedBucketObjectList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## storageApiBucketsObjectsRetrieve

> storageApiBucketsObjectsRetrieve(bucketName, objectKey)

Download object

Download the object key from bucket.

### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.StorageApi();
let bucketName = "bucketName_example"; // String | 
let objectKey = "objectKey_example"; // String | 
apiInstance.storageApiBucketsObjectsRetrieve(bucketName, objectKey, (error, data, response) => {
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
 **bucketName** | **String**|  | 
 **objectKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html, application/json, application/xml, text/plain, image/jpeg, image/png, image/gif, video/mp4, audio/mpeg, application/pdf, application/javascript, text/css, application/octet-stream


## storageApiBucketsObjectsUpdate

> SuccessObjectOperation storageApiBucketsObjectsUpdate(bucketName, objectKey, opts)

Update the object key

Update the object key from bucket.

### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.StorageApi();
let bucketName = "bucketName_example"; // String | 
let objectKey = "objectKey_example"; // String | 
let opts = {
  'contentType': "contentType_example", // String | The content type of the file (Example: text/plain).
  'body': "/path/to/file" // File | 
};
apiInstance.storageApiBucketsObjectsUpdate(bucketName, objectKey, opts, (error, data, response) => {
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
 **bucketName** | **String**|  | 
 **objectKey** | **String**|  | 
 **contentType** | **String**| The content type of the file (Example: text/plain). | [optional] 
 **body** | **File**|  | [optional] 

### Return type

[**SuccessObjectOperation**](SuccessObjectOperation.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json


## storageApiBucketsPartialUpdate

> ResponseBucket storageApiBucketsPartialUpdate(name, opts)

Update bucket info



### Example

```javascript
import ObjectStorage from 'object_storage';
let defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new ObjectStorage.StorageApi();
let name = "name_example"; // String | 
let opts = {
  'bucketUpdate': new ObjectStorage.BucketUpdate() // BucketUpdate | 
};
apiInstance.storageApiBucketsPartialUpdate(name, opts, (error, data, response) => {
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
 **bucketUpdate** | [**BucketUpdate**](BucketUpdate.md)|  | [optional] 

### Return type

[**ResponseBucket**](ResponseBucket.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

