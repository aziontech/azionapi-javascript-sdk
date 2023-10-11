/**
 * Web Application Firewall API
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
    factory(root.expect, root.WebApplicationFirewallApi);
  }
}(this, function(expect, WebApplicationFirewallApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WebApplicationFirewallApi.WAFDomainList200();
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

  describe('WAFDomainList200', function() {
    it('should create an instance of WAFDomainList200', function() {
      // uncomment below and update the code to test WAFDomainList200
      //var instance = new WebApplicationFirewallApi.WAFDomainList200();
      //expect(instance).to.be.a(WebApplicationFirewallApi.WAFDomainList200);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WebApplicationFirewallApi.WAFDomainList200();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new WebApplicationFirewallApi.WAFDomainList200();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instance = new WebApplicationFirewallApi.WAFDomainList200();
      //expect(instance).to.be();
    });

    it('should have the property cnames (base name: "cnames")', function() {
      // uncomment below and update the code to test the property cnames
      //var instance = new WebApplicationFirewallApi.WAFDomainList200();
      //expect(instance).to.be();
    });

  });

}));
