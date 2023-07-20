# DigitalCertificatesApi.CreateCSRApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCSR**](CreateCSRApi.md#createCSR) | **POST** /digital_certificates/csr | Create an encrypted Certificate Request with Azion, which can then be sent for signing to a CA



## createCSR

> DC201 createCSR(createCSRRequest)

Create an encrypted Certificate Request with Azion, which can then be sent for signing to a CA

### Example

```javascript
import DigitalCertificatesApi from 'digital_certificates_api';
let defaultClient = DigitalCertificatesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DigitalCertificatesApi.CreateCSRApi();
let createCSRRequest = new DigitalCertificatesApi.CreateCSRRequest(); // CreateCSRRequest | 
apiInstance.createCSR(createCSRRequest, (error, data, response) => {
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
 **createCSRRequest** | [**CreateCSRRequest**](CreateCSRRequest.md)|  | 

### Return type

[**DC201**](DC201.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; version=3

