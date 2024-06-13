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
 * The ApplicationCachePutRequest model module.
 * @module model/ApplicationCachePutRequest
 * @version 2.0.0
 */
class ApplicationCachePutRequest {
    /**
     * Constructs a new <code>ApplicationCachePutRequest</code>.
     * @alias module:model/ApplicationCachePutRequest
     * @param name {String} 
     */
    constructor(name) { 
        
        ApplicationCachePutRequest.initialize(this, name);
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
     * Constructs a <code>ApplicationCachePutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCachePutRequest} obj Optional instance to populate.
     * @return {module:model/ApplicationCachePutRequest} The populated <code>ApplicationCachePutRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationCachePutRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('browser_cache_settings')) {
                obj['browser_cache_settings'] = ApiClient.convertToType(data['browser_cache_settings'], 'String');
            }
            if (data.hasOwnProperty('browser_cache_settings_maximum_ttl')) {
                obj['browser_cache_settings_maximum_ttl'] = ApiClient.convertToType(data['browser_cache_settings_maximum_ttl'], 'Number');
            }
            if (data.hasOwnProperty('cdn_cache_settings')) {
                obj['cdn_cache_settings'] = ApiClient.convertToType(data['cdn_cache_settings'], 'String');
            }
            if (data.hasOwnProperty('cdn_cache_settings_maximum_ttl')) {
                obj['cdn_cache_settings_maximum_ttl'] = ApiClient.convertToType(data['cdn_cache_settings_maximum_ttl'], 'Number');
            }
            if (data.hasOwnProperty('cache_by_query_string')) {
                obj['cache_by_query_string'] = ApiClient.convertToType(data['cache_by_query_string'], 'String');
            }
            if (data.hasOwnProperty('query_string_fields')) {
                obj['query_string_fields'] = ApiClient.convertToType(data['query_string_fields'], ['String']);
            }
            if (data.hasOwnProperty('enable_query_string_sort')) {
                obj['enable_query_string_sort'] = ApiClient.convertToType(data['enable_query_string_sort'], 'Boolean');
            }
            if (data.hasOwnProperty('cache_by_cookies')) {
                obj['cache_by_cookies'] = ApiClient.convertToType(data['cache_by_cookies'], 'String');
            }
            if (data.hasOwnProperty('cookie_names')) {
                obj['cookie_names'] = ApiClient.convertToType(data['cookie_names'], ['String']);
            }
            if (data.hasOwnProperty('adaptive_delivery_action')) {
                obj['adaptive_delivery_action'] = ApiClient.convertToType(data['adaptive_delivery_action'], 'String');
            }
            if (data.hasOwnProperty('device_group')) {
                obj['device_group'] = ApiClient.convertToType(data['device_group'], ['Number']);
            }
            if (data.hasOwnProperty('enable_caching_for_post')) {
                obj['enable_caching_for_post'] = ApiClient.convertToType(data['enable_caching_for_post'], 'Boolean');
            }
            if (data.hasOwnProperty('l2_caching_enabled')) {
                obj['l2_caching_enabled'] = ApiClient.convertToType(data['l2_caching_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('is_slice_configuration_enabled')) {
                obj['is_slice_configuration_enabled'] = ApiClient.convertToType(data['is_slice_configuration_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('is_slice_edge_caching_enabled')) {
                obj['is_slice_edge_caching_enabled'] = ApiClient.convertToType(data['is_slice_edge_caching_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('is_slice_l2_caching_enabled')) {
                obj['is_slice_l2_caching_enabled'] = ApiClient.convertToType(data['is_slice_l2_caching_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('slice_configuration_range')) {
                obj['slice_configuration_range'] = ApiClient.convertToType(data['slice_configuration_range'], 'Number');
            }
            if (data.hasOwnProperty('enable_caching_for_options')) {
                obj['enable_caching_for_options'] = ApiClient.convertToType(data['enable_caching_for_options'], 'Boolean');
            }
            if (data.hasOwnProperty('enable_stale_cache')) {
                obj['enable_stale_cache'] = ApiClient.convertToType(data['enable_stale_cache'], 'Boolean');
            }
            if (data.hasOwnProperty('l2_region')) {
                obj['l2_region'] = ApiClient.convertToType(data['l2_region'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationCachePutRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationCachePutRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationCachePutRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
        if (data['cache_by_query_string'] && !(typeof data['cache_by_query_string'] === 'string' || data['cache_by_query_string'] instanceof String)) {
            throw new Error("Expected the field `cache_by_query_string` to be a primitive type in the JSON string but got " + data['cache_by_query_string']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['query_string_fields'])) {
            throw new Error("Expected the field `query_string_fields` to be an array in the JSON data but got " + data['query_string_fields']);
        }
        // ensure the json data is a string
        if (data['cache_by_cookies'] && !(typeof data['cache_by_cookies'] === 'string' || data['cache_by_cookies'] instanceof String)) {
            throw new Error("Expected the field `cache_by_cookies` to be a primitive type in the JSON string but got " + data['cache_by_cookies']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cookie_names'])) {
            throw new Error("Expected the field `cookie_names` to be an array in the JSON data but got " + data['cookie_names']);
        }
        // ensure the json data is a string
        if (data['adaptive_delivery_action'] && !(typeof data['adaptive_delivery_action'] === 'string' || data['adaptive_delivery_action'] instanceof String)) {
            throw new Error("Expected the field `adaptive_delivery_action` to be a primitive type in the JSON string but got " + data['adaptive_delivery_action']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['device_group'])) {
            throw new Error("Expected the field `device_group` to be an array in the JSON data but got " + data['device_group']);
        }
        // ensure the json data is a string
        if (data['l2_region'] && !(typeof data['l2_region'] === 'string' || data['l2_region'] instanceof String)) {
            throw new Error("Expected the field `l2_region` to be a primitive type in the JSON string but got " + data['l2_region']);
        }

        return true;
    }


}

ApplicationCachePutRequest.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
ApplicationCachePutRequest.prototype['name'] = undefined;

/**
 * @member {String} browser_cache_settings
 */
ApplicationCachePutRequest.prototype['browser_cache_settings'] = undefined;

/**
 * @member {Number} browser_cache_settings_maximum_ttl
 */
ApplicationCachePutRequest.prototype['browser_cache_settings_maximum_ttl'] = undefined;

/**
 * @member {String} cdn_cache_settings
 */
ApplicationCachePutRequest.prototype['cdn_cache_settings'] = undefined;

/**
 * @member {Number} cdn_cache_settings_maximum_ttl
 */
ApplicationCachePutRequest.prototype['cdn_cache_settings_maximum_ttl'] = undefined;

/**
 * @member {String} cache_by_query_string
 */
ApplicationCachePutRequest.prototype['cache_by_query_string'] = undefined;

/**
 * @member {Array.<String>} query_string_fields
 */
ApplicationCachePutRequest.prototype['query_string_fields'] = undefined;

/**
 * @member {Boolean} enable_query_string_sort
 */
ApplicationCachePutRequest.prototype['enable_query_string_sort'] = undefined;

/**
 * @member {String} cache_by_cookies
 */
ApplicationCachePutRequest.prototype['cache_by_cookies'] = undefined;

/**
 * @member {Array.<String>} cookie_names
 */
ApplicationCachePutRequest.prototype['cookie_names'] = undefined;

/**
 * @member {String} adaptive_delivery_action
 */
ApplicationCachePutRequest.prototype['adaptive_delivery_action'] = undefined;

/**
 * @member {Array.<Number>} device_group
 */
ApplicationCachePutRequest.prototype['device_group'] = undefined;

/**
 * @member {Boolean} enable_caching_for_post
 */
ApplicationCachePutRequest.prototype['enable_caching_for_post'] = undefined;

/**
 * @member {Boolean} l2_caching_enabled
 */
ApplicationCachePutRequest.prototype['l2_caching_enabled'] = undefined;

/**
 * @member {Boolean} is_slice_configuration_enabled
 */
ApplicationCachePutRequest.prototype['is_slice_configuration_enabled'] = undefined;

/**
 * @member {Boolean} is_slice_edge_caching_enabled
 */
ApplicationCachePutRequest.prototype['is_slice_edge_caching_enabled'] = undefined;

/**
 * @member {Boolean} is_slice_l2_caching_enabled
 */
ApplicationCachePutRequest.prototype['is_slice_l2_caching_enabled'] = undefined;

/**
 * @member {Number} slice_configuration_range
 */
ApplicationCachePutRequest.prototype['slice_configuration_range'] = undefined;

/**
 * @member {Boolean} enable_caching_for_options
 */
ApplicationCachePutRequest.prototype['enable_caching_for_options'] = undefined;

/**
 * @member {Boolean} enable_stale_cache
 */
ApplicationCachePutRequest.prototype['enable_stale_cache'] = undefined;

/**
 * @member {String} l2_region
 */
ApplicationCachePutRequest.prototype['l2_region'] = undefined;






export default ApplicationCachePutRequest;

