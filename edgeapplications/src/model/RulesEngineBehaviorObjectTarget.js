/**
 * Edge Application API
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
 * The RulesEngineBehaviorObjectTarget model module.
 * @module model/RulesEngineBehaviorObjectTarget
 * @version 2.0.0
 */
class RulesEngineBehaviorObjectTarget {
    /**
     * Constructs a new <code>RulesEngineBehaviorObjectTarget</code>.
     * @alias module:model/RulesEngineBehaviorObjectTarget
     */
    constructor() { 
        
        RulesEngineBehaviorObjectTarget.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RulesEngineBehaviorObjectTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RulesEngineBehaviorObjectTarget} obj Optional instance to populate.
     * @return {module:model/RulesEngineBehaviorObjectTarget} The populated <code>RulesEngineBehaviorObjectTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RulesEngineBehaviorObjectTarget();

            if (data.hasOwnProperty('captured_array')) {
                obj['captured_array'] = ApiClient.convertToType(data['captured_array'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('regex')) {
                obj['regex'] = ApiClient.convertToType(data['regex'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RulesEngineBehaviorObjectTarget</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RulesEngineBehaviorObjectTarget</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['captured_array'] && !(typeof data['captured_array'] === 'string' || data['captured_array'] instanceof String)) {
            throw new Error("Expected the field `captured_array` to be a primitive type in the JSON string but got " + data['captured_array']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is a string
        if (data['regex'] && !(typeof data['regex'] === 'string' || data['regex'] instanceof String)) {
            throw new Error("Expected the field `regex` to be a primitive type in the JSON string but got " + data['regex']);
        }

        return true;
    }


}



/**
 * @member {String} captured_array
 */
RulesEngineBehaviorObjectTarget.prototype['captured_array'] = undefined;

/**
 * @member {String} subject
 */
RulesEngineBehaviorObjectTarget.prototype['subject'] = undefined;

/**
 * @member {String} regex
 */
RulesEngineBehaviorObjectTarget.prototype['regex'] = undefined;






export default RulesEngineBehaviorObjectTarget;

