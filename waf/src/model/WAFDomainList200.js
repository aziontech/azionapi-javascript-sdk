/**
 * Web Application Firewall API
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
 * The WAFDomainList200 model module.
 * @module model/WAFDomainList200
 * @version 2.0.0
 */
class WAFDomainList200 {
    /**
     * Constructs a new <code>WAFDomainList200</code>.
     * @alias module:model/WAFDomainList200
     */
    constructor() { 
        
        WAFDomainList200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WAFDomainList200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WAFDomainList200} obj Optional instance to populate.
     * @return {module:model/WAFDomainList200} The populated <code>WAFDomainList200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WAFDomainList200();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('cnames')) {
                obj['cnames'] = ApiClient.convertToType(data['cnames'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WAFDomainList200</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WAFDomainList200</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cnames'])) {
            throw new Error("Expected the field `cnames` to be an array in the JSON data but got " + data['cnames']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
WAFDomainList200.prototype['id'] = undefined;

/**
 * @member {String} name
 */
WAFDomainList200.prototype['name'] = undefined;

/**
 * @member {String} domain
 */
WAFDomainList200.prototype['domain'] = undefined;

/**
 * @member {Array.<String>} cnames
 */
WAFDomainList200.prototype['cnames'] = undefined;






export default WAFDomainList200;
