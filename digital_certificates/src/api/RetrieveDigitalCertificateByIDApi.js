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
import DC200 from '../model/DC200';
import DC400 from '../model/DC400';
import DC401 from '../model/DC401';
import DC403 from '../model/DC403';
import DC404 from '../model/DC404';
import DC406 from '../model/DC406';

/**
* RetrieveDigitalCertificateByID service.
* @module api/RetrieveDigitalCertificateByIDApi
* @version 2.0.0
*/
export default class RetrieveDigitalCertificateByIDApi {

    /**
    * Constructs a new RetrieveDigitalCertificateByIDApi. 
    * @alias module:api/RetrieveDigitalCertificateByIDApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCertificate operation.
     * @callback module:api/RetrieveDigitalCertificateByIDApi~getCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DC200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get more data on a specific digital certificate or CSR.
     * @param {Number} digitalCertificateId ID of certificate
     * @param {module:api/RetrieveDigitalCertificateByIDApi~getCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DC200}
     */
    getCertificate(digitalCertificateId, callback) {
      let postBody = null;
      // verify the required parameter 'digitalCertificateId' is set
      if (digitalCertificateId === undefined || digitalCertificateId === null) {
        throw new Error("Missing the required parameter 'digitalCertificateId' when calling getCertificate");
      }

      let pathParams = {
        'digital_certificate_id': digitalCertificateId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json; version=3'];
      let returnType = DC200;
      return this.apiClient.callApi(
        '/digital_certificates/{digital_certificate_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
