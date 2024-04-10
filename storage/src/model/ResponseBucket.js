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
import Bucket from './Bucket';
import StateEnum from './StateEnum';

/**
 * The ResponseBucket model module.
 * @module model/ResponseBucket
 * @version 1.0.0 (v1)
 */
class ResponseBucket {
    /**
     * Constructs a new <code>ResponseBucket</code>.
     * @alias module:model/ResponseBucket
     * @param state {module:model/StateEnum} 
     * @param data {module:model/Bucket} 
     */
    constructor(state, data) { 
        
        ResponseBucket.initialize(this, state, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, state, data) { 
        obj['state'] = state;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>ResponseBucket</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseBucket} obj Optional instance to populate.
     * @return {module:model/ResponseBucket} The populated <code>ResponseBucket</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseBucket();

            if (data.hasOwnProperty('state')) {
                obj['state'] = StateEnum.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Bucket.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseBucket</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseBucket</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ResponseBucket.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          Bucket.validateJSON(data['data']);
        }

        return true;
    }


}

ResponseBucket.RequiredProperties = ["state", "data"];

/**
 * @member {module:model/StateEnum} state
 */
ResponseBucket.prototype['state'] = undefined;

/**
 * @member {module:model/Bucket} data
 */
ResponseBucket.prototype['data'] = undefined;






export default ResponseBucket;
