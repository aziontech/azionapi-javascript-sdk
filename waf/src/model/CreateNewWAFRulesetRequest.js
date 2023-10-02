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
import SingleWAF from './SingleWAF';
import WAFSensitivityChoices from './WAFSensitivityChoices';

/**
 * The CreateNewWAFRulesetRequest model module.
 * @module model/CreateNewWAFRulesetRequest
 * @version 2.0.0
 */
class CreateNewWAFRulesetRequest {
    /**
     * Constructs a new <code>CreateNewWAFRulesetRequest</code>.
     * @alias module:model/CreateNewWAFRulesetRequest
     * @implements module:model/SingleWAF
     * @param name {String} Identification name for WAF Rule Set.
     * @param mode {module:model/CreateNewWAFRulesetRequest.ModeEnum} 
     * @param active {Boolean} 
     * @param sqlInjection {Boolean} 
     * @param sqlInjectionSensitivity {module:model/WAFSensitivityChoices} 
     * @param remoteFileInclusion {Boolean} 
     * @param remoteFileInclusionSensitivity {module:model/WAFSensitivityChoices} 
     * @param directoryTraversal {Boolean} 
     * @param directoryTraversalSensitivity {module:model/WAFSensitivityChoices} 
     * @param crossSiteScripting {Boolean} 
     * @param crossSiteScriptingSensitivity {module:model/WAFSensitivityChoices} 
     * @param evadingTricks {Boolean} 
     * @param evadingTricksSensitivity {module:model/WAFSensitivityChoices} 
     * @param fileUpload {Boolean} 
     * @param fileUploadSensitivity {module:model/WAFSensitivityChoices} 
     * @param unwantedAccess {Boolean} 
     * @param unwantedAccessSensitivity {module:model/WAFSensitivityChoices} 
     * @param identifiedAttack {Boolean} 
     * @param identifiedAttackSensitivity {module:model/WAFSensitivityChoices} 
     * @param bypassAddresses {Array.<String>} 
     */
    constructor(name, mode, active, sqlInjection, sqlInjectionSensitivity, remoteFileInclusion, remoteFileInclusionSensitivity, directoryTraversal, directoryTraversalSensitivity, crossSiteScripting, crossSiteScriptingSensitivity, evadingTricks, evadingTricksSensitivity, fileUpload, fileUploadSensitivity, unwantedAccess, unwantedAccessSensitivity, identifiedAttack, identifiedAttackSensitivity, bypassAddresses) { 
        SingleWAF.initialize(this);
        CreateNewWAFRulesetRequest.initialize(this, name, mode, active, sqlInjection, sqlInjectionSensitivity, remoteFileInclusion, remoteFileInclusionSensitivity, directoryTraversal, directoryTraversalSensitivity, crossSiteScripting, crossSiteScriptingSensitivity, evadingTricks, evadingTricksSensitivity, fileUpload, fileUploadSensitivity, unwantedAccess, unwantedAccessSensitivity, identifiedAttack, identifiedAttackSensitivity, bypassAddresses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, mode, active, sqlInjection, sqlInjectionSensitivity, remoteFileInclusion, remoteFileInclusionSensitivity, directoryTraversal, directoryTraversalSensitivity, crossSiteScripting, crossSiteScriptingSensitivity, evadingTricks, evadingTricksSensitivity, fileUpload, fileUploadSensitivity, unwantedAccess, unwantedAccessSensitivity, identifiedAttack, identifiedAttackSensitivity, bypassAddresses) { 
        obj['name'] = name;
        obj['mode'] = mode;
        obj['active'] = active;
        obj['sql_injection'] = sqlInjection;
        obj['sql_injection_sensitivity'] = sqlInjectionSensitivity;
        obj['remote_file_inclusion'] = remoteFileInclusion;
        obj['remote_file_inclusion_sensitivity'] = remoteFileInclusionSensitivity;
        obj['directory_traversal'] = directoryTraversal;
        obj['directory_traversal_sensitivity'] = directoryTraversalSensitivity;
        obj['cross_site_scripting'] = crossSiteScripting;
        obj['cross_site_scripting_sensitivity'] = crossSiteScriptingSensitivity;
        obj['evading_tricks'] = evadingTricks;
        obj['evading_tricks_sensitivity'] = evadingTricksSensitivity;
        obj['file_upload'] = fileUpload;
        obj['file_upload_sensitivity'] = fileUploadSensitivity;
        obj['unwanted_access'] = unwantedAccess;
        obj['unwanted_access_sensitivity'] = unwantedAccessSensitivity;
        obj['identified_attack'] = identifiedAttack;
        obj['identified_attack_sensitivity'] = identifiedAttackSensitivity;
        obj['bypass_addresses'] = bypassAddresses;
    }

    /**
     * Constructs a <code>CreateNewWAFRulesetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNewWAFRulesetRequest} obj Optional instance to populate.
     * @return {module:model/CreateNewWAFRulesetRequest} The populated <code>CreateNewWAFRulesetRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateNewWAFRulesetRequest();
            SingleWAF.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('sql_injection')) {
                obj['sql_injection'] = ApiClient.convertToType(data['sql_injection'], 'Boolean');
            }
            if (data.hasOwnProperty('sql_injection_sensitivity')) {
                obj['sql_injection_sensitivity'] = WAFSensitivityChoices.constructFromObject(data['sql_injection_sensitivity']);
            }
            if (data.hasOwnProperty('remote_file_inclusion')) {
                obj['remote_file_inclusion'] = ApiClient.convertToType(data['remote_file_inclusion'], 'Boolean');
            }
            if (data.hasOwnProperty('remote_file_inclusion_sensitivity')) {
                obj['remote_file_inclusion_sensitivity'] = WAFSensitivityChoices.constructFromObject(data['remote_file_inclusion_sensitivity']);
            }
            if (data.hasOwnProperty('directory_traversal')) {
                obj['directory_traversal'] = ApiClient.convertToType(data['directory_traversal'], 'Boolean');
            }
            if (data.hasOwnProperty('directory_traversal_sensitivity')) {
                obj['directory_traversal_sensitivity'] = WAFSensitivityChoices.constructFromObject(data['directory_traversal_sensitivity']);
            }
            if (data.hasOwnProperty('cross_site_scripting')) {
                obj['cross_site_scripting'] = ApiClient.convertToType(data['cross_site_scripting'], 'Boolean');
            }
            if (data.hasOwnProperty('cross_site_scripting_sensitivity')) {
                obj['cross_site_scripting_sensitivity'] = WAFSensitivityChoices.constructFromObject(data['cross_site_scripting_sensitivity']);
            }
            if (data.hasOwnProperty('evading_tricks')) {
                obj['evading_tricks'] = ApiClient.convertToType(data['evading_tricks'], 'Boolean');
            }
            if (data.hasOwnProperty('evading_tricks_sensitivity')) {
                obj['evading_tricks_sensitivity'] = WAFSensitivityChoices.constructFromObject(data['evading_tricks_sensitivity']);
            }
            if (data.hasOwnProperty('file_upload')) {
                obj['file_upload'] = ApiClient.convertToType(data['file_upload'], 'Boolean');
            }
            if (data.hasOwnProperty('file_upload_sensitivity')) {
                obj['file_upload_sensitivity'] = WAFSensitivityChoices.constructFromObject(data['file_upload_sensitivity']);
            }
            if (data.hasOwnProperty('unwanted_access')) {
                obj['unwanted_access'] = ApiClient.convertToType(data['unwanted_access'], 'Boolean');
            }
            if (data.hasOwnProperty('unwanted_access_sensitivity')) {
                obj['unwanted_access_sensitivity'] = WAFSensitivityChoices.constructFromObject(data['unwanted_access_sensitivity']);
            }
            if (data.hasOwnProperty('identified_attack')) {
                obj['identified_attack'] = ApiClient.convertToType(data['identified_attack'], 'Boolean');
            }
            if (data.hasOwnProperty('identified_attack_sensitivity')) {
                obj['identified_attack_sensitivity'] = WAFSensitivityChoices.constructFromObject(data['identified_attack_sensitivity']);
            }
            if (data.hasOwnProperty('bypass_addresses')) {
                obj['bypass_addresses'] = ApiClient.convertToType(data['bypass_addresses'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateNewWAFRulesetRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateNewWAFRulesetRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateNewWAFRulesetRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['mode'] && !(typeof data['mode'] === 'string' || data['mode'] instanceof String)) {
            throw new Error("Expected the field `mode` to be a primitive type in the JSON string but got " + data['mode']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bypass_addresses'])) {
            throw new Error("Expected the field `bypass_addresses` to be an array in the JSON data but got " + data['bypass_addresses']);
        }

        return true;
    }


}

CreateNewWAFRulesetRequest.RequiredProperties = ["name", "mode", "active", "sql_injection", "sql_injection_sensitivity", "remote_file_inclusion", "remote_file_inclusion_sensitivity", "directory_traversal", "directory_traversal_sensitivity", "cross_site_scripting", "cross_site_scripting_sensitivity", "evading_tricks", "evading_tricks_sensitivity", "file_upload", "file_upload_sensitivity", "unwanted_access", "unwanted_access_sensitivity", "identified_attack", "identified_attack_sensitivity", "bypass_addresses"];

/**
 * @member {Number} id
 */
CreateNewWAFRulesetRequest.prototype['id'] = undefined;

/**
 * Identification name for WAF Rule Set.
 * @member {String} name
 */
CreateNewWAFRulesetRequest.prototype['name'] = undefined;

/**
 * @member {module:model/CreateNewWAFRulesetRequest.ModeEnum} mode
 */
CreateNewWAFRulesetRequest.prototype['mode'] = undefined;

/**
 * @member {Boolean} active
 */
CreateNewWAFRulesetRequest.prototype['active'] = undefined;

/**
 * @member {Boolean} sql_injection
 */
CreateNewWAFRulesetRequest.prototype['sql_injection'] = undefined;

/**
 * @member {module:model/WAFSensitivityChoices} sql_injection_sensitivity
 */
CreateNewWAFRulesetRequest.prototype['sql_injection_sensitivity'] = undefined;

/**
 * @member {Boolean} remote_file_inclusion
 */
CreateNewWAFRulesetRequest.prototype['remote_file_inclusion'] = undefined;

/**
 * @member {module:model/WAFSensitivityChoices} remote_file_inclusion_sensitivity
 */
CreateNewWAFRulesetRequest.prototype['remote_file_inclusion_sensitivity'] = undefined;

/**
 * @member {Boolean} directory_traversal
 */
CreateNewWAFRulesetRequest.prototype['directory_traversal'] = undefined;

/**
 * @member {module:model/WAFSensitivityChoices} directory_traversal_sensitivity
 */
CreateNewWAFRulesetRequest.prototype['directory_traversal_sensitivity'] = undefined;

/**
 * @member {Boolean} cross_site_scripting
 */
CreateNewWAFRulesetRequest.prototype['cross_site_scripting'] = undefined;

/**
 * @member {module:model/WAFSensitivityChoices} cross_site_scripting_sensitivity
 */
CreateNewWAFRulesetRequest.prototype['cross_site_scripting_sensitivity'] = undefined;

/**
 * @member {Boolean} evading_tricks
 */
CreateNewWAFRulesetRequest.prototype['evading_tricks'] = undefined;

/**
 * @member {module:model/WAFSensitivityChoices} evading_tricks_sensitivity
 */
CreateNewWAFRulesetRequest.prototype['evading_tricks_sensitivity'] = undefined;

/**
 * @member {Boolean} file_upload
 */
CreateNewWAFRulesetRequest.prototype['file_upload'] = undefined;

/**
 * @member {module:model/WAFSensitivityChoices} file_upload_sensitivity
 */
CreateNewWAFRulesetRequest.prototype['file_upload_sensitivity'] = undefined;

/**
 * @member {Boolean} unwanted_access
 */
CreateNewWAFRulesetRequest.prototype['unwanted_access'] = undefined;

/**
 * @member {module:model/WAFSensitivityChoices} unwanted_access_sensitivity
 */
CreateNewWAFRulesetRequest.prototype['unwanted_access_sensitivity'] = undefined;

/**
 * @member {Boolean} identified_attack
 */
CreateNewWAFRulesetRequest.prototype['identified_attack'] = undefined;

/**
 * @member {module:model/WAFSensitivityChoices} identified_attack_sensitivity
 */
CreateNewWAFRulesetRequest.prototype['identified_attack_sensitivity'] = undefined;

/**
 * @member {Array.<String>} bypass_addresses
 */
CreateNewWAFRulesetRequest.prototype['bypass_addresses'] = undefined;


// Implement SingleWAF interface:
/**
 * @member {Number} id
 */
SingleWAF.prototype['id'] = undefined;
/**
 * Identification name for WAF Rule Set.
 * @member {String} name
 */
SingleWAF.prototype['name'] = undefined;
/**
 * @member {module:model/SingleWAF.ModeEnum} mode
 */
SingleWAF.prototype['mode'] = undefined;
/**
 * @member {Boolean} active
 */
SingleWAF.prototype['active'] = undefined;
/**
 * @member {Boolean} sql_injection
 */
SingleWAF.prototype['sql_injection'] = undefined;
/**
 * @member {module:model/WAFSensitivityChoices} sql_injection_sensitivity
 */
SingleWAF.prototype['sql_injection_sensitivity'] = undefined;
/**
 * @member {Boolean} remote_file_inclusion
 */
SingleWAF.prototype['remote_file_inclusion'] = undefined;
/**
 * @member {module:model/WAFSensitivityChoices} remote_file_inclusion_sensitivity
 */
SingleWAF.prototype['remote_file_inclusion_sensitivity'] = undefined;
/**
 * @member {Boolean} directory_traversal
 */
SingleWAF.prototype['directory_traversal'] = undefined;
/**
 * @member {module:model/WAFSensitivityChoices} directory_traversal_sensitivity
 */
SingleWAF.prototype['directory_traversal_sensitivity'] = undefined;
/**
 * @member {Boolean} cross_site_scripting
 */
SingleWAF.prototype['cross_site_scripting'] = undefined;
/**
 * @member {module:model/WAFSensitivityChoices} cross_site_scripting_sensitivity
 */
SingleWAF.prototype['cross_site_scripting_sensitivity'] = undefined;
/**
 * @member {Boolean} evading_tricks
 */
SingleWAF.prototype['evading_tricks'] = undefined;
/**
 * @member {module:model/WAFSensitivityChoices} evading_tricks_sensitivity
 */
SingleWAF.prototype['evading_tricks_sensitivity'] = undefined;
/**
 * @member {Boolean} file_upload
 */
SingleWAF.prototype['file_upload'] = undefined;
/**
 * @member {module:model/WAFSensitivityChoices} file_upload_sensitivity
 */
SingleWAF.prototype['file_upload_sensitivity'] = undefined;
/**
 * @member {Boolean} unwanted_access
 */
SingleWAF.prototype['unwanted_access'] = undefined;
/**
 * @member {module:model/WAFSensitivityChoices} unwanted_access_sensitivity
 */
SingleWAF.prototype['unwanted_access_sensitivity'] = undefined;
/**
 * @member {Boolean} identified_attack
 */
SingleWAF.prototype['identified_attack'] = undefined;
/**
 * @member {module:model/WAFSensitivityChoices} identified_attack_sensitivity
 */
SingleWAF.prototype['identified_attack_sensitivity'] = undefined;
/**
 * @member {Array.<String>} bypass_addresses
 */
SingleWAF.prototype['bypass_addresses'] = undefined;



/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
CreateNewWAFRulesetRequest['ModeEnum'] = {

    /**
     * value: "blocking"
     * @const
     */
    "blocking": "blocking",

    /**
     * value: "counting"
     * @const
     */
    "counting": "counting"
};



export default CreateNewWAFRulesetRequest;

