# WebApplicationFirewallApi.CreateNewWAFRulesetRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** | Identification name for WAF Rule Set. | 
**mode** | **String** |  | 
**active** | **Boolean** |  | 
**sqlInjection** | **Boolean** |  | 
**sqlInjectionSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | 
**remoteFileInclusion** | **Boolean** |  | 
**remoteFileInclusionSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | 
**directoryTraversal** | **Boolean** |  | 
**directoryTraversalSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | 
**crossSiteScripting** | **Boolean** |  | 
**crossSiteScriptingSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | 
**evadingTricks** | **Boolean** |  | 
**evadingTricksSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | 
**fileUpload** | **Boolean** |  | 
**fileUploadSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | 
**unwantedAccess** | **Boolean** |  | 
**unwantedAccessSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | 
**identifiedAttack** | **Boolean** |  | 
**identifiedAttackSensitivity** | [**WAFSensitivityChoices**](WAFSensitivityChoices.md) |  | 
**bypassAddresses** | **[String]** |  | 



## Enum: ModeEnum


* `blocking` (value: `"blocking"`)

* `counting` (value: `"counting"`)




