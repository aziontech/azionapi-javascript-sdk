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
 * The DC403 model module.
 * @module model/DC403
 * @version 2.0.0
 */
class DC403 {
    /**
     * Constructs a new <code>DC403</code>.
     * @alias module:model/DC403
     */
    constructor() { 
        
        DC403.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DC403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DC403} obj Optional instance to populate.
     * @return {module:model/DC403} The populated <code>DC403</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DC403();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Object]);
            }
            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DC403</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DC403</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }

        return true;
    }


}



/**
 * @member {Array.<Object>} errors
 */
DC403.prototype['errors'] = undefined;

/**
 * @member {Number} schema_version
 */
DC403.prototype['schema_version'] = undefined;






export default DC403;

