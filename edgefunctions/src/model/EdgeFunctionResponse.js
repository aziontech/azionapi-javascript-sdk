/**
 * Edge Function
 * Azion Edge Function API
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Results from './Results';

/**
 * The EdgeFunctionResponse model module.
 * @module model/EdgeFunctionResponse
 * @version 3.0
 */
class EdgeFunctionResponse {
    /**
     * Constructs a new <code>EdgeFunctionResponse</code>.
     * @alias module:model/EdgeFunctionResponse
     */
    constructor() { 
        
        EdgeFunctionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EdgeFunctionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EdgeFunctionResponse} obj Optional instance to populate.
     * @return {module:model/EdgeFunctionResponse} The populated <code>EdgeFunctionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EdgeFunctionResponse();

            if (data.hasOwnProperty('results')) {
                obj['results'] = Results.constructFromObject(data['results']);
            }
            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EdgeFunctionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EdgeFunctionResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `results`
        if (data['results']) { // data not null
          Results.validateJSON(data['results']);
        }

        return true;
    }


}



/**
 * @member {module:model/Results} results
 */
EdgeFunctionResponse.prototype['results'] = undefined;

/**
 * @member {Number} schema_version
 */
EdgeFunctionResponse.prototype['schema_version'] = undefined;






export default EdgeFunctionResponse;

