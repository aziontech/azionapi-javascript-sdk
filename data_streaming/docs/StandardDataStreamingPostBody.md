# DataStreamingOpenApi.StandardDataStreamingPostBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**templateId** | **Number** | Options:  * &#x60;2&#x60; - Edge Applications Event Collector  * &#x60;4&#x60; - WAF Event Collector  * &#x60;86&#x60; - Edge Functions Event Collector  * &#x60;184&#x60; - Edge Applications + WAF Event Collector  * &#x60;251&#x60; - Activity History Collector  | [optional] 
**dataSource** | **String** | Options:  * &#x60;http&#x60; - Edge Applications (default)  * &#x60;waf&#x60; - WAF Events  * &#x60;cells_console&#x60; - Edge Functions  * &#x60;rtm_activity&#x60; - Activity History  | [optional] 
**active** | **Boolean** |  | [optional] [default to true]
**endpoint** | [**DataStreamingEndpointTypeStandard**](DataStreamingEndpointTypeStandard.md) |  | [optional] 
**domainsIds** | **[Number]** | Note:  * Field not used with the rtm_activity data source.  | [optional] 
**allDomains** | **Boolean** | Note:  * Field not used with the rtm_activity data source.  | [optional] [default to false]



## Enum: TemplateIdEnum


* `2` (value: `2`)

* `4` (value: `4`)

* `86` (value: `86`)

* `184` (value: `184`)

* `251` (value: `251`)





## Enum: DataSourceEnum


* `http` (value: `"http"`)

* `waf` (value: `"waf"`)

* `cells_console` (value: `"cells_console"`)

* `rtm_activity` (value: `"rtm_activity"`)




