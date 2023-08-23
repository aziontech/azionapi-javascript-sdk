/**
 * Data Streaming - OpenAPI
 * The Data Streaming API allows you to manage your existing data streamings and templates. Data Streaming allows you to feed your stream processing, SIEM, and big data platforms with the event logs from your applications on Azion in real time. 
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
import DataStreamingsDomainResponse from '../model/DataStreamingsDomainResponse';

/**
* DataStreamingDomain service.
* @module api/DataStreamingDomainApi
* @version 1.0.0
*/
export default class DataStreamingDomainApi {

    /**
    * Constructs a new DataStreamingDomainApi. 
    * @alias module:api/DataStreamingDomainApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listDataStreaming operation.
     * @callback module:api/DataStreamingDomainApi~listDataStreamingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataStreamingsDomainResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all domains used on data streaming
     * Use the GET method to list all available domains that can be used on Data Streaming operations.
     * @param {Object} opts Optional parameters
     * @param {String} [name] Domain's name in data streaming
     * @param {Number} [streamingId] 
     * @param {Boolean} [selected] 
     * @param {module:api/DataStreamingDomainApi~listDataStreamingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataStreamingsDomainResponse}
     */
    listDataStreaming(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'streaming_id': opts['streamingId'],
        'selected': opts['selected']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DataStreamingsDomainResponse;
      return this.apiClient.callApi(
        '/data_streaming/domains', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
