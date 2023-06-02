/**
 * Edge Application
 * ## Welcome to the Azion API!  With the following APIs you can check, remove or update existing settings, besides creating new ones.  * * *  ## Overview  The Azion API is a RESTful API, based on HTTPS requests, that allows you to integrate your systems with our platform, simply, quickly, and securely.  Here you will find instructions on how our API works and what functionality is available.  This documentation is being constantly updated. Make sure you verify if there are any updates or changes before you perform any development in your application, even if you are familiar with our API.  * * *  Both HTTPS requests and responses must be in JavaScript Object Notation (JSON) format. All HTTPS requests and responses must follow these conventions.  **Base URL**  The base URL of the API, which must be used, is:  [**https://api.azionapi.net/_**](https://api.azionapi.net/)  **HTTP Methods**  Each HTTP method defines the type of operation that will be run.  | HTTP Method | CRUD | Whole Collection (e.g. /items) | Specific Item (e.g. /items/:item_id) | | --- | --- | --- | --- | | GET | Read | It retrieves the list of items in a Collection. | It retrieves a specific item in a Collection. | | POST | Create | It creates a new item in the Collection. | \\- | | PUT | Update/Replace | It replaces a whole Collection with a new one. | It replaces an item in a Collection with a new one. | | PATCH | Update/Modify | It partially updates a Collection. | It partially updates an item in a Collection | | DELETE | Delete | It deletes a whole Collection. | It deletes an item in a Collection. |  * * *  **Status Codes**  The HTTP return code defines the status – successful or not – after the requested operation is run.  | Status Code | Meaning | | --- | --- | | 200 OK | General Status for a successful operation. | | 201 CREATED | Successfully created a collection or item, by means of POST or PUT. | | 204 NO CONTENT | Successful operation, but without any content to be return to the Body. Generally used for DELETE or PUT operations. | | 207 MULTI-STATUS | A batch of operations were triggered by a single request, which resulted in different return codes when it was run, for some of the operations. The codes are displayed in the “status” field, in the body of the response, for each sub-batch of operations for whichever are applicable. | | 400 BAD REQUEST | Request error, such as invalid parameters, missing mandatory parameters or others. | | 401 UNAUTHORIZED | Error caused by a missing HTTP Authentication header. | | 403 FORBIDDEN | User does not have the permissions to run the requested operation. | | 404 NOT FOUND | The requested resource does not exist. | | 405 METHOD NOT ALLOWED | The requested method is not applicable with the URL. | | 406 NOT ACCEPTABLE | Accept header missing from the HTTP request or the header contains formatting or the version is not supported by the API. | | 409 CONFLICT | Conflict generated in running the request, such as a request to create an already existing record. | | 429 TOO MANY REQUESTS | The request was temporarily rejected, due to exceeding the limit on operations. Wait for the time defined in the X-Ratelimit-Reset header and try again. | | 500 INTERNAL SERVER ERROR | Unintentional error, due to an unidentified failure in the request process. | | \\--- |  | | **HTTP Headers** |  |  All requests must be generated with the HTTP header specifying the desired code format for responses and the API version used. The current version of the API is 3 and the format is application/json.  ``` Accept: application/json; version=3  ```  * * *  **Rate Limit**  The limit of operations that can be run via the API is defined by 3 HTTP response headers:  *   **X-ratelimit-limit:** number of operations allowed in one time-frame; *   **X-ratelimit-remaining:** number of operations still available in one time-frame; *   **X-ratelimit-reset:** is the date and time, in IOS 8601 format, which represents the point in the future when the time-frame will be closed and when the limits will, therefore, be reset.       Example of HTTP response headers and a request:  ``` Date: Thu, 02 Nov 2017 12:30:28 GMT X-ratelimit-remaining: 199 X-ratelimit-limit: 200 X-ratelimit-reset: 2017-11-02T12:31:28.675446  ```  In the example provided, 200 operations are allowed within a 1-minute time frame. Of those, there are 199 still available, because one has already been run. The total limit will be reset after 1 minute.  When the X-ratelimit-limit is reached, or in other words, when the X-ratelimit-remaining reaches zero, the API will give the error, HTTP 429 TOO MANY REQUESTS. If your application receives this error, you will need to wait until the time defined in X-ratelimit-reset has passed, to make another request.  *   **X-ratelimit-limit by product**       The *X-ratelimit limit* variations by product are the following:  *   **Real-Time Metrics:** 20 requests per minute. *   **Real-Time Purge:** 200 requests per minute; except for the Wildcard, which is 2000 a day.       > The rate-limit values are based on the client_id.  * * *  **Optional Parameters**  In this version, it is possible to include some optional parameters as part of the GET method, which can help and modify the form in which your data will be returned.  You can combine these parameters to get the result you want.  They are:  | Parameter | Description | Accepted values: | | --- | --- | --- | | order_by | Identifies which field the return should be sorted by. The default ordering is ascending. | Depends on the fields available from the endpoint structure | | sort | Defines which ordering to be used: ascending or descending. | asc  <br>  <br>desc | | page | Identifies which page should be returned, if the return is paginated. The default value is 1. | Page number. | | page_size | Identifies how many items should be returned per page. The default value is 10. | Desired number of items. |  * * *  **Request Exemple**  You can use one parameter, or a combination. See the example below, which uses all of them in the same request.  ``` GET /domains?order_by=name&page_size=20&sort=desc&page=3 Accept: application/json; version=3 Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75  ```  * * *  # Authentication  Authentication and authorization of operations via Azion API is done through Tokens.  The first step is to create the Token through authenticating a user registered in [Real-Time Manager](https://sso.azion.com/login).  * * *  ## Encoding Username and Password in Base64  Only token creation and cancelling operations are performed through Basic Authentication, that is, with a username and password. You can create and cancel the token through the API itself, but for that you need to encode your username and password in base64.  Base64 encoding can be done from the command line on a Unix terminal:  ``` $ echo 'user@domain:password'|base64 dXNlckBkb21haW46cGFzc3dvcmQK  ```  If you do not have a Unix terminal available, you can use the free online service at [https://www.base64encode.org/](https://www.base64encode.org/)
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
import ApplicationCacheCreateRequest from './model/ApplicationCacheCreateRequest';
import ApplicationCacheCreateResponse from './model/ApplicationCacheCreateResponse';
import ApplicationCacheCreateResults from './model/ApplicationCacheCreateResults';
import ApplicationCacheGetOneResponse from './model/ApplicationCacheGetOneResponse';
import ApplicationCacheGetResponse from './model/ApplicationCacheGetResponse';
import ApplicationCachePatchRequest from './model/ApplicationCachePatchRequest';
import ApplicationCachePatchResponse from './model/ApplicationCachePatchResponse';
import ApplicationCachePutRequest from './model/ApplicationCachePutRequest';
import ApplicationCachePutResponse from './model/ApplicationCachePutResponse';
import ApplicationCacheResponseDetails from './model/ApplicationCacheResponseDetails';
import ApplicationCacheResults from './model/ApplicationCacheResults';
import ApplicationCreateInstanceRequest from './model/ApplicationCreateInstanceRequest';
import ApplicationInstanceResults from './model/ApplicationInstanceResults';
import ApplicationInstancesGetOneResponse from './model/ApplicationInstancesGetOneResponse';
import ApplicationInstancesGetResponse from './model/ApplicationInstancesGetResponse';
import ApplicationInstancesResults from './model/ApplicationInstancesResults';
import ApplicationLinks from './model/ApplicationLinks';
import ApplicationOrigins from './model/ApplicationOrigins';
import ApplicationPutInstanceRequest from './model/ApplicationPutInstanceRequest';
import ApplicationPutRequest from './model/ApplicationPutRequest';
import ApplicationPutResult from './model/ApplicationPutResult';
import ApplicationResults from './model/ApplicationResults';
import ApplicationResultsCreate from './model/ApplicationResultsCreate';
import ApplicationUpdateInstanceRequest from './model/ApplicationUpdateInstanceRequest';
import ApplicationUpdateRequest from './model/ApplicationUpdateRequest';
import ApplicationUpdateResponse from './model/ApplicationUpdateResponse';
import ApplicationUpdateResults from './model/ApplicationUpdateResults';
import ApplicationsResults from './model/ApplicationsResults';
import CreateApplicationRequest from './model/CreateApplicationRequest';
import CreateApplicationResult from './model/CreateApplicationResult';
import CreateDeviceGroupsRequest from './model/CreateDeviceGroupsRequest';
import CreateOriginsRequest from './model/CreateOriginsRequest';
import CreateOriginsRequestAddresses from './model/CreateOriginsRequestAddresses';
import CreateRulesEngineRequest from './model/CreateRulesEngineRequest';
import DeviceGroupsIdResponse from './model/DeviceGroupsIdResponse';
import DeviceGroupsResponse from './model/DeviceGroupsResponse';
import DeviceGroupsResponseLinks from './model/DeviceGroupsResponseLinks';
import DeviceGroupsResultResponse from './model/DeviceGroupsResultResponse';
import GetApplicationResponse from './model/GetApplicationResponse';
import GetApplicationsResponse from './model/GetApplicationsResponse';
import OriginsIdResponse from './model/OriginsIdResponse';
import OriginsResponse from './model/OriginsResponse';
import OriginsResponseLinks from './model/OriginsResponseLinks';
import OriginsResultResponse from './model/OriginsResultResponse';
import OriginsResultResponseAddresses from './model/OriginsResultResponseAddresses';
import PatchDeviceGroupsRequest from './model/PatchDeviceGroupsRequest';
import PatchOriginsRequest from './model/PatchOriginsRequest';
import PatchRulesEngineRequest from './model/PatchRulesEngineRequest';
import RulesEngineBehavior from './model/RulesEngineBehavior';
import RulesEngineCriteria from './model/RulesEngineCriteria';
import RulesEngineIdResponse from './model/RulesEngineIdResponse';
import RulesEngineResponse from './model/RulesEngineResponse';
import RulesEngineResultResponse from './model/RulesEngineResultResponse';
import RulesEngineResultResponseBehaviors from './model/RulesEngineResultResponseBehaviors';
import UpdateDeviceGroupsRequest from './model/UpdateDeviceGroupsRequest';
import UpdateOriginsRequest from './model/UpdateOriginsRequest';
import UpdateRulesEngineRequest from './model/UpdateRulesEngineRequest';
import EdgeApplicationsCacheSettingsApi from './api/EdgeApplicationsCacheSettingsApi';
import EdgeApplicationsDeviceGroupsApi from './api/EdgeApplicationsDeviceGroupsApi';
import EdgeApplicationsEdgeFunctionsInstancesApi from './api/EdgeApplicationsEdgeFunctionsInstancesApi';
import EdgeApplicationsMainSettingsApi from './api/EdgeApplicationsMainSettingsApi';
import EdgeApplicationsOriginsApi from './api/EdgeApplicationsOriginsApi';
import EdgeApplicationsRulesEngineApi from './api/EdgeApplicationsRulesEngineApi';


/**
* ## Welcome to the Azion API!  With the following APIs you can check, remove or update existing settings, besides creating new ones.  * * *  ## Overview  The Azion API is a RESTful API, based on HTTPS requests, that allows you to integrate your systems with our platform, simply, quickly, and securely.  Here you will find instructions on how our API works and what functionality is available.  This documentation is being constantly updated. Make sure you verify if there are any updates or changes before you perform any development in your application, even if you are familiar with our API.  * * *  Both HTTPS requests and responses must be in JavaScript Object Notation (JSON) format. All HTTPS requests and responses must follow these conventions.  **Base URL**  The base URL of the API, which must be used, is:  [**https://api.azionapi.net/_**](https://api.azionapi.net/)  **HTTP Methods**  Each HTTP method defines the type of operation that will be run.  | HTTP Method | CRUD | Whole Collection (e.g. /items) | Specific Item (e.g. /items/:item_id) | | --- | --- | --- | --- | | GET | Read | It retrieves the list of items in a Collection. | It retrieves a specific item in a Collection. | | POST | Create | It creates a new item in the Collection. | \\- | | PUT | Update/Replace | It replaces a whole Collection with a new one. | It replaces an item in a Collection with a new one. | | PATCH | Update/Modify | It partially updates a Collection. | It partially updates an item in a Collection | | DELETE | Delete | It deletes a whole Collection. | It deletes an item in a Collection. |  * * *  **Status Codes**  The HTTP return code defines the status – successful or not – after the requested operation is run.  | Status Code | Meaning | | --- | --- | | 200 OK | General Status for a successful operation. | | 201 CREATED | Successfully created a collection or item, by means of POST or PUT. | | 204 NO CONTENT | Successful operation, but without any content to be return to the Body. Generally used for DELETE or PUT operations. | | 207 MULTI-STATUS | A batch of operations were triggered by a single request, which resulted in different return codes when it was run, for some of the operations. The codes are displayed in the “status” field, in the body of the response, for each sub-batch of operations for whichever are applicable. | | 400 BAD REQUEST | Request error, such as invalid parameters, missing mandatory parameters or others. | | 401 UNAUTHORIZED | Error caused by a missing HTTP Authentication header. | | 403 FORBIDDEN | User does not have the permissions to run the requested operation. | | 404 NOT FOUND | The requested resource does not exist. | | 405 METHOD NOT ALLOWED | The requested method is not applicable with the URL. | | 406 NOT ACCEPTABLE | Accept header missing from the HTTP request or the header contains formatting or the version is not supported by the API. | | 409 CONFLICT | Conflict generated in running the request, such as a request to create an already existing record. | | 429 TOO MANY REQUESTS | The request was temporarily rejected, due to exceeding the limit on operations. Wait for the time defined in the X-Ratelimit-Reset header and try again. | | 500 INTERNAL SERVER ERROR | Unintentional error, due to an unidentified failure in the request process. | | \\--- |  | | **HTTP Headers** |  |  All requests must be generated with the HTTP header specifying the desired code format for responses and the API version used. The current version of the API is 3 and the format is application/json.  &#x60;&#x60;&#x60; Accept: application/json; version&#x3D;3  &#x60;&#x60;&#x60;  * * *  **Rate Limit**  The limit of operations that can be run via the API is defined by 3 HTTP response headers:  *   **X-ratelimit-limit:** number of operations allowed in one time-frame; *   **X-ratelimit-remaining:** number of operations still available in one time-frame; *   **X-ratelimit-reset:** is the date and time, in IOS 8601 format, which represents the point in the future when the time-frame will be closed and when the limits will, therefore, be reset.       Example of HTTP response headers and a request:  &#x60;&#x60;&#x60; Date: Thu, 02 Nov 2017 12:30:28 GMT X-ratelimit-remaining: 199 X-ratelimit-limit: 200 X-ratelimit-reset: 2017-11-02T12:31:28.675446  &#x60;&#x60;&#x60;  In the example provided, 200 operations are allowed within a 1-minute time frame. Of those, there are 199 still available, because one has already been run. The total limit will be reset after 1 minute.  When the X-ratelimit-limit is reached, or in other words, when the X-ratelimit-remaining reaches zero, the API will give the error, HTTP 429 TOO MANY REQUESTS. If your application receives this error, you will need to wait until the time defined in X-ratelimit-reset has passed, to make another request.  *   **X-ratelimit-limit by product**       The *X-ratelimit limit* variations by product are the following:  *   **Real-Time Metrics:** 20 requests per minute. *   **Real-Time Purge:** 200 requests per minute; except for the Wildcard, which is 2000 a day.       &gt; The rate-limit values are based on the client_id.  * * *  **Optional Parameters**  In this version, it is possible to include some optional parameters as part of the GET method, which can help and modify the form in which your data will be returned.  You can combine these parameters to get the result you want.  They are:  | Parameter | Description | Accepted values: | | --- | --- | --- | | order_by | Identifies which field the return should be sorted by. The default ordering is ascending. | Depends on the fields available from the endpoint structure | | sort | Defines which ordering to be used: ascending or descending. | asc  &lt;br&gt;  &lt;br&gt;desc | | page | Identifies which page should be returned, if the return is paginated. The default value is 1. | Page number. | | page_size | Identifies how many items should be returned per page. The default value is 10. | Desired number of items. |  * * *  **Request Exemple**  You can use one parameter, or a combination. See the example below, which uses all of them in the same request.  &#x60;&#x60;&#x60; GET /domains?order_by&#x3D;name&amp;page_size&#x3D;20&amp;sort&#x3D;desc&amp;page&#x3D;3 Accept: application/json; version&#x3D;3 Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75  &#x60;&#x60;&#x60;  * * *  # Authentication  Authentication and authorization of operations via Azion API is done through Tokens.  The first step is to create the Token through authenticating a user registered in [Real-Time Manager](https://sso.azion.com/login).  * * *  ## Encoding Username and Password in Base64  Only token creation and cancelling operations are performed through Basic Authentication, that is, with a username and password. You can create and cancel the token through the API itself, but for that you need to encode your username and password in base64.  Base64 encoding can be done from the command line on a Unix terminal:  &#x60;&#x60;&#x60; $ echo &#39;user@domain:password&#39;|base64 dXNlckBkb21haW46cGFzc3dvcmQK  &#x60;&#x60;&#x60;  If you do not have a Unix terminal available, you can use the free online service at [https://www.base64encode.org/](https://www.base64encode.org/).<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var EdgeApplication = require('index'); // See note below*.
* var xxxSvc = new EdgeApplication.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new EdgeApplication.Yyy(); // Construct a model instance.
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
* var xxxSvc = new EdgeApplication.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new EdgeApplication.Yyy(); // Construct a model instance.
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
     * The ApplicationCacheCreateRequest model constructor.
     * @property {module:model/ApplicationCacheCreateRequest}
     */
    ApplicationCacheCreateRequest,

    /**
     * The ApplicationCacheCreateResponse model constructor.
     * @property {module:model/ApplicationCacheCreateResponse}
     */
    ApplicationCacheCreateResponse,

    /**
     * The ApplicationCacheCreateResults model constructor.
     * @property {module:model/ApplicationCacheCreateResults}
     */
    ApplicationCacheCreateResults,

    /**
     * The ApplicationCacheGetOneResponse model constructor.
     * @property {module:model/ApplicationCacheGetOneResponse}
     */
    ApplicationCacheGetOneResponse,

    /**
     * The ApplicationCacheGetResponse model constructor.
     * @property {module:model/ApplicationCacheGetResponse}
     */
    ApplicationCacheGetResponse,

    /**
     * The ApplicationCachePatchRequest model constructor.
     * @property {module:model/ApplicationCachePatchRequest}
     */
    ApplicationCachePatchRequest,

    /**
     * The ApplicationCachePatchResponse model constructor.
     * @property {module:model/ApplicationCachePatchResponse}
     */
    ApplicationCachePatchResponse,

    /**
     * The ApplicationCachePutRequest model constructor.
     * @property {module:model/ApplicationCachePutRequest}
     */
    ApplicationCachePutRequest,

    /**
     * The ApplicationCachePutResponse model constructor.
     * @property {module:model/ApplicationCachePutResponse}
     */
    ApplicationCachePutResponse,

    /**
     * The ApplicationCacheResponseDetails model constructor.
     * @property {module:model/ApplicationCacheResponseDetails}
     */
    ApplicationCacheResponseDetails,

    /**
     * The ApplicationCacheResults model constructor.
     * @property {module:model/ApplicationCacheResults}
     */
    ApplicationCacheResults,

    /**
     * The ApplicationCreateInstanceRequest model constructor.
     * @property {module:model/ApplicationCreateInstanceRequest}
     */
    ApplicationCreateInstanceRequest,

    /**
     * The ApplicationInstanceResults model constructor.
     * @property {module:model/ApplicationInstanceResults}
     */
    ApplicationInstanceResults,

    /**
     * The ApplicationInstancesGetOneResponse model constructor.
     * @property {module:model/ApplicationInstancesGetOneResponse}
     */
    ApplicationInstancesGetOneResponse,

    /**
     * The ApplicationInstancesGetResponse model constructor.
     * @property {module:model/ApplicationInstancesGetResponse}
     */
    ApplicationInstancesGetResponse,

    /**
     * The ApplicationInstancesResults model constructor.
     * @property {module:model/ApplicationInstancesResults}
     */
    ApplicationInstancesResults,

    /**
     * The ApplicationLinks model constructor.
     * @property {module:model/ApplicationLinks}
     */
    ApplicationLinks,

    /**
     * The ApplicationOrigins model constructor.
     * @property {module:model/ApplicationOrigins}
     */
    ApplicationOrigins,

    /**
     * The ApplicationPutInstanceRequest model constructor.
     * @property {module:model/ApplicationPutInstanceRequest}
     */
    ApplicationPutInstanceRequest,

    /**
     * The ApplicationPutRequest model constructor.
     * @property {module:model/ApplicationPutRequest}
     */
    ApplicationPutRequest,

    /**
     * The ApplicationPutResult model constructor.
     * @property {module:model/ApplicationPutResult}
     */
    ApplicationPutResult,

    /**
     * The ApplicationResults model constructor.
     * @property {module:model/ApplicationResults}
     */
    ApplicationResults,

    /**
     * The ApplicationResultsCreate model constructor.
     * @property {module:model/ApplicationResultsCreate}
     */
    ApplicationResultsCreate,

    /**
     * The ApplicationUpdateInstanceRequest model constructor.
     * @property {module:model/ApplicationUpdateInstanceRequest}
     */
    ApplicationUpdateInstanceRequest,

    /**
     * The ApplicationUpdateRequest model constructor.
     * @property {module:model/ApplicationUpdateRequest}
     */
    ApplicationUpdateRequest,

    /**
     * The ApplicationUpdateResponse model constructor.
     * @property {module:model/ApplicationUpdateResponse}
     */
    ApplicationUpdateResponse,

    /**
     * The ApplicationUpdateResults model constructor.
     * @property {module:model/ApplicationUpdateResults}
     */
    ApplicationUpdateResults,

    /**
     * The ApplicationsResults model constructor.
     * @property {module:model/ApplicationsResults}
     */
    ApplicationsResults,

    /**
     * The CreateApplicationRequest model constructor.
     * @property {module:model/CreateApplicationRequest}
     */
    CreateApplicationRequest,

    /**
     * The CreateApplicationResult model constructor.
     * @property {module:model/CreateApplicationResult}
     */
    CreateApplicationResult,

    /**
     * The CreateDeviceGroupsRequest model constructor.
     * @property {module:model/CreateDeviceGroupsRequest}
     */
    CreateDeviceGroupsRequest,

    /**
     * The CreateOriginsRequest model constructor.
     * @property {module:model/CreateOriginsRequest}
     */
    CreateOriginsRequest,

    /**
     * The CreateOriginsRequestAddresses model constructor.
     * @property {module:model/CreateOriginsRequestAddresses}
     */
    CreateOriginsRequestAddresses,

    /**
     * The CreateRulesEngineRequest model constructor.
     * @property {module:model/CreateRulesEngineRequest}
     */
    CreateRulesEngineRequest,

    /**
     * The DeviceGroupsIdResponse model constructor.
     * @property {module:model/DeviceGroupsIdResponse}
     */
    DeviceGroupsIdResponse,

    /**
     * The DeviceGroupsResponse model constructor.
     * @property {module:model/DeviceGroupsResponse}
     */
    DeviceGroupsResponse,

    /**
     * The DeviceGroupsResponseLinks model constructor.
     * @property {module:model/DeviceGroupsResponseLinks}
     */
    DeviceGroupsResponseLinks,

    /**
     * The DeviceGroupsResultResponse model constructor.
     * @property {module:model/DeviceGroupsResultResponse}
     */
    DeviceGroupsResultResponse,

    /**
     * The GetApplicationResponse model constructor.
     * @property {module:model/GetApplicationResponse}
     */
    GetApplicationResponse,

    /**
     * The GetApplicationsResponse model constructor.
     * @property {module:model/GetApplicationsResponse}
     */
    GetApplicationsResponse,

    /**
     * The OriginsIdResponse model constructor.
     * @property {module:model/OriginsIdResponse}
     */
    OriginsIdResponse,

    /**
     * The OriginsResponse model constructor.
     * @property {module:model/OriginsResponse}
     */
    OriginsResponse,

    /**
     * The OriginsResponseLinks model constructor.
     * @property {module:model/OriginsResponseLinks}
     */
    OriginsResponseLinks,

    /**
     * The OriginsResultResponse model constructor.
     * @property {module:model/OriginsResultResponse}
     */
    OriginsResultResponse,

    /**
     * The OriginsResultResponseAddresses model constructor.
     * @property {module:model/OriginsResultResponseAddresses}
     */
    OriginsResultResponseAddresses,

    /**
     * The PatchDeviceGroupsRequest model constructor.
     * @property {module:model/PatchDeviceGroupsRequest}
     */
    PatchDeviceGroupsRequest,

    /**
     * The PatchOriginsRequest model constructor.
     * @property {module:model/PatchOriginsRequest}
     */
    PatchOriginsRequest,

    /**
     * The PatchRulesEngineRequest model constructor.
     * @property {module:model/PatchRulesEngineRequest}
     */
    PatchRulesEngineRequest,

    /**
     * The RulesEngineBehavior model constructor.
     * @property {module:model/RulesEngineBehavior}
     */
    RulesEngineBehavior,

    /**
     * The RulesEngineCriteria model constructor.
     * @property {module:model/RulesEngineCriteria}
     */
    RulesEngineCriteria,

    /**
     * The RulesEngineIdResponse model constructor.
     * @property {module:model/RulesEngineIdResponse}
     */
    RulesEngineIdResponse,

    /**
     * The RulesEngineResponse model constructor.
     * @property {module:model/RulesEngineResponse}
     */
    RulesEngineResponse,

    /**
     * The RulesEngineResultResponse model constructor.
     * @property {module:model/RulesEngineResultResponse}
     */
    RulesEngineResultResponse,

    /**
     * The RulesEngineResultResponseBehaviors model constructor.
     * @property {module:model/RulesEngineResultResponseBehaviors}
     */
    RulesEngineResultResponseBehaviors,

    /**
     * The UpdateDeviceGroupsRequest model constructor.
     * @property {module:model/UpdateDeviceGroupsRequest}
     */
    UpdateDeviceGroupsRequest,

    /**
     * The UpdateOriginsRequest model constructor.
     * @property {module:model/UpdateOriginsRequest}
     */
    UpdateOriginsRequest,

    /**
     * The UpdateRulesEngineRequest model constructor.
     * @property {module:model/UpdateRulesEngineRequest}
     */
    UpdateRulesEngineRequest,

    /**
    * The EdgeApplicationsCacheSettingsApi service constructor.
    * @property {module:api/EdgeApplicationsCacheSettingsApi}
    */
    EdgeApplicationsCacheSettingsApi,

    /**
    * The EdgeApplicationsDeviceGroupsApi service constructor.
    * @property {module:api/EdgeApplicationsDeviceGroupsApi}
    */
    EdgeApplicationsDeviceGroupsApi,

    /**
    * The EdgeApplicationsEdgeFunctionsInstancesApi service constructor.
    * @property {module:api/EdgeApplicationsEdgeFunctionsInstancesApi}
    */
    EdgeApplicationsEdgeFunctionsInstancesApi,

    /**
    * The EdgeApplicationsMainSettingsApi service constructor.
    * @property {module:api/EdgeApplicationsMainSettingsApi}
    */
    EdgeApplicationsMainSettingsApi,

    /**
    * The EdgeApplicationsOriginsApi service constructor.
    * @property {module:api/EdgeApplicationsOriginsApi}
    */
    EdgeApplicationsOriginsApi,

    /**
    * The EdgeApplicationsRulesEngineApi service constructor.
    * @property {module:api/EdgeApplicationsRulesEngineApi}
    */
    EdgeApplicationsRulesEngineApi
};
