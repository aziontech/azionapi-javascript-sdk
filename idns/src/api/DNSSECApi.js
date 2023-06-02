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
import DnsSec from '../model/DnsSec';
import ErrorsResponse from '../model/ErrorsResponse';
import GetOrPatchDnsSecResponse from '../model/GetOrPatchDnsSecResponse';

/**
* DNSSEC service.
* @module api/DNSSECApi
* @version 3.0.0
*/
export default class DNSSECApi {

    /**
    * Constructs a new DNSSECApi. 
    * @alias module:api/DNSSECApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getZoneDnsSec operation.
     * @callback module:api/DNSSECApi~getZoneDnsSecCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrPatchDnsSecResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the DNSSEC zone status
     * @param {Number} zoneId The hosted zone id
     * @param {module:api/DNSSECApi~getZoneDnsSecCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOrPatchDnsSecResponse}
     */
    getZoneDnsSec(zoneId, callback) {
      let postBody = null;
      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling getZoneDnsSec");
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
      let returnType = GetOrPatchDnsSecResponse;
      return this.apiClient.callApi(
        '/intelligent_dns/{zone_id}/dnssec', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putZoneDnsSec operation.
     * @callback module:api/DNSSECApi~putZoneDnsSecCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrPatchDnsSecResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the DNSSEC zone
     * @param {Number} zoneId The hosted zone id
     * @param {Object} opts Optional parameters
     * @param {module:model/DnsSec} [dnsSec] 
     * @param {module:api/DNSSECApi~putZoneDnsSecCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOrPatchDnsSecResponse}
     */
    putZoneDnsSec(zoneId, opts, callback) {
      opts = opts || {};
      let postBody = opts['dnsSec'];
      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling putZoneDnsSec");
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
      let returnType = GetOrPatchDnsSecResponse;
      return this.apiClient.callApi(
        '/intelligent_dns/{zone_id}/dnssec', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
