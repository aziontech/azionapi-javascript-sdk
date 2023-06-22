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

/**
 * The PutDomainRequest model module.
 * @module model/PutDomainRequest
 * @version 2.0.0
 */
class PutDomainRequest {
    /**
     * Constructs a new <code>PutDomainRequest</code>.
     * @alias module:model/PutDomainRequest
     * @param cnames {Array.<String>} 
     * @param cnameAccessOnly {Boolean} 
     * @param name {String} 
     * @param isActive {Boolean} 
     * @param edgeApplicationId {Number} 
     * @param digitalCertificateId {Number} 
     */
    constructor(cnames, cnameAccessOnly, name, isActive, edgeApplicationId, digitalCertificateId) { 
        
        PutDomainRequest.initialize(this, cnames, cnameAccessOnly, name, isActive, edgeApplicationId, digitalCertificateId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cnames, cnameAccessOnly, name, isActive, edgeApplicationId, digitalCertificateId) { 
        obj['cnames'] = cnames;
        obj['cname_access_only'] = cnameAccessOnly;
        obj['name'] = name;
        obj['is_active'] = isActive;
        obj['edge_application_id'] = edgeApplicationId;
        obj['digital_certificate_id'] = digitalCertificateId;
    }

    /**
     * Constructs a <code>PutDomainRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDomainRequest} obj Optional instance to populate.
     * @return {module:model/PutDomainRequest} The populated <code>PutDomainRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDomainRequest();

            if (data.hasOwnProperty('cnames')) {
                obj['cnames'] = ApiClient.convertToType(data['cnames'], ['String']);
            }
            if (data.hasOwnProperty('cname_access_only')) {
                obj['cname_access_only'] = ApiClient.convertToType(data['cname_access_only'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('edge_application_id')) {
                obj['edge_application_id'] = ApiClient.convertToType(data['edge_application_id'], 'Number');
            }
            if (data.hasOwnProperty('digital_certificate_id')) {
                obj['digital_certificate_id'] = ApiClient.convertToType(data['digital_certificate_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PutDomainRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PutDomainRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PutDomainRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cnames'])) {
            throw new Error("Expected the field `cnames` to be an array in the JSON data but got " + data['cnames']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

PutDomainRequest.RequiredProperties = ["cnames", "cname_access_only", "name", "is_active", "edge_application_id", "digital_certificate_id"];

/**
 * @member {Array.<String>} cnames
 */
PutDomainRequest.prototype['cnames'] = undefined;

/**
 * @member {Boolean} cname_access_only
 */
PutDomainRequest.prototype['cname_access_only'] = undefined;

/**
 * @member {String} name
 */
PutDomainRequest.prototype['name'] = undefined;

/**
 * @member {Boolean} is_active
 */
PutDomainRequest.prototype['is_active'] = undefined;

/**
 * @member {Number} edge_application_id
 */
PutDomainRequest.prototype['edge_application_id'] = undefined;

/**
 * @member {Number} digital_certificate_id
 */
PutDomainRequest.prototype['digital_certificate_id'] = undefined;






export default PutDomainRequest;

