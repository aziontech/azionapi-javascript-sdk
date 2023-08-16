/**
 * Network Lists API
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
 * The NetworkListUuidResponseEntryInt model module.
 * @module model/NetworkListUuidResponseEntryInt
 * @version 1.0.0
 */
class NetworkListUuidResponseEntryInt {
    /**
     * Constructs a new <code>NetworkListUuidResponseEntryInt</code>.
     * @alias module:model/NetworkListUuidResponseEntryInt
     */
    constructor() { 
        
        NetworkListUuidResponseEntryInt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkListUuidResponseEntryInt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkListUuidResponseEntryInt} obj Optional instance to populate.
     * @return {module:model/NetworkListUuidResponseEntryInt} The populated <code>NetworkListUuidResponseEntryInt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkListUuidResponseEntryInt();

            if (data.hasOwnProperty('last_editor')) {
                obj['last_editor'] = ApiClient.convertToType(data['last_editor'], 'String');
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'String');
            }
            if (data.hasOwnProperty('list_type')) {
                obj['list_type'] = ApiClient.convertToType(data['list_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('items_values')) {
                obj['items_values'] = ApiClient.convertToType(data['items_values'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NetworkListUuidResponseEntryInt</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkListUuidResponseEntryInt</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['last_editor'] && !(typeof data['last_editor'] === 'string' || data['last_editor'] instanceof String)) {
            throw new Error("Expected the field `last_editor` to be a primitive type in the JSON string but got " + data['last_editor']);
        }
        // ensure the json data is a string
        if (data['last_modified'] && !(typeof data['last_modified'] === 'string' || data['last_modified'] instanceof String)) {
            throw new Error("Expected the field `last_modified` to be a primitive type in the JSON string but got " + data['last_modified']);
        }
        // ensure the json data is a string
        if (data['list_type'] && !(typeof data['list_type'] === 'string' || data['list_type'] instanceof String)) {
            throw new Error("Expected the field `list_type` to be a primitive type in the JSON string but got " + data['list_type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['items_values'])) {
            throw new Error("Expected the field `items_values` to be an array in the JSON data but got " + data['items_values']);
        }

        return true;
    }


}



/**
 * @member {String} last_editor
 */
NetworkListUuidResponseEntryInt.prototype['last_editor'] = undefined;

/**
 * @member {String} last_modified
 */
NetworkListUuidResponseEntryInt.prototype['last_modified'] = undefined;

/**
 * @member {String} list_type
 */
NetworkListUuidResponseEntryInt.prototype['list_type'] = undefined;

/**
 * @member {String} name
 */
NetworkListUuidResponseEntryInt.prototype['name'] = undefined;

/**
 * @member {Array.<Number>} items_values
 */
NetworkListUuidResponseEntryInt.prototype['items_values'] = undefined;






export default NetworkListUuidResponseEntryInt;
