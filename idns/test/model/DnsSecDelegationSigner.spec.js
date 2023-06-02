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
    instance = new IntelligentDns.DnsSecDelegationSigner();
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

  describe('DnsSecDelegationSigner', function() {
    it('should create an instance of DnsSecDelegationSigner', function() {
      // uncomment below and update the code to test DnsSecDelegationSigner
      //var instance = new IntelligentDns.DnsSecDelegationSigner();
      //expect(instance).to.be.a(IntelligentDns.DnsSecDelegationSigner);
    });

    it('should have the property digestType (base name: "digest_type")', function() {
      // uncomment below and update the code to test the property digestType
      //var instance = new IntelligentDns.DnsSecDelegationSigner();
      //expect(instance).to.be();
    });

    it('should have the property algorithmType (base name: "algorithm_type")', function() {
      // uncomment below and update the code to test the property algorithmType
      //var instance = new IntelligentDns.DnsSecDelegationSigner();
      //expect(instance).to.be();
    });

    it('should have the property digest (base name: "digest")', function() {
      // uncomment below and update the code to test the property digest
      //var instance = new IntelligentDns.DnsSecDelegationSigner();
      //expect(instance).to.be();
    });

    it('should have the property keyTag (base name: "key_tag")', function() {
      // uncomment below and update the code to test the property keyTag
      //var instance = new IntelligentDns.DnsSecDelegationSigner();
      //expect(instance).to.be();
    });

  });

}));
