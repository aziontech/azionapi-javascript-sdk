/**
 * Digital Certificates API
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
 * The ResultsInner model module.
 * @module model/ResultsInner
 * @version 2.0.0
 */
class ResultsInner {
    /**
     * Constructs a new <code>ResultsInner</code>.
     * @alias module:model/ResultsInner
     */
    constructor() { 
        
        ResultsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResultsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResultsInner} obj Optional instance to populate.
     * @return {module:model/ResultsInner} The populated <code>ResultsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResultsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subject_name')) {
                obj['subject_name'] = ApiClient.convertToType(data['subject_name'], ['String']);
            }
            if (data.hasOwnProperty('validity')) {
                obj['validity'] = ApiClient.convertToType(data['validity'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('certificate_type')) {
                obj['certificate_type'] = ApiClient.convertToType(data['certificate_type'], 'String');
            }
            if (data.hasOwnProperty('managed')) {
                obj['managed'] = ApiClient.convertToType(data['managed'], 'Boolean');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('azion_information')) {
                obj['azion_information'] = ApiClient.convertToType(data['azion_information'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResultsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResultsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['subject_name'])) {
            throw new Error("Expected the field `subject_name` to be an array in the JSON data but got " + data['subject_name']);
        }
        // ensure the json data is a string
        if (data['validity'] && !(typeof data['validity'] === 'string' || data['validity'] instanceof String)) {
            throw new Error("Expected the field `validity` to be a primitive type in the JSON string but got " + data['validity']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['certificate_type'] && !(typeof data['certificate_type'] === 'string' || data['certificate_type'] instanceof String)) {
            throw new Error("Expected the field `certificate_type` to be a primitive type in the JSON string but got " + data['certificate_type']);
        }
        // ensure the json data is a string
        if (data['issuer'] && !(typeof data['issuer'] === 'string' || data['issuer'] instanceof String)) {
            throw new Error("Expected the field `issuer` to be a primitive type in the JSON string but got " + data['issuer']);
        }
        // ensure the json data is a string
        if (data['azion_information'] && !(typeof data['azion_information'] === 'string' || data['azion_information'] instanceof String)) {
            throw new Error("Expected the field `azion_information` to be a primitive type in the JSON string but got " + data['azion_information']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
ResultsInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ResultsInner.prototype['name'] = undefined;

/**
 * @member {Array.<String>} subject_name
 */
ResultsInner.prototype['subject_name'] = undefined;

/**
 * @member {String} validity
 */
ResultsInner.prototype['validity'] = undefined;

/**
 * @member {String} status
 */
ResultsInner.prototype['status'] = undefined;

/**
 * @member {module:model/ResultsInner.CertificateTypeEnum} certificate_type
 */
ResultsInner.prototype['certificate_type'] = undefined;

/**
 * @member {Boolean} managed
 */
ResultsInner.prototype['managed'] = undefined;

/**
 * @member {String} issuer
 */
ResultsInner.prototype['issuer'] = undefined;

/**
 * @member {String} azion_information
 */
ResultsInner.prototype['azion_information'] = undefined;





/**
 * Allowed values for the <code>certificate_type</code> property.
 * @enum {String}
 * @readonly
 */
ResultsInner['CertificateTypeEnum'] = {

    /**
     * value: "edge_certificate"
     * @const
     */
    "edge_certificate": "edge_certificate",

    /**
     * value: "trusted_ca_certificate"
     * @const
     */
    "trusted_ca_certificate": "trusted_ca_certificate"
};



export default ResultsInner;

