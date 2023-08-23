# DataStreamingOpenApi.CustomDataStreamingPostBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**dataSource** | **String** | Options:  * &#x60;http&#x60; - Edge Applications (default)  * &#x60;waf&#x60; - WAF Events  * &#x60;cells_console&#x60; - Edge Functions  * &#x60;rtm_activity&#x60; - Activity History    | [optional] 
**templateModel** | **String** | Note:  * Add all variables and values that will be used to stream according to the data source you choose to use.    * All data streaming [variables can be found on the reference documentation](https://www.azion.com/en/documentation/products/data-streaming/#selecting-data-sources).    | [optional] 
**active** | **Boolean** |  | [optional] [default to true]



## Enum: DataSourceEnum


* `http` (value: `"http"`)

* `waf` (value: `"waf"`)

* `cells_console` (value: `"cells_console"`)

* `rtm_activity` (value: `"rtm_activity"`)




