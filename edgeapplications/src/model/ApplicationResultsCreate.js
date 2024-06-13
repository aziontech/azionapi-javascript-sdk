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
 * The ApplicationResultsCreate model module.
 * @module model/ApplicationResultsCreate
 * @version 2.0.0
 */
class ApplicationResultsCreate {
    /**
     * Constructs a new <code>ApplicationResultsCreate</code>.
     * @alias module:model/ApplicationResultsCreate
     * @param id {Number} 
     * @param name {String} 
     * @param active {Boolean} 
     * @param debugRules {Boolean} 
     * @param http3 {Boolean} 
     * @param supportedCiphers {String} 
     * @param deliveryProtocol {String} 
     * @param httpPort {Object} 
     * @param httpsPort {Object} 
     * @param minimumTlsVersion {String} 
     * @param applicationAcceleration {Boolean} 
     * @param caching {Boolean} 
     * @param deviceDetection {Boolean} 
     * @param edgeFirewall {Boolean} 
     * @param edgeFunctions {Boolean} 
     * @param imageOptimization {Boolean} 
     * @param loadBalancer {Boolean} 
     * @param rawLogs {Boolean} 
     * @param webApplicationFirewall {Boolean} 
     */
    constructor(id, name, active, debugRules, http3, supportedCiphers, deliveryProtocol, httpPort, httpsPort, minimumTlsVersion, applicationAcceleration, caching, deviceDetection, edgeFirewall, edgeFunctions, imageOptimization, loadBalancer, rawLogs, webApplicationFirewall) { 
        
        ApplicationResultsCreate.initialize(this, id, name, active, debugRules, http3, supportedCiphers, deliveryProtocol, httpPort, httpsPort, minimumTlsVersion, applicationAcceleration, caching, deviceDetection, edgeFirewall, edgeFunctions, imageOptimization, loadBalancer, rawLogs, webApplicationFirewall);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, active, debugRules, http3, supportedCiphers, deliveryProtocol, httpPort, httpsPort, minimumTlsVersion, applicationAcceleration, caching, deviceDetection, edgeFirewall, edgeFunctions, imageOptimization, loadBalancer, rawLogs, webApplicationFirewall) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['active'] = active;
        obj['debug_rules'] = debugRules;
        obj['http3'] = http3;
        obj['supported_ciphers'] = supportedCiphers;
        obj['delivery_protocol'] = deliveryProtocol;
        obj['http_port'] = httpPort;
        obj['https_port'] = httpsPort;
        obj['minimum_tls_version'] = minimumTlsVersion;
        obj['application_acceleration'] = applicationAcceleration;
        obj['caching'] = caching;
        obj['device_detection'] = deviceDetection;
        obj['edge_firewall'] = edgeFirewall;
        obj['edge_functions'] = edgeFunctions;
        obj['image_optimization'] = imageOptimization;
        obj['load_balancer'] = loadBalancer;
        obj['raw_logs'] = rawLogs;
        obj['web_application_firewall'] = webApplicationFirewall;
    }

    /**
     * Constructs a <code>ApplicationResultsCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationResultsCreate} obj Optional instance to populate.
     * @return {module:model/ApplicationResultsCreate} The populated <code>ApplicationResultsCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationResultsCreate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('debug_rules')) {
                obj['debug_rules'] = ApiClient.convertToType(data['debug_rules'], 'Boolean');
            }
            if (data.hasOwnProperty('http3')) {
                obj['http3'] = ApiClient.convertToType(data['http3'], 'Boolean');
            }
            if (data.hasOwnProperty('supported_ciphers')) {
                obj['supported_ciphers'] = ApiClient.convertToType(data['supported_ciphers'], 'String');
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
            if (data.hasOwnProperty('load_balancer')) {
                obj['load_balancer'] = ApiClient.convertToType(data['load_balancer'], 'Boolean');
            }
            if (data.hasOwnProperty('raw_logs')) {
                obj['raw_logs'] = ApiClient.convertToType(data['raw_logs'], 'Boolean');
            }
            if (data.hasOwnProperty('web_application_firewall')) {
                obj['web_application_firewall'] = ApiClient.convertToType(data['web_application_firewall'], 'Boolean');
            }
            if (data.hasOwnProperty('l2_caching')) {
                obj['l2_caching'] = ApiClient.convertToType(data['l2_caching'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationResultsCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationResultsCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationResultsCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['supported_ciphers'] && !(typeof data['supported_ciphers'] === 'string' || data['supported_ciphers'] instanceof String)) {
            throw new Error("Expected the field `supported_ciphers` to be a primitive type in the JSON string but got " + data['supported_ciphers']);
        }
        // ensure the json data is a string
        if (data['delivery_protocol'] && !(typeof data['delivery_protocol'] === 'string' || data['delivery_protocol'] instanceof String)) {
            throw new Error("Expected the field `delivery_protocol` to be a primitive type in the JSON string but got " + data['delivery_protocol']);
        }
        // ensure the json data is a string
        if (data['minimum_tls_version'] && !(typeof data['minimum_tls_version'] === 'string' || data['minimum_tls_version'] instanceof String)) {
            throw new Error("Expected the field `minimum_tls_version` to be a primitive type in the JSON string but got " + data['minimum_tls_version']);
        }

        return true;
    }


}

ApplicationResultsCreate.RequiredProperties = ["id", "name", "active", "debug_rules", "http3", "supported_ciphers", "delivery_protocol", "http_port", "https_port", "minimum_tls_version", "application_acceleration", "caching", "device_detection", "edge_firewall", "edge_functions", "image_optimization", "load_balancer", "raw_logs", "web_application_firewall"];

/**
 * @member {Number} id
 */
