# DataStreamingOpenApi.PostCustomDataStreamingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**dataSource** | **String** | Options:  * &#x60;http&#x60; - Edge Applications  * &#x60;waf&#x60; - WAF Events  * &#x60;cells_console&#x60; - Edge Functions  * &#x60;rtm_activity&#x60; - Activity History    | [optional] 
**templateModel** | **String** | Note:  * Add all variables and values that will be used to stream according to the data source you choose to use.    | [optional] 
**active** | **Boolean** |  | [optional] 
**endpoint** | **String** |  | [optional] 
**allDomains** | **Boolean** | Note:  * Field not used with the rtm_activity data source.  | [optional] 



## Enum: DataSourceEnum


* `http` (value: `"http"`)

* `waf` (value: `"waf"`)

* `cells_console` (value: `"cells_console"`)

* `rtm_activity` (value: `"rtm_activity"`)




