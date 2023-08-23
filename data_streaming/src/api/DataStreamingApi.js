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
import CreateNewDataStreaming201Response from '../model/CreateNewDataStreaming201Response';
import CreateNewDataStreamingRequest from '../model/CreateNewDataStreamingRequest';
import DataStreamingResponseWithResults from '../model/DataStreamingResponseWithResults';
import DataStreamingsById from '../model/DataStreamingsById';

/**
* DataStreaming service.
* @module api/DataStreamingApi
* @version 1.0.0
*/
export default class DataStreamingApi {

    /**
    * Constructs a new DataStreamingApi. 
    * @alias module:api/DataStreamingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createNewDataStreaming operation.
     * @callback module:api/DataStreamingApi~createNewDataStreamingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateNewDataStreaming201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new data streaming
     * 
     * @param {module:model/CreateNewDataStreamingRequest} createNewDataStreamingRequest 
     * @param {module:api/DataStreamingApi~createNewDataStreamingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateNewDataStreaming201Response}
     */
    createNewDataStreaming(createNewDataStreamingRequest, callback) {
      let postBody = createNewDataStreamingRequest;
      // verify the required parameter 'createNewDataStreamingRequest' is set
      if (createNewDataStreamingRequest === undefined || createNewDataStreamingRequest === null) {
        throw new Error("Missing the required parameter 'createNewDataStreamingRequest' when calling createNewDataStreaming");
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
      let accepts = ['application/json'];
      let returnType = CreateNewDataStreaming201Response;
      return this.apiClient.callApi(
        '/data_streaming/streamings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDataStreamingById operation.
     * @callback module:api/DataStreamingApi~deleteDataStreamingByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete data streaming
     * Use the DELETE method to remove a data streaming from your account. 
     * @param {Number} dataStreamingId 
     * @param {module:api/DataStreamingApi~deleteDataStreamingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDataStreamingById(dataStreamingId, callback) {
      let postBody = null;
      // verify the required parameter 'dataStreamingId' is set
      if (dataStreamingId === undefined || dataStreamingId === null) {
        throw new Error("Missing the required parameter 'dataStreamingId' when calling deleteDataStreamingById");
      }

      let pathParams = {
        'data_streaming_id': dataStreamingId
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
        '/data_streaming/streamings/{data_streaming_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editDataStreamingById operation.
     * @callback module:api/DataStreamingApi~editDataStreamingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateNewDataStreaming201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit data streaming
     * Use the PATCH method to change only select settings of your data streaming. 
     * @param {Number} dataStreamingId 
     * @param {module:model/CreateNewDataStreamingRequest} createNewDataStreamingRequest 
     * @param {module:api/DataStreamingApi~editDataStreamingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateNewDataStreaming201Response}
     */
    editDataStreamingById(dataStreamingId, createNewDataStreamingRequest, callback) {
      let postBody = createNewDataStreamingRequest;
      // verify the required parameter 'dataStreamingId' is set
      if (dataStreamingId === undefined || dataStreamingId === null) {
        throw new Error("Missing the required parameter 'dataStreamingId' when calling editDataStreamingById");
      }
      // verify the required parameter 'createNewDataStreamingRequest' is set
      if (createNewDataStreamingRequest === undefined || createNewDataStreamingRequest === null) {
        throw new Error("Missing the required parameter 'createNewDataStreamingRequest' when calling editDataStreamingById");
      }

      let pathParams = {
        'data_streaming_id': dataStreamingId
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
      let returnType = CreateNewDataStreaming201Response;
      return this.apiClient.callApi(
        '/data_streaming/streamings/{data_streaming_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDataStreamingById operation.
     * @callback module:api/DataStreamingApi~listDataStreamingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataStreamingsById} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get expecific data streaming by Data Streaming ID
     * Use the GET method and add the data streaming's ID to the URI of the request to get more data on a specific data streaming.
     * @param {Number} dataStreamingId 
     * @param {module:api/DataStreamingApi~listDataStreamingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataStreamingsById}
     */
    listDataStreamingById(dataStreamingId, callback) {
      let postBody = null;
      // verify the required parameter 'dataStreamingId' is set
      if (dataStreamingId === undefined || dataStreamingId === null) {
        throw new Error("Missing the required parameter 'dataStreamingId' when calling listDataStreamingById");
      }

      let pathParams = {
        'data_streaming_id': dataStreamingId
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
      let returnType = DataStreamingsById;
      return this.apiClient.callApi(
        '/data_streaming/streamings/{data_streaming_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDataStreamings operation.
     * @callback module:api/DataStreamingApi~listDataStreamingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataStreamingResponseWithResults} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all exist data streamings
     * Use the GET method to list all data streamings, both active and inactive, and its properties.
     * @param {module:api/DataStreamingApi~listDataStreamingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataStreamingResponseWithResults}
     */
    listDataStreamings(callback) {
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
      let accepts = ['application/json'];
      let returnType = DataStreamingResponseWithResults;
      return this.apiClient.callApi(
        '/data_streaming/streamings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the overwriteDataStreamingById operation.
     * @callback module:api/DataStreamingApi~overwriteDataStreamingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateNewDataStreaming201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Overwrite data streaming
     * Use the PUT method to overwrite the data streaming. Although  you can change a single property using the PUT method, you must pass all fields for the request to be completed. 
     * @param {Number} dataStreamingId 
     * @param {module:model/CreateNewDataStreamingRequest} createNewDataStreamingRequest 
     * @param {module:api/DataStreamingApi~overwriteDataStreamingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateNewDataStreaming201Response}
     */
    overwriteDataStreamingById(dataStreamingId, createNewDataStreamingRequest, callback) {
      let postBody = createNewDataStreamingRequest;
      // verify the required parameter 'dataStreamingId' is set
      if (dataStreamingId === undefined || dataStreamingId === null) {
        throw new Error("Missing the required parameter 'dataStreamingId' when calling overwriteDataStreamingById");
      }
      // verify the required parameter 'createNewDataStreamingRequest' is set
      if (createNewDataStreamingRequest === undefined || createNewDataStreamingRequest === null) {
        throw new Error("Missing the required parameter 'createNewDataStreamingRequest' when calling overwriteDataStreamingById");
      }

      let pathParams = {
        'data_streaming_id': dataStreamingId
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
      let returnType = CreateNewDataStreaming201Response;
      return this.apiClient.callApi(
        '/data_streaming/streamings/{data_streaming_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
