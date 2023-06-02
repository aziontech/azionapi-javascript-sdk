/**
 * Intelligent DNS
 * Azion Intelligent DNS API
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RecordGet from './RecordGet';

/**
 * The GetRecordsResponseResults model module.
 * @module model/GetRecordsResponseResults
 * @version 3.0.0
 */
class GetRecordsResponseResults {
    /**
     * Constructs a new <code>GetRecordsResponseResults</code>.
     * @alias module:model/GetRecordsResponseResults
     */
    constructor() { 
        
        GetRecordsResponseResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecordsResponseResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecordsResponseResults} obj Optional instance to populate.
     * @return {module:model/GetRecordsResponseResults} The populated <code>GetRecordsResponseResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecordsResponseResults();

            if (data.hasOwnProperty('zone_id')) {
                obj['zone_id'] = ApiClient.convertToType(data['zone_id'], 'Number');
            }
            if (data.hasOwnProperty('zone_domain')) {
                obj['zone_domain'] = ApiClient.convertToType(data['zone_domain'], 'String');
            }
            if (data.hasOwnProperty('records')) {
                obj['records'] = ApiClient.convertToType(data['records'], [RecordGet]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetRecordsResponseResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetRecordsResponseResults</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['zone_domain'] && !(typeof data['zone_domain'] === 'string' || data['zone_domain'] instanceof String)) {
            throw new Error("Expected the field `zone_domain` to be a primitive type in the JSON string but got " + data['zone_domain']);
        }
        if (data['records']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['records'])) {
                throw new Error("Expected the field `records` to be an array in the JSON data but got " + data['records']);
            }
            // validate the optional field `records` (array)
            for (const item of data['records']) {
                RecordGet.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} zone_id
 */
GetRecordsResponseResults.prototype['zone_id'] = undefined;

/**
 * @member {String} zone_domain
 */
GetRecordsResponseResults.prototype['zone_domain'] = undefined;

/**
 * Zone records collection
 * @member {Array.<module:model/RecordGet>} records
 */
GetRecordsResponseResults.prototype['records'] = undefined;






export default GetRecordsResponseResults;

