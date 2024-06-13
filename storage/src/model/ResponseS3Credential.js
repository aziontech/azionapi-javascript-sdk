/**
 * Object Storage
 * REST API OpenAPI documentation for the Object Storage
 *
 * The version of the OpenAPI document: 1.0.0 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import S3Credential from './S3Credential';

/**
 * The ResponseS3Credential model module.
 * @module model/ResponseS3Credential
 * @version 1.0.0 (v1)
 */
class ResponseS3Credential {
    /**
     * Constructs a new <code>ResponseS3Credential</code>.
     * @alias module:model/ResponseS3Credential
     */
    constructor() { 
        
        ResponseS3Credential.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseS3Credential</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseS3Credential} obj Optional instance to populate.
     * @return {module:model/ResponseS3Credential} The populated <code>ResponseS3Credential</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseS3Credential();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = S3Credential.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseS3Credential</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseS3Credential</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          S3Credential.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {String} state
 */
ResponseS3Credential.prototype['state'] = undefined;

/**
 * @member {module:model/S3Credential} data
 */
ResponseS3Credential.prototype['data'] = undefined;






export default ResponseS3Credential;
