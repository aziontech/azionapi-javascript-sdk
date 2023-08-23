/**
 * Data Streaming - OpenAPI
 * The Data Streaming API allows you to manage your existing data streamings and templates. Data Streaming allows you to feed your stream processing, SIEM, and big data platforms with the event logs from your applications on Azion in real time. 
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
    factory(root.expect, root.DataStreamingOpenApi);
  }
}(this, function(expect, DataStreamingOpenApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DataStreamingOpenApi.PostCustomDataStreamingResponse();
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

  describe('PostCustomDataStreamingResponse', function() {
    it('should create an instance of PostCustomDataStreamingResponse', function() {
      // uncomment below and update the code to test PostCustomDataStreamingResponse
      //var instance = new DataStreamingOpenApi.PostCustomDataStreamingResponse();
      //expect(instance).to.be.a(DataStreamingOpenApi.PostCustomDataStreamingResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DataStreamingOpenApi.PostCustomDataStreamingResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DataStreamingOpenApi.PostCustomDataStreamingResponse();
      //expect(instance).to.be();
    });

    it('should have the property dataSource (base name: "data_source")', function() {
      // uncomment below and update the code to test the property dataSource
      //var instance = new DataStreamingOpenApi.PostCustomDataStreamingResponse();
      //expect(instance).to.be();
    });

    it('should have the property templateModel (base name: "template_model")', function() {
      // uncomment below and update the code to test the property templateModel
      //var instance = new DataStreamingOpenApi.PostCustomDataStreamingResponse();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new DataStreamingOpenApi.PostCustomDataStreamingResponse();
      //expect(instance).to.be();
    });

    it('should have the property endpoint (base name: "endpoint")', function() {
      // uncomment below and update the code to test the property endpoint
      //var instance = new DataStreamingOpenApi.PostCustomDataStreamingResponse();
      //expect(instance).to.be();
    });

    it('should have the property allDomains (base name: "all_domains")', function() {
      // uncomment below and update the code to test the property allDomains
      //var instance = new DataStreamingOpenApi.PostCustomDataStreamingResponse();
      //expect(instance).to.be();
    });

  });

}));
