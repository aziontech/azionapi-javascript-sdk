/**
 * Edge Function
 * Azion Edge Function API
 *
 * The version of the OpenAPI document: 3.0
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
    factory(root.expect, root.EdgeFunction);
  }
}(this, function(expect, EdgeFunction) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EdgeFunction.Results();
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

  describe('Results', function() {
    it('should create an instance of Results', function() {
      // uncomment below and update the code to test Results
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be.a(EdgeFunction.Results);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property jsonArgs (base name: "json_args")', function() {
      // uncomment below and update the code to test the property jsonArgs
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property functionToRun (base name: "function_to_run")', function() {
      // uncomment below and update the code to test the property functionToRun
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property initiatorType (base name: "initiator_type")', function() {
      // uncomment below and update the code to test the property initiatorType
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property lastEditor (base name: "last_editor")', function() {
      // uncomment below and update the code to test the property lastEditor
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

    it('should have the property referenceCount (base name: "reference_count")', function() {
      // uncomment below and update the code to test the property referenceCount
      //var instance = new EdgeFunction.Results();
      //expect(instance).to.be();
    });

  });

}));