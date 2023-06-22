/**
 * Edge Function API
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
 * The PutEdgeFunctionRequest model module.
 * @module model/PutEdgeFunctionRequest
 * @version 2.0.0
 */
class PutEdgeFunctionRequest {
    /**
     * Constructs a new <code>PutEdgeFunctionRequest</code>.
     * @alias module:model/PutEdgeFunctionRequest
     */
    constructor() { 
        
        PutEdgeFunctionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutEdgeFunctionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutEdgeFunctionRequest} obj Optional instance to populate.
     * @return {module:model/PutEdgeFunctionRequest} The populated <code>PutEdgeFunctionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutEdgeFunctionRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('json_args')) {
                obj['json_args'] = ApiClient.convertToType(data['json_args'], Object);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('initiator_type')) {
                obj['initiator_type'] = ApiClient.convertToType(data['initiator_type'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('is_proprietary_code')) {
                obj['is_proprietary_code'] = ApiClient.convertToType(data['is_proprietary_code'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PutEdgeFunctionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PutEdgeFunctionRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['initiator_type'] && !(typeof data['initiator_type'] === 'string' || data['initiator_type'] instanceof String)) {
            throw new Error("Expected the field `initiator_type` to be a primitive type in the JSON string but got " + data['initiator_type']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
PutEdgeFunctionRequest.prototype['name'] = undefined;

/**
 * @member {String} code
 */
PutEdgeFunctionRequest.prototype['code'] = undefined;

/**
 * @member {Object} json_args
 */
PutEdgeFunctionRequest.prototype['json_args'] = undefined;

/**
 * @member {Boolean} active
 */
PutEdgeFunctionRequest.prototype['active'] = undefined;

/**
 * @member {String} initiator_type
 */
PutEdgeFunctionRequest.prototype['initiator_type'] = undefined;

/**
 * @member {String} language
 */
PutEdgeFunctionRequest.prototype['language'] = undefined;

/**
 * @member {Boolean} is_proprietary_code
 */
PutEdgeFunctionRequest.prototype['is_proprietary_code'] = undefined;






export default PutEdgeFunctionRequest;

