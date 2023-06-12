/**
 * Purge API
 * Azion Real-Time Purge
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
import PurgeCacheKeyRequest from '../model/PurgeCacheKeyRequest';
import PurgeUrlRequest from '../model/PurgeUrlRequest';
import PurgeWildcardRequest from '../model/PurgeWildcardRequest';

/**
* RealTimePurge service.
* @module api/RealTimePurgeApi
* @version 1.0.0
*/
export default class RealTimePurgeApi {

    /**
    * Constructs a new RealTimePurgeApi. 
    * @alias module:api/RealTimePurgeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the purgeCacheKey operation.
     * @callback module:api/RealTimePurgeApi~purgeCacheKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /purge/cachekey
     * List of Cache Keys you want to remove from the Azion Edge Servers cache.  urls (array): list of up to 50 Cache Keys to be expired from the cache, per request.  method (choice): purge method, use the “delete” value for removal.  Layer (choice): layer where the purge will be done. Use the value “edge_caching” (default value if not informed) to purge on the Edge Caching layer and the value “l2_caching” to purge on L2 Caching.
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {String} [contentType] 
     * @param {module:model/PurgeCacheKeyRequest} [purgeCacheKeyRequest] 
     * @param {module:api/RealTimePurgeApi~purgeCacheKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    purgeCacheKey(opts, callback) {
      opts = opts || {};
      let postBody = opts['purgeCacheKeyRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/json; version=3'];
      let returnType = null;
      return this.apiClient.callApi(
        '/purge/cachekey', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purgeUrl operation.
     * @callback module:api/RealTimePurgeApi~purgeUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /purge/url
     * List of URLs you want to remove from the Azion Edge Servers cache.  urls (array): list of up to 50 URLs to be expired from the cache, per request.  method (choice): purge method, use the “delete” value for removal.
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {String} [contentType] 
     * @param {module:model/PurgeUrlRequest} [purgeUrlRequest] 
     * @param {module:api/RealTimePurgeApi~purgeUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */
    purgeUrl(opts, callback) {
      opts = opts || {};
      let postBody = opts['purgeUrlRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json; version=3'];
      let accepts = ['application/json; version=3'];
      let returnType = null;
      return this.apiClient.callApi(
        '/purge/url', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purgeWildcard operation.
     * @callback module:api/RealTimePurgeApi~purgeWildcardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /purge/wildcard
     * The Wildcard expression that represents the list of objects that you want to remove from the Azion Edge Servers cache.  urls (array):the Wildcard URL or Wildcard Cache Key that represents the list of objects you want to expire. You can only use one Wildcard expression per request.  method (choice): purge method, use the “delete” value for removal.
     * @param {Object} opts Optional parameters
     * @param {String} [accept] 
     * @param {String} [contentType] 
     * @param {module:model/PurgeWildcardRequest} [purgeWildcardRequest] 
     * @param {module:api/RealTimePurgeApi~purgeWildcardCallback} callback The callback function, accepting three arguments: error, data, response
     */
    purgeWildcard(opts, callback) {
      opts = opts || {};
      let postBody = opts['purgeWildcardRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/json; version=3'];
      let returnType = null;
      return this.apiClient.callApi(
        '/purge/wildcard', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}