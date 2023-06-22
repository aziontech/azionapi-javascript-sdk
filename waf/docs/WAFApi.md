# WebApplicationFirewallApi.WAFApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWAFDomains**](WAFApi.md#getWAFDomains) | **GET** /waf/{wafId}/domains | Find domains attached to a WAF
[**getWAFEvents**](WAFApi.md#getWAFEvents) | **GET** /waf/{wafId}/waf_events | Find WAF log events



## getWAFDomains

> WAFDomains200 getWAFDomains(wafId, opts)

Find domains attached to a WAF

### Example

```javascript
import WebApplicationFirewallApi from 'web_application_firewall_api';
let defaultClient = WebApplicationFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new WebApplicationFirewallApi.WAFApi();
let wafId = 789; // Number | ID of WAF to return
let opts = {
  'name': "name_example" // String | searches WAF for name
};
apiInstance.getWAFDomains(wafId, opts, (error, data, response) => {
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
 **wafId** | **Number**| ID of WAF to return | 
 **name** | **String**| searches WAF for name | [optional] 

### Return type

[**WAFDomains200**](WAFDomains200.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## getWAFEvents

> WAFEvents200 getWAFEvents(wafId, hourRange, domainsIds, opts)

Find WAF log events

### Example

```javascript
import WebApplicationFirewallApi from 'web_application_firewall_api';
let defaultClient = WebApplicationFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new WebApplicationFirewallApi.WAFApi();
let wafId = 789; // Number | ID of WAF to return
let hourRange = 789; // Number | Last log hours since now (it must be a integer number ranging between 1 and 72)
let domainsIds = "domainsIds_example"; // String | Multiple domain's id (they must be separated by comma like 1233,1234)
let opts = {
  'networkListId': 789 // Number | Id of a network list
};
apiInstance.getWAFEvents(wafId, hourRange, domainsIds, opts, (error, data, response) => {
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
 **wafId** | **Number**| ID of WAF to return | 
 **hourRange** | **Number**| Last log hours since now (it must be a integer number ranging between 1 and 72) | 
 **domainsIds** | **String**| Multiple domain&#39;s id (they must be separated by comma like 1233,1234) | 
 **networkListId** | **Number**| Id of a network list | [optional] 

### Return type

[**WAFEvents200**](WAFEvents200.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

