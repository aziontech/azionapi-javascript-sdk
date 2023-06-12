/**
 * Services API
 * Azion Services
 *
 * The version of the OpenAPI document: 2.0.0
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
    factory(root.expect, root.ServicesApi);
  }
}(this, function(expect, ServicesApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ServicesApi.UpdateServiceRequest();
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

  describe('UpdateServiceRequest', function() {
    it('should create an instance of UpdateServiceRequest', function() {
      // uncomment below and update the code to test UpdateServiceRequest
      //var instance = new ServicesApi.UpdateServiceRequest();
      //expect(instance).to.be.a(ServicesApi.UpdateServiceRequest);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new ServicesApi.UpdateServiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ServicesApi.UpdateServiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property variables (base name: "variables")', function() {
      // uncomment below and update the code to test the property variables
      //var instance = new ServicesApi.UpdateServiceRequest();
      //expect(instance).to.be();
    });

  });

}));