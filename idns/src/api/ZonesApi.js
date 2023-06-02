/**
 * Intelligent DNS
 * Azion Intelligent DNS API
 *
 * The version of the OpenAPI document: 3.0.0
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
import GetZoneResponse from '../model/GetZoneResponse';
import GetZonesResponse from '../model/GetZonesResponse';
import PostOrPutZoneResponse from '../model/PostOrPutZoneResponse';
import Zone from '../model/Zone';

/**
* Zones service.
* @module api/ZonesApi
* @version 3.0.0
*/
export default class ZonesApi {

    /**
    * Constructs a new ZonesApi. 
    * @alias module:api/ZonesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteZone operation.
     * @callback module:api/ZonesApi~deleteZoneCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an Intelligent DNS hosted zone
     * @param {Number} zoneId The hosted zone id
     * @param {module:api/ZonesApi~deleteZoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteZone(zoneId, callback) {
      let postBody = null;
      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling deleteZone");
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
      let contentTypes = [];
      let accepts = ['application/json; version=3'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/intelligent_dns/{zone_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getZone operation.
     * @callback module:api/ZonesApi~getZoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetZoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an Intelligent DNS hosted zone
     * @param {Number} zoneId The hosted zone id
     * @param {module:api/ZonesApi~getZoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetZoneResponse}
     */
    getZone(zoneId, callback) {
      let postBody = null;
      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling getZone");
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
      let contentTypes = [];
      let accepts = ['application/json; version=3'];
      let returnType = GetZoneResponse;
      return this.apiClient.callApi(
        '/intelligent_dns/{zone_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getZones operation.
     * @callback module:api/ZonesApi~getZonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetZonesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a collection of Intelligent DNS zones
     * @param {module:api/ZonesApi~getZonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetZonesResponse}
     */
    getZones(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = GetZonesResponse;
      return this.apiClient.callApi(
        '/intelligent_dns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postZone operation.
     * @callback module:api/ZonesApi~postZoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostOrPutZoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new Intelligent DNS zone
     * @param {Object} opts Optional parameters
     * @param {module:model/Zone} [zone] 
     * @param {module:api/ZonesApi~postZoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostOrPutZoneResponse}
     */
    postZone(opts, callback) {
      opts = opts || {};
      let postBody = opts['zone'];

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
      let accepts = ['application/json; version=3'];
      let returnType = PostOrPutZoneResponse;
      return this.apiClient.callApi(
        '/intelligent_dns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putZone operation.
     * @callback module:api/ZonesApi~putZoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostOrPutZoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Intelligent DNS hosted zone
     * @param {Number} zoneId The hosted zone id
     * @param {Object} opts Optional parameters
     * @param {module:model/Zone} [zone] 
     * @param {module:api/ZonesApi~putZoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostOrPutZoneResponse}
     */
    putZone(zoneId, opts, callback) {
      opts = opts || {};
      let postBody = opts['zone'];
      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling putZone");
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
      let returnType = PostOrPutZoneResponse;
      return this.apiClient.callApi(
        '/intelligent_dns/{zone_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
