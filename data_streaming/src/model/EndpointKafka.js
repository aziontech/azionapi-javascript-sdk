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
 * The EndpointKafka model module.
 * @module model/EndpointKafka
 * @version 1.0.0
 */
class EndpointKafka {
    /**
     * Constructs a new <code>EndpointKafka</code>.
     * @alias module:model/EndpointKafka
     */
    constructor() { 
        
        EndpointKafka.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EndpointKafka</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointKafka} obj Optional instance to populate.
     * @return {module:model/EndpointKafka} The populated <code>EndpointKafka</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EndpointKafka();

            if (data.hasOwnProperty('endpoint_type')) {
                obj['endpoint_type'] = ApiClient.convertToType(data['endpoint_type'], 'String');
            }
            if (data.hasOwnProperty('kafka_topic')) {
                obj['kafka_topic'] = ApiClient.convertToType(data['kafka_topic'], 'String');
            }
            if (data.hasOwnProperty('bootstrap_servers')) {
                obj['bootstrap_servers'] = ApiClient.convertToType(data['bootstrap_servers'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = ApiClient.convertToType(data['use_tls'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EndpointKafka</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EndpointKafka</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['endpoint_type'] && !(typeof data['endpoint_type'] === 'string' || data['endpoint_type'] instanceof String)) {
            throw new Error("Expected the field `endpoint_type` to be a primitive type in the JSON string but got " + data['endpoint_type']);
        }
        // ensure the json data is a string
        if (data['kafka_topic'] && !(typeof data['kafka_topic'] === 'string' || data['kafka_topic'] instanceof String)) {
            throw new Error("Expected the field `kafka_topic` to be a primitive type in the JSON string but got " + data['kafka_topic']);
        }
        // ensure the json data is a string
        if (data['bootstrap_servers'] && !(typeof data['bootstrap_servers'] === 'string' || data['bootstrap_servers'] instanceof String)) {
            throw new Error("Expected the field `bootstrap_servers` to be a primitive type in the JSON string but got " + data['bootstrap_servers']);
        }

        return true;
    }


}



/**
 * @member {String} endpoint_type
 */
EndpointKafka.prototype['endpoint_type'] = undefined;

/**
 * @member {String} kafka_topic
 */
EndpointKafka.prototype['kafka_topic'] = undefined;

/**
 * @member {String} bootstrap_servers
 */
EndpointKafka.prototype['bootstrap_servers'] = undefined;

/**
 * @member {Boolean} use_tls
 */
EndpointKafka.prototype['use_tls'] = undefined;






export default EndpointKafka;

