# DigitalCertificatesApi.RetrieveDigitalCertificateByIDApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCertificate**](RetrieveDigitalCertificateByIDApi.md#getCertificate) | **GET** /digital_certificates/{digital_certificate_id} | Get more data on a specific digital certificate or CSR.



## getCertificate

> DC200 getCertificate(digitalCertificateId)

Get more data on a specific digital certificate or CSR.

### Example

```javascript
import DigitalCertificatesApi from 'digital_certificates_api';
let defaultClient = DigitalCertificatesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DigitalCertificatesApi.RetrieveDigitalCertificateByIDApi();
let digitalCertificateId = 789; // Number | ID of certificate
apiInstance.getCertificate(digitalCertificateId, (error, data, response) => {
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
 **digitalCertificateId** | **Number**| ID of certificate | 

### Return type

[**DC200**](DC200.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

