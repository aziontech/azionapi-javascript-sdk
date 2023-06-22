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

/**
 * The Response model module.
 * @module model/Response
 * @version 2.0.0
 */
class Response {
    /**
     * Constructs a new <code>Response</code>.
     * @alias module:model/Response
     * @param description {String} 
     * @param id {Number} 
     * @param lastEditor {String} 
     * @param lastModified {Date} 
     * @param name {String} 
     * @param status {Boolean} 
     * @param token {String} 
     */
    constructor(description, id, lastEditor, lastModified, name, status, token) { 
        
        Response.initialize(this, description, id, lastEditor, lastModified, name, status, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, id, lastEditor, lastModified, name, status, token) { 
        obj['description'] = description;
        obj['id'] = id;
        obj['last_editor'] = lastEditor;
        obj['last_modified'] = lastModified;
        obj['name'] = name;
        obj['status'] = status;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Response} obj Optional instance to populate.
     * @return {module:model/Response} The populated <code>Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Response();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('last_editor')) {
                obj['last_editor'] = ApiClient.convertToType(data['last_editor'], 'String');
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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

Response.RequiredProperties = ["description", "id", "last_editor", "last_modified", "name", "status", "token"];

/**
 * @member {String} description
 */
Response.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
Response.prototype['id'] = undefined;

/**
 * @member {String} last_editor
 */
Response.prototype['last_editor'] = undefined;

/**
 * @member {Date} last_modified
 */
Response.prototype['last_modified'] = undefined;

/**
 * @member {String} name
 */
Response.prototype['name'] = undefined;

/**
 * @member {Boolean} status
 */
Response.prototype['status'] = undefined;

/**
 * @member {String} token
 */
Response.prototype['token'] = undefined;






export default Response;

