/**
 * Edge Firewall API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
    factory(root.expect, root.EdgeFirewallApi);
  }
}(this, function(expect, EdgeFirewallApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EdgeFirewallApi.SSLVerificationStatusCriteria();
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

  describe('SSLVerificationStatusCriteria', function() {
    it('should create an instance of SSLVerificationStatusCriteria', function() {
      // uncomment below and update the code to test SSLVerificationStatusCriteria
      //var instance = new EdgeFirewallApi.SSLVerificationStatusCriteria();
      //expect(instance).to.be.a(EdgeFirewallApi.SSLVerificationStatusCriteria);
    });

    it('should have the property variable (base name: "variable")', function() {
      // uncomment below and update the code to test the property variable
      //var instance = new EdgeFirewallApi.SSLVerificationStatusCriteria();
      //expect(instance).to.be();
    });

    it('should have the property operator (base name: "operator")', function() {
      // uncomment below and update the code to test the property operator
      //var instance = new EdgeFirewallApi.SSLVerificationStatusCriteria();
      //expect(instance).to.be();
    });

    it('should have the property conditional (base name: "conditional")', function() {
      // uncomment below and update the code to test the property conditional
      //var instance = new EdgeFirewallApi.SSLVerificationStatusCriteria();
      //expect(instance).to.be();
    });

    it('should have the property inputValue (base name: "input_value")', function() {
      // uncomment below and update the code to test the property inputValue
      //var instance = new EdgeFirewallApi.SSLVerificationStatusCriteria();
      //expect(instance).to.be();
    });

  });

}));
