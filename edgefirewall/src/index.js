/**
 * Edge Firewall API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import CreateEdgeFirewallRequest from './model/CreateEdgeFirewallRequest';
import EdgeFirewall from './model/EdgeFirewall';
import EdgeFirewallResponse from './model/EdgeFirewallResponse';
import Links from './model/Links';
import ListEdgeFirewallResponse from './model/ListEdgeFirewallResponse';
import UpdateEdgeFirewallRequest from './model/UpdateEdgeFirewallRequest';
import DefaultApi from './api/DefaultApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var EdgeFirewallApi = require('index'); // See note below*.
* var xxxSvc = new EdgeFirewallApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new EdgeFirewallApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new EdgeFirewallApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new EdgeFirewallApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CreateEdgeFirewallRequest model constructor.
     * @property {module:model/CreateEdgeFirewallRequest}
     */
    CreateEdgeFirewallRequest,

    /**
     * The EdgeFirewall model constructor.
     * @property {module:model/EdgeFirewall}
     */
    EdgeFirewall,

    /**
     * The EdgeFirewallResponse model constructor.
     * @property {module:model/EdgeFirewallResponse}
     */
    EdgeFirewallResponse,

    /**
     * The Links model constructor.
     * @property {module:model/Links}
     */
    Links,

    /**
     * The ListEdgeFirewallResponse model constructor.
     * @property {module:model/ListEdgeFirewallResponse}
     */
    ListEdgeFirewallResponse,

    /**
     * The UpdateEdgeFirewallRequest model constructor.
     * @property {module:model/UpdateEdgeFirewallRequest}
     */
    UpdateEdgeFirewallRequest,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
