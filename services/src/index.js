/**
 * Services API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import CreateResourceRequest from './model/CreateResourceRequest';
import CreateServiceRequest from './model/CreateServiceRequest';
import ResourceDetail from './model/ResourceDetail';
import ResourceResponse from './model/ResourceResponse';
import ServiceResponse from './model/ServiceResponse';
import ServiceResponseWithTotals from './model/ServiceResponseWithTotals';
import UpdateResourceRequest from './model/UpdateResourceRequest';
import UpdateServiceRequest from './model/UpdateServiceRequest';
import Variable from './model/Variable';
import DefaultApi from './api/DefaultApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ServicesApi = require('index'); // See note below*.
* var xxxSvc = new ServicesApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ServicesApi.Yyy(); // Construct a model instance.
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
* var xxxSvc = new ServicesApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ServicesApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CreateResourceRequest model constructor.
     * @property {module:model/CreateResourceRequest}
     */
    CreateResourceRequest,

    /**
     * The CreateServiceRequest model constructor.
     * @property {module:model/CreateServiceRequest}
     */
    CreateServiceRequest,

    /**
     * The ResourceDetail model constructor.
     * @property {module:model/ResourceDetail}
     */
    ResourceDetail,

    /**
     * The ResourceResponse model constructor.
     * @property {module:model/ResourceResponse}
     */
    ResourceResponse,

    /**
     * The ServiceResponse model constructor.
     * @property {module:model/ServiceResponse}
     */
    ServiceResponse,

    /**
     * The ServiceResponseWithTotals model constructor.
     * @property {module:model/ServiceResponseWithTotals}
     */
    ServiceResponseWithTotals,

    /**
     * The UpdateResourceRequest model constructor.
     * @property {module:model/UpdateResourceRequest}
     */
    UpdateResourceRequest,

    /**
     * The UpdateServiceRequest model constructor.
     * @property {module:model/UpdateServiceRequest}
     */
    UpdateServiceRequest,

    /**
     * The Variable model constructor.
     * @property {module:model/Variable}
     */
    Variable,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
