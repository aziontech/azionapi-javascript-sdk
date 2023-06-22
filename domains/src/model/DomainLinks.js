/**
 * Domain API
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
 * The DomainLinks model module.
 * @module model/DomainLinks
 * @version 2.0.0
 */
class DomainLinks {
    /**
     * Constructs a new <code>DomainLinks</code>.
     * @alias module:model/DomainLinks
     * @param previous {String} 
     * @param next {String} 
     */
    constructor(previous, next) { 
        
        DomainLinks.initialize(this, previous, next);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, previous, next) { 
        obj['previous'] = previous;
        obj['next'] = next;
    }

    /**
     * Constructs a <code>DomainLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainLinks} obj Optional instance to populate.
     * @return {module:model/DomainLinks} The populated <code>DomainLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainLinks();

            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DomainLinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DomainLinks</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DomainLinks.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['previous'] && !(typeof data['previous'] === 'string' || data['previous'] instanceof String)) {
            throw new Error("Expected the field `previous` to be a primitive type in the JSON string but got " + data['previous']);
        }
        // ensure the json data is a string
        if (data['next'] && !(typeof data['next'] === 'string' || data['next'] instanceof String)) {
            throw new Error("Expected the field `next` to be a primitive type in the JSON string but got " + data['next']);
        }

        return true;
    }


}

DomainLinks.RequiredProperties = ["previous", "next"];

/**
 * @member {String} previous
 */
DomainLinks.prototype['previous'] = undefined;

/**
 * @member {String} next
 */
DomainLinks.prototype['next'] = undefined;






export default DomainLinks;

