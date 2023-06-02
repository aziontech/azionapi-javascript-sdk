/**
 * Edge Function
 * Azion Edge Function API
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateEdgeFunctionRequest model module.
 * @module model/CreateEdgeFunctionRequest
 * @version 3.0
 */
class CreateEdgeFunctionRequest {
    /**
     * Constructs a new <code>CreateEdgeFunctionRequest</code>.
     * @alias module:model/CreateEdgeFunctionRequest
     */
    constructor() { 
        
        CreateEdgeFunctionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateEdgeFunctionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEdgeFunctionRequest} obj Optional instance to populate.
     * @return {module:model/CreateEdgeFunctionRequest} The populated <code>CreateEdgeFunctionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEdgeFunctionRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateEdgeFunctionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEdgeFunctionRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
CreateEdgeFunctionRequest.prototype['name'] = undefined;

/**
 * @member {String} language
 */
CreateEdgeFunctionRequest.prototype['language'] = undefined;

/**
 * @member {String} code
 */
CreateEdgeFunctionRequest.prototype['code'] = undefined;

/**
 * @member {Object} json_args
 */
CreateEdgeFunctionRequest.prototype['json_args'] = undefined;

/**
 * @member {Boolean} active
 */
CreateEdgeFunctionRequest.prototype['active'] = undefined;






export default CreateEdgeFunctionRequest;

