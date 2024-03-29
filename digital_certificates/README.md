# digital_certificates_api

DigitalCertificatesApi - JavaScript client for digital_certificates_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 2.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install digital_certificates_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your digital_certificates_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DigitalCertificatesApi = require('digital_certificates_api');

var defaultClient = DigitalCertificatesApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new DigitalCertificatesApi.CreateCSRApi()
var createCSRRequest = new DigitalCertificatesApi.CreateCSRRequest(); // {CreateCSRRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createCSR(createCSRRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.azionapi.net*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DigitalCertificatesApi.CreateCSRApi* | [**createCSR**](docs/CreateCSRApi.md#createCSR) | **POST** /digital_certificates/csr | Create an encrypted Certificate Request with Azion, which can then be sent for signing to a CA
*DigitalCertificatesApi.CreateDigitalCertificateApi* | [**createCertificate**](docs/CreateDigitalCertificateApi.md#createCertificate) | **POST** /digital_certificates | Create a new digital certificate
*DigitalCertificatesApi.DeleteDigitalCertificateApi* | [**removeDigitalCertificates**](docs/DeleteDigitalCertificateApi.md#removeDigitalCertificates) | **DELETE** /digital_certificates/{digital_certificate_id} | Remove a digital certificate or CSR from your account
*DigitalCertificatesApi.OverwriteDigitalCertificateApi* | [**overwriteDigitalCertificate**](docs/OverwriteDigitalCertificateApi.md#overwriteDigitalCertificate) | **PUT** /digital_certificates/{digital_certificate_id} | Overwrite a digital certificate with another complete digital certificate
*DigitalCertificatesApi.RetrieveDigitalCertificateByIDApi* | [**getCertificate**](docs/RetrieveDigitalCertificateByIDApi.md#getCertificate) | **GET** /digital_certificates/{digital_certificate_id} | Get more data on a specific digital certificate or CSR.
*DigitalCertificatesApi.RetrieveDigitalCertificateListApi* | [**listDigitalCertificates**](docs/RetrieveDigitalCertificateListApi.md#listDigitalCertificates) | **GET** /digital_certificates | List all existing digital certificates and CSRs registered to your account
*DigitalCertificatesApi.UpdateDigitalCertificateApi* | [**updateDigitalCertificate**](docs/UpdateDigitalCertificateApi.md#updateDigitalCertificate) | **PATCH** /digital_certificates/{digital_certificate_id} | Change only select settings of your digital certificate or CSR.


## Documentation for Models

 - [DigitalCertificatesApi.CreateCSRRequest](docs/CreateCSRRequest.md)
 - [DigitalCertificatesApi.CreateCertificateRequest](docs/CreateCertificateRequest.md)
 - [DigitalCertificatesApi.DC200](docs/DC200.md)
 - [DigitalCertificatesApi.DC200List](docs/DC200List.md)
 - [DigitalCertificatesApi.DC200ListLinks](docs/DC200ListLinks.md)
 - [DigitalCertificatesApi.DC400](docs/DC400.md)
 - [DigitalCertificatesApi.DC401](docs/DC401.md)
 - [DigitalCertificatesApi.DC403](docs/DC403.md)
 - [DigitalCertificatesApi.DC404](docs/DC404.md)
 - [DigitalCertificatesApi.DC406](docs/DC406.md)
 - [DigitalCertificatesApi.DC409](docs/DC409.md)
 - [DigitalCertificatesApi.ResultsInner](docs/ResultsInner.md)
 - [DigitalCertificatesApi.SingleResult](docs/SingleResult.md)
 - [DigitalCertificatesApi.UpdateDigitalCertificateRequest](docs/UpdateDigitalCertificateRequest.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### tokenAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

