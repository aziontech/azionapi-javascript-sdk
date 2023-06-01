# CredentialsApi.DefaultApi

All URIs are relative to *http://localhost:3007*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredential**](DefaultApi.md#createCredential) | **POST** /credentials | Create credential
[**deleteCredential**](DefaultApi.md#deleteCredential) | **DELETE** /credentials/{credentialId} | Delete the Credential
[**findAll**](DefaultApi.md#findAll) | **GET** /credentials | Return all credentials
[**loadCredential**](DefaultApi.md#loadCredential) | **GET** /credentials/{credentialId} | Load the Credential
[**updateCredential**](DefaultApi.md#updateCredential) | **PATCH** /credentials/{credentialId} | Update the Credential



## createCredential

> AuthToken createCredential(createCredentialRequest)

Create credential

### Example

```javascript
import CredentialsApi from 'credentials_api';
let defaultClient = CredentialsApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new CredentialsApi.DefaultApi();
let createCredentialRequest = new CredentialsApi.CreateCredentialRequest(); // CreateCredentialRequest | 
apiInstance.createCredential(createCredentialRequest, (error, data, response) => {
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
 **createCredentialRequest** | [**CreateCredentialRequest**](CreateCredentialRequest.md)|  | 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## deleteCredential

> deleteCredential(credentialId)

Delete the Credential

### Example

```javascript
import CredentialsApi from 'credentials_api';
let defaultClient = CredentialsApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new CredentialsApi.DefaultApi();
let credentialId = 789; // Number | 
apiInstance.deleteCredential(credentialId, (error, data, response) => {
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
 **credentialId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findAll

> ResponseWithTotal findAll(opts)

Return all credentials

### Example

```javascript
import CredentialsApi from 'credentials_api';
let defaultClient = CredentialsApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new CredentialsApi.DefaultApi();
let opts = {
  'filter': "filter_example", // String | 
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'sort': "sort_example", // String | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.findAll(opts, (error, data, response) => {
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
 **filter** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**ResponseWithTotal**](ResponseWithTotal.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## loadCredential

> Response loadCredential(credentialId)

Load the Credential

### Example

```javascript
import CredentialsApi from 'credentials_api';
let defaultClient = CredentialsApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new CredentialsApi.DefaultApi();
let credentialId = 789; // Number | 
apiInstance.loadCredential(credentialId, (error, data, response) => {
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
 **credentialId** | **Number**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## updateCredential

> Response updateCredential(credentialId, updateCredentialRequest)

Update the Credential

### Example

```javascript
import CredentialsApi from 'credentials_api';
let defaultClient = CredentialsApi.ApiClient.instance;
// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new CredentialsApi.DefaultApi();
let credentialId = 789; // Number | 
let updateCredentialRequest = new CredentialsApi.UpdateCredentialRequest(); // UpdateCredentialRequest | 
apiInstance.updateCredential(credentialId, updateCredentialRequest, (error, data, response) => {
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
 **credentialId** | **Number**|  | 
 **updateCredentialRequest** | [**UpdateCredentialRequest**](UpdateCredentialRequest.md)|  | 

### Return type

[**Response**](Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

