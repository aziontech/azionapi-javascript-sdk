/**
 * Edgenode API
 * Azion Orchestration
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
import Variable from './Variable';

/**
 * The ServiceBindRequest model module.
 * @module model/ServiceBindRequest
 * @version 2.0.0
 */
class ServiceBindRequest {
    /**
     * Constructs a new <code>ServiceBindRequest</code>.
     * @alias module:model/ServiceBindRequest
     * @param serviceId {Number} 
     * @param variables {Array.<module:model/Variable>} 
     */
    constructor(serviceId, variables) { 
        
        ServiceBindRequest.initialize(this, serviceId, variables);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, serviceId, variables) { 
        obj['service_id'] = serviceId;
        obj['variables'] = variables;
    }

    /**
     * Constructs a <code>ServiceBindRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceBindRequest} obj Optional instance to populate.
     * @return {module:model/ServiceBindRequest} The populated <code>ServiceBindRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceBindRequest();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'Number');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [Variable]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceBindRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceBindRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ServiceBindRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['variables']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['variables'])) {
                throw new Error("Expected the field `variables` to be an array in the JSON data but got " + data['variables']);
            }
            // validate the optional field `variables` (array)
            for (const item of data['variables']) {
                Variable.validateJSON(item);
            };
        }

        return true;
    }


}

ServiceBindRequest.RequiredProperties = ["service_id", "variables"];

/**
 * @member {Number} service_id
 */
ServiceBindRequest.prototype['service_id'] = undefined;

/**
 * @member {Array.<module:model/Variable>} variables
 */
ServiceBindRequest.prototype['variables'] = undefined;






export default ServiceBindRequest;

