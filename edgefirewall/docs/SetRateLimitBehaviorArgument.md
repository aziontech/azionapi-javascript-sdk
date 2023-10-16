# EdgeFirewallApi.SetRateLimitBehaviorArgument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**limitBy** | **String** |  | [optional] 
**averageRateLimit** | [**SetRateLimitBehaviorArgumentAverageRateLimit**](SetRateLimitBehaviorArgumentAverageRateLimit.md) |  | [optional] 
**maximumBurstSize** | [**SetRateLimitBehaviorArgumentAverageRateLimit**](SetRateLimitBehaviorArgumentAverageRateLimit.md) |  | [optional] 



## Enum: TypeEnum


* `second` (value: `"second"`)

* `minute` (value: `"minute"`)





## Enum: LimitByEnum


* `client_ip` (value: `"client_ip"`)

* `global` (value: `"global"`)




