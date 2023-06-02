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

/**
 * The UpdateResourceRequest model module.
 * @module model/UpdateResourceRequest
 * @version 2.0.0
 */
class UpdateResourceRequest {
    /**
     * Constructs a new <code>UpdateResourceRequest</code>.
     * @alias module:model/UpdateResourceRequest
     */
    constructor() { 
        
        UpdateResourceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateResourceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateResourceRequest} obj Optional instance to populate.
     * @return {module:model/UpdateResourceRequest} The populated <code>UpdateResourceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateResourceRequest();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = ApiClient.convertToType(data['trigger'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateResourceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateResourceRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['content_type'] && !(typeof data['content_type'] === 'string' || data['content_type'] instanceof String)) {
            throw new Error("Expected the field `content_type` to be a primitive type in the JSON string but got " + data['content_type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['trigger'] && !(typeof data['trigger'] === 'string' || data['trigger'] instanceof String)) {
            throw new Error("Expected the field `trigger` to be a primitive type in the JSON string but got " + data['trigger']);
        }

        return true;
    }


}



/**
 * @member {String} content
 */
UpdateResourceRequest.prototype['content'] = undefined;

/**
 * @member {String} content_type
 */
UpdateResourceRequest.prototype['content_type'] = undefined;

/**
 * @member {String} name
 */
UpdateResourceRequest.prototype['name'] = undefined;

/**
 * @member {String} trigger
 */
UpdateResourceRequest.prototype['trigger'] = undefined;






export default UpdateResourceRequest;

