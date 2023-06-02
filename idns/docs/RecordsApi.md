# IntelligentDns.RecordsApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteZoneRecord**](RecordsApi.md#deleteZoneRecord) | **DELETE** /intelligent_dns/{zone_id}/records/{record_id} | Remove an Intelligent DNS zone record
[**getZoneRecords**](RecordsApi.md#getZoneRecords) | **GET** /intelligent_dns/{zone_id}/records | Get a collection of Intelligent DNS zone records
[**postZoneRecord**](RecordsApi.md#postZoneRecord) | **POST** /intelligent_dns/{zone_id}/records | Create a new Intelligent DNS zone record
[**putZoneRecord**](RecordsApi.md#putZoneRecord) | **PUT** /intelligent_dns/{zone_id}/records/{record_id} | Update an Intelligent DNS zone record



## deleteZoneRecord

> String deleteZoneRecord(zoneId, recordId)

Remove an Intelligent DNS zone record

### Example

```javascript
import IntelligentDns from 'intelligent_dns';
let defaultClient = IntelligentDns.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDns.RecordsApi();
let zoneId = 56; // Number | The hosted zone id
let recordId = 56; // Number | The zone record id
apiInstance.deleteZoneRecord(zoneId, recordId, (error, data, response) => {
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
 **recordId** | **Number**| The zone record id | 

### Return type

**String**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## getZoneRecords

> GetRecordsResponse getZoneRecords(zoneId)

Get a collection of Intelligent DNS zone records

### Example

```javascript
import IntelligentDns from 'intelligent_dns';
let defaultClient = IntelligentDns.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDns.RecordsApi();
let zoneId = 56; // Number | The hosted zone id
apiInstance.getZoneRecords(zoneId, (error, data, response) => {
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

[**GetRecordsResponse**](GetRecordsResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## postZoneRecord

> PostOrPutRecordResponse postZoneRecord(zoneId, opts)

Create a new Intelligent DNS zone record

### Example

```javascript
import IntelligentDns from 'intelligent_dns';
let defaultClient = IntelligentDns.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDns.RecordsApi();
let zoneId = 56; // Number | The hosted zone id
let opts = {
  'recordPostOrPut': {"record_type":"A","entry":"site","description":"Site record","ttl":3600,"answers_list":["1.2.3.4","5.6.7.8"]} // RecordPostOrPut | 
};
apiInstance.postZoneRecord(zoneId, opts, (error, data, response) => {
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
 **recordPostOrPut** | [**RecordPostOrPut**](RecordPostOrPut.md)|  | [optional] 

### Return type

[**PostOrPutRecordResponse**](PostOrPutRecordResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; version=3


## putZoneRecord

> PostOrPutRecordResponse putZoneRecord(zoneId, recordId, opts)

Update an Intelligent DNS zone record

### Example

```javascript
import IntelligentDns from 'intelligent_dns';
let defaultClient = IntelligentDns.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new IntelligentDns.RecordsApi();
let zoneId = 56; // Number | The hosted zone id
let recordId = 56; // Number | The zone record id
let opts = {
  'recordPostOrPut': {"record_type":"A","entry":"site","description":"Site record","ttl":3600,"answers_list":["1.2.3.4","5.6.7.8","1.1.2.2"]} // RecordPostOrPut | 
};
apiInstance.putZoneRecord(zoneId, recordId, opts, (error, data, response) => {
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
 **recordId** | **Number**| The zone record id | 
 **recordPostOrPut** | [**RecordPostOrPut**](RecordPostOrPut.md)|  | [optional] 

### Return type

[**PostOrPutRecordResponse**](PostOrPutRecordResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; version=3

