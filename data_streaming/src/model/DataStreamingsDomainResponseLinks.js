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
 * The DataStreamingsDomainResponseLinks model module.
 * @module model/DataStreamingsDomainResponseLinks
 * @version 1.0.0
 */
class DataStreamingsDomainResponseLinks {
    /**
     * Constructs a new <code>DataStreamingsDomainResponseLinks</code>.
     * @alias module:model/DataStreamingsDomainResponseLinks
     */
    constructor() { 
        
        DataStreamingsDomainResponseLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataStreamingsDomainResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataStreamingsDomainResponseLinks} obj Optional instance to populate.
     * @return {module:model/DataStreamingsDomainResponseLinks} The populated <code>DataStreamingsDomainResponseLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataStreamingsDomainResponseLinks();

            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataStreamingsDomainResponseLinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataStreamingsDomainResponseLinks</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['previous'] && !(typeof data['previous'] === 'string' || data['previous'] instanceof String)) {
            throw new Error("Expected the field `previous` to be a primitive type in the JSON string but got " + data['previous']);
        }
        // ensure the json data is a string
        if (data['next'] && !(typeof data['next'] === 'string' || data['next'] instanceof String)) {
            throw new Error("Expected the field `next` to be a primitive type in the JSON string but got " + data['next']);
        }

        return true;
    }


}



/**
 * @member {String} previous
 */
DataStreamingsDomainResponseLinks.prototype['previous'] = undefined;

/**
 * @member {String} next
 */
DataStreamingsDomainResponseLinks.prototype['next'] = undefined;






export default DataStreamingsDomainResponseLinks;
