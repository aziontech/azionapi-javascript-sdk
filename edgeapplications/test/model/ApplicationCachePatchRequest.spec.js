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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EdgeApplication);
  }
}(this, function(expect, EdgeApplication) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EdgeApplication.ApplicationCachePatchRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ApplicationCachePatchRequest', function() {
    it('should create an instance of ApplicationCachePatchRequest', function() {
      // uncomment below and update the code to test ApplicationCachePatchRequest
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be.a(EdgeApplication.ApplicationCachePatchRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property browserCacheSettings (base name: "browser_cache_settings")', function() {
      // uncomment below and update the code to test the property browserCacheSettings
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property browserCacheSettingsMaximumTtl (base name: "browser_cache_settings_maximum_ttl")', function() {
      // uncomment below and update the code to test the property browserCacheSettingsMaximumTtl
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property cdnCacheSettings (base name: "cdn_cache_settings")', function() {
      // uncomment below and update the code to test the property cdnCacheSettings
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property adaptiveDeliveryAction (base name: "adaptive_delivery_action")', function() {
      // uncomment below and update the code to test the property adaptiveDeliveryAction
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property enableCachingForOptions (base name: "enable_caching_for_options")', function() {
      // uncomment below and update the code to test the property enableCachingForOptions
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property cdnCacheSettingsMaximumTtl (base name: "cdn_cache_settings_maximum_ttl")', function() {
      // uncomment below and update the code to test the property cdnCacheSettingsMaximumTtl
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property cacheByQueryString (base name: "cache_by_query_string")', function() {
      // uncomment below and update the code to test the property cacheByQueryString
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property queryStringFields (base name: "query_string_fields")', function() {
      // uncomment below and update the code to test the property queryStringFields
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property enableQueryStringSort (base name: "enable_query_string_sort")', function() {
      // uncomment below and update the code to test the property enableQueryStringSort
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property cacheByCookies (base name: "cache_by_cookies")', function() {
      // uncomment below and update the code to test the property cacheByCookies
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property cookieNames (base name: "cookie_names")', function() {
      // uncomment below and update the code to test the property cookieNames
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property enableCachingForPost (base name: "enable_caching_for_post")', function() {
      // uncomment below and update the code to test the property enableCachingForPost
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property l2CachingEnabled (base name: "l2_caching_enabled")', function() {
      // uncomment below and update the code to test the property l2CachingEnabled
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property isSliceConfigurationEnabled (base name: "is_slice_configuration_enabled")', function() {
      // uncomment below and update the code to test the property isSliceConfigurationEnabled
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property isSliceEdgeCachingEnabled (base name: "is_slice_edge_caching_enabled")', function() {
      // uncomment below and update the code to test the property isSliceEdgeCachingEnabled
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property isSliceL2CachingEnabled (base name: "is_slice_l2_caching_enabled")', function() {
      // uncomment below and update the code to test the property isSliceL2CachingEnabled
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property sliceConfigurationRange (base name: "slice_configuration_range")', function() {
      // uncomment below and update the code to test the property sliceConfigurationRange
      //var instance = new EdgeApplication.ApplicationCachePatchRequest();
      //expect(instance).to.be();
    });

  });

}));
