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

/**
 * The ApplicationUpdateInstanceRequest model module.
 * @module model/ApplicationUpdateInstanceRequest
 * @version 2.0.0
 */
class ApplicationUpdateInstanceRequest {
    /**
     * Constructs a new <code>ApplicationUpdateInstanceRequest</code>.
     * @alias module:model/ApplicationUpdateInstanceRequest
     * @param name {String} 
     * @param edgeFunctionId {Number} 
     * @param args {Object} 
     */
    constructor(name, edgeFunctionId, args) { 
        
        ApplicationUpdateInstanceRequest.initialize(this, name, edgeFunctionId, args);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, edgeFunctionId, args) { 
        obj['name'] = name;
        obj['edge_function_id'] = edgeFunctionId;
        obj['args'] = args;
    }

    /**
     * Constructs a <code>ApplicationUpdateInstanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationUpdateInstanceRequest} obj Optional instance to populate.
     * @return {module:model/ApplicationUpdateInstanceRequest} The populated <code>ApplicationUpdateInstanceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationUpdateInstanceRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('edge_function_id')) {
                obj['edge_function_id'] = ApiClient.convertToType(data['edge_function_id'], 'Number');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationUpdateInstanceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationUpdateInstanceRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationUpdateInstanceRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

ApplicationUpdateInstanceRequest.RequiredProperties = ["name", "edge_function_id", "args"];

/**
 * @member {String} name
 */
ApplicationUpdateInstanceRequest.prototype['name'] = undefined;

/**
 * @member {Number} edge_function_id
 */
ApplicationUpdateInstanceRequest.prototype['edge_function_id'] = undefined;

/**
 * @member {Object} args
 */
ApplicationUpdateInstanceRequest.prototype['args'] = undefined;






export default ApplicationUpdateInstanceRequest;

