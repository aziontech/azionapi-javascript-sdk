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
 * The CreateApplicationRequest model module.
 * @module model/CreateApplicationRequest
 * @version 2.0.0
 */
class CreateApplicationRequest {
    /**
     * Constructs a new <code>CreateApplicationRequest</code>.
     * @alias module:model/CreateApplicationRequest
     * @param name {String} 
     */
    constructor(name) { 
        
        CreateApplicationRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateApplicationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateApplicationRequest} obj Optional instance to populate.
     * @return {module:model/CreateApplicationRequest} The populated <code>CreateApplicationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateApplicationRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('application_acceleration')) {
                obj['application_acceleration'] = ApiClient.convertToType(data['application_acceleration'], 'Boolean');
            }
            if (data.hasOwnProperty('delivery_protocol')) {
                obj['delivery_protocol'] = ApiClient.convertToType(data['delivery_protocol'], 'String');
            }
            if (data.hasOwnProperty('origin_type')) {
                obj['origin_type'] = ApiClient.convertToType(data['origin_type'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('origin_protocol_policy')) {
                obj['origin_protocol_policy'] = ApiClient.convertToType(data['origin_protocol_policy'], 'String');
            }
            if (data.hasOwnProperty('host_header')) {
                obj['host_header'] = ApiClient.convertToType(data['host_header'], 'String');
            }
            if (data.hasOwnProperty('browser_cache_settings')) {
                obj['browser_cache_settings'] = ApiClient.convertToType(data['browser_cache_settings'], 'String');
            }
            if (data.hasOwnProperty('cdn_cache_settings')) {
                obj['cdn_cache_settings'] = ApiClient.convertToType(data['cdn_cache_settings'], 'String');
            }
            if (data.hasOwnProperty('browser_cache_settings_maximum_ttl')) {
                obj['browser_cache_settings_maximum_ttl'] = ApiClient.convertToType(data['browser_cache_settings_maximum_ttl'], 'Number');
            }
            if (data.hasOwnProperty('cdn_cache_settings_maximum_ttl')) {
                obj['cdn_cache_settings_maximum_ttl'] = ApiClient.convertToType(data['cdn_cache_settings_maximum_ttl'], 'Number');
            }
            if (data.hasOwnProperty('debug_rules')) {
                obj['debug_rules'] = ApiClient.convertToType(data['debug_rules'], 'Boolean');
            }
            if (data.hasOwnProperty('supported_ciphers')) {
                obj['supported_ciphers'] = ApiClient.convertToType(data['supported_ciphers'], 'String');
            }
            if (data.hasOwnProperty('http_port')) {
                obj['http_port'] = ApiClient.convertToType(data['http_port'], Object);
            }
            if (data.hasOwnProperty('https_port')) {
                obj['https_port'] = ApiClient.convertToType(data['https_port'], Object);
            }
            if (data.hasOwnProperty('l2_caching')) {
                obj['l2_caching'] = ApiClient.convertToType(data['l2_caching'], 'Boolean');
            }
            if (data.hasOwnProperty('http3')) {
                obj['http3'] = ApiClient.convertToType(data['http3'], 'Boolean');
            }
            if (data.hasOwnProperty('websocket')) {
                obj['websocket'] = ApiClient.convertToType(data['websocket'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateApplicationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateApplicationRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateApplicationRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['delivery_protocol'] && !(typeof data['delivery_protocol'] === 'string' || data['delivery_protocol'] instanceof String)) {
            throw new Error("Expected the field `delivery_protocol` to be a primitive type in the JSON string but got " + data['delivery_protocol']);
        }
        // ensure the json data is a string
        if (data['origin_type'] && !(typeof data['origin_type'] === 'string' || data['origin_type'] instanceof String)) {
            throw new Error("Expected the field `origin_type` to be a primitive type in the JSON string but got " + data['origin_type']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
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
        if (data['browser_cache_settings'] && !(typeof data['browser_cache_settings'] === 'string' || data['browser_cache_settings'] instanceof String)) {
            throw new Error("Expected the field `browser_cache_settings` to be a primitive type in the JSON string but got " + data['browser_cache_settings']);
        }
        // ensure the json data is a string
        if (data['cdn_cache_settings'] && !(typeof data['cdn_cache_settings'] === 'string' || data['cdn_cache_settings'] instanceof String)) {
            throw new Error("Expected the field `cdn_cache_settings` to be a primitive type in the JSON string but got " + data['cdn_cache_settings']);
        }
        // ensure the json data is a string
        if (data['supported_ciphers'] && !(typeof data['supported_ciphers'] === 'string' || data['supported_ciphers'] instanceof String)) {
            throw new Error("Expected the field `supported_ciphers` to be a primitive type in the JSON string but got " + data['supported_ciphers']);
        }

        return true;
    }


}

CreateApplicationRequest.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
CreateApplicationRequest.prototype['name'] = undefined;

/**
 * @member {Boolean} application_acceleration
 */
CreateApplicationRequest.prototype['application_acceleration'] = undefined;

/**
 * @member {String} delivery_protocol
 */
CreateApplicationRequest.prototype['delivery_protocol'] = undefined;

/**
 * @member {String} origin_type
 */
CreateApplicationRequest.prototype['origin_type'] = undefined;

/**
 * @member {String} address
 */
CreateApplicationRequest.prototype['address'] = undefined;

/**
 * @member {String} origin_protocol_policy
 */
CreateApplicationRequest.prototype['origin_protocol_policy'] = undefined;

/**
 * @member {String} host_header
 */
CreateApplicationRequest.prototype['host_header'] = undefined;

/**
 * @member {String} browser_cache_settings
 */
CreateApplicationRequest.prototype['browser_cache_settings'] = undefined;

/**
 * @member {String} cdn_cache_settings
 */
CreateApplicationRequest.prototype['cdn_cache_settings'] = undefined;

/**
 * @member {Number} browser_cache_settings_maximum_ttl
 */
CreateApplicationRequest.prototype['browser_cache_settings_maximum_ttl'] = undefined;

/**
 * @member {Number} cdn_cache_settings_maximum_ttl
 */
CreateApplicationRequest.prototype['cdn_cache_settings_maximum_ttl'] = undefined;

/**
 * @member {Boolean} debug_rules
 */
CreateApplicationRequest.prototype['debug_rules'] = undefined;

/**
 * @member {String} supported_ciphers
 */
CreateApplicationRequest.prototype['supported_ciphers'] = undefined;

/**
 * @member {Object} http_port
 */
CreateApplicationRequest.prototype['http_port'] = undefined;

/**
 * @member {Object} https_port
 */
CreateApplicationRequest.prototype['https_port'] = undefined;

/**
 * @member {Boolean} l2_caching
 */
CreateApplicationRequest.prototype['l2_caching'] = undefined;

/**
 * @member {Boolean} http3
 */
CreateApplicationRequest.prototype['http3'] = undefined;

/**
 * @member {Boolean} websocket
 */
CreateApplicationRequest.prototype['websocket'] = undefined;






export default CreateApplicationRequest;

