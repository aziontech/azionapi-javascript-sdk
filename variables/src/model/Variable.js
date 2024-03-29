/**
 * Variables API
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
 * The Variable model module.
 * @module model/Variable
 * @version 1.0.0
 */
class Variable {
    /**
     * Constructs a new <code>Variable</code>.
     * @alias module:model/Variable
     * @param uuid {String} 
     * @param key {String} 
     * @param value {String} 
     * @param secret {Boolean} 
     * @param lastEditor {String} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     */
    constructor(uuid, key, value, secret, lastEditor, createdAt, updatedAt) { 
        
        Variable.initialize(this, uuid, key, value, secret, lastEditor, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, key, value, secret, lastEditor, createdAt, updatedAt) { 
        obj['uuid'] = uuid;
        obj['key'] = key;
        obj['value'] = value;
        obj['secret'] = secret;
        obj['last_editor'] = lastEditor;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Variable} obj Optional instance to populate.
     * @return {module:model/Variable} The populated <code>Variable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Variable();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'Boolean');
            }
            if (data.hasOwnProperty('last_editor')) {
                obj['last_editor'] = ApiClient.convertToType(data['last_editor'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Variable</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Variable</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Variable.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['last_editor'] && !(typeof data['last_editor'] === 'string' || data['last_editor'] instanceof String)) {
            throw new Error("Expected the field `last_editor` to be a primitive type in the JSON string but got " + data['last_editor']);
        }

        return true;
    }


}

Variable.RequiredProperties = ["uuid", "key", "value", "secret", "last_editor", "created_at", "updated_at"];

/**
 * @member {String} uuid
 */
Variable.prototype['uuid'] = undefined;

/**
 * @member {String} key
 */
Variable.prototype['key'] = undefined;

/**
 * @member {String} value
 */
Variable.prototype['value'] = undefined;

/**
 * @member {Boolean} secret
 */
Variable.prototype['secret'] = undefined;

/**
 * @member {String} last_editor
 */
Variable.prototype['last_editor'] = undefined;

/**
 * @member {Date} created_at
 */
Variable.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Variable.prototype['updated_at'] = undefined;






export default Variable;

