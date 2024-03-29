/**
 * Edge Firewall API
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
* Enum class Conditionals.
* @enum {}
* @readonly
*/
export default class Conditionals {
    
        /**
         * value: "if"
         * @const
         */
        "if" = "if";

    
        /**
         * value: "and"
         * @const
         */
        "and" = "and";

    
        /**
         * value: "or"
         * @const
         */
        "or" = "or";

    

    /**
    * Returns a <code>Conditionals</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Conditionals} The enum <code>Conditionals</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

