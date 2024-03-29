/**
 * Edge Functions Instances API
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
    factory(root.expect, root.EdgeFunctionsInstancesApi);
  }
}(this, function(expect, EdgeFunctionsInstancesApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EdgeFunctionsInstancesApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('edgeFirewallEdgeFirewallIdFunctionsInstancesGet', function() {
      it('should call edgeFirewallEdgeFirewallIdFunctionsInstancesGet successfully', function(done) {
        //uncomment below and update the code to test edgeFirewallEdgeFirewallIdFunctionsInstancesGet
        //instance.edgeFirewallEdgeFirewallIdFunctionsInstancesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('edgeFirewallEdgeFirewallIdFunctionsInstancesPost', function() {
      it('should call edgeFirewallEdgeFirewallIdFunctionsInstancesPost successfully', function(done) {
        //uncomment below and update the code to test edgeFirewallEdgeFirewallIdFunctionsInstancesPost
        //instance.edgeFirewallEdgeFirewallIdFunctionsInstancesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('edgeFirewallEdgeFirewallIdFunctionsInstancesUuidDelete', function() {
      it('should call edgeFirewallEdgeFirewallIdFunctionsInstancesUuidDelete successfully', function(done) {
        //uncomment below and update the code to test edgeFirewallEdgeFirewallIdFunctionsInstancesUuidDelete
        //instance.edgeFirewallEdgeFirewallIdFunctionsInstancesUuidDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('edgeFirewallEdgeFirewallIdFunctionsInstancesUuidGet', function() {
      it('should call edgeFirewallEdgeFirewallIdFunctionsInstancesUuidGet successfully', function(done) {
        //uncomment below and update the code to test edgeFirewallEdgeFirewallIdFunctionsInstancesUuidGet
        //instance.edgeFirewallEdgeFirewallIdFunctionsInstancesUuidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPatch', function() {
      it('should call edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPatch successfully', function(done) {
        //uncomment below and update the code to test edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPatch
        //instance.edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPut', function() {
      it('should call edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPut successfully', function(done) {
        //uncomment below and update the code to test edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPut
        //instance.edgeFirewallEdgeFirewallIdFunctionsInstancesUuidPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
