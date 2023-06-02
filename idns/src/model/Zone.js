/**
 * Intelligent DNS
 * Azion Intelligent DNS API
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Zone model module.
 * @module model/Zone
 * @version 3.0.0
 */
class Zone {
    /**
     * Constructs a new <code>Zone</code>.
     * @alias module:model/Zone
     */
    constructor() { 
        
        Zone.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Zone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Zone} obj Optional instance to populate.
     * @return {module:model/Zone} The populated <code>Zone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Zone();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('retry')) {
                obj['retry'] = ApiClient.convertToType(data['retry'], 'Number');
            }
            if (data.hasOwnProperty('nx_ttl')) {
                obj['nx_ttl'] = ApiClient.convertToType(data['nx_ttl'], 'Number');
            }
            if (data.hasOwnProperty('soa_ttl')) {
                obj['soa_ttl'] = ApiClient.convertToType(data['soa_ttl'], 'Number');
            }
            if (data.hasOwnProperty('refresh')) {
                obj['refresh'] = ApiClient.convertToType(data['refresh'], 'Number');
            }
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Number');
            }
            if (data.hasOwnProperty('nameservers')) {
                obj['nameservers'] = ApiClient.convertToType(data['nameservers'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Zone</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Zone</code>.
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
        if (!Array.isArray(data['nameservers'])) {
            throw new Error("Expected the field `nameservers` to be an array in the JSON data but got " + data['nameservers']);
        }

        return true;
    }


}



/**
 * Hosted zone id
 * @member {Number} id
 */
Zone.prototype['id'] = undefined;

/**
 * Hosted zone name
 * @member {String} name
 */
Zone.prototype['name'] = undefined;

/**
 * Hosted zone domain
 * @member {String} domain
 */
Zone.prototype['domain'] = undefined;

/**
 * If hosted zone is active
 * @member {Boolean} is_active
 */
Zone.prototype['is_active'] = undefined;

/**
 * @member {Number} retry
 */
Zone.prototype['retry'] = undefined;

/**
 * @member {Number} nx_ttl
 */
Zone.prototype['nx_ttl'] = undefined;

/**
 * @member {Number} soa_ttl
 */
Zone.prototype['soa_ttl'] = undefined;

/**
 * @member {Number} refresh
 */
Zone.prototype['refresh'] = undefined;

/**
 * @member {Number} expiry
 */
Zone.prototype['expiry'] = undefined;

/**
 * List of nameservers
 * @member {Array.<String>} nameservers
 */
Zone.prototype['nameservers'] = undefined;






export default Zone;

