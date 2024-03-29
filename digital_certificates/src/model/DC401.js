/**
 * Digital Certificates API
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
 * The DC401 model module.
 * @module model/DC401
 * @version 2.0.0
 */
class DC401 {
    /**
     * Constructs a new <code>DC401</code>.
     * @alias module:model/DC401
     */
    constructor() { 
        
        DC401.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DC401</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DC401} obj Optional instance to populate.
     * @return {module:model/DC401} The populated <code>DC401</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DC401();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DC401</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DC401</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['detail'] && !(typeof data['detail'] === 'string' || data['detail'] instanceof String)) {
            throw new Error("Expected the field `detail` to be a primitive type in the JSON string but got " + data['detail']);
        }

        return true;
    }


}



/**
 * @member {String} detail
 */
DC401.prototype['detail'] = undefined;






export default DC401;

