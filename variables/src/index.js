/**
 * Variables API
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
import Variable from './model/Variable';
import VariableCreate from './model/VariableCreate';
import VariableGet from './model/VariableGet';
import VariablesApi from './api/VariablesApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var VariablesApi = require('index'); // See note below*.
* var xxxSvc = new VariablesApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new VariablesApi.Yyy(); // Construct a model instance.
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
* var xxxSvc = new VariablesApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new VariablesApi.Yyy(); // Construct a model instance.
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
     * The Variable model constructor.
     * @property {module:model/Variable}
     */
    Variable,

    /**
     * The VariableCreate model constructor.
     * @property {module:model/VariableCreate}
     */
    VariableCreate,

    /**
     * The VariableGet model constructor.
     * @property {module:model/VariableGet}
     */
    VariableGet,

    /**
    * The VariablesApi service constructor.
    * @property {module:api/VariablesApi}
    */
    VariablesApi
};
