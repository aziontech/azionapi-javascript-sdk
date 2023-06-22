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
 * The RulesEngineResultResponseBehaviors model module.
 * @module model/RulesEngineResultResponseBehaviors
 * @version 2.0.0
 */
class RulesEngineResultResponseBehaviors {
    /**
     * Constructs a new <code>RulesEngineResultResponseBehaviors</code>.
     * @alias module:model/RulesEngineResultResponseBehaviors
     * @param name {String} 
     */
    constructor(name) { 
        
        RulesEngineResultResponseBehaviors.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RulesEngineResultResponseBehaviors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RulesEngineResultResponseBehaviors} obj Optional instance to populate.
     * @return {module:model/RulesEngineResultResponseBehaviors} The populated <code>RulesEngineResultResponseBehaviors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RulesEngineResultResponseBehaviors();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RulesEngineResultResponseBehaviors</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RulesEngineResultResponseBehaviors</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RulesEngineResultResponseBehaviors.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

RulesEngineResultResponseBehaviors.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
RulesEngineResultResponseBehaviors.prototype['name'] = undefined;

/**
 * @member {Object} target
 */
RulesEngineResultResponseBehaviors.prototype['target'] = undefined;






export default RulesEngineResultResponseBehaviors;

