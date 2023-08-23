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
import PostCustomDataStreamingResponse from './PostCustomDataStreamingResponse';

/**
 * The CreateCustomDataStreamingResponse model module.
 * @module model/CreateCustomDataStreamingResponse
 * @version 1.0.0
 */
class CreateCustomDataStreamingResponse {
    /**
     * Constructs a new <code>CreateCustomDataStreamingResponse</code>.
     * @alias module:model/CreateCustomDataStreamingResponse
     */
    constructor() { 
        
        CreateCustomDataStreamingResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCustomDataStreamingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCustomDataStreamingResponse} obj Optional instance to populate.
     * @return {module:model/CreateCustomDataStreamingResponse} The populated <code>CreateCustomDataStreamingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCustomDataStreamingResponse();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [PostCustomDataStreamingResponse]);
            }
            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCustomDataStreamingResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCustomDataStreamingResponse</code>.
     */
    static validateJSON(data) {
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                PostCustomDataStreamingResponse.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/PostCustomDataStreamingResponse>} results
 */
CreateCustomDataStreamingResponse.prototype['results'] = undefined;

/**
 * @member {Number} schema_version
 */
CreateCustomDataStreamingResponse.prototype['schema_version'] = undefined;






export default CreateCustomDataStreamingResponse;

