# DomainApi.UpdateDomainRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**cnames** | **[String]** |  | [optional] 
**cnameAccessOnly** | **Boolean** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**edgeApplicationId** | **Number** |  | [optional] 
**digitalCertificateId** | **String** |  | [optional] 
**environment** | **String** |  | [optional] 
**isMtlsEnabled** | **Boolean** |  | [optional] 
**mtlsTrustedCaCertificateId** | **Number** |  | [optional] 
**edgeFirewallId** | **Number** |  | [optional] 
**mtlsVerification** | **String** |  | [optional] 
**crlList** | **[Number]** |  | [optional] 



## Enum: EnvironmentEnum


* `production` (value: `"production"`)

* `preview` (value: `"preview"`)





## Enum: MtlsVerificationEnum


* `enforce` (value: `"enforce"`)

* `permissive` (value: `"permissive"`)




