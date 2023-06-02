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
import Variable from './Variable';

/**
 * The ServiceResponse model module.
 * @module model/ServiceResponse
 * @version 2.0.0
 */
class ServiceResponse {
    /**
     * Constructs a new <code>ServiceResponse</code>.
     * @alias module:model/ServiceResponse
     * @param active {Boolean} 
     * @param boundNodes {Number} 
     * @param id {Number} 
     * @param lastEditor {String} 
     * @param name {String} 
     * @param permissions {Array.<String>} 
     * @param updatedAt {String} 
     */
    constructor(active, boundNodes, id, lastEditor, name, permissions, updatedAt) { 
        
        ServiceResponse.initialize(this, active, boundNodes, id, lastEditor, name, permissions, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, active, boundNodes, id, lastEditor, name, permissions, updatedAt) { 
        obj['active'] = active;
        obj['bound_nodes'] = boundNodes;
        obj['id'] = id;
        obj['last_editor'] = lastEditor;
        obj['name'] = name;
        obj['permissions'] = permissions;
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

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('bound_nodes')) {
                obj['bound_nodes'] = ApiClient.convertToType(data['bound_nodes'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('last_editor')) {
                obj['last_editor'] = ApiClient.convertToType(data['last_editor'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [Variable]);
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
        // ensure the json data is an array
        if (!Array.isArray(data['permissions'])) {
            throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        if (data['variables']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['variables'])) {
                throw new Error("Expected the field `variables` to be an array in the JSON data but got " + data['variables']);
            }
            // validate the optional field `variables` (array)
            for (const item of data['variables']) {
                Variable.validateJSON(item);
            };
        }

        return true;
    }


}

ServiceResponse.RequiredProperties = ["active", "bound_nodes", "id", "last_editor", "name", "permissions", "updated_at"];

/**
 * @member {Boolean} active
 */
ServiceResponse.prototype['active'] = undefined;

/**
 * @member {Number} bound_nodes
 */
ServiceResponse.prototype['bound_nodes'] = undefined;

/**
 * @member {Number} id
 */
ServiceResponse.prototype['id'] = undefined;

/**
 * @member {String} last_editor
 */
ServiceResponse.prototype['last_editor'] = undefined;

/**
 * @member {String} name
 */
ServiceResponse.prototype['name'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
ServiceResponse.prototype['permissions'] = undefined;

/**
 * @member {String} updated_at
 */
ServiceResponse.prototype['updated_at'] = undefined;

/**
 * @member {Array.<module:model/Variable>} variables
 */
ServiceResponse.prototype['variables'] = undefined;






export default ServiceResponse;

