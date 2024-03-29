/**
 * Object Storage
 * REST API OpenAPI documentation for the Object Storage
 *
 * The version of the OpenAPI document: 1.0.0 (v1)
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
    factory(root.expect, root.ObjectStorage);
  }
}(this, function(expect, ObjectStorage) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ObjectStorage.BucketObject();
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

  describe('BucketObject', function() {
    it('should create an instance of BucketObject', function() {
      // uncomment below and update the code to test BucketObject
      //var instance = new ObjectStorage.BucketObject();
      //expect(instance).to.be.a(ObjectStorage.BucketObject);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new ObjectStorage.BucketObject();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new ObjectStorage.BucketObject();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new ObjectStorage.BucketObject();
      //expect(instance).to.be();
    });

    it('should have the property etag (base name: "etag")', function() {
      // uncomment below and update the code to test the property etag
      //var instance = new ObjectStorage.BucketObject();
      //expect(instance).to.be();
    });

  });

}));
