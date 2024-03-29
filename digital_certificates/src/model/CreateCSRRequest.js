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
 * The CreateCSRRequest model module.
 * @module model/CreateCSRRequest
 * @version 2.0.0
 */
class CreateCSRRequest {
    /**
     * Constructs a new <code>CreateCSRRequest</code>.
     * @alias module:model/CreateCSRRequest
     */
    constructor() { 
        
        CreateCSRRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCSRRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCSRRequest} obj Optional instance to populate.
     * @return {module:model/CreateCSRRequest} The populated <code>CreateCSRRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCSRRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('common_name')) {
                obj['common_name'] = ApiClient.convertToType(data['common_name'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('organization_unity')) {
                obj['organization_unity'] = ApiClient.convertToType(data['organization_unity'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('private_key_type')) {
                obj['private_key_type'] = ApiClient.convertToType(data['private_key_type'], 'String');
            }
            if (data.hasOwnProperty('sans')) {
                obj['sans'] = ApiClient.convertToType(data['sans'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCSRRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCSRRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['common_name'] && !(typeof data['common_name'] === 'string' || data['common_name'] instanceof String)) {
            throw new Error("Expected the field `common_name` to be a primitive type in the JSON string but got " + data['common_name']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['locality'] && !(typeof data['locality'] === 'string' || data['locality'] instanceof String)) {
            throw new Error("Expected the field `locality` to be a primitive type in the JSON string but got " + data['locality']);
        }
        // ensure the json data is a string
        if (data['organization'] && !(typeof data['organization'] === 'string' || data['organization'] instanceof String)) {
            throw new Error("Expected the field `organization` to be a primitive type in the JSON string but got " + data['organization']);
        }
        // ensure the json data is a string
        if (data['organization_unity'] && !(typeof data['organization_unity'] === 'string' || data['organization_unity'] instanceof String)) {
            throw new Error("Expected the field `organization_unity` to be a primitive type in the JSON string but got " + data['organization_unity']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['private_key_type'] && !(typeof data['private_key_type'] === 'string' || data['private_key_type'] instanceof String)) {
            throw new Error("Expected the field `private_key_type` to be a primitive type in the JSON string but got " + data['private_key_type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sans'])) {
            throw new Error("Expected the field `sans` to be an array in the JSON data but got " + data['sans']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
CreateCSRRequest.prototype['name'] = undefined;

/**
 * @member {String} common_name
 */
CreateCSRRequest.prototype['common_name'] = undefined;

/**
 * @member {String} country
 */
CreateCSRRequest.prototype['country'] = undefined;

/**
 * @member {String} state
 */
CreateCSRRequest.prototype['state'] = undefined;

/**
 * @member {String} locality
 */
CreateCSRRequest.prototype['locality'] = undefined;

/**
 * @member {String} organization
 */
CreateCSRRequest.prototype['organization'] = undefined;

/**
 * @member {String} organization_unity
 */
CreateCSRRequest.prototype['organization_unity'] = undefined;

/**
 * @member {String} email
 */
CreateCSRRequest.prototype['email'] = undefined;

/**
 * @member {String} private_key_type
 */
CreateCSRRequest.prototype['private_key_type'] = undefined;

/**
 * @member {Array.<String>} sans
 */
CreateCSRRequest.prototype['sans'] = undefined;






export default CreateCSRRequest;

