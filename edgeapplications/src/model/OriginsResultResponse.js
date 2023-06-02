/**
 * Edge Application
 * ## Welcome to the Azion API!  With the following APIs you can check, remove or update existing settings, besides creating new ones.  * * *  ## Overview  The Azion API is a RESTful API, based on HTTPS requests, that allows you to integrate your systems with our platform, simply, quickly, and securely.  Here you will find instructions on how our API works and what functionality is available.  This documentation is being constantly updated. Make sure you verify if there are any updates or changes before you perform any development in your application, even if you are familiar with our API.  * * *  Both HTTPS requests and responses must be in JavaScript Object Notation (JSON) format. All HTTPS requests and responses must follow these conventions.  **Base URL**  The base URL of the API, which must be used, is:  [**https://api.azionapi.net/_**](https://api.azionapi.net/)  **HTTP Methods**  Each HTTP method defines the type of operation that will be run.  | HTTP Method | CRUD | Whole Collection (e.g. /items) | Specific Item (e.g. /items/:item_id) | | --- | --- | --- | --- | | GET | Read | It retrieves the list of items in a Collection. | It retrieves a specific item in a Collection. | | POST | Create | It creates a new item in the Collection. | \\- | | PUT | Update/Replace | It replaces a whole Collection with a new one. | It replaces an item in a Collection with a new one. | | PATCH | Update/Modify | It partially updates a Collection. | It partially updates an item in a Collection | | DELETE | Delete | It deletes a whole Collection. | It deletes an item in a Collection. |  * * *  **Status Codes**  The HTTP return code defines the status – successful or not – after the requested operation is run.  | Status Code | Meaning | | --- | --- | | 200 OK | General Status for a successful operation. | | 201 CREATED | Successfully created a collection or item, by means of POST or PUT. | | 204 NO CONTENT | Successful operation, but without any content to be return to the Body. Generally used for DELETE or PUT operations. | | 207 MULTI-STATUS | A batch of operations were triggered by a single request, which resulted in different return codes when it was run, for some of the operations. The codes are displayed in the “status” field, in the body of the response, for each sub-batch of operations for whichever are applicable. | | 400 BAD REQUEST | Request error, such as invalid parameters, missing mandatory parameters or others. | | 401 UNAUTHORIZED | Error caused by a missing HTTP Authentication header. | | 403 FORBIDDEN | User does not have the permissions to run the requested operation. | | 404 NOT FOUND | The requested resource does not exist. | | 405 METHOD NOT ALLOWED | The requested method is not applicable with the URL. | | 406 NOT ACCEPTABLE | Accept header missing from the HTTP request or the header contains formatting or the version is not supported by the API. | | 409 CONFLICT | Conflict generated in running the request, such as a request to create an already existing record. | | 429 TOO MANY REQUESTS | The request was temporarily rejected, due to exceeding the limit on operations. Wait for the time defined in the X-Ratelimit-Reset header and try again. | | 500 INTERNAL SERVER ERROR | Unintentional error, due to an unidentified failure in the request process. | | \\--- |  | | **HTTP Headers** |  |  All requests must be generated with the HTTP header specifying the desired code format for responses and the API version used. The current version of the API is 3 and the format is application/json.  ``` Accept: application/json; version=3  ```  * * *  **Rate Limit**  The limit of operations that can be run via the API is defined by 3 HTTP response headers:  *   **X-ratelimit-limit:** number of operations allowed in one time-frame; *   **X-ratelimit-remaining:** number of operations still available in one time-frame; *   **X-ratelimit-reset:** is the date and time, in IOS 8601 format, which represents the point in the future when the time-frame will be closed and when the limits will, therefore, be reset.       Example of HTTP response headers and a request:  ``` Date: Thu, 02 Nov 2017 12:30:28 GMT X-ratelimit-remaining: 199 X-ratelimit-limit: 200 X-ratelimit-reset: 2017-11-02T12:31:28.675446  ```  In the example provided, 200 operations are allowed within a 1-minute time frame. Of those, there are 199 still available, because one has already been run. The total limit will be reset after 1 minute.  When the X-ratelimit-limit is reached, or in other words, when the X-ratelimit-remaining reaches zero, the API will give the error, HTTP 429 TOO MANY REQUESTS. If your application receives this error, you will need to wait until the time defined in X-ratelimit-reset has passed, to make another request.  *   **X-ratelimit-limit by product**       The *X-ratelimit limit* variations by product are the following:  *   **Real-Time Metrics:** 20 requests per minute. *   **Real-Time Purge:** 200 requests per minute; except for the Wildcard, which is 2000 a day.       > The rate-limit values are based on the client_id.  * * *  **Optional Parameters**  In this version, it is possible to include some optional parameters as part of the GET method, which can help and modify the form in which your data will be returned.  You can combine these parameters to get the result you want.  They are:  | Parameter | Description | Accepted values: | | --- | --- | --- | | order_by | Identifies which field the return should be sorted by. The default ordering is ascending. | Depends on the fields available from the endpoint structure | | sort | Defines which ordering to be used: ascending or descending. | asc  <br>  <br>desc | | page | Identifies which page should be returned, if the return is paginated. The default value is 1. | Page number. | | page_size | Identifies how many items should be returned per page. The default value is 10. | Desired number of items. |  * * *  **Request Exemple**  You can use one parameter, or a combination. See the example below, which uses all of them in the same request.  ``` GET /domains?order_by=name&page_size=20&sort=desc&page=3 Accept: application/json; version=3 Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75  ```  * * *  # Authentication  Authentication and authorization of operations via Azion API is done through Tokens.  The first step is to create the Token through authenticating a user registered in [Real-Time Manager](https://sso.azion.com/login).  * * *  ## Encoding Username and Password in Base64  Only token creation and cancelling operations are performed through Basic Authentication, that is, with a username and password. You can create and cancel the token through the API itself, but for that you need to encode your username and password in base64.  Base64 encoding can be done from the command line on a Unix terminal:  ``` $ echo 'user@domain:password'|base64 dXNlckBkb21haW46cGFzc3dvcmQK  ```  If you do not have a Unix terminal available, you can use the free online service at [https://www.base64encode.org/](https://www.base64encode.org/)
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
import OriginsResultResponseAddresses from './OriginsResultResponseAddresses';

/**
 * The OriginsResultResponse model module.
 * @module model/OriginsResultResponse
 * @version 1.0.0
 */
