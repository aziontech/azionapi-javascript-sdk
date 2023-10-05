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
* Enum class SSLVerificationStatusOperators.
* @enum {}
* @readonly
*/
export default class SSLVerificationStatusOperators {
    
        /**
         * value: "is_equal"
         * @const
         */
        "equal" = "is_equal";

    
        /**
         * value: "is_not_equal"
         * @const
         */
        "not_equal" = "is_not_equal";

    

    /**
    * Returns a <code>SSLVerificationStatusOperators</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SSLVerificationStatusOperators} The enum <code>SSLVerificationStatusOperators</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
