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
 * The CreateNetworkListsRequest model module.
 * @module model/CreateNetworkListsRequest
 * @version 1.0.0
 */
class CreateNetworkListsRequest {
    /**
     * Constructs a new <code>CreateNetworkListsRequest</code>.
     * @alias module:model/CreateNetworkListsRequest
     */
    constructor() { 
        
        CreateNetworkListsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateNetworkListsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNetworkListsRequest} obj Optional instance to populate.
     * @return {module:model/CreateNetworkListsRequest} The populated <code>CreateNetworkListsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateNetworkListsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('items_values')) {
                obj['items_values'] = ApiClient.convertToType(data['items_values'], ['String']);
            }
            if (data.hasOwnProperty('list_type')) {
                obj['list_type'] = ApiClient.convertToType(data['list_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateNetworkListsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateNetworkListsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['items_values'])) {
            throw new Error("Expected the field `items_values` to be an array in the JSON data but got " + data['items_values']);
        }
        // ensure the json data is a string
        if (data['list_type'] && !(typeof data['list_type'] === 'string' || data['list_type'] instanceof String)) {
            throw new Error("Expected the field `list_type` to be a primitive type in the JSON string but got " + data['list_type']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
CreateNetworkListsRequest.prototype['name'] = undefined;

/**
 * @member {Array.<String>} items_values
 */
CreateNetworkListsRequest.prototype['items_values'] = undefined;

/**
 * @member {module:model/CreateNetworkListsRequest.ListTypeEnum} list_type
 */
CreateNetworkListsRequest.prototype['list_type'] = undefined;





/**
 * Allowed values for the <code>list_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateNetworkListsRequest['ListTypeEnum'] = {

    /**
     * value: "ip_cidr"
     * @const
     */
    "ip_cidr": "ip_cidr",

    /**
     * value: "asn"
     * @const
     */
    "asn": "asn",

    /**
     * value: "countries"
     * @const
     */
    "countries": "countries"
};



export default CreateNetworkListsRequest;

