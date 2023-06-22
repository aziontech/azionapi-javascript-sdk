# PurgeApi.RealTimePurgeApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purgeCacheKey**](RealTimePurgeApi.md#purgeCacheKey) | **POST** /purge/cachekey | /purge/cachekey
[**purgeUrl**](RealTimePurgeApi.md#purgeUrl) | **POST** /purge/url | /purge/url
[**purgeWildcard**](RealTimePurgeApi.md#purgeWildcard) | **POST** /purge/wildcard | /purge/wildcard



## purgeCacheKey

> purgeCacheKey(opts)

/purge/cachekey

List of Cache Keys you want to remove from the Azion Edge Servers cache. urls (array): list of up to 50 Cache Keys to be expired from the cache, per request. method (choice): purge method, use the “delete” value for removal. Layer (choice): layer where the purge will be done. Use the value “edge_caching” (default value if not informed) to purge on the Edge Caching layer and the value “l2_caching” to purge on L2 Caching.

### Example

```javascript
import PurgeApi from 'purge_api';
let defaultClient = PurgeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new PurgeApi.RealTimePurgeApi();
let opts = {
  'accept': application/json; version=3, // String | 
  'contentType': application/json, // String | 
  'purgeCacheKeyRequest': new PurgeApi.PurgeCacheKeyRequest() // PurgeCacheKeyRequest | 
};
apiInstance.purgeCacheKey(opts, (error, data, response) => {
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
 **accept** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **purgeCacheKeyRequest** | [**PurgeCacheKeyRequest**](PurgeCacheKeyRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/json; version=3


## purgeUrl

> purgeUrl(opts)

/purge/url

List of URLs you want to remove from the Azion Edge Servers cache. urls (array): list of up to 50 URLs to be expired from the cache, per request. method (choice): purge method, use the “delete” value for removal.

### Example

```javascript
import PurgeApi from 'purge_api';
let defaultClient = PurgeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new PurgeApi.RealTimePurgeApi();
let opts = {
  'accept': application/json; version=3, // String | 
  'contentType': application/json, // String | 
  'purgeUrlRequest': new PurgeApi.PurgeUrlRequest() // PurgeUrlRequest | 
};
apiInstance.purgeUrl(opts, (error, data, response) => {
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
 **accept** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **purgeUrlRequest** | [**PurgeUrlRequest**](PurgeUrlRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## purgeWildcard

> purgeWildcard(opts)

/purge/wildcard

The Wildcard expression that represents the list of objects that you want to remove from the Azion Edge Servers cache. urls (array):the Wildcard URL or Wildcard Cache Key that represents the list of objects you want to expire. You can only use one Wildcard expression per request. method (choice): purge method, use the “delete” value for removal.

### Example

```javascript
import PurgeApi from 'purge_api';
let defaultClient = PurgeApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new PurgeApi.RealTimePurgeApi();
let opts = {
  'accept': application/json; version=3, // String | 
  'contentType': application/json, // String | 
  'purgeWildcardRequest': new PurgeApi.PurgeWildcardRequest() // PurgeWildcardRequest | 
};
apiInstance.purgeWildcard(opts, (error, data, response) => {
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
 **accept** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **purgeWildcardRequest** | [**PurgeWildcardRequest**](PurgeWildcardRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/json; version=3

