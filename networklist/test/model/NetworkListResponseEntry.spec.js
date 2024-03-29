/**
 * Network Lists API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
    factory(root.expect, root.NetworkListsApi);
  }
}(this, function(expect, NetworkListsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetworkListsApi.NetworkListResponseEntry();
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

  describe('NetworkListResponseEntry', function() {
    it('should create an instance of NetworkListResponseEntry', function() {
      // uncomment below and update the code to test NetworkListResponseEntry
      //var instance = new NetworkListsApi.NetworkListResponseEntry();
      //expect(instance).to.be.a(NetworkListsApi.NetworkListResponseEntry);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NetworkListsApi.NetworkListResponseEntry();
      //expect(instance).to.be();
    });

    it('should have the property lastEditor (base name: "last_editor")', function() {
      // uncomment below and update the code to test the property lastEditor
      //var instance = new NetworkListsApi.NetworkListResponseEntry();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new NetworkListsApi.NetworkListResponseEntry();
      //expect(instance).to.be();
    });

    it('should have the property listType (base name: "list_type")', function() {
      // uncomment below and update the code to test the property listType
      //var instance = new NetworkListsApi.NetworkListResponseEntry();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new NetworkListsApi.NetworkListResponseEntry();
      //expect(instance).to.be();
    });

    it('should have the property itemsValues (base name: "items_values")', function() {
      // uncomment below and update the code to test the property itemsValues
      //var instance = new NetworkListsApi.NetworkListResponseEntry();
      //expect(instance).to.be();
    });

  });

}));
