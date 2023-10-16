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
 * The SetWAFRuleSetAndWafModeBehaviorArgument model module.
 * @module model/SetWAFRuleSetAndWafModeBehaviorArgument
 * @version 2.0.0
 */
class SetWAFRuleSetAndWafModeBehaviorArgument {
    /**
     * Constructs a new <code>SetWAFRuleSetAndWafModeBehaviorArgument</code>.
     * @alias module:model/SetWAFRuleSetAndWafModeBehaviorArgument
     * @param setWafRulesetAndWafMode {Number} 
     * @param wafMode {module:model/SetWAFRuleSetAndWafModeBehaviorArgument.WafModeEnum} 
     */
    constructor(setWafRulesetAndWafMode, wafMode) { 
        
        SetWAFRuleSetAndWafModeBehaviorArgument.initialize(this, setWafRulesetAndWafMode, wafMode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, setWafRulesetAndWafMode, wafMode) { 
        obj['set_waf_ruleset_and_waf_mode'] = setWafRulesetAndWafMode;
        obj['waf_mode'] = wafMode;
    }

    /**
     * Constructs a <code>SetWAFRuleSetAndWafModeBehaviorArgument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetWAFRuleSetAndWafModeBehaviorArgument} obj Optional instance to populate.
     * @return {module:model/SetWAFRuleSetAndWafModeBehaviorArgument} The populated <code>SetWAFRuleSetAndWafModeBehaviorArgument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetWAFRuleSetAndWafModeBehaviorArgument();

            if (data.hasOwnProperty('set_waf_ruleset_and_waf_mode')) {
                obj['set_waf_ruleset_and_waf_mode'] = ApiClient.convertToType(data['set_waf_ruleset_and_waf_mode'], 'Number');
            }
            if (data.hasOwnProperty('waf_mode')) {
                obj['waf_mode'] = ApiClient.convertToType(data['waf_mode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetWAFRuleSetAndWafModeBehaviorArgument</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetWAFRuleSetAndWafModeBehaviorArgument</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SetWAFRuleSetAndWafModeBehaviorArgument.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['waf_mode'] && !(typeof data['waf_mode'] === 'string' || data['waf_mode'] instanceof String)) {
            throw new Error("Expected the field `waf_mode` to be a primitive type in the JSON string but got " + data['waf_mode']);
        }

        return true;
    }


}

SetWAFRuleSetAndWafModeBehaviorArgument.RequiredProperties = ["set_waf_ruleset_and_waf_mode", "waf_mode"];

/**
 * @member {Number} set_waf_ruleset_and_waf_mode
 */
SetWAFRuleSetAndWafModeBehaviorArgument.prototype['set_waf_ruleset_and_waf_mode'] = undefined;

/**
 * @member {module:model/SetWAFRuleSetAndWafModeBehaviorArgument.WafModeEnum} waf_mode
 */
SetWAFRuleSetAndWafModeBehaviorArgument.prototype['waf_mode'] = undefined;





/**
 * Allowed values for the <code>waf_mode</code> property.
 * @enum {String}
 * @readonly
 */
SetWAFRuleSetAndWafModeBehaviorArgument['WafModeEnum'] = {

    /**
     * value: "learning"
     * @const
     */
    "learning": "learning",

    /**
     * value: "blocking"
     * @const
     */
    "blocking": "blocking"
};



export default SetWAFRuleSetAndWafModeBehaviorArgument;

