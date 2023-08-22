# DataStreamingOpenApi.DataStreamingDomainApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDataStreaming**](DataStreamingDomainApi.md#listDataStreaming) | **GET** /data_streaming/domains | List all domains used on data streaming



## listDataStreaming

> DataStreamingsDomainResponse listDataStreaming(opts)

List all domains used on data streaming

Use the GET method to list all available domains that can be used on Data Streaming operations.

### Example

```javascript
import DataStreamingOpenApi from 'data_streaming_open_api';
let defaultClient = DataStreamingOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DataStreamingOpenApi.DataStreamingDomainApi();
let opts = {
  'name': "name_example", // String | Domain's name in data streaming
  'streamingId': 789, // Number | 
  'selected': true // Boolean | 
};
apiInstance.listDataStreaming(opts, (error, data, response) => {
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
 **name** | **String**| Domain&#39;s name in data streaming | [optional] 
 **streamingId** | **Number**|  | [optional] 
 **selected** | **Boolean**|  | [optional] 

### Return type

[**DataStreamingsDomainResponse**](DataStreamingsDomainResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

