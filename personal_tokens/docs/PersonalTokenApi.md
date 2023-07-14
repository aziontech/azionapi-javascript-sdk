# PersonalTokensOpenApi.PersonalTokenApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPersonalToken**](PersonalTokenApi.md#createPersonalToken) | **POST** /iam/personal_tokens | Create a new personal token
[**deletePersonalToken**](PersonalTokenApi.md#deletePersonalToken) | **DELETE** /iam/personal_tokens/{personalTokenId} | Delete a personal token by id
[**getPersonalToken**](PersonalTokenApi.md#getPersonalToken) | **GET** /iam/personal_tokens/{personalTokenId} | Get a personal token info
[**listPersonalToken**](PersonalTokenApi.md#listPersonalToken) | **GET** /iam/personal_tokens | List all existing personal token



## createPersonalToken

> CreatePersonalTokenResponse createPersonalToken(createPersonalTokenRequest)

Create a new personal token

Create a new personal token

### Example

```javascript
import PersonalTokensOpenApi from 'personal_tokens_open_api';
let defaultClient = PersonalTokensOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new PersonalTokensOpenApi.PersonalTokenApi();
let createPersonalTokenRequest = new PersonalTokensOpenApi.CreatePersonalTokenRequest(); // CreatePersonalTokenRequest | 
apiInstance.createPersonalToken(createPersonalTokenRequest, (error, data, response) => {
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
 **createPersonalTokenRequest** | [**CreatePersonalTokenRequest**](CreatePersonalTokenRequest.md)|  | 

### Return type

[**CreatePersonalTokenResponse**](CreatePersonalTokenResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePersonalToken

> deletePersonalToken(personalTokenId)

Delete a personal token by id

Delete a personal token

### Example

```javascript
import PersonalTokensOpenApi from 'personal_tokens_open_api';
let defaultClient = PersonalTokensOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new PersonalTokensOpenApi.PersonalTokenApi();
let personalTokenId = "personalTokenId_example"; // String | 
apiInstance.deletePersonalToken(personalTokenId, (error, data, response) => {
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
 **personalTokenId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getPersonalToken

> PersonalTokenResponseGet getPersonalToken(personalTokenId)

Get a personal token info

Get a personal token info

### Example

```javascript
import PersonalTokensOpenApi from 'personal_tokens_open_api';
let defaultClient = PersonalTokensOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new PersonalTokensOpenApi.PersonalTokenApi();
let personalTokenId = "personalTokenId_example"; // String | 
apiInstance.getPersonalToken(personalTokenId, (error, data, response) => {
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
 **personalTokenId** | **String**|  | 

### Return type

[**PersonalTokenResponseGet**](PersonalTokenResponseGet.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPersonalToken

> PersonalTokenResponseWithResults listPersonalToken()

List all existing personal token

List all existing personal token

### Example

```javascript
import PersonalTokensOpenApi from 'personal_tokens_open_api';
let defaultClient = PersonalTokensOpenApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new PersonalTokensOpenApi.PersonalTokenApi();
apiInstance.listPersonalToken((error, data, response) => {
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

[**PersonalTokenResponseWithResults**](PersonalTokenResponseWithResults.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

