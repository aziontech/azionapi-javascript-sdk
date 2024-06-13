/**
 * Object Storage
 * REST API OpenAPI documentation for the Object Storage
 *
 * The version of the OpenAPI document: 1.0.0 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import S3Credential from './S3Credential';

/**
 * The PaginatedS3CredentialList model module.
 * @module model/PaginatedS3CredentialList
 * @version 1.0.0 (v1)
 */
class PaginatedS3CredentialList {
    /**
     * Constructs a new <code>PaginatedS3CredentialList</code>.
     * @alias module:model/PaginatedS3CredentialList
     */
    constructor() { 
        
        PaginatedS3CredentialList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedS3CredentialList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedS3CredentialList} obj Optional instance to populate.
     * @return {module:model/PaginatedS3CredentialList} The populated <code>PaginatedS3CredentialList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedS3CredentialList();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [S3Credential]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaginatedS3CredentialList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaginatedS3CredentialList</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next'] && !(typeof data['next'] === 'string' || data['next'] instanceof String)) {
            throw new Error("Expected the field `next` to be a primitive type in the JSON string but got " + data['next']);
        }
        // ensure the json data is a string
        if (data['previous'] && !(typeof data['previous'] === 'string' || data['previous'] instanceof String)) {
            throw new Error("Expected the field `previous` to be a primitive type in the JSON string but got " + data['previous']);
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                S3Credential.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} count
 */
PaginatedS3CredentialList.prototype['count'] = undefined;

/**
 * @member {String} next
 */
PaginatedS3CredentialList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedS3CredentialList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/S3Credential>} results
 */
PaginatedS3CredentialList.prototype['results'] = undefined;






export default PaginatedS3CredentialList;
