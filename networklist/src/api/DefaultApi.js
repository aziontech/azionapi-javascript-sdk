/**
 * Network Lists API
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


import ApiClient from "../ApiClient";
import BadRequestResponse from '../model/BadRequestResponse';
import CreateNetworkListsRequest from '../model/CreateNetworkListsRequest';
import ErrorModel from '../model/ErrorModel';
import ListNetworkListsResponse from '../model/ListNetworkListsResponse';
import NetworkListUuidResponse from '../model/NetworkListUuidResponse';
import NetworkListsResponse from '../model/NetworkListsResponse';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the networkListsGet operation.
     * @callback module:api/DefaultApi~networkListsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListNetworkListsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all user Network Lists
     * @param {Object} opts Optional parameters
     * @param {Number} [page] 
     * @param {Number} [pageSize] 
     * @param {String} [sort] 
     * @param {String} [orderBy] 
     * @param {module:api/DefaultApi~networkListsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListNetworkListsResponse}
     */
    networkListsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'sort': opts['sort'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/html'];
      let returnType = ListNetworkListsResponse;
      return this.apiClient.callApi(
        '/network_lists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the networkListsPost operation.
     * @callback module:api/DefaultApi~networkListsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkListsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Network Lists
     * @param {module:model/CreateNetworkListsRequest} createNetworkListsRequest 
     * @param {module:api/DefaultApi~networkListsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkListsResponse}
     */
    networkListsPost(createNetworkListsRequest, callback) {
      let postBody = createNetworkListsRequest;
      // verify the required parameter 'createNetworkListsRequest' is set
      if (createNetworkListsRequest === undefined || createNetworkListsRequest === null) {
        throw new Error("Missing the required parameter 'createNetworkListsRequest' when calling networkListsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'text/html'];
      let returnType = NetworkListsResponse;
      return this.apiClient.callApi(
        '/network_lists', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the networkListsUuidDelete operation.
     * @callback module:api/DefaultApi~networkListsUuidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Network Lists set by uuid
     * @param {String} uuid The id of the networkList to be deleted. 
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {module:api/DefaultApi~networkListsUuidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    networkListsUuidDelete(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling networkListsUuidDelete");
      }

      let pathParams = {
        'uuid': uuid
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
        '/network_lists/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the networkListsUuidGet operation.
     * @callback module:api/DefaultApi~networkListsUuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkListUuidResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Network Lists set by uuid
     * @param {String} uuid 
     * @param {module:api/DefaultApi~networkListsUuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkListUuidResponse}
     */
    networkListsUuidGet(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling networkListsUuidGet");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/html'];
      let returnType = NetworkListUuidResponse;
      return this.apiClient.callApi(
        '/network_lists/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the networkListsUuidPut operation.
     * @callback module:api/DefaultApi~networkListsUuidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkListsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Overwrite some Network Lists attributes
     * @param {String} uuid 
     * @param {module:model/CreateNetworkListsRequest} createNetworkListsRequest 
     * @param {module:api/DefaultApi~networkListsUuidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkListsResponse}
     */
    networkListsUuidPut(uuid, createNetworkListsRequest, callback) {
      let postBody = createNetworkListsRequest;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling networkListsUuidPut");
      }
      // verify the required parameter 'createNetworkListsRequest' is set
      if (createNetworkListsRequest === undefined || createNetworkListsRequest === null) {
        throw new Error("Missing the required parameter 'createNetworkListsRequest' when calling networkListsUuidPut");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'text/html'];
      let returnType = NetworkListsResponse;
      return this.apiClient.callApi(
        '/network_lists/{uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
