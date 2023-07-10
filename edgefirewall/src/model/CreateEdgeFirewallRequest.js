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

import ApiClient from '../ApiClient';

/**
 * The CreateEdgeFirewallRequest model module.
 * @module model/CreateEdgeFirewallRequest
 * @version 2.0.0
 */
class CreateEdgeFirewallRequest {
    /**
     * Constructs a new <code>CreateEdgeFirewallRequest</code>.
     * @alias module:model/CreateEdgeFirewallRequest
     */
    constructor() { 
        
        CreateEdgeFirewallRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateEdgeFirewallRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEdgeFirewallRequest} obj Optional instance to populate.
     * @return {module:model/CreateEdgeFirewallRequest} The populated <code>CreateEdgeFirewallRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEdgeFirewallRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('domains')) {
                obj['domains'] = ApiClient.convertToType(data['domains'], ['Number']);
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('edge_functions_enabled')) {
                obj['edge_functions_enabled'] = ApiClient.convertToType(data['edge_functions_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('network_protection_enabled')) {
                obj['network_protection_enabled'] = ApiClient.convertToType(data['network_protection_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('waf_enabled')) {
                obj['waf_enabled'] = ApiClient.convertToType(data['waf_enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateEdgeFirewallRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEdgeFirewallRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['domains'])) {
            throw new Error("Expected the field `domains` to be an array in the JSON data but got " + data['domains']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
CreateEdgeFirewallRequest.prototype['name'] = undefined;

/**
 * @member {Array.<Number>} domains
 */
CreateEdgeFirewallRequest.prototype['domains'] = undefined;

/**
 * @member {Boolean} is_active
 */
CreateEdgeFirewallRequest.prototype['is_active'] = undefined;

/**
 * @member {Boolean} edge_functions_enabled
 */
CreateEdgeFirewallRequest.prototype['edge_functions_enabled'] = undefined;

/**
 * @member {Boolean} network_protection_enabled
 */
CreateEdgeFirewallRequest.prototype['network_protection_enabled'] = undefined;

/**
 * @member {Boolean} waf_enabled
 */
CreateEdgeFirewallRequest.prototype['waf_enabled'] = undefined;






export default CreateEdgeFirewallRequest;
