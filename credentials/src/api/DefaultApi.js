/**
 * Credentials API
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
import AuthToken from '../model/AuthToken';
import CreateCredentialRequest from '../model/CreateCredentialRequest';
import Response from '../model/Response';
import ResponseWithTotal from '../model/ResponseWithTotal';
import UpdateCredentialRequest from '../model/UpdateCredentialRequest';

/**
* Default service.
* @module api/DefaultApi
* @version 2.0.0
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
     * Callback function to receive the result of the createCredential operation.
     * @callback module:api/DefaultApi~createCredentialCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create credential
     * @param {module:model/CreateCredentialRequest} createCredentialRequest 
     * @param {module:api/DefaultApi~createCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthToken}
     */
    createCredential(createCredentialRequest, callback) {
      let postBody = createCredentialRequest;
      // verify the required parameter 'createCredentialRequest' is set
      if (createCredentialRequest === undefined || createCredentialRequest === null) {
        throw new Error("Missing the required parameter 'createCredentialRequest' when calling createCredential");
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
      let contentTypes = ['application/json; version=3'];
      let accepts = ['application/json; version=3'];
      let returnType = AuthToken;
      return this.apiClient.callApi(
        '/credentials', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCredential operation.
     * @callback module:api/DefaultApi~deleteCredentialCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the Credential
     * @param {Number} credentialId 
     * @param {module:api/DefaultApi~deleteCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCredential(credentialId, callback) {
      let postBody = null;
      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw new Error("Missing the required parameter 'credentialId' when calling deleteCredential");
      }

      let pathParams = {
        'credentialId': credentialId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/credentials/{credentialId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAll operation.
     * @callback module:api/DefaultApi~findAllCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWithTotal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all credentials
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @param {Number} [page] 
     * @param {Number} [pageSize] 
     * @param {String} [sort] 
     * @param {String} [orderBy] 
     * @param {module:api/DefaultApi~findAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseWithTotal}
     */
    findAll(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
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
      let accepts = ['application/json; version=3'];
      let returnType = ResponseWithTotal;
      return this.apiClient.callApi(
        '/credentials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loadCredential operation.
     * @callback module:api/DefaultApi~loadCredentialCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load the Credential
     * @param {Number} credentialId 
     * @param {module:api/DefaultApi~loadCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    loadCredential(credentialId, callback) {
      let postBody = null;
      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw new Error("Missing the required parameter 'credentialId' when calling loadCredential");
      }

      let pathParams = {
        'credentialId': credentialId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json; version=3'];
      let returnType = Response;
      return this.apiClient.callApi(
        '/credentials/{credentialId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCredential operation.
     * @callback module:api/DefaultApi~updateCredentialCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the Credential
     * @param {Number} credentialId 
     * @param {module:model/UpdateCredentialRequest} updateCredentialRequest 
     * @param {module:api/DefaultApi~updateCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    updateCredential(credentialId, updateCredentialRequest, callback) {
      let postBody = updateCredentialRequest;
      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw new Error("Missing the required parameter 'credentialId' when calling updateCredential");
      }
      // verify the required parameter 'updateCredentialRequest' is set
      if (updateCredentialRequest === undefined || updateCredentialRequest === null) {
        throw new Error("Missing the required parameter 'updateCredentialRequest' when calling updateCredential");
      }

      let pathParams = {
        'credentialId': credentialId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json; version=3'];
      let accepts = ['application/json; version=3'];
      let returnType = Response;
      return this.apiClient.callApi(
        '/credentials/{credentialId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
