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
import CreateOriginsRequestAddresses from './CreateOriginsRequestAddresses';

/**
 * The PatchOriginsRequest model module.
 * @module model/PatchOriginsRequest
 * @version 2.0.0
 */
class PatchOriginsRequest {
    /**
     * Constructs a new <code>PatchOriginsRequest</code>.
     * @alias module:model/PatchOriginsRequest
     */
    constructor() { 
        
        PatchOriginsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchOriginsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchOriginsRequest} obj Optional instance to populate.
     * @return {module:model/PatchOriginsRequest} The populated <code>PatchOriginsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchOriginsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('origin_type')) {
                obj['origin_type'] = ApiClient.convertToType(data['origin_type'], 'String');
            }
            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [CreateOriginsRequestAddresses]);
            }
            if (data.hasOwnProperty('origin_protocol_policy')) {
                obj['origin_protocol_policy'] = ApiClient.convertToType(data['origin_protocol_policy'], 'String');
            }
            if (data.hasOwnProperty('host_header')) {
                obj['host_header'] = ApiClient.convertToType(data['host_header'], 'String');
            }
            if (data.hasOwnProperty('origin_path')) {
                obj['origin_path'] = ApiClient.convertToType(data['origin_path'], 'String');
            }
            if (data.hasOwnProperty('hmac_authentication')) {
                obj['hmac_authentication'] = ApiClient.convertToType(data['hmac_authentication'], 'Boolean');
            }
            if (data.hasOwnProperty('hmac_region_name')) {
                obj['hmac_region_name'] = ApiClient.convertToType(data['hmac_region_name'], 'String');
            }
            if (data.hasOwnProperty('hmac_access_key')) {
                obj['hmac_access_key'] = ApiClient.convertToType(data['hmac_access_key'], 'String');
            }
            if (data.hasOwnProperty('hmac_secret_key')) {
                obj['hmac_secret_key'] = ApiClient.convertToType(data['hmac_secret_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchOriginsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchOriginsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['origin_type'] && !(typeof data['origin_type'] === 'string' || data['origin_type'] instanceof String)) {
            throw new Error("Expected the field `origin_type` to be a primitive type in the JSON string but got " + data['origin_type']);
        }
        if (data['addresses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['addresses'])) {
                throw new Error("Expected the field `addresses` to be an array in the JSON data but got " + data['addresses']);
            }
            // validate the optional field `addresses` (array)
            for (const item of data['addresses']) {
                CreateOriginsRequestAddresses.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['origin_protocol_policy'] && !(typeof data['origin_protocol_policy'] === 'string' || data['origin_protocol_policy'] instanceof String)) {
            throw new Error("Expected the field `origin_protocol_policy` to be a primitive type in the JSON string but got " + data['origin_protocol_policy']);
        }
        // ensure the json data is a string
        if (data['host_header'] && !(typeof data['host_header'] === 'string' || data['host_header'] instanceof String)) {
            throw new Error("Expected the field `host_header` to be a primitive type in the JSON string but got " + data['host_header']);
        }
        // ensure the json data is a string
        if (data['origin_path'] && !(typeof data['origin_path'] === 'string' || data['origin_path'] instanceof String)) {
            throw new Error("Expected the field `origin_path` to be a primitive type in the JSON string but got " + data['origin_path']);
        }
        // ensure the json data is a string
        if (data['hmac_region_name'] && !(typeof data['hmac_region_name'] === 'string' || data['hmac_region_name'] instanceof String)) {
            throw new Error("Expected the field `hmac_region_name` to be a primitive type in the JSON string but got " + data['hmac_region_name']);
        }
        // ensure the json data is a string
        if (data['hmac_access_key'] && !(typeof data['hmac_access_key'] === 'string' || data['hmac_access_key'] instanceof String)) {
            throw new Error("Expected the field `hmac_access_key` to be a primitive type in the JSON string but got " + data['hmac_access_key']);
        }
        // ensure the json data is a string
        if (data['hmac_secret_key'] && !(typeof data['hmac_secret_key'] === 'string' || data['hmac_secret_key'] instanceof String)) {
            throw new Error("Expected the field `hmac_secret_key` to be a primitive type in the JSON string but got " + data['hmac_secret_key']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
PatchOriginsRequest.prototype['name'] = undefined;

/**
 * @member {String} origin_type
 */
PatchOriginsRequest.prototype['origin_type'] = undefined;

/**
 * @member {Array.<module:model/CreateOriginsRequestAddresses>} addresses
 */
PatchOriginsRequest.prototype['addresses'] = undefined;

/**
 * @member {String} origin_protocol_policy
 */
PatchOriginsRequest.prototype['origin_protocol_policy'] = undefined;

/**
 * @member {String} host_header
 */
PatchOriginsRequest.prototype['host_header'] = undefined;

/**
 * @member {String} origin_path
 */
PatchOriginsRequest.prototype['origin_path'] = undefined;

/**
 * @member {Boolean} hmac_authentication
 */
PatchOriginsRequest.prototype['hmac_authentication'] = undefined;

/**
 * @member {String} hmac_region_name
 */
PatchOriginsRequest.prototype['hmac_region_name'] = undefined;

/**
 * @member {String} hmac_access_key
 */
PatchOriginsRequest.prototype['hmac_access_key'] = undefined;

/**
 * @member {String} hmac_secret_key
 */
PatchOriginsRequest.prototype['hmac_secret_key'] = undefined;






export default PatchOriginsRequest;

