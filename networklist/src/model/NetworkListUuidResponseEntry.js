/**
 * Network Lists API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NetworkListUuidResponseEntryInt from './NetworkListUuidResponseEntryInt';
import NetworkListUuidResponseEntryString from './NetworkListUuidResponseEntryString';

/**
 * The NetworkListUuidResponseEntry model module.
 * @module model/NetworkListUuidResponseEntry
 * @version 1.0.0
 */
class NetworkListUuidResponseEntry {
    /**
     * Constructs a new <code>NetworkListUuidResponseEntry</code>.
     * @alias module:model/NetworkListUuidResponseEntry
     * @param {(module:model/NetworkListUuidResponseEntryInt|module:model/NetworkListUuidResponseEntryString)} instance The actual instance to initialize NetworkListUuidResponseEntry.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "NetworkListUuidResponseEntryString") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                NetworkListUuidResponseEntryString.validateJSON(instance); // throw an exception if no match
                // create NetworkListUuidResponseEntryString from JS object
                this.actualInstance = NetworkListUuidResponseEntryString.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into NetworkListUuidResponseEntryString
            errorMessages.push("Failed to construct NetworkListUuidResponseEntryString: " + err)
        }

        try {
            if (typeof instance === "NetworkListUuidResponseEntryInt") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                NetworkListUuidResponseEntryInt.validateJSON(instance); // throw an exception if no match
                // create NetworkListUuidResponseEntryInt from JS object
                this.actualInstance = NetworkListUuidResponseEntryInt.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into NetworkListUuidResponseEntryInt
            errorMessages.push("Failed to construct NetworkListUuidResponseEntryInt: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `NetworkListUuidResponseEntry` with oneOf schemas NetworkListUuidResponseEntryInt, NetworkListUuidResponseEntryString. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `NetworkListUuidResponseEntry` with oneOf schemas NetworkListUuidResponseEntryInt, NetworkListUuidResponseEntryString. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>NetworkListUuidResponseEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkListUuidResponseEntry} obj Optional instance to populate.
     * @return {module:model/NetworkListUuidResponseEntry} The populated <code>NetworkListUuidResponseEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        return new NetworkListUuidResponseEntry(data);
    }

    /**
     * Gets the actual instance, which can be <code>NetworkListUuidResponseEntryInt</code>, <code>NetworkListUuidResponseEntryString</code>.
     * @return {(module:model/NetworkListUuidResponseEntryInt|module:model/NetworkListUuidResponseEntryString)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>NetworkListUuidResponseEntryInt</code>, <code>NetworkListUuidResponseEntryString</code>.
     * @param {(module:model/NetworkListUuidResponseEntryInt|module:model/NetworkListUuidResponseEntryString)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = NetworkListUuidResponseEntry.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of NetworkListUuidResponseEntry from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/NetworkListUuidResponseEntry} An instance of NetworkListUuidResponseEntry.
     */
    static fromJSON = function(json_string){
        return NetworkListUuidResponseEntry.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {String} last_editor
 */
NetworkListUuidResponseEntry.prototype['last_editor'] = undefined;

/**
 * @member {String} last_modified
 */
NetworkListUuidResponseEntry.prototype['last_modified'] = undefined;

/**
 * @member {String} list_type
 */
NetworkListUuidResponseEntry.prototype['list_type'] = undefined;

/**
 * @member {String} name
 */
NetworkListUuidResponseEntry.prototype['name'] = undefined;

/**
 * @member {Array.<Number>} items_values
 */
NetworkListUuidResponseEntry.prototype['items_values'] = undefined;


NetworkListUuidResponseEntry.OneOf = ["NetworkListUuidResponseEntryInt", "NetworkListUuidResponseEntryString"];

export default NetworkListUuidResponseEntry;

