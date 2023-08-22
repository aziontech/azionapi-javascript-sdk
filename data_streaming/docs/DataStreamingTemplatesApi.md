# DataStreamingOpenApi.DataStreamingTemplatesApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataStramingTemplateById**](DataStreamingTemplatesApi.md#getDataStramingTemplateById) | **GET** /data_streaming/templates/{template_id} | Get an global Template info by template ID
[**listDataStreamingTemplates**](DataStreamingTemplatesApi.md#listDataStreamingTemplates) | **GET** /data_streaming/templates | List all global Templates that can be used on Data Streaming operations



## getDataStramingTemplateById

> TemplateResultById getDataStramingTemplateById(templateId)

Get an global Template info by template ID

Use the GET method and add the data streaming&#39;s ID to the URI of the request to get more data on a specific data streaming global template.

### Example

```javascript
import DataStreamingOpenApi from 'data_streaming_open_api';
let defaultClient = DataStreamingOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DataStreamingOpenApi.DataStreamingTemplatesApi();
let templateId = 56; // Number | 
apiInstance.getDataStramingTemplateById(templateId, (error, data, response) => {
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
 **templateId** | **Number**|  | 

### Return type

[**TemplateResultById**](TemplateResultById.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDataStreamingTemplates

> TemplateResults listDataStreamingTemplates()

List all global Templates that can be used on Data Streaming operations

Use the GET method to list all global templates that can be used on Data Streaming operations.  **Note:** Customized templates won&#39;t be listed. 

### Example

```javascript
import DataStreamingOpenApi from 'data_streaming_open_api';
let defaultClient = DataStreamingOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DataStreamingOpenApi.DataStreamingTemplatesApi();
apiInstance.listDataStreamingTemplates((error, data, response) => {
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

[**TemplateResults**](TemplateResults.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

