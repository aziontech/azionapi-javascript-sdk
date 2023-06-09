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
import CreateDeviceGroupsRequest from '../model/CreateDeviceGroupsRequest';
import DeviceGroupsIdResponse from '../model/DeviceGroupsIdResponse';
import DeviceGroupsResponse from '../model/DeviceGroupsResponse';
import PatchDeviceGroupsRequest from '../model/PatchDeviceGroupsRequest';
import UpdateDeviceGroupsRequest from '../model/UpdateDeviceGroupsRequest';

/**
* EdgeApplicationsDeviceGroups service.
* @module api/EdgeApplicationsDeviceGroupsApi
* @version 1.0.0
*/
export default class EdgeApplicationsDeviceGroupsApi {

    /**
    * Constructs a new EdgeApplicationsDeviceGroupsApi. 
    * @alias module:api/EdgeApplicationsDeviceGroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete operation.
     * @callback module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/{edge_application_id}/device_groups/{device_group_id}
     * @param {Number} edgeApplicationId 
     * @param {Number} deviceGroupId 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] The id of the Device Groups that you plan to delete.
     * @param {module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete(edgeApplicationId, deviceGroupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete");
      }
      // verify the required parameter 'deviceGroupId' is set
      if (deviceGroupId === undefined || deviceGroupId === null) {
        throw new Error("Missing the required parameter 'deviceGroupId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdDelete");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId,
        'device_group_id': deviceGroupId
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/device_groups/{device_group_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet operation.
     * @callback module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceGroupsIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/{edge_application_id}/device_groups/{device_group_id}
     * @param {Number} edgeApplicationId 
     * @param {Number} deviceGroupId 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] The id of the Device Groups that you plan to query.
     * @param {module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceGroupsIdResponse}
     */
    edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet(edgeApplicationId, deviceGroupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet");
      }
      // verify the required parameter 'deviceGroupId' is set
      if (deviceGroupId === undefined || deviceGroupId === null) {
        throw new Error("Missing the required parameter 'deviceGroupId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdGet");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId,
        'device_group_id': deviceGroupId
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
      let returnType = DeviceGroupsIdResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/device_groups/{device_group_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch operation.
     * @callback module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceGroupsIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/{edge_application_id}/device_groups/{device_group_id}
     * @param {Number} edgeApplicationId 
     * @param {Number} deviceGroupId 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {String} [contentType] The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
     * @param {module:model/PatchDeviceGroupsRequest} [patchDeviceGroupsRequest] 
     * @param {module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceGroupsIdResponse}
     */
    edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch(edgeApplicationId, deviceGroupId, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchDeviceGroupsRequest'];
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch");
      }
      // verify the required parameter 'deviceGroupId' is set
      if (deviceGroupId === undefined || deviceGroupId === null) {
        throw new Error("Missing the required parameter 'deviceGroupId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPatch");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId,
        'device_group_id': deviceGroupId
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
      let returnType = DeviceGroupsIdResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/device_groups/{device_group_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut operation.
     * @callback module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceGroupsIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/{edge_application_id}/device_groups/{device_group_id}
     * @param {Number} edgeApplicationId 
     * @param {Number} deviceGroupId 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {String} [contentType] The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
     * @param {module:model/UpdateDeviceGroupsRequest} [updateDeviceGroupsRequest] 
     * @param {module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceGroupsIdResponse}
     */
    edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut(edgeApplicationId, deviceGroupId, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateDeviceGroupsRequest'];
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut");
      }
      // verify the required parameter 'deviceGroupId' is set
      if (deviceGroupId === undefined || deviceGroupId === null) {
        throw new Error("Missing the required parameter 'deviceGroupId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsDeviceGroupIdPut");
      }

      let pathParams = {
        'edge_application_id': edgeApplicationId,
        'device_group_id': deviceGroupId
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
      let returnType = DeviceGroupsIdResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/device_groups/{device_group_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdDeviceGroupsGet operation.
     * @callback module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceGroupsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/{edge_application_id}/device_groups
     * @param {Number} edgeApplicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} [page] 
     * @param {Number} [pageSize] 
     * @param {String} [filter] 
     * @param {String} [orderBy] 
     * @param {String} [sort] 
     * @param {String} [accept] 
     * @param {module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceGroupsResponse}
     */
    edgeApplicationsEdgeApplicationIdDeviceGroupsGet(edgeApplicationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsGet");
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
      let returnType = DeviceGroupsResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/device_groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeApplicationsEdgeApplicationIdDeviceGroupsPost operation.
     * @callback module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceGroupsIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /edge_applications/{edge_application_id}/device_groups
     * @param {Number} edgeApplicationId 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {String} [contentType] The type of coding used in the Body (application/json). <br>  Example: Content-Type: application/json
     * @param {module:model/CreateDeviceGroupsRequest} [createDeviceGroupsRequest] 
     * @param {module:api/EdgeApplicationsDeviceGroupsApi~edgeApplicationsEdgeApplicationIdDeviceGroupsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceGroupsIdResponse}
     */
    edgeApplicationsEdgeApplicationIdDeviceGroupsPost(edgeApplicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createDeviceGroupsRequest'];
      // verify the required parameter 'edgeApplicationId' is set
      if (edgeApplicationId === undefined || edgeApplicationId === null) {
        throw new Error("Missing the required parameter 'edgeApplicationId' when calling edgeApplicationsEdgeApplicationIdDeviceGroupsPost");
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
      let returnType = DeviceGroupsIdResponse;
      return this.apiClient.callApi(
        '/edge_applications/{edge_application_id}/device_groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
