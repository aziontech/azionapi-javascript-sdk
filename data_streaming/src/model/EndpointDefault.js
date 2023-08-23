/**
 * Data Streaming - OpenAPI
 * The Data Streaming API allows you to manage your existing data streamings and templates. Data Streaming allows you to feed your stream processing, SIEM, and big data platforms with the event logs from your applications on Azion in real time. 
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
 * The EndpointDefault model module.
 * @module model/EndpointDefault
 * @version 1.0.0
 */
class EndpointDefault {
    /**
     * Constructs a new <code>EndpointDefault</code>.
     * @alias module:model/EndpointDefault
     */
    constructor() { 
        
        EndpointDefault.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EndpointDefault</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointDefault} obj Optional instance to populate.
     * @return {module:model/EndpointDefault} The populated <code>EndpointDefault</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EndpointDefault();

            if (data.hasOwnProperty('endpoint_type')) {
                obj['endpoint_type'] = ApiClient.convertToType(data['endpoint_type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('log_line_separator')) {
                obj['log_line_separator'] = ApiClient.convertToType(data['log_line_separator'], 'String');
            }
            if (data.hasOwnProperty('payload_format')) {
                obj['payload_format'] = ApiClient.convertToType(data['payload_format'], 'String');
            }
            if (data.hasOwnProperty('max_size')) {
                obj['max_size'] = ApiClient.convertToType(data['max_size'], 'Number');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], [{'String': 'String'}]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EndpointDefault</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EndpointDefault</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['endpoint_type'] && !(typeof data['endpoint_type'] === 'string' || data['endpoint_type'] instanceof String)) {
            throw new Error("Expected the field `endpoint_type` to be a primitive type in the JSON string but got " + data['endpoint_type']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['log_line_separator'] && !(typeof data['log_line_separator'] === 'string' || data['log_line_separator'] instanceof String)) {
            throw new Error("Expected the field `log_line_separator` to be a primitive type in the JSON string but got " + data['log_line_separator']);
        }
        // ensure the json data is a string
        if (data['payload_format'] && !(typeof data['payload_format'] === 'string' || data['payload_format'] instanceof String)) {
            throw new Error("Expected the field `payload_format` to be a primitive type in the JSON string but got " + data['payload_format']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['headers'])) {
            throw new Error("Expected the field `headers` to be an array in the JSON data but got " + data['headers']);
        }

        return true;
    }


}



/**
 * @member {String} endpoint_type
 */
EndpointDefault.prototype['endpoint_type'] = undefined;

/**
 * @member {String} url
 */
EndpointDefault.prototype['url'] = undefined;

/**
 * @member {String} log_line_separator
 */
EndpointDefault.prototype['log_line_separator'] = undefined;

/**
 * @member {String} payload_format
 */
EndpointDefault.prototype['payload_format'] = undefined;

/**
 * @member {Number} max_size
 */
EndpointDefault.prototype['max_size'] = undefined;

/**
 * @member {Array.<Object.<String, String>>} headers
 */
EndpointDefault.prototype['headers'] = undefined;






export default EndpointDefault;

