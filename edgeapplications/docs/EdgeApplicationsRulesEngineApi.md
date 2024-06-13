# EdgeApplicationApi.EdgeApplicationsRulesEngineApi

All URIs are relative to *https://api.azionapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesGet**](EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesGet) | **GET** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules | /edge_applications/{edge_application_id}/rules_engine/{phase}/rules
[**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesPost**](EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesPost) | **POST** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules | /edge_applications/{edge_application_id}/rules_engine/{phase}/rules
[**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdDelete**](EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdDelete) | **DELETE** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules/{rule_id} | /edge_applications/{edge_application_id}/rules_engine/{phase}/rules
[**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdGet**](EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdGet) | **GET** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules/{rule_id} | /edge_applications/{edge_application_id}/rules_engine/{phase}/rules
[**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPatch**](EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPatch) | **PATCH** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules/{rule_id} | /edge_applications/:edge_application_id:/rules_engine/:phase:/rules/:rule_id:
[**edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPut**](EdgeApplicationsRulesEngineApi.md#edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPut) | **PUT** /edge_applications/{edge_application_id}/rules_engine/{phase}/rules/{rule_id} | /edge_applications/:edge_application_id:/rules_engine/:phase:/rules/:rule_id:



## edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesGet

> RulesEngineResponse edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesGet(edgeApplicationId, phase, opts)

/edge_applications/{edge_application_id}/rules_engine/{phase}/rules

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsRulesEngineApi();
let edgeApplicationId = 789; // Number | 
let phase = "phase_example"; // String | 
let opts = {
  'page': 789, // Number | 
  'pageSize': 789, // Number | 
  'filter': "filter_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'sort': "sort_example", // String | 
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesGet(edgeApplicationId, phase, opts, (error, data, response) => {
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
 **edgeApplicationId** | **Number**|  | 
 **phase** | **String**|  | 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **filter** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **accept** | **String**|  | [optional] 

### Return type

[**RulesEngineResponse**](RulesEngineResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesPost

> RulesEngineIdResponse edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesPost(edgeApplicationId, phase, opts)

/edge_applications/{edge_application_id}/rules_engine/{phase}/rules

Check below the list of behaviors that can be applied:  | Name                                | Behavior               | | ----------------------------------- | ---------------------- | | Add Request Cookie                  | add_request_cookie     | | Add Request Header                  | add_request_header     | | Add Response Cookie                 | set_cookie             | | Add Response Header                 | add_response_header    | | Bypass Cache                        | bypass_cache_phase     | | Capture Match Groups                | capture_match_groups   | | Deliver                             | deliver                | | Deny (403 Forbidden)                | deny                   | | Enable Gzip                         | enable_gzip            | | Filter Request Cookie               | filter_request_cookie  | | Filter Request Header               | filter_request_header  | | Filter Response Cookie              | filter_response_cookie | | Filter Response Header              | filter_response_header | | Finish Request Phase                | finish_request_phase   | | Forward Cookies                     | forward_cookies        | | Optimize Images                     | optimize_images        | | Redirect HTTP to HTTPS              | redirect_http_to_https | | Redirect To (301 Moved Permanently) | redirect_to_301        | | Redirect To (302 Found)             | redirect_to_302        | | Rewrite Request                     | rewrite_request        | | Run Function                        | run_function           | | Set Cache Policy                    | set_cache_policy       | | Set Origin                          | set_origin             |

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsRulesEngineApi();
let edgeApplicationId = 789; // Number | 
let phase = "phase_example"; // String | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'createRulesEngineRequest': new EdgeApplicationApi.CreateRulesEngineRequest() // CreateRulesEngineRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesPost(edgeApplicationId, phase, opts, (error, data, response) => {
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
 **edgeApplicationId** | **Number**|  | 
 **phase** | **String**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **createRulesEngineRequest** | [**CreateRulesEngineRequest**](CreateRulesEngineRequest.md)|  | [optional] 

### Return type

[**RulesEngineIdResponse**](RulesEngineIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdDelete

> edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdDelete(edgeApplicationId, phase, ruleId, opts)

/edge_applications/{edge_application_id}/rules_engine/{phase}/rules

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsRulesEngineApi();
let edgeApplicationId = 789; // Number | The id of the edge application you plan to delete. 
let phase = "phase_example"; // String | 
let ruleId = 789; // Number | The id of the rule you plan to delete. 
let opts = {
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdDelete(edgeApplicationId, phase, ruleId, opts, (error, data, response) => {
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
 **edgeApplicationId** | **Number**| The id of the edge application you plan to delete.  | 
 **phase** | **String**|  | 
 **ruleId** | **Number**| The id of the rule you plan to delete.  | 
 **accept** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdGet

> RulesEngineIdResponse edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdGet(edgeApplicationId, phase, ruleId, opts)

/edge_applications/{edge_application_id}/rules_engine/{phase}/rules

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsRulesEngineApi();
let edgeApplicationId = 789; // Number | The id of the edge application you want to get. 
let phase = "phase_example"; // String | 
let ruleId = 789; // Number | The id of the rule you plan to delete. 
let opts = {
  'accept': "application/json; version=3" // String | 
};
apiInstance.edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdGet(edgeApplicationId, phase, ruleId, opts, (error, data, response) => {
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
 **edgeApplicationId** | **Number**| The id of the edge application you want to get.  | 
 **phase** | **String**|  | 
 **ruleId** | **Number**| The id of the rule you plan to delete.  | 
 **accept** | **String**|  | [optional] 

### Return type

[**RulesEngineIdResponse**](RulesEngineIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPatch

> RulesEngineIdResponse edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPatch(edgeApplicationId, phase, ruleId, opts)

/edge_applications/:edge_application_id:/rules_engine/:phase:/rules/:rule_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsRulesEngineApi();
let edgeApplicationId = 789; // Number | 
let phase = "phase_example"; // String | 
let ruleId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'patchRulesEngineRequest': new EdgeApplicationApi.PatchRulesEngineRequest() // PatchRulesEngineRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPatch(edgeApplicationId, phase, ruleId, opts, (error, data, response) => {
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
 **edgeApplicationId** | **Number**|  | 
 **phase** | **String**|  | 
 **ruleId** | **Number**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **patchRulesEngineRequest** | [**PatchRulesEngineRequest**](PatchRulesEngineRequest.md)|  | [optional] 

### Return type

[**RulesEngineIdResponse**](RulesEngineIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3


## edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPut

> RulesEngineIdResponse edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPut(edgeApplicationId, phase, ruleId, opts)

/edge_applications/:edge_application_id:/rules_engine/:phase:/rules/:rule_id:

### Example

```javascript
import EdgeApplicationApi from 'edge_application_api';
let defaultClient = EdgeApplicationApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new EdgeApplicationApi.EdgeApplicationsRulesEngineApi();
let edgeApplicationId = 789; // Number | 
let phase = "phase_example"; // String | 
let ruleId = 789; // Number | 
let opts = {
  'accept': "application/json; version=3", // String | 
  'contentType': "application/json", // String | The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
  'updateRulesEngineRequest': new EdgeApplicationApi.UpdateRulesEngineRequest() // UpdateRulesEngineRequest | 
};
apiInstance.edgeApplicationsEdgeApplicationIdRulesEnginePhaseRulesRuleIdPut(edgeApplicationId, phase, ruleId, opts, (error, data, response) => {
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
 **edgeApplicationId** | **Number**|  | 
 **phase** | **String**|  | 
 **ruleId** | **Number**|  | 
 **accept** | **String**|  | [optional] 
 **contentType** | **String**| The type of coding used in the Body (application/json). &lt;br&gt;  Example: Content-Type: application/json | [optional] 
 **updateRulesEngineRequest** | [**UpdateRulesEngineRequest**](UpdateRulesEngineRequest.md)|  | [optional] 

### Return type

[**RulesEngineIdResponse**](RulesEngineIdResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

