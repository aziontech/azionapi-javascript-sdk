/**
 * Edge Application API
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
import ApplicationCacheResults from './ApplicationCacheResults';

/**
 * The ApplicationCacheGetOneResponse model module.
 * @module model/ApplicationCacheGetOneResponse
 * @version 2.0.0
 */
class ApplicationCacheGetOneResponse {
    /**
     * Constructs a new <code>ApplicationCacheGetOneResponse</code>.
     * @alias module:model/ApplicationCacheGetOneResponse
     * @param results {module:model/ApplicationCacheResults} 
     * @param schemaVersion {Number} 
     */
    constructor(results, schemaVersion) { 
        
        ApplicationCacheGetOneResponse.initialize(this, results, schemaVersion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, results, schemaVersion) { 
        obj['results'] = results;
        obj['schema_version'] = schemaVersion;
    }

    /**
     * Constructs a <code>ApplicationCacheGetOneResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCacheGetOneResponse} obj Optional instance to populate.
     * @return {module:model/ApplicationCacheGetOneResponse} The populated <code>ApplicationCacheGetOneResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationCacheGetOneResponse();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApplicationCacheResults.constructFromObject(data['results']);
            }
            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationCacheGetOneResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationCacheGetOneResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationCacheGetOneResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `results`
        if (data['results']) { // data not null
          ApplicationCacheResults.validateJSON(data['results']);
        }

        return true;
    }


}

ApplicationCacheGetOneResponse.RequiredProperties = ["results", "schema_version"];

/**
 * @member {module:model/ApplicationCacheResults} results
 */
ApplicationCacheGetOneResponse.prototype['results'] = undefined;

/**
 * @member {Number} schema_version
 */
ApplicationCacheGetOneResponse.prototype['schema_version'] = undefined;






export default ApplicationCacheGetOneResponse;

