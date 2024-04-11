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
import DomainData from './DomainData';

/**
 * The DomainEntity model module.
 * @module model/DomainEntity
 * @version 2.0.0
 */
class DomainEntity {
    /**
     * Constructs a new <code>DomainEntity</code>.
     * @alias module:model/DomainEntity
     * @implements module:model/DomainData
     */
    constructor() { 
        DomainData.initialize(this);
        DomainEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DomainEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainEntity} obj Optional instance to populate.
     * @return {module:model/DomainEntity} The populated <code>DomainEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainEntity();
            DomainData.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('cnames')) {
                obj['cnames'] = ApiClient.convertToType(data['cnames'], ['String']);
            }
            if (data.hasOwnProperty('cname_access_only')) {
                obj['cname_access_only'] = ApiClient.convertToType(data['cname_access_only'], 'Boolean');
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
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
            }
            if (data.hasOwnProperty('is_mtls_enabled')) {
                obj['is_mtls_enabled'] = ApiClient.convertToType(data['is_mtls_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('mtls_trusted_ca_certificate_id')) {
                obj['mtls_trusted_ca_certificate_id'] = ApiClient.convertToType(data['mtls_trusted_ca_certificate_id'], 'Number');
            }
            if (data.hasOwnProperty('edge_firewall_id')) {
                obj['edge_firewall_id'] = ApiClient.convertToType(data['edge_firewall_id'], 'Number');
            }
            if (data.hasOwnProperty('mtls_verification')) {
                obj['mtls_verification'] = ApiClient.convertToType(data['mtls_verification'], 'String');
            }
            if (data.hasOwnProperty('crl_list')) {
                obj['crl_list'] = ApiClient.convertToType(data['crl_list'], ['Number']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('domain_name')) {
                obj['domain_name'] = ApiClient.convertToType(data['domain_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DomainEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DomainEntity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cnames'])) {
            throw new Error("Expected the field `cnames` to be an array in the JSON data but got " + data['cnames']);
        }
        // ensure the json data is a string
        if (data['environment'] && !(typeof data['environment'] === 'string' || data['environment'] instanceof String)) {
            throw new Error("Expected the field `environment` to be a primitive type in the JSON string but got " + data['environment']);
        }
        // ensure the json data is a string
        if (data['mtls_verification'] && !(typeof data['mtls_verification'] === 'string' || data['mtls_verification'] instanceof String)) {
            throw new Error("Expected the field `mtls_verification` to be a primitive type in the JSON string but got " + data['mtls_verification']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['crl_list'])) {
            throw new Error("Expected the field `crl_list` to be an array in the JSON data but got " + data['crl_list']);
        }
        // ensure the json data is a string
        if (data['domain_name'] && !(typeof data['domain_name'] === 'string' || data['domain_name'] instanceof String)) {
            throw new Error("Expected the field `domain_name` to be a primitive type in the JSON string but got " + data['domain_name']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
DomainEntity.prototype['name'] = undefined;

/**
 * @member {Array.<String>} cnames
 */
DomainEntity.prototype['cnames'] = undefined;

/**
 * @member {Boolean} cname_access_only
 */
DomainEntity.prototype['cname_access_only'] = undefined;

/**
 * @member {Boolean} is_active
 */
DomainEntity.prototype['is_active'] = undefined;

/**
 * @member {Number} edge_application_id
 */
DomainEntity.prototype['edge_application_id'] = undefined;

/**
 * @member {Number} digital_certificate_id
 */
DomainEntity.prototype['digital_certificate_id'] = undefined;

/**
 * @member {module:model/DomainEntity.EnvironmentEnum} environment
 */
DomainEntity.prototype['environment'] = undefined;

/**
 * @member {Boolean} is_mtls_enabled
 */
DomainEntity.prototype['is_mtls_enabled'] = undefined;

/**
 * @member {Number} mtls_trusted_ca_certificate_id
 */
DomainEntity.prototype['mtls_trusted_ca_certificate_id'] = undefined;

/**
 * @member {Number} edge_firewall_id
 */
DomainEntity.prototype['edge_firewall_id'] = undefined;

/**
 * @member {module:model/DomainEntity.MtlsVerificationEnum} mtls_verification
 */
DomainEntity.prototype['mtls_verification'] = undefined;

/**
 * @member {Array.<Number>} crl_list
 */
DomainEntity.prototype['crl_list'] = undefined;

/**
 * @member {Number} id
 */
DomainEntity.prototype['id'] = undefined;

/**
 * @member {String} domain_name
 */
DomainEntity.prototype['domain_name'] = undefined;


// Implement DomainData interface:
/**
 * @member {String} name
 */
DomainData.prototype['name'] = undefined;
/**
 * @member {Array.<String>} cnames
 */
DomainData.prototype['cnames'] = undefined;
/**
 * @member {Boolean} cname_access_only
 */
DomainData.prototype['cname_access_only'] = undefined;
/**
 * @member {Boolean} is_active
 */
DomainData.prototype['is_active'] = undefined;
/**
 * @member {Number} edge_application_id
 */
DomainData.prototype['edge_application_id'] = undefined;
/**
 * @member {Number} digital_certificate_id
 */
DomainData.prototype['digital_certificate_id'] = undefined;
/**
 * @member {module:model/DomainData.EnvironmentEnum} environment
 */
DomainData.prototype['environment'] = undefined;
/**
 * @member {Boolean} is_mtls_enabled
 */
DomainData.prototype['is_mtls_enabled'] = undefined;
/**
 * @member {Number} mtls_trusted_ca_certificate_id
 */
DomainData.prototype['mtls_trusted_ca_certificate_id'] = undefined;
/**
 * @member {Number} edge_firewall_id
 */
DomainData.prototype['edge_firewall_id'] = undefined;
/**
 * @member {module:model/DomainData.MtlsVerificationEnum} mtls_verification
 */
DomainData.prototype['mtls_verification'] = undefined;
/**
 * @member {Array.<Number>} crl_list
 */
DomainData.prototype['crl_list'] = undefined;



/**
 * Allowed values for the <code>environment</code> property.
 * @enum {String}
 * @readonly
 */
DomainEntity['EnvironmentEnum'] = {

    /**
     * value: "production"
     * @const
     */
    "production": "production",

    /**
     * value: "preview"
     * @const
     */
    "preview": "preview"
};


/**
 * Allowed values for the <code>mtls_verification</code> property.
 * @enum {String}
 * @readonly
 */
DomainEntity['MtlsVerificationEnum'] = {

    /**
     * value: "enforce"
     * @const
     */
    "enforce": "enforce",

    /**
     * value: "permissive"
     * @const
     */
    "permissive": "permissive"
};



export default DomainEntity;

