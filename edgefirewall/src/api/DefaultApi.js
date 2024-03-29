/**
 * Edge Firewall API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
import CreateEdgeFirewallRequest from '../model/CreateEdgeFirewallRequest';
import CreateRuleSetRequest from '../model/CreateRuleSetRequest';
import EdgeFirewallResponse from '../model/EdgeFirewallResponse';
import ListEdgeFirewallResponse from '../model/ListEdgeFirewallResponse';
import RuleSetResponse from '../model/RuleSetResponse';
import RuleSetResponseAll from '../model/RuleSetResponseAll';
import RuleSetResult from '../model/RuleSetResult';
import UpdateEdgeFirewallRequest from '../model/UpdateEdgeFirewallRequest';

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
     * Callback function to receive the result of the edgeFirewallEdgeFirewallIdRulesEngineGet operation.
     * @callback module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleSetResponseAll} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all rule sets.
     * @param {Number} edgeFirewallId 
     * @param {Object} opts Optional parameters
     * @param {Number} [page] 
     * @param {Number} [pageSize] 
     * @param {String} [sort] 
     * @param {String} [orderBy] 
     * @param {module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleSetResponseAll}
     */
    edgeFirewallEdgeFirewallIdRulesEngineGet(edgeFirewallId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'edgeFirewallId' is set
      if (edgeFirewallId === undefined || edgeFirewallId === null) {
        throw new Error("Missing the required parameter 'edgeFirewallId' when calling edgeFirewallEdgeFirewallIdRulesEngineGet");
      }

      let pathParams = {
        'edge_firewall_id': edgeFirewallId
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'sort': opts['sort'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json; version=3'];
      let returnType = RuleSetResponseAll;
      return this.apiClient.callApi(
        '/edge_firewall/{edge_firewall_id}/rules_engine', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallEdgeFirewallIdRulesEnginePost operation.
     * @callback module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEnginePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleSetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create rule set.
     * @param {Number} edgeFirewallId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateRuleSetRequest} [createRuleSetRequest] 
     * @param {module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEnginePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleSetResponse}
     */
    edgeFirewallEdgeFirewallIdRulesEnginePost(edgeFirewallId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createRuleSetRequest'];
      // verify the required parameter 'edgeFirewallId' is set
      if (edgeFirewallId === undefined || edgeFirewallId === null) {
        throw new Error("Missing the required parameter 'edgeFirewallId' when calling edgeFirewallEdgeFirewallIdRulesEnginePost");
      }

      let pathParams = {
        'edge_firewall_id': edgeFirewallId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json; version=3'];
      let accepts = ['application/json; version=3'];
      let returnType = RuleSetResponse;
      return this.apiClient.callApi(
        '/edge_firewall/{edge_firewall_id}/rules_engine', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDelete operation.
     * @callback module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete rule set.
     * @param {Number} edgeFirewallId 
     * @param {Number} ruleSetId 
     * @param {module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDelete(edgeFirewallId, ruleSetId, callback) {
      let postBody = null;
      // verify the required parameter 'edgeFirewallId' is set
      if (edgeFirewallId === undefined || edgeFirewallId === null) {
        throw new Error("Missing the required parameter 'edgeFirewallId' when calling edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDelete");
      }
      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw new Error("Missing the required parameter 'ruleSetId' when calling edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdDelete");
      }

      let pathParams = {
        'edge_firewall_id': edgeFirewallId,
        'rule_set_id': ruleSetId
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
        '/edge_firewall/{edge_firewall_id}/rules_engine/{rule_set_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGet operation.
     * @callback module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleSetResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve rule set by ID.
     * @param {Number} edgeFirewallId 
     * @param {Number} ruleSetId 
     * @param {Object} opts Optional parameters
     * @param {String} [orderBy] 
     * @param {module:model/String} [sort] 
     * @param {Number} [page = 1)] 
     * @param {Number} [pageSize = 10)] 
     * @param {module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleSetResult}
     */
    edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGet(edgeFirewallId, ruleSetId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'edgeFirewallId' is set
      if (edgeFirewallId === undefined || edgeFirewallId === null) {
        throw new Error("Missing the required parameter 'edgeFirewallId' when calling edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGet");
      }
      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw new Error("Missing the required parameter 'ruleSetId' when calling edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdGet");
      }

      let pathParams = {
        'edge_firewall_id': edgeFirewallId,
        'rule_set_id': ruleSetId
      };
      let queryParams = {
        'order_by': opts['orderBy'],
        'sort': opts['sort'],
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
      let returnType = RuleSetResult;
      return this.apiClient.callApi(
        '/edge_firewall/{edge_firewall_id}/rules_engine/{rule_set_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatch operation.
     * @callback module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleSetResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit rule set.
     * @param {Number} edgeFirewallId 
     * @param {Number} ruleSetId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateRuleSetRequest} [createRuleSetRequest] 
     * @param {module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleSetResult}
     */
    edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatch(edgeFirewallId, ruleSetId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createRuleSetRequest'];
      // verify the required parameter 'edgeFirewallId' is set
      if (edgeFirewallId === undefined || edgeFirewallId === null) {
        throw new Error("Missing the required parameter 'edgeFirewallId' when calling edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatch");
      }
      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw new Error("Missing the required parameter 'ruleSetId' when calling edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPatch");
      }

      let pathParams = {
        'edge_firewall_id': edgeFirewallId,
        'rule_set_id': ruleSetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json; version=3'];
      let accepts = ['application/json; version=3'];
      let returnType = RuleSetResult;
      return this.apiClient.callApi(
        '/edge_firewall/{edge_firewall_id}/rules_engine/{rule_set_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPut operation.
     * @callback module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleSetResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Overwrite rule set
     * @param {Number} edgeFirewallId 
     * @param {Number} ruleSetId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateRuleSetRequest} [createRuleSetRequest] 
     * @param {module:api/DefaultApi~edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleSetResult}
     */
    edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPut(edgeFirewallId, ruleSetId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createRuleSetRequest'];
      // verify the required parameter 'edgeFirewallId' is set
      if (edgeFirewallId === undefined || edgeFirewallId === null) {
        throw new Error("Missing the required parameter 'edgeFirewallId' when calling edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPut");
      }
      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw new Error("Missing the required parameter 'ruleSetId' when calling edgeFirewallEdgeFirewallIdRulesEngineRuleSetIdPut");
      }

      let pathParams = {
        'edge_firewall_id': edgeFirewallId,
        'rule_set_id': ruleSetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json; version=3'];
      let accepts = ['application/json; version=3'];
      let returnType = RuleSetResult;
      return this.apiClient.callApi(
        '/edge_firewall/{edge_firewall_id}/rules_engine/{rule_set_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallGet operation.
     * @callback module:api/DefaultApi~edgeFirewallGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListEdgeFirewallResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all user edge firewall
     * @param {Object} opts Optional parameters
     * @param {Number} [page] 
     * @param {Number} [pageSize] 
     * @param {String} [sort] 
     * @param {String} [orderBy] 
     * @param {module:api/DefaultApi~edgeFirewallGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListEdgeFirewallResponse}
     */
    edgeFirewallGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'sort': opts['sort'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListEdgeFirewallResponse;
      return this.apiClient.callApi(
        '/edge_firewall', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallPost operation.
     * @callback module:api/DefaultApi~edgeFirewallPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EdgeFirewallResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a edge firewall
     * @param {module:model/CreateEdgeFirewallRequest} createEdgeFirewallRequest 
     * @param {module:api/DefaultApi~edgeFirewallPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EdgeFirewallResponse}
     */
    edgeFirewallPost(createEdgeFirewallRequest, callback) {
      let postBody = createEdgeFirewallRequest;
      // verify the required parameter 'createEdgeFirewallRequest' is set
      if (createEdgeFirewallRequest === undefined || createEdgeFirewallRequest === null) {
        throw new Error("Missing the required parameter 'createEdgeFirewallRequest' when calling edgeFirewallPost");
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
      let returnType = EdgeFirewallResponse;
      return this.apiClient.callApi(
        '/edge_firewall', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallUuidDelete operation.
     * @callback module:api/DefaultApi~edgeFirewallUuidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an edge firewall by uuid
     * @param {String} uuid 
     * @param {module:api/DefaultApi~edgeFirewallUuidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    edgeFirewallUuidDelete(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling edgeFirewallUuidDelete");
      }

      let pathParams = {
        'uuid': uuid
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
        '/edge_firewall/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallUuidGet operation.
     * @callback module:api/DefaultApi~edgeFirewallUuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EdgeFirewallResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an edge firewall set by uuid
     * @param {String} uuid 
     * @param {module:api/DefaultApi~edgeFirewallUuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EdgeFirewallResponse}
     */
    edgeFirewallUuidGet(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling edgeFirewallUuidGet");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = EdgeFirewallResponse;
      return this.apiClient.callApi(
        '/edge_firewall/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallUuidPatch operation.
     * @callback module:api/DefaultApi~edgeFirewallUuidPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EdgeFirewallResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update some edge firewall attributes, like \"active\"
     * @param {String} uuid 
     * @param {module:model/UpdateEdgeFirewallRequest} updateEdgeFirewallRequest 
     * @param {module:api/DefaultApi~edgeFirewallUuidPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EdgeFirewallResponse}
     */
    edgeFirewallUuidPatch(uuid, updateEdgeFirewallRequest, callback) {
      let postBody = updateEdgeFirewallRequest;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling edgeFirewallUuidPatch");
      }
      // verify the required parameter 'updateEdgeFirewallRequest' is set
      if (updateEdgeFirewallRequest === undefined || updateEdgeFirewallRequest === null) {
        throw new Error("Missing the required parameter 'updateEdgeFirewallRequest' when calling edgeFirewallUuidPatch");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = EdgeFirewallResponse;
      return this.apiClient.callApi(
        '/edge_firewall/{uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeFirewallUuidPut operation.
     * @callback module:api/DefaultApi~edgeFirewallUuidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EdgeFirewallResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Overwrite some edge firewall attributes, like \"active\"
     * @param {String} uuid 
     * @param {module:model/UpdateEdgeFirewallRequest} updateEdgeFirewallRequest 
     * @param {module:api/DefaultApi~edgeFirewallUuidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EdgeFirewallResponse}
     */
    edgeFirewallUuidPut(uuid, updateEdgeFirewallRequest, callback) {
      let postBody = updateEdgeFirewallRequest;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling edgeFirewallUuidPut");
      }
      // verify the required parameter 'updateEdgeFirewallRequest' is set
      if (updateEdgeFirewallRequest === undefined || updateEdgeFirewallRequest === null) {
        throw new Error("Missing the required parameter 'updateEdgeFirewallRequest' when calling edgeFirewallUuidPut");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = EdgeFirewallResponse;
      return this.apiClient.callApi(
        '/edge_firewall/{uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
