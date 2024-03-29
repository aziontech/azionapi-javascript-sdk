/**
 * Edgenode API
 * Azion Orchestration
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
    factory(root.expect, root.EdgenodeApi);
  }
}(this, function(expect, EdgenodeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EdgenodeApi.EdgeNodeResponse();
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

  describe('EdgeNodeResponse', function() {
    it('should create an instance of EdgeNodeResponse', function() {
      // uncomment below and update the code to test EdgeNodeResponse
      //var instance = new EdgenodeApi.EdgeNodeResponse();
      //expect(instance).to.be.a(EdgenodeApi.EdgeNodeResponse);
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new EdgenodeApi.EdgeNodeResponse();
      //expect(instance).to.be();
    });

    it('should have the property hashId (base name: "hash_id")', function() {
      // uncomment below and update the code to test the property hashId
      //var instance = new EdgenodeApi.EdgeNodeResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new EdgenodeApi.EdgeNodeResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new EdgenodeApi.EdgeNodeResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new EdgenodeApi.EdgeNodeResponse();
      //expect(instance).to.be();
    });

  });

}));
