/**
 * Web Application Firewall API
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
import Links from './Links';
import SingleWAF from './SingleWAF';

/**
 * The WAFList200 model module.
 * @module model/WAFList200
 * @version 2.0.0
 */
class WAFList200 {
    /**
     * Constructs a new <code>WAFList200</code>.
     * @alias module:model/WAFList200
     */
    constructor() { 
        
        WAFList200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WAFList200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WAFList200} obj Optional instance to populate.
     * @return {module:model/WAFList200} The populated <code>WAFList200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WAFList200();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('total_pages')) {
                obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = Links.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [SingleWAF]);
            }
            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WAFList200</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WAFList200</code>.
     */
    static validateJSON(data) {
        // validate the optional field `links`
        if (data['links']) { // data not null
          Links.validateJSON(data['links']);
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                SingleWAF.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} count
 */
WAFList200.prototype['count'] = undefined;

/**
 * @member {Number} total_pages
 */
WAFList200.prototype['total_pages'] = undefined;

/**
 * @member {module:model/Links} links
 */
WAFList200.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/SingleWAF>} results
 */
WAFList200.prototype['results'] = undefined;

/**
 * @member {Number} schema_version
 */
WAFList200.prototype['schema_version'] = undefined;






export default WAFList200;

