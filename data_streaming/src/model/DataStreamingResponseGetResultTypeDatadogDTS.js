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
import DataStreamingEndpointTypeDatadogDTS from './DataStreamingEndpointTypeDatadogDTS';

/**
 * The DataStreamingResponseGetResultTypeDatadogDTS model module.
 * @module model/DataStreamingResponseGetResultTypeDatadogDTS
 * @version 1.0.0
 */
class DataStreamingResponseGetResultTypeDatadogDTS {
    /**
     * Constructs a new <code>DataStreamingResponseGetResultTypeDatadogDTS</code>.
     * @alias module:model/DataStreamingResponseGetResultTypeDatadogDTS
     */
    constructor() { 
        
        DataStreamingResponseGetResultTypeDatadogDTS.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataStreamingResponseGetResultTypeDatadogDTS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataStreamingResponseGetResultTypeDatadogDTS} obj Optional instance to populate.
     * @return {module:model/DataStreamingResponseGetResultTypeDatadogDTS} The populated <code>DataStreamingResponseGetResultTypeDatadogDTS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataStreamingResponseGetResultTypeDatadogDTS();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('template_id')) {
                obj['template_id'] = ApiClient.convertToType(data['template_id'], 'Number');
            }
            if (data.hasOwnProperty('data_source')) {
                obj['data_source'] = ApiClient.convertToType(data['data_source'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = DataStreamingEndpointTypeDatadogDTS.constructFromObject(data['endpoint']);
            }
            if (data.hasOwnProperty('all_domains')) {
                obj['all_domains'] = ApiClient.convertToType(data['all_domains'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataStreamingResponseGetResultTypeDatadogDTS</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataStreamingResponseGetResultTypeDatadogDTS</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['data_source'] && !(typeof data['data_source'] === 'string' || data['data_source'] instanceof String)) {
            throw new Error("Expected the field `data_source` to be a primitive type in the JSON string but got " + data['data_source']);
        }
        // validate the optional field `endpoint`
        if (data['endpoint']) { // data not null
          DataStreamingEndpointTypeDatadogDTS.validateJSON(data['endpoint']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
DataStreamingResponseGetResultTypeDatadogDTS.prototype['id'] = undefined;

/**
 * @member {String} name
 */
DataStreamingResponseGetResultTypeDatadogDTS.prototype['name'] = undefined;

/**
 * @member {Number} template_id
 */
DataStreamingResponseGetResultTypeDatadogDTS.prototype['template_id'] = undefined;

/**
 * @member {String} data_source
 */
DataStreamingResponseGetResultTypeDatadogDTS.prototype['data_source'] = undefined;

/**
 * @member {Boolean} active
 */
DataStreamingResponseGetResultTypeDatadogDTS.prototype['active'] = undefined;

/**
 * @member {module:model/DataStreamingEndpointTypeDatadogDTS} endpoint
 */
DataStreamingResponseGetResultTypeDatadogDTS.prototype['endpoint'] = undefined;

/**
 * @member {Boolean} all_domains
 */
DataStreamingResponseGetResultTypeDatadogDTS.prototype['all_domains'] = undefined;






export default DataStreamingResponseGetResultTypeDatadogDTS;

