# StorageApi.DefaultApi

All URIs are relative to *https://storage-api.azion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteVersion**](DefaultApi.md#deleteVersion) | **DELETE** /storage/{version_id}/delete | 
[**storageVersionIdPost**](DefaultApi.md#storageVersionIdPost) | **POST** /storage/{version_id} | 



## deleteVersion

> deleteVersion(versionId)



Delete a version. A version is just um path prefix/sub-namespace for a set of files.

### Example

```javascript
import StorageApi from 'storage_api';
let defaultClient = StorageApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new StorageApi.DefaultApi();
let versionId = "versionId_example"; // String | The version identifier
apiInstance.deleteVersion(versionId, (error, data, response) => {
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
 **versionId** | **String**| The version identifier | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## storageVersionIdPost

> Object storageVersionIdPost(xAzionStaticPath, versionId, opts)



Upload file and transfer to remote storage

### Example

```javascript
import StorageApi from 'storage_api';
let defaultClient = StorageApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new StorageApi.DefaultApi();
let xAzionStaticPath = "xAzionStaticPath_example"; // String | Required in order to get the path and file name. i.e.: assets/css/main.css
let versionId = "versionId_example"; // String | 
let opts = {
  'contentType': "'b2/x-auto'", // String | The content type of the file (Example: text/plain).
  'body': "/path/to/file" // File | 
};
apiInstance.storageVersionIdPost(xAzionStaticPath, versionId, opts, (error, data, response) => {
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
 **xAzionStaticPath** | **String**| Required in order to get the path and file name. i.e.: assets/css/main.css | 
 **versionId** | **String**|  | 
 **contentType** | **String**| The content type of the file (Example: text/plain). | [optional] [default to &#39;b2/x-auto&#39;]
 **body** | **File**|  | [optional] 

### Return type

**Object**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

