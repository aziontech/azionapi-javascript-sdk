# DigitalCertificatesApi.DeleteDigitalCertificateApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**removeDigitalCertificates**](DeleteDigitalCertificateApi.md#removeDigitalCertificates) | **DELETE** /digital_certificates/{digital_certificate_id} | Remove a digital certificate or CSR from your account



## removeDigitalCertificates

> removeDigitalCertificates(digitalCertificateId)

Remove a digital certificate or CSR from your account

### Example

```javascript
import DigitalCertificatesApi from 'digital_certificates_api';
let defaultClient = DigitalCertificatesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DigitalCertificatesApi.DeleteDigitalCertificateApi();
let digitalCertificateId = 56; // Number | ID of certificate to delete
apiInstance.removeDigitalCertificates(digitalCertificateId, (error, data, response) => {
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
 **digitalCertificateId** | **Number**| ID of certificate to delete | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

