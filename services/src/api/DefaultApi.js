/**
 * Services API
 * Azion Services
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
import CreateResourceRequest from '../model/CreateResourceRequest';
import CreateServiceRequest from '../model/CreateServiceRequest';
import ResourceDetail from '../model/ResourceDetail';
import ResourceResponseWithTotal from '../model/ResourceResponseWithTotal';
import ServiceResponse from '../model/ServiceResponse';
import ServiceResponseWithTotals from '../model/ServiceResponseWithTotals';
import UpdateResourceRequest from '../model/UpdateResourceRequest';
import UpdateServiceRequest from '../model/UpdateServiceRequest';

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
     * Callback function to receive the result of the deleteResource operation.
     * @callback module:api/DefaultApi~deleteResourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Service Resource by ID
     * @param {Number} serviceId 
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~deleteResourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteResource(serviceId, resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling deleteResource");
      }
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling deleteResource");
      }

      let pathParams = {
        'serviceId': serviceId,
        'resourceId': resourceId
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
        '/edge_services/{serviceId}/resources/{resourceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteService operation.
     * @callback module:api/DefaultApi~deleteServiceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Service by ID
     * @param {Number} id 
     * @param {module:api/DefaultApi~deleteServiceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteService(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteService");
      }

      let pathParams = {
        'id': id
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
        '/edge_services/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResource operation.
     * @callback module:api/DefaultApi~getResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return Service Resource by ID
     * @param {Number} serviceId 
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~getResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceDetail}
     */
    getResource(serviceId, resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getResource");
      }
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getResource");
      }

      let pathParams = {
        'serviceId': serviceId,
        'resourceId': resourceId
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
      let returnType = ResourceDetail;
      return this.apiClient.callApi(
        '/edge_services/{serviceId}/resources/{resourceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResources operation.
     * @callback module:api/DefaultApi~getResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceResponseWithTotal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return Service Resources by page
     * @param {Number} serviceId 
     * @param {Object} opts Optional parameters
     * @param {Number} [page] 
     * @param {Number} [pageSize] 
     * @param {String} [filter] 
     * @param {String} [orderBy] 
     * @param {String} [sort] 
     * @param {module:api/DefaultApi~getResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceResponseWithTotal}
     */
    getResources(serviceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getResources");
      }

      let pathParams = {
        'serviceId': serviceId
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResourceResponseWithTotal;
      return this.apiClient.callApi(
        '/edge_services/{serviceId}/resources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getService operation.
     * @callback module:api/DefaultApi~getServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return Service by ID
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [withVars] 
     * @param {module:api/DefaultApi~getServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceResponse}
     */
    getService(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getService");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'with_vars': opts['withVars']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceResponse;
      return this.apiClient.callApi(
        '/edge_services/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getServices operation.
     * @callback module:api/DefaultApi~getServicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceResponseWithTotals} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return Services by page
     * @param {Object} opts Optional parameters
     * @param {Number} [page] 
     * @param {Number} [pageSize] 
     * @param {String} [filter] 
     * @param {String} [orderBy] 
     * @param {String} [sort] 
     * @param {module:api/DefaultApi~getServicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceResponseWithTotals}
     */
    getServices(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceResponseWithTotals;
      return this.apiClient.callApi(
        '/edge_services/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the newService operation.
     * @callback module:api/DefaultApi~newServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Service
     * @param {module:model/CreateServiceRequest} createServiceRequest 
     * @param {module:api/DefaultApi~newServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceResponse}
     */
    newService(createServiceRequest, callback) {
      let postBody = createServiceRequest;
      // verify the required parameter 'createServiceRequest' is set
      if (createServiceRequest === undefined || createServiceRequest === null) {
        throw new Error("Missing the required parameter 'createServiceRequest' when calling newService");
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
      let returnType = ServiceResponse;
      return this.apiClient.callApi(
        '/edge_services/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchService operation.
     * @callback module:api/DefaultApi~patchServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Service by ID
     * @param {Number} id 
     * @param {module:model/UpdateServiceRequest} updateServiceRequest 
     * @param {module:api/DefaultApi~patchServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceResponse}
     */
    patchService(id, updateServiceRequest, callback) {
      let postBody = updateServiceRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling patchService");
      }
      // verify the required parameter 'updateServiceRequest' is set
      if (updateServiceRequest === undefined || updateServiceRequest === null) {
        throw new Error("Missing the required parameter 'updateServiceRequest' when calling patchService");
      }

      let pathParams = {
        'id': id
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
      let returnType = ServiceResponse;
      return this.apiClient.callApi(
        '/edge_services/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchServiceResource operation.
     * @callback module:api/DefaultApi~patchServiceResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Service Resource by ID
     * @param {Number} serviceId 
     * @param {Number} resourceId 
     * @param {module:model/UpdateResourceRequest} updateResourceRequest 
     * @param {module:api/DefaultApi~patchServiceResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceDetail}
     */
    patchServiceResource(serviceId, resourceId, updateResourceRequest, callback) {
      let postBody = updateResourceRequest;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling patchServiceResource");
      }
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling patchServiceResource");
      }
      // verify the required parameter 'updateResourceRequest' is set
      if (updateResourceRequest === undefined || updateResourceRequest === null) {
        throw new Error("Missing the required parameter 'updateResourceRequest' when calling patchServiceResource");
      }

      let pathParams = {
        'serviceId': serviceId,
        'resourceId': resourceId
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
      let returnType = ResourceDetail;
      return this.apiClient.callApi(
        '/edge_services/{serviceId}/resources/{resourceId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postResource operation.
     * @callback module:api/DefaultApi~postResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Service Resource
     * @param {Number} serviceId 
     * @param {module:model/CreateResourceRequest} createResourceRequest 
     * @param {module:api/DefaultApi~postResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceDetail}
     */
    postResource(serviceId, createResourceRequest, callback) {
      let postBody = createResourceRequest;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling postResource");
      }
      // verify the required parameter 'createResourceRequest' is set
      if (createResourceRequest === undefined || createResourceRequest === null) {
        throw new Error("Missing the required parameter 'createResourceRequest' when calling postResource");
      }

      let pathParams = {
        'serviceId': serviceId
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
      let returnType = ResourceDetail;
      return this.apiClient.callApi(
        '/edge_services/{serviceId}/resources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}