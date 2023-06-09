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


import ApiClient from "../ApiClient";
import ApplicationCacheCreateRequest from '../model/ApplicationCacheCreateRequest';
import ApplicationCacheCreateResponse from '../model/ApplicationCacheCreateResponse';
import ApplicationCacheGetOneResponse from '../model/ApplicationCacheGetOneResponse';
import ApplicationCacheGetResponse from '../model/ApplicationCacheGetResponse';
import ApplicationCachePatchRequest from '../model/ApplicationCachePatchRequest';
import ApplicationCachePatchResponse from '../model/ApplicationCachePatchResponse';
import ApplicationCachePutRequest from '../model/ApplicationCachePutRequest';
import ApplicationCachePutResponse from '../model/ApplicationCachePutResponse';

/**
* EdgeApplicationsCacheSettings service.
* @module api/EdgeApplicationsCacheSettingsApi
* @version 1.0.0
*/
export default class EdgeApplicationsCacheSettingsApi {

    /**
    * Constructs a new EdgeApplicationsCacheSettingsApi. 
    * @alias module:api/EdgeApplicationsCacheSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsDelete operation.
     * @callback module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/:edge_application_id:/cache_settings/:cache_settings:
     * @param {Number} edgeApplicationId 
     * @param {Number} cacheSettings 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {String} [contentType] The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
     * @param {module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsDelete(edgeApplicationId, cacheSettings, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsDelete");
      }
      // verify the required parameter 'cacheSettings' is set
      if (cacheSettings === undefined || cacheSettings === null) {
        throw new Error("Missing the required parameter 'cacheSettings' when calling edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsDelete");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId,
        'cache_settings': cacheSettings
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/cache_settings/{cache_settings}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet operation.
     * @callback module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationCacheGetOneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:
     * @param {Number} edgeApplicationId 
     * @param {Number} cacheSettingsId 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationCacheGetOneResponse}
     */
    edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet(edgeApplicationId, cacheSettingsId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet");
      }
      // verify the required parameter 'cacheSettingsId' is set
      if (cacheSettingsId === undefined || cacheSettingsId === null) {
        throw new Error("Missing the required parameter 'cacheSettingsId' when calling edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdGet");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId,
        'cache_settings_id': cacheSettingsId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept']
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json; version=3'];
      let returnType = ApplicationCacheGetOneResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/cache_settings/{cache_settings_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut operation.
     * @callback module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationCachePutResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/:edge_application_id:/cache_settings/ca
     * @param {Number} edgeApplicationId 
     * @param {Number} cacheSettingsId 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {String} [contentType] The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
     * @param {module:model/ApplicationCachePutRequest} [applicationCachePutRequest] 
     * @param {module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationCachePutResponse}
     */
    edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut(edgeApplicationId, cacheSettingsId, opts, callback) {
      opts = opts || {};
      let postBody = opts['applicationCachePutRequest'];
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut");
      }
      // verify the required parameter 'cacheSettingsId' is set
      if (cacheSettingsId === undefined || cacheSettingsId === null) {
        throw new Error("Missing the required parameter 'cacheSettingsId' when calling edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsIdPut");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId,
        'cache_settings_id': cacheSettingsId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json; version=3'];
      let accepts = ['application/json; version=3'];
      let returnType = ApplicationCachePutResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/cache_settings/{cache_settings_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsPatch operation.
     * @callback module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationCachePatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:
     * @param {Number} edgeApplicationId 
     * @param {Number} cacheSettings 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {module:model/ApplicationCachePatchRequest} [applicationCachePatchRequest] 
     * @param {module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationCachePatchResponse}
     */
    edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsPatch(edgeApplicationId, cacheSettings, opts, callback) {
      opts = opts || {};
      let postBody = opts['applicationCachePatchRequest'];
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsPatch");
      }
      // verify the required parameter 'cacheSettings' is set
      if (cacheSettings === undefined || cacheSettings === null) {
        throw new Error("Missing the required parameter 'cacheSettings' when calling edgeApplicationsEdgeApplicationIdCacheSettingsCacheSettingsPatch");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId,
        'cache_settings': cacheSettings
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept']
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json; version=3'];
      let accepts = ['application/json; version=3'];
      let returnType = ApplicationCachePatchResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/cache_settings/{cache_settings}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdCacheSettingsGet operation.
     * @callback module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationCacheGetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/{edge_application_id}/cache_settings
     * @param {Number} edgeApplicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} [page] 
     * @param {Number} [pageSize] 
     * @param {String} [filter] 
     * @param {String} [orderBy] 
     * @param {String} [sort] 
     * @param {String} [accept] 
     * @param {module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationCacheGetResponse}
     */
    edgeApplicationsEdgeApplicationIdCacheSettingsGet(edgeApplicationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdCacheSettingsGet");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'sort': opts['sort']
      };
      let headerParams = {
        'Accept': opts['accept']
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json; version=3'];
      let returnType = ApplicationCacheGetResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/cache_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdCacheSettingsPost operation.
     * @callback module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationCacheCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/:edge_application_id:/cache_settings
     * @param {Number} edgeApplicationId 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {String} [contentType] The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
     * @param {module:model/ApplicationCacheCreateRequest} [applicationCacheCreateRequest] 
     * @param {module:api/EdgeApplicationsCacheSettingsApi~edgeApplicationsEdgeApplicationIdCacheSettingsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationCacheCreateResponse}
     */
    edgeApplicationsEdgeApplicationIdCacheSettingsPost(edgeApplicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['applicationCacheCreateRequest'];
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdCacheSettingsPost");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json; version=3'];
      let accepts = ['application/json; version=3'];
      let returnType = ApplicationCacheCreateResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/cache_settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
