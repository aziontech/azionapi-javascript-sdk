/**
 * Services API
 * Azion Services
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
import Variable from './Variable';

/**
 * The UpdateServiceRequest model module.
 * @module model/UpdateServiceRequest
 * @version 2.0.0
 */
class UpdateServiceRequest {
    /**
     * Constructs a new <code>UpdateServiceRequest</code>.
     * @alias module:model/UpdateServiceRequest
     */
    constructor() { 
        
        UpdateServiceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateServiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateServiceRequest} obj Optional instance to populate.
     * @return {module:model/UpdateServiceRequest} The populated <code>UpdateServiceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateServiceRequest();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [Variable]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateServiceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateServiceRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['variables']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['variables'])) {
                throw new Error("Expected the field `variables` to be an array in the JSON data but got " + data['variables']);
            }
            // validate the optional field `variables` (array)
            for (const item of data['variables']) {
                Variable.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Boolean} active
 */
UpdateServiceRequest.prototype['active'] = undefined;

/**
 * @member {String} name
 */
UpdateServiceRequest.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/Variable>} variables
 */
UpdateServiceRequest.prototype['variables'] = undefined;






export default UpdateServiceRequest;
