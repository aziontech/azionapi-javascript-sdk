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
import DC403 from '../model/DC403';
import DC404 from '../model/DC404';
import UpdateDigitalCertificateRequest from '../model/UpdateDigitalCertificateRequest';

/**
* UpdateDigitalCertificate service.
* @module api/UpdateDigitalCertificateApi
* @version 2.0.0
*/
export default class UpdateDigitalCertificateApi {

    /**
    * Constructs a new UpdateDigitalCertificateApi. 
    * @alias module:api/UpdateDigitalCertificateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the updateDigitalCertificate operation.
     * @callback module:api/UpdateDigitalCertificateApi~updateDigitalCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DC200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change only select settings of your digital certificate or CSR.
     * @param {Number} digitalCertificateId ID of certificate to update
     * @param {module:model/UpdateDigitalCertificateRequest} updateDigitalCertificateRequest 
     * @param {module:api/UpdateDigitalCertificateApi~updateDigitalCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DC200}
     */
    updateDigitalCertificate(digitalCertificateId, updateDigitalCertificateRequest, callback) {
      let postBody = updateDigitalCertificateRequest;
      // verify the required parameter 'digitalCertificateId' is set
      if (digitalCertificateId === undefined || digitalCertificateId === null) {
        throw new Error("Missing the required parameter 'digitalCertificateId' when calling updateDigitalCertificate");
      }
      // verify the required parameter 'updateDigitalCertificateRequest' is set
      if (updateDigitalCertificateRequest === undefined || updateDigitalCertificateRequest === null) {
        throw new Error("Missing the required parameter 'updateDigitalCertificateRequest' when calling updateDigitalCertificate");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json; version=3'];
      let returnType = DC200;
      return this.apiClient.callApi(
        '/digital_certificates/{digital_certificate_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
