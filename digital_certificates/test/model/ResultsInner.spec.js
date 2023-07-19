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
    instance = new DigitalCertificatesApi.ResultsInner();
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

  describe('ResultsInner', function() {
    it('should create an instance of ResultsInner', function() {
      // uncomment below and update the code to test ResultsInner
      //var instance = new DigitalCertificatesApi.ResultsInner();
      //expect(instance).to.be.a(DigitalCertificatesApi.ResultsInner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DigitalCertificatesApi.ResultsInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DigitalCertificatesApi.ResultsInner();
      //expect(instance).to.be();
    });

    it('should have the property subjectName (base name: "subject_name")', function() {
      // uncomment below and update the code to test the property subjectName
      //var instance = new DigitalCertificatesApi.ResultsInner();
      //expect(instance).to.be();
    });

    it('should have the property validity (base name: "validity")', function() {
      // uncomment below and update the code to test the property validity
      //var instance = new DigitalCertificatesApi.ResultsInner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new DigitalCertificatesApi.ResultsInner();
      //expect(instance).to.be();
    });

    it('should have the property certificateType (base name: "certificate_type")', function() {
      // uncomment below and update the code to test the property certificateType
      //var instance = new DigitalCertificatesApi.ResultsInner();
      //expect(instance).to.be();
    });

    it('should have the property managed (base name: "managed")', function() {
      // uncomment below and update the code to test the property managed
      //var instance = new DigitalCertificatesApi.ResultsInner();
      //expect(instance).to.be();
    });

  });

}));
