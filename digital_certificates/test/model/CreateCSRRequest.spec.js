/**
 * Digital Certificates API
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
    factory(root.expect, root.DigitalCertificatesApi);
  }
}(this, function(expect, DigitalCertificatesApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DigitalCertificatesApi.CreateCSRRequest();
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

  describe('CreateCSRRequest', function() {
    it('should create an instance of CreateCSRRequest', function() {
      // uncomment below and update the code to test CreateCSRRequest
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be.a(DigitalCertificatesApi.CreateCSRRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

    it('should have the property commonName (base name: "common_name")', function() {
      // uncomment below and update the code to test the property commonName
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

    it('should have the property locality (base name: "locality")', function() {
      // uncomment below and update the code to test the property locality
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

    it('should have the property organizationUnity (base name: "organization_unity")', function() {
      // uncomment below and update the code to test the property organizationUnity
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

    it('should have the property privateKeyType (base name: "private_key_type")', function() {
      // uncomment below and update the code to test the property privateKeyType
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

    it('should have the property sans (base name: "sans")', function() {
      // uncomment below and update the code to test the property sans
      //var instance = new DigitalCertificatesApi.CreateCSRRequest();
      //expect(instance).to.be();
    });

  });

}));