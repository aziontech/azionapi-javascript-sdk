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
import GenericBehaviorDetails from './GenericBehaviorDetails';
import SetRateLimitDetails from './SetRateLimitDetails';
import SetWAFRuleSetDetails from './SetWAFRuleSetDetails';

/**
 * The BehaviorsArgument model module.
 * @module model/BehaviorsArgument
 * @version 2.0.0
 */
class BehaviorsArgument {
    /**
     * Constructs a new <code>BehaviorsArgument</code>.
     * @alias module:model/BehaviorsArgument
     * @param {(module:model/GenericBehaviorDetails|module:model/SetRateLimitDetails|module:model/SetWAFRuleSetDetails)} instance The actual instance to initialize BehaviorsArgument.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "GenericBehaviorDetails") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GenericBehaviorDetails.validateJSON(instance); // throw an exception if no match
                // create GenericBehaviorDetails from JS object
                this.actualInstance = GenericBehaviorDetails.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GenericBehaviorDetails
            errorMessages.push("Failed to construct GenericBehaviorDetails: " + err)
        }

        try {
            if (typeof instance === "SetRateLimitDetails") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SetRateLimitDetails.validateJSON(instance); // throw an exception if no match
                // create SetRateLimitDetails from JS object
                this.actualInstance = SetRateLimitDetails.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SetRateLimitDetails
            errorMessages.push("Failed to construct SetRateLimitDetails: " + err)
        }

        try {
            if (typeof instance === "SetWAFRuleSetDetails") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SetWAFRuleSetDetails.validateJSON(instance); // throw an exception if no match
                // create SetWAFRuleSetDetails from JS object
                this.actualInstance = SetWAFRuleSetDetails.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SetWAFRuleSetDetails
            errorMessages.push("Failed to construct SetWAFRuleSetDetails: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `BehaviorsArgument` with oneOf schemas GenericBehaviorDetails, SetRateLimitDetails, SetWAFRuleSetDetails. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `BehaviorsArgument` with oneOf schemas GenericBehaviorDetails, SetRateLimitDetails, SetWAFRuleSetDetails. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>BehaviorsArgument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BehaviorsArgument} obj Optional instance to populate.
     * @return {module:model/BehaviorsArgument} The populated <code>BehaviorsArgument</code> instance.
     */
    static constructFromObject(data, obj) {
        return new BehaviorsArgument(data);
    }

    /**
     * Gets the actual instance, which can be <code>GenericBehaviorDetails</code>, <code>SetRateLimitDetails</code>, <code>SetWAFRuleSetDetails</code>.
     * @return {(module:model/GenericBehaviorDetails|module:model/SetRateLimitDetails|module:model/SetWAFRuleSetDetails)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GenericBehaviorDetails</code>, <code>SetRateLimitDetails</code>, <code>SetWAFRuleSetDetails</code>.
     * @param {(module:model/GenericBehaviorDetails|module:model/SetRateLimitDetails|module:model/SetWAFRuleSetDetails)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = BehaviorsArgument.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of BehaviorsArgument from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/BehaviorsArgument} An instance of BehaviorsArgument.
     */
    static fromJSON = function(json_string){
        return BehaviorsArgument.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {String} name
 */
BehaviorsArgument.prototype['name'] = undefined;

/**
 * @member {module:model/BehaviorsArgument.TypeEnum} type
 */
BehaviorsArgument.prototype['type'] = undefined;

/**
 * @member {module:model/BehaviorsArgument.LimitByEnum} limit_by
 */
BehaviorsArgument.prototype['limit_by'] = undefined;

/**
 * @member {Number} average_rate_limit
 */
BehaviorsArgument.prototype['average_rate_limit'] = undefined;

/**
 * @member {Number} maximum_burst_size
 */
BehaviorsArgument.prototype['maximum_burst_size'] = undefined;

/**
 * @member {Number} waf_id
 */
BehaviorsArgument.prototype['waf_id'] = undefined;

/**
 * @member {module:model/BehaviorsArgument.ModeEnum} mode
 */
BehaviorsArgument.prototype['mode'] = undefined;


BehaviorsArgument.OneOf = ["GenericBehaviorDetails", "SetRateLimitDetails", "SetWAFRuleSetDetails"];

export default BehaviorsArgument;
