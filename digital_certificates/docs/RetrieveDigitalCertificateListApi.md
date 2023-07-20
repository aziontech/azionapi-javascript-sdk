# DigitalCertificatesApi.RetrieveDigitalCertificateListApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDigitalCertificates**](RetrieveDigitalCertificateListApi.md#listDigitalCertificates) | **GET** /digital_certificates | List all existing digital certificates and CSRs registered to your account



## listDigitalCertificates

> DC200List listDigitalCertificates(opts)

List all existing digital certificates and CSRs registered to your account

### Example

```javascript
import DigitalCertificatesApi from 'digital_certificates_api';
let defaultClient = DigitalCertificatesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new DigitalCertificatesApi.RetrieveDigitalCertificateListApi();
let opts = {
  'orderBy': "'id'", // String | Response field to order by, current options are \"name\" or \"id\"
  'sort': "'asc'", // String | Sorting direction
  'name': "name_example", // String | Searches certificate for name
  'search': "search_example" // String | Searches for string in certificate name
};
apiInstance.listDigitalCertificates(opts, (error, data, response) => {
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
 **orderBy** | **String**| Response field to order by, current options are \&quot;name\&quot; or \&quot;id\&quot; | [optional] [default to &#39;id&#39;]
 **sort** | **String**| Sorting direction | [optional] [default to &#39;asc&#39;]
 **name** | **String**| Searches certificate for name | [optional] 
 **search** | **String**| Searches for string in certificate name | [optional] 

### Return type

[**DC200List**](DC200List.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

