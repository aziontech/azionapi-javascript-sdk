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

/**
 * The ApplicationCacheResponseDetails model module.
 * @module model/ApplicationCacheResponseDetails
 * @version 1.0.0
 */
class ApplicationCacheResponseDetails {
    /**
     * Constructs a new <code>ApplicationCacheResponseDetails</code>.
     * @alias module:model/ApplicationCacheResponseDetails
     * @param id {Number} 
     * @param name {String} 
     * @param browserCacheSettings {String} 
     * @param browserCacheSettingsMaximumTtl {Number} 
     * @param cdnCacheSettings {String} 
     * @param cdnCacheSettingsMaximumTtl {Number} 
     * @param cacheByQueryString {String} 
     * @param queryStringFields {Array.<String>} 
     * @param enableQueryStringSort {Boolean} 
     * @param cacheByCookies {String} 
     * @param cookieNames {Array.<String>} 
     * @param enableCachingForPost {Boolean} 
     * @param l2CachingEnabled {Boolean} 
     */
    constructor(id, name, browserCacheSettings, browserCacheSettingsMaximumTtl, cdnCacheSettings, cdnCacheSettingsMaximumTtl, cacheByQueryString, queryStringFields, enableQueryStringSort, cacheByCookies, cookieNames, enableCachingForPost, l2CachingEnabled) { 
        
        ApplicationCacheResponseDetails.initialize(this, id, name, browserCacheSettings, browserCacheSettingsMaximumTtl, cdnCacheSettings, cdnCacheSettingsMaximumTtl, cacheByQueryString, queryStringFields, enableQueryStringSort, cacheByCookies, cookieNames, enableCachingForPost, l2CachingEnabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, browserCacheSettings, browserCacheSettingsMaximumTtl, cdnCacheSettings, cdnCacheSettingsMaximumTtl, cacheByQueryString, queryStringFields, enableQueryStringSort, cacheByCookies, cookieNames, enableCachingForPost, l2CachingEnabled) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['browser_cache_settings'] = browserCacheSettings;
        obj['browser_cache_settings_maximum_ttl'] = browserCacheSettingsMaximumTtl;
        obj['cdn_cache_settings'] = cdnCacheSettings;
        obj['cdn_cache_settings_maximum_ttl'] = cdnCacheSettingsMaximumTtl;
        obj['cache_by_query_string'] = cacheByQueryString;
        obj['query_string_fields'] = queryStringFields;
        obj['enable_query_string_sort'] = enableQueryStringSort;
        obj['cache_by_cookies'] = cacheByCookies;
        obj['cookie_names'] = cookieNames;
        obj['enable_caching_for_post'] = enableCachingForPost;
        obj['l2_caching_enabled'] = l2CachingEnabled;
    }

