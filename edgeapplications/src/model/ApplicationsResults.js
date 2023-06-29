/**
 * Edge Application API
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
import ApplicationOrigins from './ApplicationOrigins';

/**
 * The ApplicationsResults model module.
 * @module model/ApplicationsResults
 * @version 2.0.0
 */
class ApplicationsResults {
    /**
     * Constructs a new <code>ApplicationsResults</code>.
     * @alias module:model/ApplicationsResults
     * @param id {Number} 
     * @param name {String} 
     * @param debugRules {Boolean} 
     * @param lastEditor {String} 
     * @param lastModified {String} 
     * @param active {Boolean} 
     * @param origins {Array.<module:model/ApplicationOrigins>} 
     */
    constructor(id, name, debugRules, lastEditor, lastModified, active, origins) { 
        
        ApplicationsResults.initialize(this, id, name, debugRules, lastEditor, lastModified, active, origins);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, debugRules, lastEditor, lastModified, active, origins) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['debug_rules'] = debugRules;
        obj['last_editor'] = lastEditor;
        obj['last_modified'] = lastModified;
        obj['active'] = active;
        obj['origins'] = origins;
    }

    /**
     * Constructs a <code>ApplicationsResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationsResults} obj Optional instance to populate.
     * @return {module:model/ApplicationsResults} The populated <code>ApplicationsResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationsResults();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('debug_rules')) {
                obj['debug_rules'] = ApiClient.convertToType(data['debug_rules'], 'Boolean');
            }
            if (data.hasOwnProperty('last_editor')) {
                obj['last_editor'] = ApiClient.convertToType(data['last_editor'], 'String');
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('origins')) {
                obj['origins'] = ApiClient.convertToType(data['origins'], [ApplicationOrigins]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationsResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationsResults</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationsResults.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['last_editor'] && !(typeof data['last_editor'] === 'string' || data['last_editor'] instanceof String)) {
            throw new Error("Expected the field `last_editor` to be a primitive type in the JSON string but got " + data['last_editor']);
        }
        // ensure the json data is a string
        if (data['last_modified'] && !(typeof data['last_modified'] === 'string' || data['last_modified'] instanceof String)) {
            throw new Error("Expected the field `last_modified` to be a primitive type in the JSON string but got " + data['last_modified']);
        }
        if (data['origins']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['origins'])) {
                throw new Error("Expected the field `origins` to be an array in the JSON data but got " + data['origins']);
            }
            // validate the optional field `origins` (array)
            for (const item of data['origins']) {
                ApplicationOrigins.validateJSON(item);
            };
        }

        return true;
    }


}

ApplicationsResults.RequiredProperties = ["id", "name", "debug_rules", "last_editor", "last_modified", "active", "origins"];

/**
 * @member {Number} id
 */
ApplicationsResults.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ApplicationsResults.prototype['name'] = undefined;

/**
 * @member {Boolean} debug_rules
 */
ApplicationsResults.prototype['debug_rules'] = undefined;

/**
 * @member {String} last_editor
 */
ApplicationsResults.prototype['last_editor'] = undefined;

/**
 * @member {String} last_modified
 */
ApplicationsResults.prototype['last_modified'] = undefined;

/**
 * @member {Boolean} active
 */
ApplicationsResults.prototype['active'] = undefined;

/**
 * @member {Array.<module:model/ApplicationOrigins>} origins
 */
ApplicationsResults.prototype['origins'] = undefined;






export default ApplicationsResults;

