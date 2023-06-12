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
    instance = new IntelligentDns.ZonesApi();
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

  describe('ZonesApi', function() {
    describe('deleteZone', function() {
      it('should call deleteZone successfully', function(done) {
        //uncomment below and update the code to test deleteZone
        //instance.deleteZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZone', function() {
      it('should call getZone successfully', function(done) {
        //uncomment below and update the code to test getZone
        //instance.getZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZones', function() {
      it('should call getZones successfully', function(done) {
        //uncomment below and update the code to test getZones
        //instance.getZones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postZone', function() {
      it('should call postZone successfully', function(done) {
        //uncomment below and update the code to test postZone
        //instance.postZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putZone', function() {
      it('should call putZone successfully', function(done) {
        //uncomment below and update the code to test putZone
        //instance.putZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));