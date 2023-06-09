# Domain.DomainsApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDomain**](DomainsApi.md#createDomain) | **POST** /domains | /domains
[**delDomain**](DomainsApi.md#delDomain) | **DELETE** /domains/{id} | /domains/:id
[**getDomain**](DomainsApi.md#getDomain) | **GET** /domains/{id} | /domains/:id
[**getDomains**](DomainsApi.md#getDomains) | **GET** /domains | /domains
[**putDomain**](DomainsApi.md#putDomain) | **PUT** /domains/{id} | /domains:/:id
[**updateDomain**](DomainsApi.md#updateDomain) | **PATCH** /domains/{id} | /domains/:id



## createDomain

> DomainResponseWithResult createDomain(opts)

/domains

It enables you to include a new domain into an account.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Domain.DomainsApi();
let opts = {
  'accept': application/json; version=3, // String | 
  'contentType': application/json, // String | 
  'createDomainRequest': new Domain.CreateDomainRequest() // CreateDomainRequest | 
};
apiInstance.createDomain(opts, (error, data, response) => {
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
 **accept** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **createDomainRequest** | [**CreateDomainRequest**](CreateDomainRequest.md)|  | [optional] 

### Return type

[**DomainResponseWithResult**](DomainResponseWithResult.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## delDomain

> delDomain(id, opts)

/domains/:id

It enables you to delete a domain.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Domain.DomainsApi();
let id = "id_example"; // String | The id of the domain to be deleted. 
let opts = {
  'accept': application/json; version=3 // String | 
};
apiInstance.delDomain(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the domain to be deleted.  | 
 **accept** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getDomain

> DomainResponseWithResult getDomain(id, opts)

/domains/:id

It returns details of a domain.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Domain.DomainsApi();
let id = "id_example"; // String | The id of the domain to be consulted. 
let opts = {
  'accept': application/json; version=3 // String | 
};
apiInstance.getDomain(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the domain to be consulted.  | 
 **accept** | **String**|  | [optional] 

### Return type

[**DomainResponseWithResult**](DomainResponseWithResult.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## getDomains

> DomainResponseWithResults getDomains(opts)

/domains

It returns the list of domains of an account.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Domain.DomainsApi();
let opts = {
  'accept': application/json; version=3 // String | 
};
apiInstance.getDomains(opts, (error, data, response) => {
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
 **accept** | **String**|  | [optional] 

### Return type

[**DomainResponseWithResults**](DomainResponseWithResults.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## putDomain

> DomainResponseWithResult putDomain(id, opts)

/domains:/:id

It overwrites all fields of a domain, while preserving the id. Optional fields not filled in will be replaced by the default values.  To update only some fields in a domain, consider using the PATCH method instead of PUT.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Domain.DomainsApi();
let id = "id_example"; // String | 
let opts = {
  'accept': application/json; version=3, // String | 
  'contentType': application/json, // String | 
  'putDomainRequest': new Domain.PutDomainRequest() // PutDomainRequest | 
};
apiInstance.putDomain(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **putDomainRequest** | [**PutDomainRequest**](PutDomainRequest.md)|  | [optional] 

### Return type

[**DomainResponseWithResult**](DomainResponseWithResult.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## updateDomain

> DomainResponseWithResult updateDomain(id, opts)

/domains/:id

It updates one or more fields in a Domain, preserving the value of the fields not informed.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new Domain.DomainsApi();
let id = "id_example"; // String | 
let opts = {
  'accept': application/json; version=3, // String | 
  'contentType': application/json, // String | 
  'updateDomainRequest': new Domain.UpdateDomainRequest() // UpdateDomainRequest | 
};
apiInstance.updateDomain(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **updateDomainRequest** | [**UpdateDomainRequest**](UpdateDomainRequest.md)|  | [optional] 

### Return type

[**DomainResponseWithResult**](DomainResponseWithResult.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

