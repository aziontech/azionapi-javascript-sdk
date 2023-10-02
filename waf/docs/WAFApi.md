# WebApplicationFirewallApi.WAFApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewWAFRuleset**](WAFApi.md#createNewWAFRuleset) | **POST** /waf/rulesets | Create a new WAF Rule Set in an account.
[**deleteWAFRuleset**](WAFApi.md#deleteWAFRuleset) | **DELETE** /waf/rulesets/{waf_rule_set_id} | Remove an WAF Rule Set from an account. Warning: this action cannot be undone.
[**getWAFDomains**](WAFApi.md#getWAFDomains) | **GET** /waf/{wafId}/domains | List all domains attached to a Web Application Firewall (WAF) in an account.
[**getWAFEvents**](WAFApi.md#getWAFEvents) | **GET** /waf/{wafId}/waf_events | Find WAF log events
[**getWAFRuleset**](WAFApi.md#getWAFRuleset) | **GET** /waf/rulesets/{waf_rule_set_id} | List a specific Rule Set associated to a Web Application Firewall (WAF) in an account.
[**listAllWAF**](WAFApi.md#listAllWAF) | **GET** /waf | List all Web Application Firewalls (WAFs) created in an account
[**listAllWAFRulesets**](WAFApi.md#listAllWAFRulesets) | **GET** /waf/rulesets | list all Rule Sets associated to a Web Application Firewall (WAF) in an account.
[**updateWAFRuleset**](WAFApi.md#updateWAFRuleset) | **PATCH** /waf/rulesets/{waf_rule_set_id} | Change only select settings of a WAF Rule Set



## createNewWAFRuleset

> SingleWAF createNewWAFRuleset(opts)

Create a new WAF Rule Set in an account.

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
let opts = {
  'createNewWAFRulesetRequest': new WebApplicationFirewallApi.CreateNewWAFRulesetRequest() // CreateNewWAFRulesetRequest | 
};
apiInstance.createNewWAFRuleset(opts, (error, data, response) => {
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
 **createNewWAFRulesetRequest** | [**CreateNewWAFRulesetRequest**](CreateNewWAFRulesetRequest.md)|  | [optional] 

### Return type

[**SingleWAF**](SingleWAF.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## deleteWAFRuleset

> deleteWAFRuleset(wafRuleSetId)

Remove an WAF Rule Set from an account. Warning: this action cannot be undone.

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
let wafRuleSetId = "wafRuleSetId_example"; // String | 
apiInstance.deleteWAFRuleset(wafRuleSetId, (error, data, response) => {
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
 **wafRuleSetId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWAFDomains

> WAFDomains200 getWAFDomains(wafId, opts)

List all domains attached to a Web Application Firewall (WAF) in an account.

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


## getWAFRuleset

> WAFSingle200 getWAFRuleset(wafRuleSetId)

List a specific Rule Set associated to a Web Application Firewall (WAF) in an account.

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
let wafRuleSetId = 789; // Number | ID of WAF Ruleset to return
apiInstance.getWAFRuleset(wafRuleSetId, (error, data, response) => {
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
 **wafRuleSetId** | **Number**| ID of WAF Ruleset to return | 

### Return type

[**WAFSingle200**](WAFSingle200.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## listAllWAF

> WAFList200 listAllWAF(opts)

List all Web Application Firewalls (WAFs) created in an account

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
let opts = {
  'page': 1, // Number | Identifies which page should be returned, if the return is paginated.
  'pageSize': 10 // Number | Identifies how many items should be returned per page.
};
apiInstance.listAllWAF(opts, (error, data, response) => {
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
 **page** | **Number**| Identifies which page should be returned, if the return is paginated. | [optional] [default to 1]
 **pageSize** | **Number**| Identifies how many items should be returned per page. | [optional] [default to 10]

### Return type

[**WAFList200**](WAFList200.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## listAllWAFRulesets

> WAFList200 listAllWAFRulesets(opts)

list all Rule Sets associated to a Web Application Firewall (WAF) in an account.

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
let opts = {
  'orderBy': "'name'", // String | Identifies which property the return should be sorted by.
  'sort': "'asc'", // String | Defines whether objects are shown in ascending or descending order depending on the value set in order_by.
  'page': 1, // Number | Identifies which page should be returned, if the return is paginated.
  'pageSize': 10 // Number | Identifies how many items should be returned per page.
};
apiInstance.listAllWAFRulesets(opts, (error, data, response) => {
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

[**WAFList200**](WAFList200.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## updateWAFRuleset

> SingleWAF updateWAFRuleset(wafRuleSetId, opts)

Change only select settings of a WAF Rule Set

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
let wafRuleSetId = "wafRuleSetId_example"; // String | 
let opts = {
  'singleWAF': new WebApplicationFirewallApi.SingleWAF() // SingleWAF | 
};
apiInstance.updateWAFRuleset(wafRuleSetId, opts, (error, data, response) => {
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
 **wafRuleSetId** | **String**|  | 
 **singleWAF** | [**SingleWAF**](SingleWAF.md)|  | [optional] 

### Return type

[**SingleWAF**](SingleWAF.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

