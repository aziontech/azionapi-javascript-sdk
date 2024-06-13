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
 * The CreateOriginsRequestAddresses model module.
 * @module model/CreateOriginsRequestAddresses
 * @version 2.0.0
 */
class CreateOriginsRequestAddresses {
    /**
     * Constructs a new <code>CreateOriginsRequestAddresses</code>.
     * @alias module:model/CreateOriginsRequestAddresses
     * @param address {String} 
     */
    constructor(address) { 
        
        CreateOriginsRequestAddresses.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>CreateOriginsRequestAddresses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateOriginsRequestAddresses} obj Optional instance to populate.
     * @return {module:model/CreateOriginsRequestAddresses} The populated <code>CreateOriginsRequestAddresses</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOriginsRequestAddresses();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateOriginsRequestAddresses</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateOriginsRequestAddresses</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateOriginsRequestAddresses.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }

        return true;
    }


}

CreateOriginsRequestAddresses.RequiredProperties = ["address"];

/**
 * @member {String} address
 */
CreateOriginsRequestAddresses.prototype['address'] = undefined;






export default CreateOriginsRequestAddresses;

