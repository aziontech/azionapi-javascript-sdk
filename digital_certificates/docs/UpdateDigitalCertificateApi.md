# DigitalCertificatesApi.UpdateDigitalCertificateApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateDigitalCertificate**](UpdateDigitalCertificateApi.md#updateDigitalCertificate) | **PATCH** /digital_certificates/{digital_certificate_id} | Change only select settings of your digital certificate or CSR.



## updateDigitalCertificate

> DC200 updateDigitalCertificate(digitalCertificateId, updateDigitalCertificateRequest)

Change only select settings of your digital certificate or CSR.

### Example

```javascript
import DigitalCertificatesApi from 'digital_certificates_api';
let defaultClient = DigitalCertificatesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DigitalCertificatesApi.UpdateDigitalCertificateApi();
let digitalCertificateId = 56; // Number | ID of certificate to update
let updateDigitalCertificateRequest = new DigitalCertificatesApi.UpdateDigitalCertificateRequest(); // UpdateDigitalCertificateRequest | 
apiInstance.updateDigitalCertificate(digitalCertificateId, updateDigitalCertificateRequest, (error, data, response) => {
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
 **digitalCertificateId** | **Number**| ID of certificate to update | 
 **updateDigitalCertificateRequest** | [**UpdateDigitalCertificateRequest**](UpdateDigitalCertificateRequest.md)|  | 

### Return type

[**DC200**](DC200.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; version=3

