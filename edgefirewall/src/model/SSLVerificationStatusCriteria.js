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
import Conditionals from './Conditionals';
import SSLVerificationStatusArguments from './SSLVerificationStatusArguments';
import SSLVerificationStatusOperators from './SSLVerificationStatusOperators';
import Variables from './Variables';

/**
 * The SSLVerificationStatusCriteria model module.
 * @module model/SSLVerificationStatusCriteria
 * @version 2.0.0
 */
class SSLVerificationStatusCriteria {
    /**
     * Constructs a new <code>SSLVerificationStatusCriteria</code>.
     * @alias module:model/SSLVerificationStatusCriteria
     */
    constructor() { 
        
        SSLVerificationStatusCriteria.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SSLVerificationStatusCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SSLVerificationStatusCriteria} obj Optional instance to populate.
     * @return {module:model/SSLVerificationStatusCriteria} The populated <code>SSLVerificationStatusCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SSLVerificationStatusCriteria();

            if (data.hasOwnProperty('variable')) {
                obj['variable'] = Variables.constructFromObject(data['variable']);
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = SSLVerificationStatusOperators.constructFromObject(data['operator']);
            }
            if (data.hasOwnProperty('conditional')) {
                obj['conditional'] = Conditionals.constructFromObject(data['conditional']);
            }
            if (data.hasOwnProperty('input_value')) {
                obj['input_value'] = SSLVerificationStatusArguments.constructFromObject(data['input_value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SSLVerificationStatusCriteria</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SSLVerificationStatusCriteria</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/Variables} variable
 */
SSLVerificationStatusCriteria.prototype['variable'] = undefined;

/**
 * @member {module:model/SSLVerificationStatusOperators} operator
 */
SSLVerificationStatusCriteria.prototype['operator'] = undefined;

/**
 * @member {module:model/Conditionals} conditional
 */
SSLVerificationStatusCriteria.prototype['conditional'] = undefined;

/**
 * @member {module:model/SSLVerificationStatusArguments} input_value
 */
SSLVerificationStatusCriteria.prototype['input_value'] = undefined;






export default SSLVerificationStatusCriteria;
