/**
 * Personal Tokens - OpenAPI
 * The Personal Tokens API allows you to manage your existing personal tokens. 
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
    factory(root.expect, root.PersonalTokensOpenApi);
  }
}(this, function(expect, PersonalTokensOpenApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PersonalTokensOpenApi.PersonalTokenResponseGet();
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

  describe('PersonalTokenResponseGet', function() {
    it('should create an instance of PersonalTokenResponseGet', function() {
      // uncomment below and update the code to test PersonalTokenResponseGet
      //var instance = new PersonalTokensOpenApi.PersonalTokenResponseGet();
      //expect(instance).to.be.a(PersonalTokensOpenApi.PersonalTokenResponseGet);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new PersonalTokensOpenApi.PersonalTokenResponseGet();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PersonalTokensOpenApi.PersonalTokenResponseGet();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new PersonalTokensOpenApi.PersonalTokenResponseGet();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new PersonalTokensOpenApi.PersonalTokenResponseGet();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PersonalTokensOpenApi.PersonalTokenResponseGet();
      //expect(instance).to.be();
    });

  });

}));
