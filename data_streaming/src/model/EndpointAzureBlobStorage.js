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
 * The EndpointAzureBlobStorage model module.
 * @module model/EndpointAzureBlobStorage
 * @version 1.0.0
 */
class EndpointAzureBlobStorage {
    /**
     * Constructs a new <code>EndpointAzureBlobStorage</code>.
     * @alias module:model/EndpointAzureBlobStorage
     */
    constructor() { 
        
        EndpointAzureBlobStorage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EndpointAzureBlobStorage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointAzureBlobStorage} obj Optional instance to populate.
     * @return {module:model/EndpointAzureBlobStorage} The populated <code>EndpointAzureBlobStorage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EndpointAzureBlobStorage();

            if (data.hasOwnProperty('endpoint_type')) {
                obj['endpoint_type'] = ApiClient.convertToType(data['endpoint_type'], 'String');
            }
            if (data.hasOwnProperty('storage_account')) {
                obj['storage_account'] = ApiClient.convertToType(data['storage_account'], 'String');
            }
            if (data.hasOwnProperty('container_name')) {
                obj['container_name'] = ApiClient.convertToType(data['container_name'], 'String');
            }
            if (data.hasOwnProperty('blob_sas_token')) {
                obj['blob_sas_token'] = ApiClient.convertToType(data['blob_sas_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EndpointAzureBlobStorage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EndpointAzureBlobStorage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['endpoint_type'] && !(typeof data['endpoint_type'] === 'string' || data['endpoint_type'] instanceof String)) {
            throw new Error("Expected the field `endpoint_type` to be a primitive type in the JSON string but got " + data['endpoint_type']);
        }
        // ensure the json data is a string
        if (data['storage_account'] && !(typeof data['storage_account'] === 'string' || data['storage_account'] instanceof String)) {
            throw new Error("Expected the field `storage_account` to be a primitive type in the JSON string but got " + data['storage_account']);
        }
        // ensure the json data is a string
        if (data['container_name'] && !(typeof data['container_name'] === 'string' || data['container_name'] instanceof String)) {
            throw new Error("Expected the field `container_name` to be a primitive type in the JSON string but got " + data['container_name']);
        }
        // ensure the json data is a string
        if (data['blob_sas_token'] && !(typeof data['blob_sas_token'] === 'string' || data['blob_sas_token'] instanceof String)) {
            throw new Error("Expected the field `blob_sas_token` to be a primitive type in the JSON string but got " + data['blob_sas_token']);
        }

        return true;
    }


}



/**
 * @member {String} endpoint_type
 */
EndpointAzureBlobStorage.prototype['endpoint_type'] = undefined;

/**
 * @member {String} storage_account
 */
EndpointAzureBlobStorage.prototype['storage_account'] = undefined;

/**
 * @member {String} container_name
 */
EndpointAzureBlobStorage.prototype['container_name'] = undefined;

/**
 * @member {String} blob_sas_token
 */
EndpointAzureBlobStorage.prototype['blob_sas_token'] = undefined;






export default EndpointAzureBlobStorage;