ApplicationResultsCreate.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ApplicationResultsCreate.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
ApplicationResultsCreate.prototype['active'] = undefined;

/**
 * @member {Boolean} debug_rules
 */
ApplicationResultsCreate.prototype['debug_rules'] = undefined;

/**
 * @member {Boolean} http3
 */
ApplicationResultsCreate.prototype['http3'] = undefined;

/**
 * @member {String} supported_ciphers
 */
ApplicationResultsCreate.prototype['supported_ciphers'] = undefined;

/**
 * @member {String} delivery_protocol
 */
ApplicationResultsCreate.prototype['delivery_protocol'] = undefined;

/**
 * @member {Object} http_port
 */
ApplicationResultsCreate.prototype['http_port'] = undefined;

/**
 * @member {Object} https_port
 */
ApplicationResultsCreate.prototype['https_port'] = undefined;

/**
 * @member {String} minimum_tls_version
 */
ApplicationResultsCreate.prototype['minimum_tls_version'] = undefined;

/**
 * @member {Boolean} application_acceleration
 */
ApplicationResultsCreate.prototype['application_acceleration'] = undefined;

/**
 * @member {Boolean} caching
 */
ApplicationResultsCreate.prototype['caching'] = undefined;

/**
 * @member {Boolean} device_detection
 */
ApplicationResultsCreate.prototype['device_detection'] = undefined;

/**
 * @member {Boolean} edge_firewall
 */
ApplicationResultsCreate.prototype['edge_firewall'] = undefined;

/**
 * @member {Boolean} edge_functions
 */
ApplicationResultsCreate.prototype['edge_functions'] = undefined;

/**
 * @member {Boolean} image_optimization
 */
ApplicationResultsCreate.prototype['image_optimization'] = undefined;

/**
 * @member {Boolean} load_balancer
 */
ApplicationResultsCreate.prototype['load_balancer'] = undefined;

/**
 * @member {Boolean} raw_logs
 */
ApplicationResultsCreate.prototype['raw_logs'] = undefined;

/**
 * @member {Boolean} web_application_firewall
 */
ApplicationResultsCreate.prototype['web_application_firewall'] = undefined;

/**
 * @member {Boolean} l2_caching
 */
ApplicationResultsCreate.prototype['l2_caching'] = undefined;






export default ApplicationResultsCreate;

