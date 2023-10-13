# EdgeFirewallApi.DefaultApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeFirewallEdgeFirewallIdRulesEngineGet**](DefaultApi.md#edgeFirewallEdgeFirewallIdRulesEngineGet) | **GET** /edge_firewall/{edge_firewall_id}/rules_engine | List all rule sets.
[**edgeFirewallEdgeFirewallIdRulesEnginePost**](DefaultApi.md#edgeFirewallEdgeFirewallIdRulesEnginePost) | **POST** /edge_firewall/{edge_firewall_id}/rules_engine | Create rule set.
[**edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDelete**](DefaultApi.md#edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDelete) | **DELETE** /edge_firewall/{edge_firewall_id}/rules_engine/{rule_set_id} | Delete rule set.
[**edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGet**](DefaultApi.md#edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGet) | **GET** /edge_firewall/{edge_firewall_id}/rules_engine/{rule_set_id} | Retrieve rule set by ID.
[**edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatch**](DefaultApi.md#edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatch) | **PATCH** /edge_firewall/{edge_firewall_id}/rules_engine/{rule_set_id} | Edit rule set.
[**edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPut**](DefaultApi.md#edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPut) | **PUT** /edge_firewall/{edge_firewall_id}/rules_engine/{rule_set_id} | Overwrite rule set
[**edgeFirewallGet**](DefaultApi.md#edgeFirewallGet) | **GET** /edge_firewall | List all user edge firewall
[**edgeFirewallPost**](DefaultApi.md#edgeFirewallPost) | **POST** /edge_firewall | Create a edge firewall
[**edgeFirewallUuidDelete**](DefaultApi.md#edgeFirewallUuidDelete) | **DELETE** /edge_firewall/{uuid} | Delete an edge firewall by uuid
[**edgeFirewallUuidGet**](DefaultApi.md#edgeFirewallUuidGet) | **GET** /edge_firewall/{uuid} | Retrieve an edge firewall set by uuid
[**edgeFirewallUuidPatch**](DefaultApi.md#edgeFirewallUuidPatch) | **PATCH** /edge_firewall/{uuid} | Update some edge firewall attributes, like \&quot;active\&quot;
[**edgeFirewallUuidPut**](DefaultApi.md#edgeFirewallUuidPut) | **PUT** /edge_firewall/{uuid} | Overwrite some edge firewall attributes, like \&quot;active\&quot;



## edgeFirewallEdgeFirewallIdRulesEngineGet

> RuleSetResponseAll edgeFirewallEdgeFirewallIdRulesEngineGet(edgeFirewallId, opts)

List all rule sets.

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'sort': "sort_example", // String | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.edgeFirewallEdgeFirewallIdRulesEngineGet(edgeFirewallId, opts, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**RuleSetResponseAll**](RuleSetResponseAll.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeFirewallEdgeFirewallIdRulesEnginePost

> RuleSetResponse edgeFirewallEdgeFirewallIdRulesEnginePost(edgeFirewallId, opts)

Create rule set.

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let opts = {
  'createRuleSetRequest': new EdgeFirewallApi.CreateRuleSetRequest() // CreateRuleSetRequest | 
};
apiInstance.edgeFirewallEdgeFirewallIdRulesEnginePost(edgeFirewallId, opts, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **createRuleSetRequest** | [**CreateRuleSetRequest**](CreateRuleSetRequest.md)|  | [optional] 

### Return type

[**RuleSetResponse**](RuleSetResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDelete

> edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDelete(edgeFirewallId, ruleSetId)

Delete rule set.

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let ruleSetId = 789; // Number | 
apiInstance.edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDelete(edgeFirewallId, ruleSetId, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **ruleSetId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGet

> RuleSetResult edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGet(edgeFirewallId, ruleSetId, opts)

Retrieve rule set by ID.

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let ruleSetId = 789; // Number | 
let opts = {
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example", // String | 
  'page': 1, // Number | 
  'pageSize': 10 // Number | 
};
apiInstance.edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGet(edgeFirewallId, ruleSetId, opts, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **ruleSetId** | **Number**|  | 
 **orderBy** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 10]

### Return type

[**RuleSetResult**](RuleSetResult.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatch

> RuleSetResult edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatch(edgeFirewallId, ruleSetId, opts)

Edit rule set.

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let ruleSetId = 789; // Number | 
let opts = {
  'createRuleSetRequest': new EdgeFirewallApi.CreateRuleSetRequest() // CreateRuleSetRequest | 
};
apiInstance.edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatch(edgeFirewallId, ruleSetId, opts, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **ruleSetId** | **Number**|  | 
 **createRuleSetRequest** | [**CreateRuleSetRequest**](CreateRuleSetRequest.md)|  | [optional] 

### Return type

[**RuleSetResult**](RuleSetResult.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPut

> RuleSetResult edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPut(edgeFirewallId, ruleSetId, opts)

Overwrite rule set

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let edgeFirewallId = 789; // Number | 
let ruleSetId = 789; // Number | 
let opts = {
  'createRuleSetRequest': new EdgeFirewallApi.CreateRuleSetRequest() // CreateRuleSetRequest | 
};
apiInstance.edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPut(edgeFirewallId, ruleSetId, opts, (error, data, response) => {
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
 **edgeFirewallId** | **Number**|  | 
 **ruleSetId** | **Number**|  | 
 **createRuleSetRequest** | [**CreateRuleSetRequest**](CreateRuleSetRequest.md)|  | [optional] 

### Return type

[**RuleSetResult**](RuleSetResult.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeFirewallGet

> ListEdgeFirewallResponse edgeFirewallGet(opts)

List all user edge firewall

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'sort': "sort_example", // String | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.edgeFirewallGet(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**ListEdgeFirewallResponse**](ListEdgeFirewallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFirewallPost

> EdgeFirewallResponse edgeFirewallPost(createEdgeFirewallRequest)

Create a edge firewall

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let createEdgeFirewallRequest = new EdgeFirewallApi.CreateEdgeFirewallRequest(); // CreateEdgeFirewallRequest | 
apiInstance.edgeFirewallPost(createEdgeFirewallRequest, (error, data, response) => {
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
 **createEdgeFirewallRequest** | [**CreateEdgeFirewallRequest**](CreateEdgeFirewallRequest.md)|  | 

### Return type

[**EdgeFirewallResponse**](EdgeFirewallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## edgeFirewallUuidDelete

> edgeFirewallUuidDelete(uuid)

Delete an edge firewall by uuid

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let uuid = "uuid_example"; // String | 
apiInstance.edgeFirewallUuidDelete(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeFirewallUuidGet

> EdgeFirewallResponse edgeFirewallUuidGet(uuid)

Retrieve an edge firewall set by uuid

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let uuid = "uuid_example"; // String | 
apiInstance.edgeFirewallUuidGet(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

[**EdgeFirewallResponse**](EdgeFirewallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## edgeFirewallUuidPatch

> EdgeFirewallResponse edgeFirewallUuidPatch(uuid, updateEdgeFirewallRequest)

Update some edge firewall attributes, like \&quot;active\&quot;

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let uuid = "uuid_example"; // String | 
let updateEdgeFirewallRequest = new EdgeFirewallApi.UpdateEdgeFirewallRequest(); // UpdateEdgeFirewallRequest | 
apiInstance.edgeFirewallUuidPatch(uuid, updateEdgeFirewallRequest, (error, data, response) => {
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
 **uuid** | **String**|  | 
 **updateEdgeFirewallRequest** | [**UpdateEdgeFirewallRequest**](UpdateEdgeFirewallRequest.md)|  | 

### Return type

[**EdgeFirewallResponse**](EdgeFirewallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## edgeFirewallUuidPut

> EdgeFirewallResponse edgeFirewallUuidPut(uuid, updateEdgeFirewallRequest)

Overwrite some edge firewall attributes, like \&quot;active\&quot;

### Example

```javascript
import EdgeFirewallApi from 'edge_firewall_api';
let defaultClient = EdgeFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeFirewallApi.DefaultApi();
let uuid = "uuid_example"; // String | 
let updateEdgeFirewallRequest = new EdgeFirewallApi.UpdateEdgeFirewallRequest(); // UpdateEdgeFirewallRequest | 
apiInstance.edgeFirewallUuidPut(uuid, updateEdgeFirewallRequest, (error, data, response) => {
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
 **uuid** | **String**|  | 
 **updateEdgeFirewallRequest** | [**UpdateEdgeFirewallRequest**](UpdateEdgeFirewallRequest.md)|  | 

### Return type

[**EdgeFirewallResponse**](EdgeFirewallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

