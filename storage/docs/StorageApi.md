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
[**storageApiS3CredentialsByAccessKey**](StorageApi.md#storageApiS3CredentialsByAccessKey) | **GET** /v4/storage/s3-credentials/{s3_credential_access_key} | get by s3 credentials by access key
[**storageApiS3CredentialsCreate**](StorageApi.md#storageApiS3CredentialsCreate) | **POST** /v4/storage/s3-credentials | create s3 credentials
[**storageApiS3CredentialsDelete**](StorageApi.md#storageApiS3CredentialsDelete) | **DELETE** /v4/storage/s3-credentials/{s3_credential_access_key} | delete by s3 credentials
[**storageApiS3CredentialsList**](StorageApi.md#storageApiS3CredentialsList) | **GET** /v4/storage/s3-credentials | List s3 credentials



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
- **Accept**: text/html, application/json, application/xml, text/plain, image/jpeg, image/png, image/gif, video/mp4, audio/mpeg, application/pdf, application/javascript, text/css, application/octet-stream, multipart/form-data, application/x-www-form-urlencoded


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


## storageApiS3CredentialsByAccessKey

> ResponseS3Credential storageApiS3CredentialsByAccessKey(s3CredentialAccessKey)

get by s3 credentials by access key



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
let s3CredentialAccessKey = "s3CredentialAccessKey_example"; // String | 
apiInstance.storageApiS3CredentialsByAccessKey(s3CredentialAccessKey, (error, data, response) => {
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
 **s3CredentialAccessKey** | **String**|  | 

### Return type

[**ResponseS3Credential**](ResponseS3Credential.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## storageApiS3CredentialsCreate

> ResponseS3Credential storageApiS3CredentialsCreate(s3CredentialCreate)

create s3 credentials



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
let s3CredentialCreate = new ObjectStorage.S3CredentialCreate(); // S3CredentialCreate | 
apiInstance.storageApiS3CredentialsCreate(s3CredentialCreate, (error, data, response) => {
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
 **s3CredentialCreate** | [**S3CredentialCreate**](S3CredentialCreate.md)|  | 

### Return type

[**ResponseS3Credential**](ResponseS3Credential.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## storageApiS3CredentialsDelete

> ResponseS3Credential storageApiS3CredentialsDelete(s3CredentialAccessKey)

delete by s3 credentials



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
let s3CredentialAccessKey = "s3CredentialAccessKey_example"; // String | 
apiInstance.storageApiS3CredentialsDelete(s3CredentialAccessKey, (error, data, response) => {
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
 **s3CredentialAccessKey** | **String**|  | 

### Return type

[**ResponseS3Credential**](ResponseS3Credential.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## storageApiS3CredentialsList

> PaginatedS3CredentialList storageApiS3CredentialsList(opts)

List s3 credentials



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
  'key': "key_example", // String | Object key. Used to identify the object for requests. Sent in POST requests as a path variable.
  'lastModified': "lastModified_example", // String | Timestamp of the last modification to the object.
  'size': 56, // Number | Size of file in bytes.
  'continuationToken': "continuationToken_example" // String | Hash that can be added to the continuation_token query to skip list to the next page.
};
apiInstance.storageApiS3CredentialsList(opts, (error, data, response) => {
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
 **key** | **String**| Object key. Used to identify the object for requests. Sent in POST requests as a path variable. | [optional] 
 **lastModified** | **String**| Timestamp of the last modification to the object. | [optional] 
 **size** | **Number**| Size of file in bytes. | [optional] 
 **continuationToken** | **String**| Hash that can be added to the continuation_token query to skip list to the next page. | [optional] 

### Return type

[**PaginatedS3CredentialList**](PaginatedS3CredentialList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

