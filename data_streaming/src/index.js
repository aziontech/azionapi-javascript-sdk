/**
 * Data Streaming - OpenAPI
 * The Data Streaming API allows you to manage your existing data streamings and templates. Data Streaming allows you to feed your stream processing, SIEM, and big data platforms with the event logs from your applications on Azion in real time. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import CreateCustomDataStreamingResponse from './model/CreateCustomDataStreamingResponse';
import CreateDataStreamingResponse from './model/CreateDataStreamingResponse';
import CreateNewDataStreaming201Response from './model/CreateNewDataStreaming201Response';
import CreateNewDataStreamingRequest from './model/CreateNewDataStreamingRequest';
import CustomDataStreamingPostBody from './model/CustomDataStreamingPostBody';
import DataStreamingEndpointTypeDatadogDTS from './model/DataStreamingEndpointTypeDatadogDTS';
import DataStreamingEndpointTypeKafka from './model/DataStreamingEndpointTypeKafka';
import DataStreamingEndpointTypeStandard from './model/DataStreamingEndpointTypeStandard';
import DataStreamingEndpointTypeStandardHeadersExample from './model/DataStreamingEndpointTypeStandardHeadersExample';
import DataStreamingPostBody from './model/DataStreamingPostBody';
import DataStreamingResponseGetResultTypeCustom from './model/DataStreamingResponseGetResultTypeCustom';
import DataStreamingResponseGetResultTypeDatadogDTS from './model/DataStreamingResponseGetResultTypeDatadogDTS';
import DataStreamingResponseGetResultTypeKafka from './model/DataStreamingResponseGetResultTypeKafka';
import DataStreamingResponseGetResultTypeStandard from './model/DataStreamingResponseGetResultTypeStandard';
import DataStreamingResponseWithResults from './model/DataStreamingResponseWithResults';
import DataStreamingResponseWithResultsResultsInner from './model/DataStreamingResponseWithResultsResultsInner';
import DataStreamingsById from './model/DataStreamingsById';
import DataStreamingsDomainResponse from './model/DataStreamingsDomainResponse';
import DataStreamingsDomainResponseLinks from './model/DataStreamingsDomainResponseLinks';
import DataStreamingsDomainResult from './model/DataStreamingsDomainResult';
import EndpoinrtS3 from './model/EndpoinrtS3';
import EndpointAWSKinesisFirehose from './model/EndpointAWSKinesisFirehose';
import EndpointAzureBlobStorage from './model/EndpointAzureBlobStorage';
import EndpointAzureMonitor from './model/EndpointAzureMonitor';
import EndpointDatadog from './model/EndpointDatadog';
import EndpointDefault from './model/EndpointDefault';
import EndpointElasticsearch from './model/EndpointElasticsearch';
import EndpointGoogleBigQuery from './model/EndpointGoogleBigQuery';
import EndpointGoogleBigQueryServiceAccountKey from './model/EndpointGoogleBigQueryServiceAccountKey';
import EndpointIBMQRadar from './model/EndpointIBMQRadar';
import EndpointKafka from './model/EndpointKafka';
import EndpointSplunk from './model/EndpointSplunk';
import PostCustomDataStreamingResponse from './model/PostCustomDataStreamingResponse';
import PostDataStreamingResponse from './model/PostDataStreamingResponse';
import PostDataStreamingResponseEndpointInner from './model/PostDataStreamingResponseEndpointInner';
import StandardDataStreamingPostBody from './model/StandardDataStreamingPostBody';
import Template from './model/Template';
import TemplateResultById from './model/TemplateResultById';
import TemplateResults from './model/TemplateResults';
import DataStreamingApi from './api/DataStreamingApi';
import DataStreamingDomainApi from './api/DataStreamingDomainApi';
import DataStreamingTemplatesApi from './api/DataStreamingTemplatesApi';


/**
* The Data Streaming API allows you to manage your existing data streamings and templates. Data Streaming allows you to feed your stream processing, SIEM, and big data platforms with the event logs from your applications on Azion in real time. .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DataStreamingOpenApi = require('index'); // See note below*.
* var xxxSvc = new DataStreamingOpenApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DataStreamingOpenApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DataStreamingOpenApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DataStreamingOpenApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CreateCustomDataStreamingResponse model constructor.
     * @property {module:model/CreateCustomDataStreamingResponse}
     */
    CreateCustomDataStreamingResponse,

    /**
     * The CreateDataStreamingResponse model constructor.
     * @property {module:model/CreateDataStreamingResponse}
     */
    CreateDataStreamingResponse,

    /**
     * The CreateNewDataStreaming201Response model constructor.
     * @property {module:model/CreateNewDataStreaming201Response}
     */
    CreateNewDataStreaming201Response,

    /**
     * The CreateNewDataStreamingRequest model constructor.
     * @property {module:model/CreateNewDataStreamingRequest}
     */
    CreateNewDataStreamingRequest,

    /**
     * The CustomDataStreamingPostBody model constructor.
     * @property {module:model/CustomDataStreamingPostBody}
     */
    CustomDataStreamingPostBody,

    /**
     * The DataStreamingEndpointTypeDatadogDTS model constructor.
     * @property {module:model/DataStreamingEndpointTypeDatadogDTS}
     */
    DataStreamingEndpointTypeDatadogDTS,

    /**
     * The DataStreamingEndpointTypeKafka model constructor.
     * @property {module:model/DataStreamingEndpointTypeKafka}
     */
    DataStreamingEndpointTypeKafka,

    /**
     * The DataStreamingEndpointTypeStandard model constructor.
     * @property {module:model/DataStreamingEndpointTypeStandard}
     */
    DataStreamingEndpointTypeStandard,

    /**
     * The DataStreamingEndpointTypeStandardHeadersExample model constructor.
     * @property {module:model/DataStreamingEndpointTypeStandardHeadersExample}
     */
    DataStreamingEndpointTypeStandardHeadersExample,

    /**
     * The DataStreamingPostBody model constructor.
     * @property {module:model/DataStreamingPostBody}
     */
    DataStreamingPostBody,

    /**
     * The DataStreamingResponseGetResultTypeCustom model constructor.
     * @property {module:model/DataStreamingResponseGetResultTypeCustom}
     */
    DataStreamingResponseGetResultTypeCustom,

    /**
     * The DataStreamingResponseGetResultTypeDatadogDTS model constructor.
     * @property {module:model/DataStreamingResponseGetResultTypeDatadogDTS}
     */
    DataStreamingResponseGetResultTypeDatadogDTS,

    /**
     * The DataStreamingResponseGetResultTypeKafka model constructor.
     * @property {module:model/DataStreamingResponseGetResultTypeKafka}
     */
    DataStreamingResponseGetResultTypeKafka,

    /**
     * The DataStreamingResponseGetResultTypeStandard model constructor.
     * @property {module:model/DataStreamingResponseGetResultTypeStandard}
     */
    DataStreamingResponseGetResultTypeStandard,

    /**
     * The DataStreamingResponseWithResults model constructor.
     * @property {module:model/DataStreamingResponseWithResults}
     */
    DataStreamingResponseWithResults,

    /**
     * The DataStreamingResponseWithResultsResultsInner model constructor.
     * @property {module:model/DataStreamingResponseWithResultsResultsInner}
     */
    DataStreamingResponseWithResultsResultsInner,

    /**
     * The DataStreamingsById model constructor.
     * @property {module:model/DataStreamingsById}
     */
    DataStreamingsById,

    /**
     * The DataStreamingsDomainResponse model constructor.
     * @property {module:model/DataStreamingsDomainResponse}
     */
    DataStreamingsDomainResponse,

    /**
     * The DataStreamingsDomainResponseLinks model constructor.
     * @property {module:model/DataStreamingsDomainResponseLinks}
     */
    DataStreamingsDomainResponseLinks,

    /**
     * The DataStreamingsDomainResult model constructor.
     * @property {module:model/DataStreamingsDomainResult}
     */
    DataStreamingsDomainResult,

    /**
     * The EndpoinrtS3 model constructor.
     * @property {module:model/EndpoinrtS3}
     */
    EndpoinrtS3,

    /**
     * The EndpointAWSKinesisFirehose model constructor.
     * @property {module:model/EndpointAWSKinesisFirehose}
     */
    EndpointAWSKinesisFirehose,

    /**
     * The EndpointAzureBlobStorage model constructor.
     * @property {module:model/EndpointAzureBlobStorage}
     */
    EndpointAzureBlobStorage,

    /**
     * The EndpointAzureMonitor model constructor.
     * @property {module:model/EndpointAzureMonitor}
     */
    EndpointAzureMonitor,

    /**
     * The EndpointDatadog model constructor.
     * @property {module:model/EndpointDatadog}
     */
    EndpointDatadog,

    /**
     * The EndpointDefault model constructor.
     * @property {module:model/EndpointDefault}
     */
    EndpointDefault,

    /**
     * The EndpointElasticsearch model constructor.
     * @property {module:model/EndpointElasticsearch}
     */
    EndpointElasticsearch,

    /**
     * The EndpointGoogleBigQuery model constructor.
     * @property {module:model/EndpointGoogleBigQuery}
     */
    EndpointGoogleBigQuery,

    /**
     * The EndpointGoogleBigQueryServiceAccountKey model constructor.
     * @property {module:model/EndpointGoogleBigQueryServiceAccountKey}
     */
    EndpointGoogleBigQueryServiceAccountKey,

    /**
     * The EndpointIBMQRadar model constructor.
     * @property {module:model/EndpointIBMQRadar}
     */
    EndpointIBMQRadar,

    /**
     * The EndpointKafka model constructor.
     * @property {module:model/EndpointKafka}
     */
    EndpointKafka,

    /**
     * The EndpointSplunk model constructor.
     * @property {module:model/EndpointSplunk}
     */
    EndpointSplunk,

    /**
     * The PostCustomDataStreamingResponse model constructor.
     * @property {module:model/PostCustomDataStreamingResponse}
     */
    PostCustomDataStreamingResponse,

    /**
     * The PostDataStreamingResponse model constructor.
     * @property {module:model/PostDataStreamingResponse}
     */
    PostDataStreamingResponse,

    /**
     * The PostDataStreamingResponseEndpointInner model constructor.
     * @property {module:model/PostDataStreamingResponseEndpointInner}
     */
    PostDataStreamingResponseEndpointInner,

    /**
     * The StandardDataStreamingPostBody model constructor.
     * @property {module:model/StandardDataStreamingPostBody}
     */
    StandardDataStreamingPostBody,

    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template,

    /**
     * The TemplateResultById model constructor.
     * @property {module:model/TemplateResultById}
     */
    TemplateResultById,

    /**
     * The TemplateResults model constructor.
     * @property {module:model/TemplateResults}
     */
    TemplateResults,

    /**
    * The DataStreamingApi service constructor.
    * @property {module:api/DataStreamingApi}
    */
    DataStreamingApi,

    /**
    * The DataStreamingDomainApi service constructor.
    * @property {module:api/DataStreamingDomainApi}
    */
    DataStreamingDomainApi,

    /**
    * The DataStreamingTemplatesApi service constructor.
    * @property {module:api/DataStreamingTemplatesApi}
    */
    DataStreamingTemplatesApi
};
