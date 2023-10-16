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
 * The SetWAFRuleSetBehaviorArgument model module.
 * @module model/SetWAFRuleSetBehaviorArgument
 * @version 2.0.0
 */
class SetWAFRuleSetBehaviorArgument {
    /**
     * Constructs a new <code>SetWAFRuleSetBehaviorArgument</code>.
     * @alias module:model/SetWAFRuleSetBehaviorArgument
     */
    constructor() { 
        
        SetWAFRuleSetBehaviorArgument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetWAFRuleSetBehaviorArgument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetWAFRuleSetBehaviorArgument} obj Optional instance to populate.
     * @return {module:model/SetWAFRuleSetBehaviorArgument} The populated <code>SetWAFRuleSetBehaviorArgument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetWAFRuleSetBehaviorArgument();

            if (data.hasOwnProperty('waf_id')) {
                obj['waf_id'] = ApiClient.convertToType(data['waf_id'], 'Number');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetWAFRuleSetBehaviorArgument</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetWAFRuleSetBehaviorArgument</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['mode'] && !(typeof data['mode'] === 'string' || data['mode'] instanceof String)) {
            throw new Error("Expected the field `mode` to be a primitive type in the JSON string but got " + data['mode']);
        }

        return true;
    }


}



/**
 * @member {Number} waf_id
 */
SetWAFRuleSetBehaviorArgument.prototype['waf_id'] = undefined;

/**
 * @member {module:model/SetWAFRuleSetBehaviorArgument.ModeEnum} mode
 */
SetWAFRuleSetBehaviorArgument.prototype['mode'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
SetWAFRuleSetBehaviorArgument['ModeEnum'] = {

    /**
     * value: "Learning"
     * @const
     */
    "Learning": "Learning",

    /**
     * value: "Blocking"
     * @const
     */
    "Blocking": "Blocking"
};



export default SetWAFRuleSetBehaviorArgument;

