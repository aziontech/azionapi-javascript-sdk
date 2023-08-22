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
    instance = new DataStreamingOpenApi.DataStreamingsDomainResponseLinks();
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

  describe('DataStreamingsDomainResponseLinks', function() {
    it('should create an instance of DataStreamingsDomainResponseLinks', function() {
      // uncomment below and update the code to test DataStreamingsDomainResponseLinks
      //var instance = new DataStreamingOpenApi.DataStreamingsDomainResponseLinks();
      //expect(instance).to.be.a(DataStreamingOpenApi.DataStreamingsDomainResponseLinks);
    });

    it('should have the property previous (base name: "previous")', function() {
      // uncomment below and update the code to test the property previous
      //var instance = new DataStreamingOpenApi.DataStreamingsDomainResponseLinks();
      //expect(instance).to.be();
    });

    it('should have the property next (base name: "next")', function() {
      // uncomment below and update the code to test the property next
      //var instance = new DataStreamingOpenApi.DataStreamingsDomainResponseLinks();
      //expect(instance).to.be();
    });

  });

}));
