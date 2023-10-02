# WebApplicationFirewallApi.SingleWAF

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** | Identification name for WAF Rule Set. | [optional] 
**mode** | **String** |  | [optional] 
**active** | **Boolean** |  | [optional] 
**sqlInjection** | **Boolean** |  | [optional] 
**sqlInjectionSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | [optional] 
**remoteFileInclusion** | **Boolean** |  | [optional] 
**remoteFileInclusionSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | [optional] 
**directoryTraversal** | **Boolean** |  | [optional] 
**directoryTraversalSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | [optional] 
**crossSiteScripting** | **Boolean** |  | [optional] 
**crossSiteScriptingSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | [optional] 
**evadingTricks** | **Boolean** |  | [optional] 
**evadingTricksSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | [optional] 
**fileUpload** | **Boolean** |  | [optional] 
**fileUploadSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | [optional] 
**unwantedAccess** | **Boolean** |  | [optional] 
**unwantedAccessSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | [optional] 
**identifiedAttack** | **Boolean** |  | [optional] 
**identifiedAttackSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | [optional] 
**bypassAddresses** | **[String]** |  | [optional] 



## Enum: ModeEnum


* `blocking` (value: `"blocking"`)

* `counting` (value: `"counting"`)




