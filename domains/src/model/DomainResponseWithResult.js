/**
 * Domain API
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
import DomainResults from './DomainResults';

/**
 * The DomainResponseWithResult model module.
 * @module model/DomainResponseWithResult
 * @version 2.0.0
 */
class DomainResponseWithResult {
    /**
     * Constructs a new <code>DomainResponseWithResult</code>.
     * @alias module:model/DomainResponseWithResult
     * @param schemaVersion {Number} 
     * @param results {module:model/DomainResults} 
     */
    constructor(schemaVersion, results) { 
        
        DomainResponseWithResult.initialize(this, schemaVersion, results);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, schemaVersion, results) { 
        obj['schema_version'] = schemaVersion;
        obj['results'] = results;
    }

    /**
     * Constructs a <code>DomainResponseWithResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainResponseWithResult} obj Optional instance to populate.
     * @return {module:model/DomainResponseWithResult} The populated <code>DomainResponseWithResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainResponseWithResult();

            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = DomainResults.constructFromObject(data['results']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DomainResponseWithResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DomainResponseWithResult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DomainResponseWithResult.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `results`
        if (data['results']) { // data not null
          DomainResults.validateJSON(data['results']);
        }

        return true;
    }


}

DomainResponseWithResult.RequiredProperties = ["schema_version", "results"];

/**
 * @member {Number} schema_version
 */
DomainResponseWithResult.prototype['schema_version'] = undefined;

/**
 * @member {module:model/DomainResults} results
 */
DomainResponseWithResult.prototype['results'] = undefined;






export default DomainResponseWithResult;

