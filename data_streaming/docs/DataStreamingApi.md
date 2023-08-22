# DataStreamingOpenApi.DataStreamingApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewDataStreaming**](DataStreamingApi.md#createNewDataStreaming) | **POST** /data_streaming/streamings | Create a new data streaming
[**deleteDataStreamingById**](DataStreamingApi.md#deleteDataStreamingById) | **DELETE** /data_streaming/streamings/{data_streaming_id} | Delete data streaming
[**editDataStreamingById**](DataStreamingApi.md#editDataStreamingById) | **PATCH** /data_streaming/streamings/{data_streaming_id} | Edit data streaming
[**listDataStreamingById**](DataStreamingApi.md#listDataStreamingById) | **GET** /data_streaming/streamings/{data_streaming_id} | Get expecific data streaming by Data Streaming ID
[**listDataStreamings**](DataStreamingApi.md#listDataStreamings) | **GET** /data_streaming/streamings | List all exist data streamings
[**overwriteDataStreamingById**](DataStreamingApi.md#overwriteDataStreamingById) | **PUT** /data_streaming/streamings/{data_streaming_id} | Overwrite data streaming



## createNewDataStreaming

> CreateNewDataStreaming201Response createNewDataStreaming(createNewDataStreamingRequest)

Create a new data streaming



### Example

```javascript
import DataStreamingOpenApi from 'data_streaming_open_api';
let defaultClient = DataStreamingOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DataStreamingOpenApi.DataStreamingApi();
let createNewDataStreamingRequest = new DataStreamingOpenApi.CreateNewDataStreamingRequest(); // CreateNewDataStreamingRequest | 
apiInstance.createNewDataStreaming(createNewDataStreamingRequest, (error, data, response) => {
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
 **createNewDataStreamingRequest** | [**CreateNewDataStreamingRequest**](CreateNewDataStreamingRequest.md)|  | 

### Return type

[**CreateNewDataStreaming201Response**](CreateNewDataStreaming201Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDataStreamingById

> deleteDataStreamingById(dataStreamingId)

Delete data streaming

Use the DELETE method to remove a data streaming from your account. 

### Example

```javascript
import DataStreamingOpenApi from 'data_streaming_open_api';
let defaultClient = DataStreamingOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DataStreamingOpenApi.DataStreamingApi();
let dataStreamingId = 56; // Number | 
apiInstance.deleteDataStreamingById(dataStreamingId, (error, data, response) => {
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
 **dataStreamingId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editDataStreamingById

> CreateNewDataStreaming201Response editDataStreamingById(dataStreamingId, createNewDataStreamingRequest)

Edit data streaming

Use the PATCH method to change only select settings of your data streaming. 

### Example

```javascript
import DataStreamingOpenApi from 'data_streaming_open_api';
let defaultClient = DataStreamingOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DataStreamingOpenApi.DataStreamingApi();
let dataStreamingId = 56; // Number | 
let createNewDataStreamingRequest = new DataStreamingOpenApi.CreateNewDataStreamingRequest(); // CreateNewDataStreamingRequest | 
apiInstance.editDataStreamingById(dataStreamingId, createNewDataStreamingRequest, (error, data, response) => {
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
 **dataStreamingId** | **Number**|  | 
 **createNewDataStreamingRequest** | [**CreateNewDataStreamingRequest**](CreateNewDataStreamingRequest.md)|  | 

### Return type

[**CreateNewDataStreaming201Response**](CreateNewDataStreaming201Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listDataStreamingById

> DataStreamingsById listDataStreamingById(dataStreamingId)

Get expecific data streaming by Data Streaming ID

Use the GET method and add the data streaming&#39;s ID to the URI of the request to get more data on a specific data streaming.

### Example

```javascript
import DataStreamingOpenApi from 'data_streaming_open_api';
let defaultClient = DataStreamingOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DataStreamingOpenApi.DataStreamingApi();
let dataStreamingId = 56; // Number | 
apiInstance.listDataStreamingById(dataStreamingId, (error, data, response) => {
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
 **dataStreamingId** | **Number**|  | 

### Return type

[**DataStreamingsById**](DataStreamingsById.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDataStreamings

> DataStreamingResponseWithResults listDataStreamings()

List all exist data streamings

Use the GET method to list all data streamings, both active and inactive, and its properties.

### Example

```javascript
import DataStreamingOpenApi from 'data_streaming_open_api';
let defaultClient = DataStreamingOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DataStreamingOpenApi.DataStreamingApi();
apiInstance.listDataStreamings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DataStreamingResponseWithResults**](DataStreamingResponseWithResults.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## overwriteDataStreamingById

> CreateNewDataStreaming201Response overwriteDataStreamingById(dataStreamingId, createNewDataStreamingRequest)

Overwrite data streaming

Use the PUT method to overwrite the data streaming. Although  you can change a single property using the PUT method, you must pass all fields for the request to be completed. 

### Example

```javascript
import DataStreamingOpenApi from 'data_streaming_open_api';
let defaultClient = DataStreamingOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DataStreamingOpenApi.DataStreamingApi();
let dataStreamingId = 56; // Number | 
let createNewDataStreamingRequest = new DataStreamingOpenApi.CreateNewDataStreamingRequest(); // CreateNewDataStreamingRequest | 
apiInstance.overwriteDataStreamingById(dataStreamingId, createNewDataStreamingRequest, (error, data, response) => {
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
 **dataStreamingId** | **Number**|  | 
 **createNewDataStreamingRequest** | [**CreateNewDataStreamingRequest**](CreateNewDataStreamingRequest.md)|  | 

### Return type

[**CreateNewDataStreaming201Response**](CreateNewDataStreaming201Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

