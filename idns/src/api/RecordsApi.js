/**
 * Intelligent DNS API
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
import ErrorResponse from '../model/ErrorResponse';
import ErrorsResponse from '../model/ErrorsResponse';
import GetRecordsResponse from '../model/GetRecordsResponse';
import PostOrPutRecordResponse from '../model/PostOrPutRecordResponse';
import RecordPostOrPut from '../model/RecordPostOrPut';

/**
* Records service.
* @module api/RecordsApi
* @version 1.0.0
*/
export default class RecordsApi {

    /**
    * Constructs a new RecordsApi. 
    * @alias module:api/RecordsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteZoneRecord operation.
     * @callback module:api/RecordsApi~deleteZoneRecordCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an Intelligent DNS zone record
     * @param {Number} zoneId The hosted zone id
     * @param {Number} recordId The zone record id
     * @param {module:api/RecordsApi~deleteZoneRecordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteZoneRecord(zoneId, recordId, callback) {
      let postBody = null;
      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling deleteZoneRecord");
      }
      // verify the required parameter 'recordId' is set
      if (recordId === undefined || recordId === null) {
        throw new Error("Missing the required parameter 'recordId' when calling deleteZoneRecord");
      }

      let pathParams = {
        'zone_id': zoneId,
        'record_id': recordId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/intelligent_dns/{zone_id}/records/{record_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneRecords operation.
     * @callback module:api/RecordsApi~getZoneRecordsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRecordsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a collection of Intelligent DNS zone records
     * @param {Number} zoneId The hosted zone id
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Identifies which page should be returned, if the return is paginated.
     * @param {Number} [pageSize = 10)] Identifies how many items should be returned per page.
     * @param {module:api/RecordsApi~getZoneRecordsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRecordsResponse}
     */
    getZoneRecords(zoneId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling getZoneRecords");
      }

      let pathParams = {
        'zone_id': zoneId
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
      let accepts = ['application/json; version=3'];
      let returnType = GetRecordsResponse;
      return this.apiClient.callApi(
        '/intelligent_dns/{zone_id}/records', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postZoneRecord operation.
     * @callback module:api/RecordsApi~postZoneRecordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostOrPutRecordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Intelligent DNS zone record
     * @param {Number} zoneId The hosted zone id
     * @param {Object} opts Optional parameters
     * @param {module:model/RecordPostOrPut} [recordPostOrPut] 
     * @param {module:api/RecordsApi~postZoneRecordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostOrPutRecordResponse}
     */
    postZoneRecord(zoneId, opts, callback) {
      opts = opts || {};
      let postBody = opts['recordPostOrPut'];
      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling postZoneRecord");
      }

      let pathParams = {
        'zone_id': zoneId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json; version=3'];
      let returnType = PostOrPutRecordResponse;
      return this.apiClient.callApi(
        '/intelligent_dns/{zone_id}/records', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putZoneRecord operation.
     * @callback module:api/RecordsApi~putZoneRecordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostOrPutRecordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Intelligent DNS zone record
     * @param {Number} zoneId The hosted zone id
     * @param {Number} recordId The zone record id
     * @param {Object} opts Optional parameters
     * @param {module:model/RecordPostOrPut} [recordPostOrPut] 
     * @param {module:api/RecordsApi~putZoneRecordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostOrPutRecordResponse}
     */
    putZoneRecord(zoneId, recordId, opts, callback) {
      opts = opts || {};
      let postBody = opts['recordPostOrPut'];
      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling putZoneRecord");
      }
      // verify the required parameter 'recordId' is set
      if (recordId === undefined || recordId === null) {
        throw new Error("Missing the required parameter 'recordId' when calling putZoneRecord");
      }

      let pathParams = {
        'zone_id': zoneId,
        'record_id': recordId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json; version=3'];
      let returnType = PostOrPutRecordResponse;
      return this.apiClient.callApi(
        '/intelligent_dns/{zone_id}/records/{record_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
