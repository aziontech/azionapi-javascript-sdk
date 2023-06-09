/**
 * Credentials API
 * Azion Orchestration
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
 * The AuthToken model module.
 * @module model/AuthToken
 * @version 2.0.0
 */
class AuthToken {
    /**
     * Constructs a new <code>AuthToken</code>.
     * @alias module:model/AuthToken
     * @param clientId {String} 
     * @param createdAt {Date} 
     * @param id {Number} 
     * @param isActive {Boolean} 
     * @param lastEditor {String} 
     * @param name {String} 
     * @param token {String} 
     * @param updatedAt {Date} 
     */
    constructor(clientId, createdAt, id, isActive, lastEditor, name, token, updatedAt) { 
        
        AuthToken.initialize(this, clientId, createdAt, id, isActive, lastEditor, name, token, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientId, createdAt, id, isActive, lastEditor, name, token, updatedAt) { 
        obj['client_id'] = clientId;
        obj['created_at'] = createdAt;
        obj['id'] = id;
        obj['is_active'] = isActive;
        obj['last_editor'] = lastEditor;
        obj['name'] = name;
        obj['token'] = token;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>AuthToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthToken} obj Optional instance to populate.
     * @return {module:model/AuthToken} The populated <code>AuthToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthToken();

            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('last_editor')) {
                obj['last_editor'] = ApiClient.convertToType(data['last_editor'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthToken</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthToken</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthToken.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['client_id'] && !(typeof data['client_id'] === 'string' || data['client_id'] instanceof String)) {
            throw new Error("Expected the field `client_id` to be a primitive type in the JSON string but got " + data['client_id']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['last_editor'] && !(typeof data['last_editor'] === 'string' || data['last_editor'] instanceof String)) {
            throw new Error("Expected the field `last_editor` to be a primitive type in the JSON string but got " + data['last_editor']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}

AuthToken.RequiredProperties = ["client_id", "created_at", "id", "is_active", "last_editor", "name", "token", "updated_at"];

/**
 * @member {String} client_id
 */
AuthToken.prototype['client_id'] = undefined;

/**
 * @member {Date} created_at
 */
AuthToken.prototype['created_at'] = undefined;

/**
 * @member {Date} deleted_at
 */
AuthToken.prototype['deleted_at'] = undefined;

/**
 * @member {String} description
 */
AuthToken.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
AuthToken.prototype['id'] = undefined;

/**
 * @member {Boolean} is_active
 */
AuthToken.prototype['is_active'] = undefined;

/**
 * @member {String} last_editor
 */
AuthToken.prototype['last_editor'] = undefined;

/**
 * @member {String} name
 */
AuthToken.prototype['name'] = undefined;

/**
 * @member {String} token
 */
AuthToken.prototype['token'] = undefined;

/**
 * @member {Date} updated_at
 */
AuthToken.prototype['updated_at'] = undefined;






export default AuthToken;

