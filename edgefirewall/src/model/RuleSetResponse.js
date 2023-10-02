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
import Behaviors from './Behaviors';
import SSLVerificationStatusCriteria from './SSLVerificationStatusCriteria';

/**
 * The RuleSetResponse model module.
 * @module model/RuleSetResponse
 * @version 2.0.0
 */
class RuleSetResponse {
    /**
     * Constructs a new <code>RuleSetResponse</code>.
     * @alias module:model/RuleSetResponse
     */
    constructor() { 
        
        RuleSetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleSetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleSetResponse} obj Optional instance to populate.
     * @return {module:model/RuleSetResponse} The populated <code>RuleSetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleSetResponse();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('behaviors')) {
                obj['behaviors'] = ApiClient.convertToType(data['behaviors'], [Behaviors]);
            }
            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], [[SSLVerificationStatusCriteria]]);
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
            }
            if (data.hasOwnProperty('last_editor')) {
                obj['last_editor'] = ApiClient.convertToType(data['last_editor'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RuleSetResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RuleSetResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['behaviors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['behaviors'])) {
                throw new Error("Expected the field `behaviors` to be an array in the JSON data but got " + data['behaviors']);
            }
            // validate the optional field `behaviors` (array)
            for (const item of data['behaviors']) {
                Behaviors.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['criteria'])) {
            throw new Error("Expected the field `criteria` to be an array in the JSON data but got " + data['criteria']);
        }
        // ensure the json data is a string
        if (data['last_editor'] && !(typeof data['last_editor'] === 'string' || data['last_editor'] instanceof String)) {
            throw new Error("Expected the field `last_editor` to be a primitive type in the JSON string but got " + data['last_editor']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
RuleSetResponse.prototype['name'] = undefined;

/**
 * @member {Boolean} is_active
 */
RuleSetResponse.prototype['is_active'] = undefined;

/**
 * @member {Array.<module:model/Behaviors>} behaviors
 */
RuleSetResponse.prototype['behaviors'] = undefined;

/**
 * @member {Array.<Array.<module:model/SSLVerificationStatusCriteria>>} criteria
 */
RuleSetResponse.prototype['criteria'] = undefined;

/**
 * @member {Date} last_modified
 */
RuleSetResponse.prototype['last_modified'] = undefined;

/**
 * @member {String} last_editor
 */
RuleSetResponse.prototype['last_editor'] = undefined;

/**
 * @member {Number} id
 */
RuleSetResponse.prototype['id'] = undefined;

/**
 * @member {Number} order
 */
RuleSetResponse.prototype['order'] = undefined;






export default RuleSetResponse;

