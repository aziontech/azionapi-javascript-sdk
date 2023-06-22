# IntelligentDnsApi.ZonesApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteZone**](ZonesApi.md#deleteZone) | **DELETE** /intelligent_dns/{zone_id} | Remove an Intelligent DNS hosted zone
[**getZone**](ZonesApi.md#getZone) | **GET** /intelligent_dns/{zone_id} | Get an Intelligent DNS hosted zone
[**getZones**](ZonesApi.md#getZones) | **GET** /intelligent_dns | Get a collection of Intelligent DNS zones
[**postZone**](ZonesApi.md#postZone) | **POST** /intelligent_dns | Add a new Intelligent DNS zone
[**putZone**](ZonesApi.md#putZone) | **PUT** /intelligent_dns/{zone_id} | Update an Intelligent DNS hosted zone



## deleteZone

> String deleteZone(zoneId)

Remove an Intelligent DNS hosted zone

### Example

```javascript
import IntelligentDnsApi from 'intelligent_dns_api';
let defaultClient = IntelligentDnsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDnsApi.ZonesApi();
let zoneId = 56; // Number | The hosted zone id
apiInstance.deleteZone(zoneId, (error, data, response) => {
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

**String**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## getZone

> GetZoneResponse getZone(zoneId)

Get an Intelligent DNS hosted zone

### Example

```javascript
import IntelligentDnsApi from 'intelligent_dns_api';
let defaultClient = IntelligentDnsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDnsApi.ZonesApi();
let zoneId = 56; // Number | The hosted zone id
apiInstance.getZone(zoneId, (error, data, response) => {
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

[**GetZoneResponse**](GetZoneResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## getZones

> GetZonesResponse getZones()

Get a collection of Intelligent DNS zones

### Example

```javascript
import IntelligentDnsApi from 'intelligent_dns_api';
let defaultClient = IntelligentDnsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDnsApi.ZonesApi();
apiInstance.getZones((error, data, response) => {
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

[**GetZonesResponse**](GetZonesResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json; version=3


## postZone

> PostOrPutZoneResponse postZone(opts)

Add a new Intelligent DNS zone

### Example

```javascript
import IntelligentDnsApi from 'intelligent_dns_api';
let defaultClient = IntelligentDnsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDnsApi.ZonesApi();
let opts = {
  'zone': {"name":"New Intelligent DNS zone","domain":"new.domain.com","is_active":true} // Zone | 
};
apiInstance.postZone(opts, (error, data, response) => {
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
 **zone** | [**Zone**](Zone.md)|  | [optional] 

### Return type

[**PostOrPutZoneResponse**](PostOrPutZoneResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; version=3


## putZone

> PostOrPutZoneResponse putZone(zoneId, opts)

Update an Intelligent DNS hosted zone

### Example

```javascript
import IntelligentDnsApi from 'intelligent_dns_api';
let defaultClient = IntelligentDnsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDnsApi.ZonesApi();
let zoneId = 56; // Number | The hosted zone id
let opts = {
  'zone': {"name":"Update Intelligent DNS zone","domain":"other.domain.com","is_active":true} // Zone | 
};
apiInstance.putZone(zoneId, opts, (error, data, response) => {
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
 **zone** | [**Zone**](Zone.md)|  | [optional] 

### Return type

[**PostOrPutZoneResponse**](PostOrPutZoneResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; version=3

