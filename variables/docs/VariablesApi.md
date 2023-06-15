# Variables.VariablesApi

All URIs are relative to *https://stage-variables.azion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSchemaRetrieve**](VariablesApi.md#apiSchemaRetrieve) | **GET** /api/schema | 
[**apiVariablesCreate**](VariablesApi.md#apiVariablesCreate) | **POST** /api/variables | 
[**apiVariablesDestroy**](VariablesApi.md#apiVariablesDestroy) | **DELETE** /api/variables/{uuid} | 
[**apiVariablesList**](VariablesApi.md#apiVariablesList) | **GET** /api/variables | 
[**apiVariablesRetrieve**](VariablesApi.md#apiVariablesRetrieve) | **GET** /api/variables/{uuid} | 
[**apiVariablesUpdate**](VariablesApi.md#apiVariablesUpdate) | **PUT** /api/variables/{uuid} | 



## apiSchemaRetrieve

> {String: Object} apiSchemaRetrieve(opts)



OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json

### Example

```javascript
import Variables from 'variables';
let defaultClient = Variables.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Variables.VariablesApi();
let opts = {
  'format': "format_example", // String | 
  'lang': "lang_example" // String | 
};
apiInstance.apiSchemaRetrieve(opts, (error, data, response) => {
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
 **format** | **String**|  | [optional] 
 **lang** | **String**|  | [optional] 

### Return type

**{String: Object}**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json


## apiVariablesCreate

> VariableGet apiVariablesCreate(variableCreate)



Create a new Variable. &lt;br&gt;&lt;ul&gt;&lt;li&gt;If the attribute \&quot;secret\&quot; is informed with value \&quot;true\&quot; in request payload the Variable value will be secret and no longer viewable after creation.&lt;/li&gt;&lt;li&gt;If the attribute \&quot;secret\&quot; is not informed the Variable value will be considered as not secret by default.&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import Variables from 'variables';
let defaultClient = Variables.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Variables.VariablesApi();
let variableCreate = {"key":"MY_SIMPLE_VAR","value":"My not secret value"}; // VariableCreate | 
apiInstance.apiVariablesCreate(variableCreate, (error, data, response) => {
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
 **variableCreate** | [**VariableCreate**](VariableCreate.md)|  | 

### Return type

[**VariableGet**](VariableGet.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiVariablesDestroy

> apiVariablesDestroy(uuid)



Delete a Variable by it&#39;s UUID

### Example

```javascript
import Variables from 'variables';
let defaultClient = Variables.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Variables.VariablesApi();
let uuid = "uuid_example"; // String | 
apiInstance.apiVariablesDestroy(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiVariablesList

> [Variable] apiVariablesList()



List all user&#39;s Variables.

### Example

```javascript
import Variables from 'variables';
let defaultClient = Variables.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Variables.VariablesApi();
apiInstance.apiVariablesList((error, data, response) => {
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

[**[Variable]**](Variable.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiVariablesRetrieve

> Variable apiVariablesRetrieve(uuid)



Retrieve all data for a Variable by it&#39;s UUID

### Example

```javascript
import Variables from 'variables';
let defaultClient = Variables.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Variables.VariablesApi();
let uuid = "uuid_example"; // String | 
apiInstance.apiVariablesRetrieve(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

[**Variable**](Variable.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiVariablesUpdate

> VariableGet apiVariablesUpdate(uuid, variableCreate)



Update variable attributes by it&#39;s UUID. Keep the Variable UUID but overwrite all editable attributes.

### Example

```javascript
import Variables from 'variables';
let defaultClient = Variables.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Variables.VariablesApi();
let uuid = "uuid_example"; // String | 
let variableCreate = {"key":"MY_NEW_SIMPLE_VAR_KEY","value":"My new not secret value"}; // VariableCreate | 
apiInstance.apiVariablesUpdate(uuid, variableCreate, (error, data, response) => {
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
 **uuid** | **String**|  | 
 **variableCreate** | [**VariableCreate**](VariableCreate.md)|  | 

### Return type

[**VariableGet**](VariableGet.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

