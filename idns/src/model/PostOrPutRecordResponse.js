/**
 * Intelligent DNS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
import RecordPostOrPut from './RecordPostOrPut';

/**
 * The PostOrPutRecordResponse model module.
 * @module model/PostOrPutRecordResponse
 * @version 1.0.0
 */
class PostOrPutRecordResponse {
    /**
     * Constructs a new <code>PostOrPutRecordResponse</code>.
     * Object returned by create or update zone record
     * @alias module:model/PostOrPutRecordResponse
     */
    constructor() { 
        
        PostOrPutRecordResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostOrPutRecordResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostOrPutRecordResponse} obj Optional instance to populate.
     * @return {module:model/PostOrPutRecordResponse} The populated <code>PostOrPutRecordResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostOrPutRecordResponse();

            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = RecordPostOrPut.constructFromObject(data['results']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostOrPutRecordResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostOrPutRecordResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `results`
        if (data['results']) { // data not null
          RecordPostOrPut.validateJSON(data['results']);
        }

        return true;
    }


}



/**
 * The schema version
 * @member {Number} schema_version
 */
PostOrPutRecordResponse.prototype['schema_version'] = undefined;

/**
 * @member {module:model/RecordPostOrPut} results
 */
PostOrPutRecordResponse.prototype['results'] = undefined;






export default PostOrPutRecordResponse;

