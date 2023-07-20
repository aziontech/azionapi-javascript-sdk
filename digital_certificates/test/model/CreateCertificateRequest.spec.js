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
    instance = new DigitalCertificatesApi.CreateCertificateRequest();
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

  describe('CreateCertificateRequest', function() {
    it('should create an instance of CreateCertificateRequest', function() {
      // uncomment below and update the code to test CreateCertificateRequest
      //var instance = new DigitalCertificatesApi.CreateCertificateRequest();
      //expect(instance).to.be.a(DigitalCertificatesApi.CreateCertificateRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DigitalCertificatesApi.CreateCertificateRequest();
      //expect(instance).to.be();
    });

    it('should have the property certificate (base name: "certificate")', function() {
      // uncomment below and update the code to test the property certificate
      //var instance = new DigitalCertificatesApi.CreateCertificateRequest();
      //expect(instance).to.be();
    });

    it('should have the property privateKey (base name: "private_key")', function() {
      // uncomment below and update the code to test the property privateKey
      //var instance = new DigitalCertificatesApi.CreateCertificateRequest();
      //expect(instance).to.be();
    });

    it('should have the property certificateType (base name: "certificate_type")', function() {
      // uncomment below and update the code to test the property certificateType
      //var instance = new DigitalCertificatesApi.CreateCertificateRequest();
      //expect(instance).to.be();
    });

    it('should have the property managed (base name: "managed")', function() {
      // uncomment below and update the code to test the property managed
      //var instance = new DigitalCertificatesApi.CreateCertificateRequest();
      //expect(instance).to.be();
    });

  });

}));
