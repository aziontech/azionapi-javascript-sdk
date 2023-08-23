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
 * The ApplicationPutRequest model module.
 * @module model/ApplicationPutRequest
 * @version 2.0.0
 */
class ApplicationPutRequest {
    /**
     * Constructs a new <code>ApplicationPutRequest</code>.
     * @alias module:model/ApplicationPutRequest
     * @param name {String} 
     */
    constructor(name) { 
        
        ApplicationPutRequest.initialize(this, name);
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
     * Constructs a <code>ApplicationPutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationPutRequest} obj Optional instance to populate.
     * @return {module:model/ApplicationPutRequest} The populated <code>ApplicationPutRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationPutRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('delivery_protocol')) {
                obj['delivery_protocol'] = ApiClient.convertToType(data['delivery_protocol'], 'String');
            }
            if (data.hasOwnProperty('http_port')) {
                obj['http_port'] = ApiClient.convertToType(data['http_port'], Object);
            }
            if (data.hasOwnProperty('https_port')) {
                obj['https_port'] = ApiClient.convertToType(data['https_port'], Object);
            }
            if (data.hasOwnProperty('minimum_tls_version')) {
                obj['minimum_tls_version'] = ApiClient.convertToType(data['minimum_tls_version'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('application_acceleration')) {
                obj['application_acceleration'] = ApiClient.convertToType(data['application_acceleration'], 'Boolean');
            }
            if (data.hasOwnProperty('caching')) {
                obj['caching'] = ApiClient.convertToType(data['caching'], 'Boolean');
            }
            if (data.hasOwnProperty('device_detection')) {
                obj['device_detection'] = ApiClient.convertToType(data['device_detection'], 'Boolean');
            }
            if (data.hasOwnProperty('edge_firewall')) {
                obj['edge_firewall'] = ApiClient.convertToType(data['edge_firewall'], 'Boolean');
            }
            if (data.hasOwnProperty('edge_functions')) {
                obj['edge_functions'] = ApiClient.convertToType(data['edge_functions'], 'Boolean');
            }
            if (data.hasOwnProperty('image_optimization')) {
                obj['image_optimization'] = ApiClient.convertToType(data['image_optimization'], 'Boolean');
            }
            if (data.hasOwnProperty('l2_caching')) {
                obj['l2_caching'] = ApiClient.convertToType(data['l2_caching'], 'Boolean');
            }
            if (data.hasOwnProperty('load_balancer')) {
                obj['load_balancer'] = ApiClient.convertToType(data['load_balancer'], 'Boolean');
            }
            if (data.hasOwnProperty('raw_logs')) {
                obj['raw_logs'] = ApiClient.convertToType(data['raw_logs'], 'Boolean');
            }
            if (data.hasOwnProperty('web_application_firewall')) {
                obj['web_application_firewall'] = ApiClient.convertToType(data['web_application_firewall'], 'Boolean');
            }
            if (data.hasOwnProperty('debug_rules')) {
                obj['debug_rules'] = ApiClient.convertToType(data['debug_rules'], 'Boolean');
            }
            if (data.hasOwnProperty('http3')) {
                obj['http3'] = ApiClient.convertToType(data['http3'], 'Boolean');
            }
            if (data.hasOwnProperty('websocket')) {
                obj['websocket'] = ApiClient.convertToType(data['websocket'], 'Boolean');
            }
            if (data.hasOwnProperty('supported_ciphers')) {
                obj['supported_ciphers'] = ApiClient.convertToType(data['supported_ciphers'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationPutRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationPutRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationPutRequest.RequiredProperties) {
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
        if (data['minimum_tls_version'] && !(typeof data['minimum_tls_version'] === 'string' || data['minimum_tls_version'] instanceof String)) {
            throw new Error("Expected the field `minimum_tls_version` to be a primitive type in the JSON string but got " + data['minimum_tls_version']);
        }
        // ensure the json data is a string
        if (data['supported_ciphers'] && !(typeof data['supported_ciphers'] === 'string' || data['supported_ciphers'] instanceof String)) {
            throw new Error("Expected the field `supported_ciphers` to be a primitive type in the JSON string but got " + data['supported_ciphers']);
        }

        return true;
    }


}

ApplicationPutRequest.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
ApplicationPutRequest.prototype['name'] = undefined;

/**
 * @member {String} delivery_protocol
 */
ApplicationPutRequest.prototype['delivery_protocol'] = undefined;

/**
 * @member {Object} http_port
 */
ApplicationPutRequest.prototype['http_port'] = undefined;

/**
 * @member {Object} https_port
 */
ApplicationPutRequest.prototype['https_port'] = undefined;

/**
 * @member {String} minimum_tls_version
 */
ApplicationPutRequest.prototype['minimum_tls_version'] = undefined;

/**
 * @member {Boolean} active
 */
ApplicationPutRequest.prototype['active'] = undefined;

/**
 * @member {Boolean} application_acceleration
 */
ApplicationPutRequest.prototype['application_acceleration'] = undefined;

/**
 * @member {Boolean} caching
 */
ApplicationPutRequest.prototype['caching'] = undefined;

/**
 * @member {Boolean} device_detection
 */
ApplicationPutRequest.prototype['device_detection'] = undefined;

/**
 * @member {Boolean} edge_firewall
 */
ApplicationPutRequest.prototype['edge_firewall'] = undefined;

/**
 * @member {Boolean} edge_functions
 */
ApplicationPutRequest.prototype['edge_functions'] = undefined;

/**
 * @member {Boolean} image_optimization
 */
ApplicationPutRequest.prototype['image_optimization'] = undefined;

/**
 * @member {Boolean} l2_caching
 */
ApplicationPutRequest.prototype['l2_caching'] = undefined;

/**
 * @member {Boolean} load_balancer
 */
ApplicationPutRequest.prototype['load_balancer'] = undefined;

/**
 * @member {Boolean} raw_logs
 */
ApplicationPutRequest.prototype['raw_logs'] = undefined;

/**
 * @member {Boolean} web_application_firewall
 */
ApplicationPutRequest.prototype['web_application_firewall'] = undefined;

/**
 * @member {Boolean} debug_rules
 */
ApplicationPutRequest.prototype['debug_rules'] = undefined;

/**
 * @member {Boolean} http3
 */
ApplicationPutRequest.prototype['http3'] = undefined;

/**
 * @member {Boolean} websocket
 */
ApplicationPutRequest.prototype['websocket'] = undefined;

/**
 * @member {String} supported_ciphers
 */
ApplicationPutRequest.prototype['supported_ciphers'] = undefined;






export default ApplicationPutRequest;