class OriginsResultResponse {
    /**
     * Constructs a new <code>OriginsResultResponse</code>.
     * @alias module:model/OriginsResultResponse
     * @param originId {Number} 
     * @param originKey {String} 
     * @param name {String} 
     * @param originType {String} 
     * @param addresses {Array.<module:model/OriginsResultResponseAddresses>} 
     * @param originProtocolPolicy {String} 
     * @param isOriginRedirectionEnabled {Boolean} 
     * @param hostHeader {String} 
     * @param method {String} 
     * @param originPath {String} 
     * @param connectionTimeout {Number} 
     * @param timeoutBetweenBytes {Number} 
     * @param hmacAuthentication {Boolean} 
     * @param hmacRegionName {String} 
     * @param hmacAccessKey {String} 
     * @param hmacSecretKey {String} 
     */
    constructor(originId, originKey, name, originType, addresses, originProtocolPolicy, isOriginRedirectionEnabled, hostHeader, method, originPath, connectionTimeout, timeoutBetweenBytes, hmacAuthentication, hmacRegionName, hmacAccessKey, hmacSecretKey) { 
        
        OriginsResultResponse.initialize(this, originId, originKey, name, originType, addresses, originProtocolPolicy, isOriginRedirectionEnabled, hostHeader, method, originPath, connectionTimeout, timeoutBetweenBytes, hmacAuthentication, hmacRegionName, hmacAccessKey, hmacSecretKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, originId, originKey, name, originType, addresses, originProtocolPolicy, isOriginRedirectionEnabled, hostHeader, method, originPath, connectionTimeout, timeoutBetweenBytes, hmacAuthentication, hmacRegionName, hmacAccessKey, hmacSecretKey) { 
        obj['origin_id'] = originId;
        obj['origin_key'] = originKey;
        obj['name'] = name;
        obj['origin_type'] = originType;
        obj['addresses'] = addresses;
        obj['origin_protocol_policy'] = originProtocolPolicy;
        obj['is_origin_redirection_enabled'] = isOriginRedirectionEnabled;
        obj['host_header'] = hostHeader;
        obj['method'] = method;
        obj['origin_path'] = originPath;
        obj['connection_timeout'] = connectionTimeout;
        obj['timeout_between_bytes'] = timeoutBetweenBytes;
        obj['hmac_authentication'] = hmacAuthentication;
        obj['hmac_region_name'] = hmacRegionName;
        obj['hmac_access_key'] = hmacAccessKey;
        obj['hmac_secret_key'] = hmacSecretKey;
    }

    /**
     * Constructs a <code>OriginsResultResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginsResultResponse} obj Optional instance to populate.
     * @return {module:model/OriginsResultResponse} The populated <code>OriginsResultResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginsResultResponse();

            if (data.hasOwnProperty('origin_id')) {
                obj['origin_id'] = ApiClient.convertToType(data['origin_id'], 'Number');
            }
            if (data.hasOwnProperty('origin_key')) {
                obj['origin_key'] = ApiClient.convertToType(data['origin_key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('origin_type')) {
                obj['origin_type'] = ApiClient.convertToType(data['origin_type'], 'String');
            }
            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [OriginsResultResponseAddresses]);
            }
            if (data.hasOwnProperty('origin_protocol_policy')) {
                obj['origin_protocol_policy'] = ApiClient.convertToType(data['origin_protocol_policy'], 'String');
            }
            if (data.hasOwnProperty('is_origin_redirection_enabled')) {
                obj['is_origin_redirection_enabled'] = ApiClient.convertToType(data['is_origin_redirection_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('host_header')) {
                obj['host_header'] = ApiClient.convertToType(data['host_header'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('origin_path')) {
                obj['origin_path'] = ApiClient.convertToType(data['origin_path'], 'String');
            }
            if (data.hasOwnProperty('connection_timeout')) {
                obj['connection_timeout'] = ApiClient.convertToType(data['connection_timeout'], 'Number');
            }
            if (data.hasOwnProperty('timeout_between_bytes')) {
                obj['timeout_between_bytes'] = ApiClient.convertToType(data['timeout_between_bytes'], 'Number');
            }
            if (data.hasOwnProperty('hmac_authentication')) {
                obj['hmac_authentication'] = ApiClient.convertToType(data['hmac_authentication'], 'Boolean');
            }
            if (data.hasOwnProperty('hmac_region_name')) {
                obj['hmac_region_name'] = ApiClient.convertToType(data['hmac_region_name'], 'String');
            }
            if (data.hasOwnProperty('hmac_access_key')) {
                obj['hmac_access_key'] = ApiClient.convertToType(data['hmac_access_key'], 'String');
            }
            if (data.hasOwnProperty('hmac_secret_key')) {
                obj['hmac_secret_key'] = ApiClient.convertToType(data['hmac_secret_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OriginsResultResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OriginsResultResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OriginsResultResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['origin_key'] && !(typeof data['origin_key'] === 'string' || data['origin_key'] instanceof String)) {
            throw new Error("Expected the field `origin_key` to be a primitive type in the JSON string but got " + data['origin_key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['origin_type'] && !(typeof data['origin_type'] === 'string' || data['origin_type'] instanceof String)) {
            throw new Error("Expected the field `origin_type` to be a primitive type in the JSON string but got " + data['origin_type']);
        }
        if (data['addresses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['addresses'])) {
                throw new Error("Expected the field `addresses` to be an array in the JSON data but got " + data['addresses']);
            }
            // validate the optional field `addresses` (array)
            for (const item of data['addresses']) {
                OriginsResultResponseAddresses.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['origin_protocol_policy'] && !(typeof data['origin_protocol_policy'] === 'string' || data['origin_protocol_policy'] instanceof String)) {
            throw new Error("Expected the field `origin_protocol_policy` to be a primitive type in the JSON string but got " + data['origin_protocol_policy']);
        }
        // ensure the json data is a string
        if (data['host_header'] && !(typeof data['host_header'] === 'string' || data['host_header'] instanceof String)) {
            throw new Error("Expected the field `host_header` to be a primitive type in the JSON string but got " + data['host_header']);
        }
        // ensure the json data is a string
        if (data['method'] && !(typeof data['method'] === 'string' || data['method'] instanceof String)) {
            throw new Error("Expected the field `method` to be a primitive type in the JSON string but got " + data['method']);
        }
        // ensure the json data is a string
        if (data['origin_path'] && !(typeof data['origin_path'] === 'string' || data['origin_path'] instanceof String)) {
            throw new Error("Expected the field `origin_path` to be a primitive type in the JSON string but got " + data['origin_path']);
        }
        // ensure the json data is a string
        if (data['hmac_region_name'] && !(typeof data['hmac_region_name'] === 'string' || data['hmac_region_name'] instanceof String)) {
            throw new Error("Expected the field `hmac_region_name` to be a primitive type in the JSON string but got " + data['hmac_region_name']);
        }
        // ensure the json data is a string
        if (data['hmac_access_key'] && !(typeof data['hmac_access_key'] === 'string' || data['hmac_access_key'] instanceof String)) {
            throw new Error("Expected the field `hmac_access_key` to be a primitive type in the JSON string but got " + data['hmac_access_key']);
        }
        // ensure the json data is a string
        if (data['hmac_secret_key'] && !(typeof data['hmac_secret_key'] === 'string' || data['hmac_secret_key'] instanceof String)) {
            throw new Error("Expected the field `hmac_secret_key` to be a primitive type in the JSON string but got " + data['hmac_secret_key']);
        }

        return true;
    }


}

OriginsResultResponse.RequiredProperties = ["origin_id", "origin_key", "name", "origin_type", "addresses", "origin_protocol_policy", "is_origin_redirection_enabled", "host_header", "method", "origin_path", "connection_timeout", "timeout_between_bytes", "hmac_authentication", "hmac_region_name", "hmac_access_key", "hmac_secret_key"];

/**
 * @member {Number} origin_id
 */
OriginsResultResponse.prototype['origin_id'] = undefined;

/**
 * @member {String} origin_key
 */
OriginsResultResponse.prototype['origin_key'] = undefined;

/**
 * @member {String} name
 */
OriginsResultResponse.prototype['name'] = undefined;

/**
 * @member {String} origin_type
 */
OriginsResultResponse.prototype['origin_type'] = undefined;

/**
 * @member {Array.<module:model/OriginsResultResponseAddresses>} addresses
 */
OriginsResultResponse.prototype['addresses'] = undefined;

/**
 * @member {String} origin_protocol_policy
 */
OriginsResultResponse.prototype['origin_protocol_policy'] = undefined;

/**
 * @member {Boolean} is_origin_redirection_enabled
 */
OriginsResultResponse.prototype['is_origin_redirection_enabled'] = undefined;

/**
 * @member {String} host_header
 */
OriginsResultResponse.prototype['host_header'] = undefined;

/**
 * @member {String} method
 */
OriginsResultResponse.prototype['method'] = undefined;

/**
 * @member {String} origin_path
 */
OriginsResultResponse.prototype['origin_path'] = undefined;

/**
 * @member {Number} connection_timeout
 */
OriginsResultResponse.prototype['connection_timeout'] = undefined;

/**
 * @member {Number} timeout_between_bytes
 */
OriginsResultResponse.prototype['timeout_between_bytes'] = undefined;

/**
 * @member {Boolean} hmac_authentication
 */
OriginsResultResponse.prototype['hmac_authentication'] = undefined;

/**
 * @member {String} hmac_region_name
 */
OriginsResultResponse.prototype['hmac_region_name'] = undefined;

/**
 * @member {String} hmac_access_key
 */
OriginsResultResponse.prototype['hmac_access_key'] = undefined;

/**
 * @member {String} hmac_secret_key
 */
OriginsResultResponse.prototype['hmac_secret_key'] = undefined;






export default OriginsResultResponse;

