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
import Interface from './Interface';

/**
 * The ApplicationUpdateResults model module.
 * @module model/ApplicationUpdateResults
 * @version 1.0.0
 */
class ApplicationUpdateResults {
    /**
     * Constructs a new <code>ApplicationUpdateResults</code>.
     * @alias module:model/ApplicationUpdateResults
     * @param id {Number} 
     * @param name {String} 
     * @param deliveryProtocol {String} 
     * @param httpPort {module:model/Interface} 
     * @param httpsPort {module:model/Interface} 
     * @param minimumTlsVersion {String} 
     * @param active {Boolean} 
     * @param applicationAcceleration {Boolean} 
     * @param caching {Boolean} 
     * @param deviceDetection {Boolean} 
     * @param edgeFirewall {Boolean} 
     * @param edgeFunctions {Boolean} 
     * @param imageOptimization {Boolean} 
     * @param l2Caching {Boolean} 
     * @param loadBalancer {Boolean} 
     * @param rawLogs {Boolean} 
     * @param webApplicationFirewall {Boolean} 
     */
    constructor(id, name, deliveryProtocol, httpPort, httpsPort, minimumTlsVersion, active, applicationAcceleration, caching, deviceDetection, edgeFirewall, edgeFunctions, imageOptimization, l2Caching, loadBalancer, rawLogs, webApplicationFirewall) { 
        
        ApplicationUpdateResults.initialize(this, id, name, deliveryProtocol, httpPort, httpsPort, minimumTlsVersion, active, applicationAcceleration, caching, deviceDetection, edgeFirewall, edgeFunctions, imageOptimization, l2Caching, loadBalancer, rawLogs, webApplicationFirewall);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, deliveryProtocol, httpPort, httpsPort, minimumTlsVersion, active, applicationAcceleration, caching, deviceDetection, edgeFirewall, edgeFunctions, imageOptimization, l2Caching, loadBalancer, rawLogs, webApplicationFirewall) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['delivery_protocol'] = deliveryProtocol;
        obj['http_port'] = httpPort;
        obj['https_port'] = httpsPort;
        obj['minimum_tls_version'] = minimumTlsVersion;
        obj['active'] = active;
        obj['application_acceleration'] = applicationAcceleration;
        obj['caching'] = caching;
        obj['device_detection'] = deviceDetection;
        obj['edge_firewall'] = edgeFirewall;
        obj['edge_functions'] = edgeFunctions;
        obj['image_optimization'] = imageOptimization;
        obj['l2_caching'] = l2Caching;
        obj['load_balancer'] = loadBalancer;
        obj['raw_logs'] = rawLogs;
        obj['web_application_firewall'] = webApplicationFirewall;
    }

    /**
     * Constructs a <code>ApplicationUpdateResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationUpdateResults} obj Optional instance to populate.
     * @return {module:model/ApplicationUpdateResults} The populated <code>ApplicationUpdateResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationUpdateResults();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('delivery_protocol')) {
                obj['delivery_protocol'] = ApiClient.convertToType(data['delivery_protocol'], 'String');
            }
            if (data.hasOwnProperty('http_port')) {
                obj['http_port'] = ApiClient.convertToType(data['http_port'], Interface);
            }
            if (data.hasOwnProperty('https_port')) {
                obj['https_port'] = ApiClient.convertToType(data['https_port'], Interface);
            }
            if (data.hasOwnProperty('minimum_tls_version')) {
                obj['minimum_tls_version'] = ApiClient.convertToType(data['minimum_tls_version'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('application_acceleration')) {
                obj['application_acceleration'] = ApiClient.convertToType(data['application_acceleration'], 'Boolean');
            }
            if (data.hasOwnProperty('caching')) {
                obj['caching'] = ApiClient.convertToType(data['caching'], 'Boolean');
            }
            if (data.hasOwnProperty('device_detection')) {
                obj['device_detection'] = ApiClient.convertToType(data['device_detection'], 'Boolean');
            }
            if (data.hasOwnProperty('edge_firewall')) {
                obj['edge_firewall'] = ApiClient.convertToType(data['edge_firewall'], 'Boolean');
            }
            if (data.hasOwnProperty('edge_functions')) {
                obj['edge_functions'] = ApiClient.convertToType(data['edge_functions'], 'Boolean');
            }
            if (data.hasOwnProperty('image_optimization')) {
                obj['image_optimization'] = ApiClient.convertToType(data['image_optimization'], 'Boolean');
            }
            if (data.hasOwnProperty('l2_caching')) {
                obj['l2_caching'] = ApiClient.convertToType(data['l2_caching'], 'Boolean');
            }
            if (data.hasOwnProperty('load_balancer')) {
                obj['load_balancer'] = ApiClient.convertToType(data['load_balancer'], 'Boolean');
            }
            if (data.hasOwnProperty('raw_logs')) {
                obj['raw_logs'] = ApiClient.convertToType(data['raw_logs'], 'Boolean');
            }
            if (data.hasOwnProperty('web_application_firewall')) {
                obj['web_application_firewall'] = ApiClient.convertToType(data['web_application_firewall'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationUpdateResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationUpdateResults</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApplicationUpdateResults.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['delivery_protocol'] && !(typeof data['delivery_protocol'] === 'string' || data['delivery_protocol'] instanceof String)) {
            throw new Error("Expected the field `delivery_protocol` to be a primitive type in the JSON string but got " + data['delivery_protocol']);
        }
        // ensure the json data is a string
        if (data['minimum_tls_version'] && !(typeof data['minimum_tls_version'] === 'string' || data['minimum_tls_version'] instanceof String)) {
            throw new Error("Expected the field `minimum_tls_version` to be a primitive type in the JSON string but got " + data['minimum_tls_version']);
        }

        return true;
    }


}

ApplicationUpdateResults.RequiredProperties = ["id", "name", "delivery_protocol", "http_port", "https_port", "minimum_tls_version", "active", "application_acceleration", "caching", "device_detection", "edge_firewall", "edge_functions", "image_optimization", "l2_caching", "load_balancer", "raw_logs", "web_application_firewall"];

/**
 * @member {Number} id
 */
