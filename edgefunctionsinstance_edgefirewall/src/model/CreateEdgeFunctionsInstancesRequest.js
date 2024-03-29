/**
 * Edge Functions Instances API
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
 * The CreateEdgeFunctionsInstancesRequest model module.
 * @module model/CreateEdgeFunctionsInstancesRequest
 * @version 2.0.0
 */
class CreateEdgeFunctionsInstancesRequest {
    /**
     * Constructs a new <code>CreateEdgeFunctionsInstancesRequest</code>.
     * @alias module:model/CreateEdgeFunctionsInstancesRequest
     */
    constructor() { 
        
        CreateEdgeFunctionsInstancesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateEdgeFunctionsInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEdgeFunctionsInstancesRequest} obj Optional instance to populate.
     * @return {module:model/CreateEdgeFunctionsInstancesRequest} The populated <code>CreateEdgeFunctionsInstancesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEdgeFunctionsInstancesRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('edge_function')) {
                obj['edge_function'] = ApiClient.convertToType(data['edge_function'], 'Number');
            }
            if (data.hasOwnProperty('json_args')) {
                obj['json_args'] = ApiClient.convertToType(data['json_args'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateEdgeFunctionsInstancesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEdgeFunctionsInstancesRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
CreateEdgeFunctionsInstancesRequest.prototype['name'] = undefined;

/**
 * @member {Number} edge_function
 */
CreateEdgeFunctionsInstancesRequest.prototype['edge_function'] = undefined;

/**
 * @member {Object} json_args
 */
CreateEdgeFunctionsInstancesRequest.prototype['json_args'] = undefined;






export default CreateEdgeFunctionsInstancesRequest;

