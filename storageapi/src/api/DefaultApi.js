/**
 * Storage API
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
     * Callback function to receive the result of the deleteVersion operation.
     * @callback module:api/DefaultApi~deleteVersionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /storage/:version_id/delete
     * Delete a version. A version is just um path prefix/sub-namespace for a set of files.
     * @param {String} versionId The version identifier
     * @param {module:api/DefaultApi~deleteVersionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteVersion(versionId, callback) {
      let postBody = null;
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling deleteVersion");
      }

      let pathParams = {
        'version_id': versionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/storage/{version_id}/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storageVersionIdPost operation.
     * @callback module:api/DefaultApi~storageVersionIdPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /storage/:version_id
     * Upload file and transfer to remote storage
     * @param {String} xAzionStaticPath Required in order to get the path and file name. i.e.: assets/css/main.css
     * @param {String} versionId 
     * @param {Object} opts Optional parameters
     * @param {String} [contentType = 'b2/x-auto')] The content type of the file (Example: text/plain).
     * @param {File} [body] 
     * @param {module:api/DefaultApi~storageVersionIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    storageVersionIdPost(xAzionStaticPath, versionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'xAzionStaticPath' is set
      if (xAzionStaticPath === undefined || xAzionStaticPath === null) {
        throw new Error("Missing the required parameter 'xAzionStaticPath' when calling storageVersionIdPost");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling storageVersionIdPost");
      }

      let pathParams = {
        'version_id': versionId
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType'],
        'X-Azion-Static-Path': xAzionStaticPath
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/storage/{version_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
