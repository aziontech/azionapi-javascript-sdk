# web_application_firewall_api

WebApplicationFirewallApi - JavaScript client for web_application_firewall_api
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
npm install web_application_firewall_api --save
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

To use the link you just defined in your project, switch to the directory you want to use your web_application_firewall_api from, and run:

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
var WebApplicationFirewallApi = require('web_application_firewall_api');

var defaultClient = WebApplicationFirewallApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new WebApplicationFirewallApi.WAFApi()
var opts = {
  'createNewWAFRulesetRequest': new WebApplicationFirewallApi.CreateNewWAFRulesetRequest() // {CreateNewWAFRulesetRequest} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createNewWAFRuleset(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.azionapi.net*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WebApplicationFirewallApi.WAFApi* | [**createNewWAFRuleset**](docs/WAFApi.md#createNewWAFRuleset) | **POST** /waf/rulesets | Create a new WAF Rule Set in an account.
*WebApplicationFirewallApi.WAFApi* | [**deleteWAFRuleset**](docs/WAFApi.md#deleteWAFRuleset) | **DELETE** /waf/rulesets/{waf_rule_set_id} | Remove an WAF Rule Set from an account. Warning: this action cannot be undone.
*WebApplicationFirewallApi.WAFApi* | [**getWAFDomains**](docs/WAFApi.md#getWAFDomains) | **GET** /waf/{waf_id}/domains | List all domains attached to a Web Application Firewall (WAF) in an account.
*WebApplicationFirewallApi.WAFApi* | [**getWAFEvents**](docs/WAFApi.md#getWAFEvents) | **GET** /waf/{waf_id}/waf_events | Find WAF log events
*WebApplicationFirewallApi.WAFApi* | [**getWAFRuleset**](docs/WAFApi.md#getWAFRuleset) | **GET** /waf/rulesets/{waf_rule_set_id} | List a specific Rule Set associated to a Web Application Firewall (WAF) in an account.
*WebApplicationFirewallApi.WAFApi* | [**listAllWAF**](docs/WAFApi.md#listAllWAF) | **GET** /waf | List all Web Application Firewalls (WAFs) created in an account
*WebApplicationFirewallApi.WAFApi* | [**listAllWAFRulesets**](docs/WAFApi.md#listAllWAFRulesets) | **GET** /waf/rulesets | list all Rule Sets associated to a Web Application Firewall (WAF) in an account.
*WebApplicationFirewallApi.WAFApi* | [**updateWAFRuleset**](docs/WAFApi.md#updateWAFRuleset) | **PATCH** /waf/rulesets/{waf_rule_set_id} | Change only select settings of a WAF Rule Set


## Documentation for Models

 - [WebApplicationFirewallApi.CreateNewWAFRulesetRequest](docs/CreateNewWAFRulesetRequest.md)
 - [WebApplicationFirewallApi.Links](docs/Links.md)
 - [WebApplicationFirewallApi.SingleWAF](docs/SingleWAF.md)
 - [WebApplicationFirewallApi.WAFDomainList200](docs/WAFDomainList200.md)
 - [WebApplicationFirewallApi.WAFDomains200](docs/WAFDomains200.md)
 - [WebApplicationFirewallApi.WAFEvents200](docs/WAFEvents200.md)
 - [WebApplicationFirewallApi.WAFEvents200ResultsInner](docs/WAFEvents200ResultsInner.md)
 - [WebApplicationFirewallApi.WAFEvents200ResultsInnerTop10CountriesInner](docs/WAFEvents200ResultsInnerTop10CountriesInner.md)
 - [WebApplicationFirewallApi.WAFEvents400](docs/WAFEvents400.md)
 - [WebApplicationFirewallApi.WAFEvents401](docs/WAFEvents401.md)
 - [WebApplicationFirewallApi.WAFEvents404](docs/WAFEvents404.md)
 - [WebApplicationFirewallApi.WAFList200](docs/WAFList200.md)
 - [WebApplicationFirewallApi.WAFSensitivityChoices](docs/WAFSensitivityChoices.md)
 - [WebApplicationFirewallApi.WAFSingle200](docs/WAFSingle200.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### tokenAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

