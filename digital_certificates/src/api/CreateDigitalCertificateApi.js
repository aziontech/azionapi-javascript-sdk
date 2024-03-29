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


import ApiClient from "../ApiClient";
import CreateCertificateRequest from '../model/CreateCertificateRequest';
import DC200 from '../model/DC200';
import DC400 from '../model/DC400';
import DC403 from '../model/DC403';

/**
* CreateDigitalCertificate service.
* @module api/CreateDigitalCertificateApi
* @version 2.0.0
*/
export default class CreateDigitalCertificateApi {

    /**
    * Constructs a new CreateDigitalCertificateApi. 
    * @alias module:api/CreateDigitalCertificateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCertificate operation.
     * @callback module:api/CreateDigitalCertificateApi~createCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DC200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new digital certificate
     * @param {module:model/CreateCertificateRequest} createCertificateRequest 
     * @param {module:api/CreateDigitalCertificateApi~createCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DC200}
     */
    createCertificate(createCertificateRequest, callback) {
      let postBody = createCertificateRequest;
      // verify the required parameter 'createCertificateRequest' is set
      if (createCertificateRequest === undefined || createCertificateRequest === null) {
        throw new Error("Missing the required parameter 'createCertificateRequest' when calling createCertificate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json; version=3'];
      let returnType = DC200;
      return this.apiClient.callApi(
        '/digital_certificates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
