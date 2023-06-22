# IntelligentDnsApi.DNSSECApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getZoneDnsSec**](DNSSECApi.md#getZoneDnsSec) | **GET** /intelligent_dns/{zone_id}/dnssec | Retrieve the DNSSEC zone status
[**putZoneDnsSec**](DNSSECApi.md#putZoneDnsSec) | **PATCH** /intelligent_dns/{zone_id}/dnssec | Update the DNSSEC zone



## getZoneDnsSec

> GetOrPatchDnsSecResponse getZoneDnsSec(zoneId)

Retrieve the DNSSEC zone status

### Example

```javascript
import IntelligentDnsApi from 'intelligent_dns_api';
let defaultClient = IntelligentDnsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDnsApi.DNSSECApi();
let zoneId = 56; // Number | The hosted zone id
apiInstance.getZoneDnsSec(zoneId, (error, data, response) => {
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
 **zoneId** | **Number**| The hosted zone id | 

### Return type

[**GetOrPatchDnsSecResponse**](GetOrPatchDnsSecResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## putZoneDnsSec

> GetOrPatchDnsSecResponse putZoneDnsSec(zoneId, opts)

Update the DNSSEC zone

### Example

```javascript
import IntelligentDnsApi from 'intelligent_dns_api';
let defaultClient = IntelligentDnsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDnsApi.DNSSECApi();
let zoneId = 56; // Number | The hosted zone id
let opts = {
  'dnsSec': {"is_enabled":true} // DnsSec | 
};
apiInstance.putZoneDnsSec(zoneId, opts, (error, data, response) => {
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
 **zoneId** | **Number**| The hosted zone id | 
 **dnsSec** | [**DnsSec**](DnsSec.md)|  | [optional] 

### Return type

[**GetOrPatchDnsSecResponse**](GetOrPatchDnsSecResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; version=3

