# DigitalCertificatesApi.CreateDigitalCertificateApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCertificate**](CreateDigitalCertificateApi.md#createCertificate) | **POST** /digital_certificates | Create a new digital certificate



## createCertificate

> DC200 createCertificate(createCertificateRequest)

Create a new digital certificate

### Example

```javascript
import DigitalCertificatesApi from 'digital_certificates_api';
let defaultClient = DigitalCertificatesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DigitalCertificatesApi.CreateDigitalCertificateApi();
let createCertificateRequest = new DigitalCertificatesApi.CreateCertificateRequest(); // CreateCertificateRequest | 
apiInstance.createCertificate(createCertificateRequest, (error, data, response) => {
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
 **createCertificateRequest** | [**CreateCertificateRequest**](CreateCertificateRequest.md)|  | 

### Return type

[**DC200**](DC200.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; version=3