    /**
     * Constructs a <code>ApplicationCacheResponseDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCacheResponseDetails} obj Optional instance to populate.
     * @return {module:model/ApplicationCacheResponseDetails} The populated <code>ApplicationCacheResponseDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationCacheResponseDetails();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('browser_cache_settings')) {
                obj['browser_cache_settings'] = ApiClient.convertToType(data['browser_cache_settings'], 'String');
            }
            if (data.hasOwnProperty('browser_cache_settings_maximum_ttl')) {
                obj['browser_cache_settings_maximum_ttl'] = ApiClient.convertToType(data['browser_cache_settings_maximum_ttl'], 'Number');
            }
            if (data.hasOwnProperty('cdn_cache_settings')) {
                obj['cdn_cache_settings'] = ApiClient.convertToType(data['cdn_cache_settings'], 'String');
            }
            if (data.hasOwnProperty('cdn_cache_settings_maximum_ttl')) {
                obj['cdn_cache_settings_maximum_ttl'] = ApiClient.convertToType(data['cdn_cache_settings_maximum_ttl'], 'Number');
            }
            if (data.hasOwnProperty('cache_by_query_string')) {
                obj['cache_by_query_string'] = ApiClient.convertToType(data['cache_by_query_string'], 'String');
            }
            if (data.hasOwnProperty('query_string_fields')) {
                obj['query_string_fields'] = ApiClient.convertToType(data['query_string_fields'], ['String']);
            }
            if (data.hasOwnProperty('enable_query_string_sort')) {
                obj['enable_query_string_sort'] = ApiClient.convertToType(data['enable_query_string_sort'], 'Boolean');
            }
            if (data.hasOwnProperty('cache_by_cookies')) {
                obj['cache_by_cookies'] = ApiClient.convertToType(data['cache_by_cookies'], 'String');
            }
            if (data.hasOwnProperty('cookie_names')) {
                obj['cookie_names'] = ApiClient.convertToType(data['cookie_names'], ['String']);
            }
            if (data.hasOwnProperty('adaptive_delivery_action')) {
                obj['adaptive_delivery_action'] = ApiClient.convertToType(data['adaptive_delivery_action'], 'String');
            }
            if (data.hasOwnProperty('device_group')) {
                obj['device_group'] = ApiClient.convertToType(data['device_group'], ['String']);
            }
            if (data.hasOwnProperty('enable_caching_for_post')) {
                obj['enable_caching_for_post'] = ApiClient.convertToType(data['enable_caching_for_post'], 'Boolean');
            }
            if (data.hasOwnProperty('enable_caching_for_options')) {
                obj['enable_caching_for_options'] = ApiClient.convertToType(data['enable_caching_for_options'], 'Boolean');
            }
            if (data.hasOwnProperty('l2_caching_enabled')) {
                obj['l2_caching_enabled'] = ApiClient.convertToType(data['l2_caching_enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationCacheResponseDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationCacheResponseDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationCacheResponseDetails.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['browser_cache_settings'] && !(typeof data['browser_cache_settings'] === 'string' || data['browser_cache_settings'] instanceof String)) {
            throw new Error("Expected the field `browser_cache_settings` to be a primitive type in the JSON string but got " + data['browser_cache_settings']);
        }
        // ensure the json data is a string
        if (data['cdn_cache_settings'] && !(typeof data['cdn_cache_settings'] === 'string' || data['cdn_cache_settings'] instanceof String)) {
            throw new Error("Expected the field `cdn_cache_settings` to be a primitive type in the JSON string but got " + data['cdn_cache_settings']);
        }
        // ensure the json data is a string
        if (data['cache_by_query_string'] && !(typeof data['cache_by_query_string'] === 'string' || data['cache_by_query_string'] instanceof String)) {
            throw new Error("Expected the field `cache_by_query_string` to be a primitive type in the JSON string but got " + data['cache_by_query_string']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['query_string_fields'])) {
            throw new Error("Expected the field `query_string_fields` to be an array in the JSON data but got " + data['query_string_fields']);
        }
        // ensure the json data is a string
        if (data['cache_by_cookies'] && !(typeof data['cache_by_cookies'] === 'string' || data['cache_by_cookies'] instanceof String)) {
            throw new Error("Expected the field `cache_by_cookies` to be a primitive type in the JSON string but got " + data['cache_by_cookies']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cookie_names'])) {
            throw new Error("Expected the field `cookie_names` to be an array in the JSON data but got " + data['cookie_names']);
        }
        // ensure the json data is a string
        if (data['adaptive_delivery_action'] && !(typeof data['adaptive_delivery_action'] === 'string' || data['adaptive_delivery_action'] instanceof String)) {
            throw new Error("Expected the field `adaptive_delivery_action` to be a primitive type in the JSON string but got " + data['adaptive_delivery_action']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['device_group'])) {
            throw new Error("Expected the field `device_group` to be an array in the JSON data but got " + data['device_group']);
        }

        return true;
    }


}

ApplicationCacheResponseDetails.RequiredProperties = ["id", "name", "browser_cache_settings", "browser_cache_settings_maximum_ttl", "cdn_cache_settings", "cdn_cache_settings_maximum_ttl", "cache_by_query_string", "query_string_fields", "enable_query_string_sort", "cache_by_cookies", "cookie_names", "enable_caching_for_post", "l2_caching_enabled"];

/**
 * @member {Number} id
 */
ApplicationCacheResponseDetails.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ApplicationCacheResponseDetails.prototype['name'] = undefined;

/**
 * @member {String} browser_cache_settings
 */
ApplicationCacheResponseDetails.prototype['browser_cache_settings'] = undefined;

/**
 * @member {Number} browser_cache_settings_maximum_ttl
 */
ApplicationCacheResponseDetails.prototype['browser_cache_settings_maximum_ttl'] = undefined;

/**
 * @member {String} cdn_cache_settings
 */
ApplicationCacheResponseDetails.prototype['cdn_cache_settings'] = undefined;

/**
 * @member {Number} cdn_cache_settings_maximum_ttl
 */
ApplicationCacheResponseDetails.prototype['cdn_cache_settings_maximum_ttl'] = undefined;

/**
 * @member {String} cache_by_query_string
 */
ApplicationCacheResponseDetails.prototype['cache_by_query_string'] = undefined;

/**
 * @member {Array.<String>} query_string_fields
 */
ApplicationCacheResponseDetails.prototype['query_string_fields'] = undefined;

/**
 * @member {Boolean} enable_query_string_sort
 */
ApplicationCacheResponseDetails.prototype['enable_query_string_sort'] = undefined;

/**
 * @member {String} cache_by_cookies
 */
ApplicationCacheResponseDetails.prototype['cache_by_cookies'] = undefined;

/**
 * @member {Array.<String>} cookie_names
 */
ApplicationCacheResponseDetails.prototype['cookie_names'] = undefined;

/**
 * @member {String} adaptive_delivery_action
 */
ApplicationCacheResponseDetails.prototype['adaptive_delivery_action'] = undefined;

/**
 * @member {Array.<String>} device_group
 */
ApplicationCacheResponseDetails.prototype['device_group'] = undefined;

/**
 * @member {Boolean} enable_caching_for_post
 */
ApplicationCacheResponseDetails.prototype['enable_caching_for_post'] = undefined;

/**
 * @member {Boolean} enable_caching_for_options
 */
ApplicationCacheResponseDetails.prototype['enable_caching_for_options'] = undefined;

/**
 * @member {Boolean} l2_caching_enabled
 */
ApplicationCacheResponseDetails.prototype['l2_caching_enabled'] = undefined;






export default ApplicationCacheResponseDetails;