ApplicationUpdateResults.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ApplicationUpdateResults.prototype['name'] = undefined;

/**
 * @member {String} delivery_protocol
 */
ApplicationUpdateResults.prototype['delivery_protocol'] = undefined;

/**
 * @member {module:model/Interface} http_port
 */
ApplicationUpdateResults.prototype['http_port'] = undefined;

/**
 * @member {module:model/Interface} https_port
 */
ApplicationUpdateResults.prototype['https_port'] = undefined;

/**
 * @member {String} minimum_tls_version
 */
ApplicationUpdateResults.prototype['minimum_tls_version'] = undefined;

/**
 * @member {Boolean} active
 */
ApplicationUpdateResults.prototype['active'] = undefined;

/**
 * @member {Boolean} application_acceleration
 */
ApplicationUpdateResults.prototype['application_acceleration'] = undefined;

/**
 * @member {Boolean} caching
 */
ApplicationUpdateResults.prototype['caching'] = undefined;

/**
 * @member {Boolean} device_detection
 */
ApplicationUpdateResults.prototype['device_detection'] = undefined;

/**
 * @member {Boolean} edge_firewall
 */
ApplicationUpdateResults.prototype['edge_firewall'] = undefined;

/**
 * @member {Boolean} edge_functions
 */
ApplicationUpdateResults.prototype['edge_functions'] = undefined;

/**
 * @member {Boolean} image_optimization
 */
ApplicationUpdateResults.prototype['image_optimization'] = undefined;

/**
 * @member {Boolean} l2_caching
 */
ApplicationUpdateResults.prototype['l2_caching'] = undefined;

/**
 * @member {Boolean} load_balancer
 */
ApplicationUpdateResults.prototype['load_balancer'] = undefined;

/**
 * @member {Boolean} raw_logs
 */
ApplicationUpdateResults.prototype['raw_logs'] = undefined;

/**
 * @member {Boolean} web_application_firewall
 */
ApplicationUpdateResults.prototype['web_application_firewall'] = undefined;






export default ApplicationUpdateResults;

