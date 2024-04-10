/**
 * Object Storage
 * REST API OpenAPI documentation for the Object Storage
 *
 * The version of the OpenAPI document: 1.0.0 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BucketCreate from '../model/BucketCreate';
import PaginatedBucketList from '../model/PaginatedBucketList';
import PatchedBucket from '../model/PatchedBucket';
import ResponseBucket from '../model/ResponseBucket';
import ResponseDeleteBucket from '../model/ResponseDeleteBucket';

/**
* Buckets service.
* @module api/BucketsApi
* @version 1.0.0 (v1)
*/
export default class BucketsApi {

    /**
    * Constructs a new BucketsApi. 
    * @alias module:api/BucketsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiV1StorageBucketsCreate operation.
     * @callback module:api/BucketsApi~apiV1StorageBucketsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /v4/storage/buckets
     * 
     * @param {module:model/BucketCreate} bucketCreate 
     * @param {module:api/BucketsApi~apiV1StorageBucketsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBucket}
     */
    apiV1StorageBucketsCreate(bucketCreate, callback) {
      let postBody = bucketCreate;
      // verify the required parameter 'bucketCreate' is set
      if (bucketCreate === undefined || bucketCreate === null) {
        throw new Error("Missing the required parameter 'bucketCreate' when calling apiV1StorageBucketsCreate");
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
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ResponseBucket;
      return this.apiClient.callApi(
        '/v4/storage/buckets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV1StorageBucketsDestroy operation.
     * @callback module:api/BucketsApi~apiV1StorageBucketsDestroyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseDeleteBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /v4/storage/buckets/:name
     * 
     * @param {String} name 
     * @param {module:api/BucketsApi~apiV1StorageBucketsDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseDeleteBucket}
     */
    apiV1StorageBucketsDestroy(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling apiV1StorageBucketsDestroy");
      }

      let pathParams = {
        'name': name
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
      let returnType = ResponseDeleteBucket;
      return this.apiClient.callApi(
        '/v4/storage/buckets/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV1StorageBucketsList operation.
     * @callback module:api/BucketsApi~apiV1StorageBucketsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedBucketList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /v4/storage/buckets
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} [page] A page number within the paginated result set.
     * @param {Number} [pageSize] Number of results to return per page.
     * @param {module:api/BucketsApi~apiV1StorageBucketsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedBucketList}
     */
    apiV1StorageBucketsList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedBucketList;
      return this.apiClient.callApi(
        '/v4/storage/buckets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV1StorageBucketsPartialUpdate operation.
     * @callback module:api/BucketsApi~apiV1StorageBucketsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /v4/storage/buckets/:name
     * 
     * @param {String} name 
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedBucket} [patchedBucket] 
     * @param {module:api/BucketsApi~apiV1StorageBucketsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBucket}
     */
    apiV1StorageBucketsPartialUpdate(name, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedBucket'];
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling apiV1StorageBucketsPartialUpdate");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ResponseBucket;
      return this.apiClient.callApi(
        '/v4/storage/buckets/{name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}