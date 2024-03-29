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
 * The EndpointGoogleBigQueryServiceAccountKey model module.
 * @module model/EndpointGoogleBigQueryServiceAccountKey
 * @version 1.0.0
 */
class EndpointGoogleBigQueryServiceAccountKey {
    /**
     * Constructs a new <code>EndpointGoogleBigQueryServiceAccountKey</code>.
     * @alias module:model/EndpointGoogleBigQueryServiceAccountKey
     */
    constructor() { 
        
        EndpointGoogleBigQueryServiceAccountKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EndpointGoogleBigQueryServiceAccountKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointGoogleBigQueryServiceAccountKey} obj Optional instance to populate.
     * @return {module:model/EndpointGoogleBigQueryServiceAccountKey} The populated <code>EndpointGoogleBigQueryServiceAccountKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EndpointGoogleBigQueryServiceAccountKey();

            if (data.hasOwnProperty('service_account_key')) {
                obj['service_account_key'] = ApiClient.convertToType(data['service_account_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EndpointGoogleBigQueryServiceAccountKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EndpointGoogleBigQueryServiceAccountKey</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['service_account_key'] && !(typeof data['service_account_key'] === 'string' || data['service_account_key'] instanceof String)) {
            throw new Error("Expected the field `service_account_key` to be a primitive type in the JSON string but got " + data['service_account_key']);
        }

        return true;
    }


}



/**
 * @member {String} service_account_key
 */
EndpointGoogleBigQueryServiceAccountKey.prototype['service_account_key'] = undefined;






export default EndpointGoogleBigQueryServiceAccountKey;

