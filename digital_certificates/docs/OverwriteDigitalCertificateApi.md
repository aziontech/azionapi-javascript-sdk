# DigitalCertificatesApi.OverwriteDigitalCertificateApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**overwriteDigitalCertificate**](OverwriteDigitalCertificateApi.md#overwriteDigitalCertificate) | **PUT** /digital_certificates/{digital_certificate_id} | Overwrite a digital certificate with another complete digital certificate



## overwriteDigitalCertificate

> DC200 overwriteDigitalCertificate(digitalCertificateId, createCertificateRequest)

Overwrite a digital certificate with another complete digital certificate

### Example

```javascript
import DigitalCertificatesApi from 'digital_certificates_api';
let defaultClient = DigitalCertificatesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DigitalCertificatesApi.OverwriteDigitalCertificateApi();
let digitalCertificateId = 56; // Number | ID of certificate to overwrite
let createCertificateRequest = new DigitalCertificatesApi.CreateCertificateRequest(); // CreateCertificateRequest | 
apiInstance.overwriteDigitalCertificate(digitalCertificateId, createCertificateRequest, (error, data, response) => {
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
 **digitalCertificateId** | **Number**| ID of certificate to overwrite | 
 **createCertificateRequest** | [**CreateCertificateRequest**](CreateCertificateRequest.md)|  | 

### Return type

[**DC200**](DC200.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; version=3

