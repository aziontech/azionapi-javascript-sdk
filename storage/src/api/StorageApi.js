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
import BucketUpdate from '../model/BucketUpdate';
import PaginatedBucketList from '../model/PaginatedBucketList';
import PaginatedBucketObjectList from '../model/PaginatedBucketObjectList';
import ResponseBucket from '../model/ResponseBucket';
import SuccessBucketOperation from '../model/SuccessBucketOperation';
import SuccessObjectOperation from '../model/SuccessObjectOperation';

/**
* Storage service.
* @module api/StorageApi
* @version 1.0.0 (v1)
*/
export default class StorageApi {

    /**
    * Constructs a new StorageApi. 
    * @alias module:api/StorageApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the storageApiBucketsCreate operation.
     * @callback module:api/StorageApi~storageApiBucketsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new bucket
     * 
     * @param {module:model/BucketCreate} bucketCreate 
     * @param {module:api/StorageApi~storageApiBucketsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBucket}
     */
    storageApiBucketsCreate(bucketCreate, callback) {
      let postBody = bucketCreate;
      // verify the required parameter 'bucketCreate' is set
      if (bucketCreate === undefined || bucketCreate === null) {
        throw new Error("Missing the required parameter 'bucketCreate' when calling storageApiBucketsCreate");
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
     * Callback function to receive the result of the storageApiBucketsDestroy operation.
     * @callback module:api/StorageApi~storageApiBucketsDestroyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessBucketOperation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a bucket
     * 
     * @param {String} name 
     * @param {module:api/StorageApi~storageApiBucketsDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessBucketOperation}
     */
    storageApiBucketsDestroy(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling storageApiBucketsDestroy");
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
      let returnType = SuccessBucketOperation;
      return this.apiClient.callApi(
        '/v4/storage/buckets/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storageApiBucketsList operation.
     * @callback module:api/StorageApi~storageApiBucketsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedBucketList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List buckets
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} [page] A page number within the paginated result set.
     * @param {Number} [pageSize] Number of results to return per page.
     * @param {module:api/StorageApi~storageApiBucketsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedBucketList}
     */
    storageApiBucketsList(opts, callback) {
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
     * Callback function to receive the result of the storageApiBucketsObjectsCreate operation.
     * @callback module:api/StorageApi~storageApiBucketsObjectsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessObjectOperation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new object key
     * Create a new object key in the bucket.
     * @param {String} bucketName 
     * @param {String} objectKey 
     * @param {Object} opts Optional parameters
     * @param {String} [contentType] The content type of the file (Example: text/plain).
     * @param {File} [body] 
     * @param {module:api/StorageApi~storageApiBucketsObjectsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessObjectOperation}
     */
    storageApiBucketsObjectsCreate(bucketName, objectKey, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'bucketName' is set
      if (bucketName === undefined || bucketName === null) {
        throw new Error("Missing the required parameter 'bucketName' when calling storageApiBucketsObjectsCreate");
      }
      // verify the required parameter 'objectKey' is set
      if (objectKey === undefined || objectKey === null) {
        throw new Error("Missing the required parameter 'objectKey' when calling storageApiBucketsObjectsCreate");
      }

      let pathParams = {
        'bucket_name': bucketName,
        'object_key': objectKey
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = SuccessObjectOperation;
      return this.apiClient.callApi(
        '/v4/storage/buckets/{bucket_name}/objects/{object_key}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storageApiBucketsObjectsDestroy operation.
     * @callback module:api/StorageApi~storageApiBucketsObjectsDestroyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessObjectOperation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete object key
     * Delete an object key from bucket
     * @param {String} bucketName 
     * @param {String} objectKey 
     * @param {module:api/StorageApi~storageApiBucketsObjectsDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessObjectOperation}
     */
    storageApiBucketsObjectsDestroy(bucketName, objectKey, callback) {
      let postBody = null;
      // verify the required parameter 'bucketName' is set
      if (bucketName === undefined || bucketName === null) {
        throw new Error("Missing the required parameter 'bucketName' when calling storageApiBucketsObjectsDestroy");
      }
      // verify the required parameter 'objectKey' is set
      if (objectKey === undefined || objectKey === null) {
        throw new Error("Missing the required parameter 'objectKey' when calling storageApiBucketsObjectsDestroy");
      }

      let pathParams = {
        'bucket_name': bucketName,
        'object_key': objectKey
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
      let returnType = SuccessObjectOperation;
      return this.apiClient.callApi(
        '/v4/storage/buckets/{bucket_name}/objects/{object_key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storageApiBucketsObjectsList operation.
     * @callback module:api/StorageApi~storageApiBucketsObjectsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedBucketObjectList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List buckets objects
     * 
     * @param {String} bucketName 
     * @param {Object} opts Optional parameters
     * @param {String} [continuationToken] Token for next page.
     * @param {Number} [maxObjectCount] Number of results to return per page.
     * @param {module:api/StorageApi~storageApiBucketsObjectsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedBucketObjectList}
     */
    storageApiBucketsObjectsList(bucketName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'bucketName' is set
      if (bucketName === undefined || bucketName === null) {
        throw new Error("Missing the required parameter 'bucketName' when calling storageApiBucketsObjectsList");
      }

      let pathParams = {
        'bucket_name': bucketName
      };
      let queryParams = {
        'continuation_token': opts['continuationToken'],
        'max_object_count': opts['maxObjectCount']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedBucketObjectList;
      return this.apiClient.callApi(
        '/v4/storage/buckets/{bucket_name}/objects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storageApiBucketsObjectsRetrieve operation.
     * @callback module:api/StorageApi~storageApiBucketsObjectsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download object
     * Download the object key from bucket.
     * @param {String} bucketName 
     * @param {String} objectKey 
     * @param {module:api/StorageApi~storageApiBucketsObjectsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     */
    storageApiBucketsObjectsRetrieve(bucketName, objectKey, callback) {
      let postBody = null;
      // verify the required parameter 'bucketName' is set
      if (bucketName === undefined || bucketName === null) {
        throw new Error("Missing the required parameter 'bucketName' when calling storageApiBucketsObjectsRetrieve");
      }
      // verify the required parameter 'objectKey' is set
      if (objectKey === undefined || objectKey === null) {
        throw new Error("Missing the required parameter 'objectKey' when calling storageApiBucketsObjectsRetrieve");
      }

      let pathParams = {
        'bucket_name': bucketName,
        'object_key': objectKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['text/html', 'application/json', 'application/xml', 'text/plain', 'image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'audio/mpeg', 'application/pdf', 'application/javascript', 'text/css', 'application/octet-stream'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v4/storage/buckets/{bucket_name}/objects/{object_key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storageApiBucketsObjectsUpdate operation.
     * @callback module:api/StorageApi~storageApiBucketsObjectsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessObjectOperation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the object key
     * Update the object key from bucket.
     * @param {String} bucketName 
     * @param {String} objectKey 
     * @param {Object} opts Optional parameters
     * @param {String} [contentType] The content type of the file (Example: text/plain).
     * @param {File} [body] 
     * @param {module:api/StorageApi~storageApiBucketsObjectsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessObjectOperation}
     */
    storageApiBucketsObjectsUpdate(bucketName, objectKey, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'bucketName' is set
      if (bucketName === undefined || bucketName === null) {
        throw new Error("Missing the required parameter 'bucketName' when calling storageApiBucketsObjectsUpdate");
      }
      // verify the required parameter 'objectKey' is set
      if (objectKey === undefined || objectKey === null) {
        throw new Error("Missing the required parameter 'objectKey' when calling storageApiBucketsObjectsUpdate");
      }

      let pathParams = {
        'bucket_name': bucketName,
        'object_key': objectKey
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = SuccessObjectOperation;
      return this.apiClient.callApi(
        '/v4/storage/buckets/{bucket_name}/objects/{object_key}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storageApiBucketsPartialUpdate operation.
     * @callback module:api/StorageApi~storageApiBucketsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update bucket info
     * 
     * @param {String} name 
     * @param {Object} opts Optional parameters
     * @param {module:model/BucketUpdate} [bucketUpdate] 
     * @param {module:api/StorageApi~storageApiBucketsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBucket}
     */
    storageApiBucketsPartialUpdate(name, opts, callback) {
      opts = opts || {};
      let postBody = opts['bucketUpdate'];
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling storageApiBucketsPartialUpdate");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseBucket;
      return this.apiClient.callApi(
        '/v4/storage/buckets/{name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
