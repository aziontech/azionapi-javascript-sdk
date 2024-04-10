# DomainApi.PutDomainRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**cnames** | **[String]** |  | 
**cnameAccessOnly** | **Boolean** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**edgeApplicationId** | **Number** |  | 
**digitalCertificateId** | **Number** |  | [optional] 
**environment** | **String** |  | [optional] 
**isMtlsEnabled** | **Boolean** |  | [optional] 
**mtlsTrustedCaCertificateId** | **Number** |  | [optional] 
**mtlsVerification** | **String** |  | [optional] 
**crlList** | **[Number]** |  | [optional] 



## Enum: EnvironmentEnum


* `production` (value: `"production"`)

* `preview` (value: `"preview"`)





## Enum: MtlsVerificationEnum


* `enforce` (value: `"enforce"`)

* `permissive` (value: `"permissive"`)




