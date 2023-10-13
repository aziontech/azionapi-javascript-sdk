# EdgeFirewallApi.BehaviorsArgument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**limitBy** | **String** |  | [optional] 
**averageRateLimit** | **Number** |  | [optional] 
**maximumBurstSize** | **Number** |  | [optional] 
**wafId** | **Number** |  | [optional] 
**mode** | **String** |  | [optional] 



## Enum: TypeEnum


* `second` (value: `"second"`)

* `minute` (value: `"minute"`)





## Enum: LimitByEnum


* `client_ip` (value: `"client_ip"`)

* `global` (value: `"global"`)





## Enum: ModeEnum


* `Learning` (value: `"Learning"`)

* `Blocking` (value: `"Blocking"`)




