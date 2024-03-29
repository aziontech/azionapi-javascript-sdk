/**
 * Edge Node API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ServiceResponse model module.
 * @module model/ServiceResponse
 * @version 1.0.0
 */
class ServiceResponse {
    /**
     * Constructs a new <code>ServiceResponse</code>.
     * @alias module:model/ServiceResponse
     * @param bindId {Number} 
     * @param isBound {Number} 
     * @param lastEditor {String} 
     * @param name {String} 
     * @param serviceId {Number} 
     * @param updatedAt {Date} 
     */
    constructor(bindId, isBound, lastEditor, name, serviceId, updatedAt) { 
        
        ServiceResponse.initialize(this, bindId, isBound, lastEditor, name, serviceId, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bindId, isBound, lastEditor, name, serviceId, updatedAt) { 
        obj['bind_id'] = bindId;
        obj['is_bound'] = isBound;
        obj['last_editor'] = lastEditor;
        obj['name'] = name;
        obj['service_id'] = serviceId;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>ServiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceResponse} obj Optional instance to populate.
     * @return {module:model/ServiceResponse} The populated <code>ServiceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceResponse();

            if (data.hasOwnProperty('bind_id')) {
                obj['bind_id'] = ApiClient.convertToType(data['bind_id'], 'Number');
            }
            if (data.hasOwnProperty('is_bound')) {
                obj['is_bound'] = ApiClient.convertToType(data['is_bound'], 'Number');
            }
            if (data.hasOwnProperty('last_editor')) {
                obj['last_editor'] = ApiClient.convertToType(data['last_editor'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ServiceResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['last_editor'] && !(typeof data['last_editor'] === 'string' || data['last_editor'] instanceof String)) {
            throw new Error("Expected the field `last_editor` to be a primitive type in the JSON string but got " + data['last_editor']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

ServiceResponse.RequiredProperties = ["bind_id", "is_bound", "last_editor", "name", "service_id", "updated_at"];

/**
 * @member {Number} bind_id
 */
ServiceResponse.prototype['bind_id'] = undefined;

/**
 * @member {Number} is_bound
 */
ServiceResponse.prototype['is_bound'] = undefined;

/**
 * @member {String} last_editor
 */
ServiceResponse.prototype['last_editor'] = undefined;

/**
 * @member {String} name
 */
ServiceResponse.prototype['name'] = undefined;

/**
 * @member {Number} service_id
 */
ServiceResponse.prototype['service_id'] = undefined;

/**
 * @member {Date} updated_at
 */
ServiceResponse.prototype['updated_at'] = undefined;






export default ServiceResponse;

