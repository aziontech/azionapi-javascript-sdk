/**
 * Edge Application API
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


import ApiClient from "../ApiClient";
import CreateDeviceGroupsRequest from '../model/CreateDeviceGroupsRequest';
import DeviceGroupsIdResponse from '../model/DeviceGroupsIdResponse';
import DeviceGroupsResponse from '../model/DeviceGroupsResponse';
import PatchDeviceGroupsRequest from '../model/PatchDeviceGroupsRequest';
import UpdateDeviceGroupsRequest from '../model/UpdateDeviceGroupsRequest';

/**
* EdgeApplicationsDeviceGroups service.
* @module api/EdgeApplicationsDeviceGroupsApi
* @version 2.0.0
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
