# WebApplicationFirewallApi.WAFEvents200ResultsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryCount** | **Number** |  | [optional] 
**top10Countries** | [**[WAFEvents200ResultsInnerTop10CountriesInner]**](WAFEvents200ResultsInnerTop10CountriesInner.md) |  | [optional] 
**top10Ips** | [**[WAFEvents200ResultsInnerTop10CountriesInner]**](WAFEvents200ResultsInnerTop10CountriesInner.md) |  | [optional] 
**hitCount** | **Number** |  | [optional] 
**ruleId** | **Number** |  | [optional] 
**ipCount** | **Number** |  | [optional] 
**matchZone** | **String** |  | [optional] 
**pathCount** | **Number** |  | [optional] 
**matchesOn** | **String** |  | [optional] 
**ruleDescription** | **String** |  | [optional] 



## Enum: MatchZoneEnum


* `path` (value: `"path"`)

* `query_string` (value: `"query_string"`)

* `request_header` (value: `"request_header"`)

* `request_body` (value: `"request_body"`)

* `raw_body` (value: `"raw_body"`)

* `file_name` (value: `"file_name"`)

* `cookie` (value: `"cookie"`)





## Enum: MatchesOnEnum


* `name` (value: `"name"`)

* `value` (value: `"value"`)




