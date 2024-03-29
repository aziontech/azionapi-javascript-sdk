/**
 * Credentials API
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
import Response from './Response';

/**
 * The ResponseWithTotal model module.
 * @module model/ResponseWithTotal
 * @version 2.0.0
 */
class ResponseWithTotal {
    /**
     * Constructs a new <code>ResponseWithTotal</code>.
     * @alias module:model/ResponseWithTotal
     * @param credentials {Array.<module:model/Response>} 
     * @param total {Number} 
     */
    constructor(credentials, total) { 
        
        ResponseWithTotal.initialize(this, credentials, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, credentials, total) { 
        obj['credentials'] = credentials;
        obj['total'] = total;
    }

    /**
     * Constructs a <code>ResponseWithTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseWithTotal} obj Optional instance to populate.
     * @return {module:model/ResponseWithTotal} The populated <code>ResponseWithTotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseWithTotal();

            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], [Response]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseWithTotal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseWithTotal</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ResponseWithTotal.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['credentials']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['credentials'])) {
                throw new Error("Expected the field `credentials` to be an array in the JSON data but got " + data['credentials']);
            }
            // validate the optional field `credentials` (array)
            for (const item of data['credentials']) {
                Response.validateJSON(item);
            };
        }

        return true;
    }


}

ResponseWithTotal.RequiredProperties = ["credentials", "total"];

/**
 * @member {Array.<module:model/Response>} credentials
 */
ResponseWithTotal.prototype['credentials'] = undefined;

/**
 * @member {Number} total
 */
ResponseWithTotal.prototype['total'] = undefined;






export default ResponseWithTotal;

