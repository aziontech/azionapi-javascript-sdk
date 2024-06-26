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
 * The RulesEngineCriteria model module.
 * @module model/RulesEngineCriteria
 * @version 2.0.0
 */
class RulesEngineCriteria {
    /**
     * Constructs a new <code>RulesEngineCriteria</code>.
     * @alias module:model/RulesEngineCriteria
     * @param conditional {String} 
     * @param variable {String} 
     * @param operator {String} 
     */
    constructor(conditional, variable, operator) { 
        
        RulesEngineCriteria.initialize(this, conditional, variable, operator);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, conditional, variable, operator) { 
        obj['conditional'] = conditional;
        obj['variable'] = variable;
        obj['operator'] = operator;
    }

    /**
     * Constructs a <code>RulesEngineCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RulesEngineCriteria} obj Optional instance to populate.
     * @return {module:model/RulesEngineCriteria} The populated <code>RulesEngineCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RulesEngineCriteria();

            if (data.hasOwnProperty('conditional')) {
                obj['conditional'] = ApiClient.convertToType(data['conditional'], 'String');
            }
            if (data.hasOwnProperty('variable')) {
                obj['variable'] = ApiClient.convertToType(data['variable'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('input_value')) {
                obj['input_value'] = ApiClient.convertToType(data['input_value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RulesEngineCriteria</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RulesEngineCriteria</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RulesEngineCriteria.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['conditional'] && !(typeof data['conditional'] === 'string' || data['conditional'] instanceof String)) {
            throw new Error("Expected the field `conditional` to be a primitive type in the JSON string but got " + data['conditional']);
        }
        // ensure the json data is a string
        if (data['variable'] && !(typeof data['variable'] === 'string' || data['variable'] instanceof String)) {
            throw new Error("Expected the field `variable` to be a primitive type in the JSON string but got " + data['variable']);
        }
        // ensure the json data is a string
        if (data['operator'] && !(typeof data['operator'] === 'string' || data['operator'] instanceof String)) {
            throw new Error("Expected the field `operator` to be a primitive type in the JSON string but got " + data['operator']);
        }
        // ensure the json data is a string
        if (data['input_value'] && !(typeof data['input_value'] === 'string' || data['input_value'] instanceof String)) {
            throw new Error("Expected the field `input_value` to be a primitive type in the JSON string but got " + data['input_value']);
        }

        return true;
    }


}

RulesEngineCriteria.RequiredProperties = ["conditional", "variable", "operator"];

/**
 * @member {String} conditional
 */
RulesEngineCriteria.prototype['conditional'] = undefined;

/**
 * @member {String} variable
 */
RulesEngineCriteria.prototype['variable'] = undefined;

/**
 * @member {String} operator
 */
RulesEngineCriteria.prototype['operator'] = undefined;

/**
 * @member {String} input_value
 */
RulesEngineCriteria.prototype['input_value'] = undefined;






export default RulesEngineCriteria;

