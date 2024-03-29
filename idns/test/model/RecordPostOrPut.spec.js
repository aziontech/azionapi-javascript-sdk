/**
 * Intelligent DNS
 * Azion Intelligent DNS API
 *
 * The version of the OpenAPI document: 3.0.0
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
    factory(root.expect, root.IntelligentDns);
  }
}(this, function(expect, IntelligentDns) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IntelligentDns.RecordPostOrPut();
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

  describe('RecordPostOrPut', function() {
    it('should create an instance of RecordPostOrPut', function() {
      // uncomment below and update the code to test RecordPostOrPut
      //var instance = new IntelligentDns.RecordPostOrPut();
      //expect(instance).to.be.a(IntelligentDns.RecordPostOrPut);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new IntelligentDns.RecordPostOrPut();
      //expect(instance).to.be();
    });

    it('should have the property entry (base name: "entry")', function() {
      // uncomment below and update the code to test the property entry
      //var instance = new IntelligentDns.RecordPostOrPut();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new IntelligentDns.RecordPostOrPut();
      //expect(instance).to.be();
    });

    it('should have the property answersList (base name: "answers_list")', function() {
      // uncomment below and update the code to test the property answersList
      //var instance = new IntelligentDns.RecordPostOrPut();
      //expect(instance).to.be();
    });

    it('should have the property policy (base name: "policy")', function() {
      // uncomment below and update the code to test the property policy
      //var instance = new IntelligentDns.RecordPostOrPut();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new IntelligentDns.RecordPostOrPut();
      //expect(instance).to.be();
    });

    it('should have the property recordType (base name: "record_type")', function() {
      // uncomment below and update the code to test the property recordType
      //var instance = new IntelligentDns.RecordPostOrPut();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instance = new IntelligentDns.RecordPostOrPut();
      //expect(instance).to.be();
    });

  });

}));
