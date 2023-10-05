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

> GetZonesResponse getZones(opts)

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
let opts = {
  'orderBy': "'name'", // String | Identifies which property the return should be sorted by.
  'sort': "'asc'", // String | Defines whether objects are shown in ascending or descending order depending on the value set in order_by.
  'page': 1, // Number | Identifies which page should be returned, if the return is paginated.
  'pageSize': 10 // Number | Identifies how many items should be returned per page.
};
apiInstance.getZones(opts, (error, data, response) => {
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
 **orderBy** | **String**| Identifies which property the return should be sorted by. | [optional] [default to &#39;name&#39;]
 **sort** | **String**| Defines whether objects are shown in ascending or descending order depending on the value set in order_by. | [optional] [default to &#39;asc&#39;]
 **page** | **Number**| Identifies which page should be returned, if the return is paginated. | [optional] [default to 1]
 **pageSize** | **Number**| Identifies how many items should be returned per page. | [optional] [default to 10]

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

