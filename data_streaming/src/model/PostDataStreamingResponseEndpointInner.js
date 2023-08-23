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

import ApiClient from '../ApiClient';
import EndpoinrtS3 from './EndpoinrtS3';
import EndpointAWSKinesisFirehose from './EndpointAWSKinesisFirehose';
import EndpointAzureBlobStorage from './EndpointAzureBlobStorage';
import EndpointAzureMonitor from './EndpointAzureMonitor';
import EndpointDatadog from './EndpointDatadog';
import EndpointDefault from './EndpointDefault';
import EndpointElasticsearch from './EndpointElasticsearch';
import EndpointGoogleBigQuery from './EndpointGoogleBigQuery';
import EndpointGoogleBigQueryServiceAccountKey from './EndpointGoogleBigQueryServiceAccountKey';
import EndpointIBMQRadar from './EndpointIBMQRadar';
import EndpointKafka from './EndpointKafka';
import EndpointSplunk from './EndpointSplunk';

/**
 * The PostDataStreamingResponseEndpointInner model module.
 * @module model/PostDataStreamingResponseEndpointInner
 * @version 1.0.0
 */
class PostDataStreamingResponseEndpointInner {
    /**
     * Constructs a new <code>PostDataStreamingResponseEndpointInner</code>.
     * @alias module:model/PostDataStreamingResponseEndpointInner
     * @param {(module:model/EndpoinrtS3|module:model/EndpointAWSKinesisFirehose|module:model/EndpointAzureBlobStorage|module:model/EndpointAzureMonitor|module:model/EndpointDatadog|module:model/EndpointDefault|module:model/EndpointElasticsearch|module:model/EndpointGoogleBigQuery|module:model/EndpointIBMQRadar|module:model/EndpointKafka|module:model/EndpointSplunk)} instance The actual instance to initialize PostDataStreamingResponseEndpointInner.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "EndpointDefault") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointDefault.validateJSON(instance); // throw an exception if no match
                // create EndpointDefault from JS object
                this.actualInstance = EndpointDefault.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointDefault
            errorMessages.push("Failed to construct EndpointDefault: " + err)
        }

        try {
            if (typeof instance === "EndpointKafka") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointKafka.validateJSON(instance); // throw an exception if no match
                // create EndpointKafka from JS object
                this.actualInstance = EndpointKafka.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointKafka
            errorMessages.push("Failed to construct EndpointKafka: " + err)
        }

        try {
            if (typeof instance === "EndpoinrtS3") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpoinrtS3.validateJSON(instance); // throw an exception if no match
                // create EndpoinrtS3 from JS object
                this.actualInstance = EndpoinrtS3.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpoinrtS3
            errorMessages.push("Failed to construct EndpoinrtS3: " + err)
        }

        try {
            if (typeof instance === "EndpointGoogleBigQuery") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointGoogleBigQuery.validateJSON(instance); // throw an exception if no match
                // create EndpointGoogleBigQuery from JS object
                this.actualInstance = EndpointGoogleBigQuery.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointGoogleBigQuery
            errorMessages.push("Failed to construct EndpointGoogleBigQuery: " + err)
        }

        try {
            if (typeof instance === "EndpointElasticsearch") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointElasticsearch.validateJSON(instance); // throw an exception if no match
                // create EndpointElasticsearch from JS object
                this.actualInstance = EndpointElasticsearch.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointElasticsearch
            errorMessages.push("Failed to construct EndpointElasticsearch: " + err)
        }

        try {
            if (typeof instance === "EndpointAWSKinesisFirehose") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointAWSKinesisFirehose.validateJSON(instance); // throw an exception if no match
                // create EndpointAWSKinesisFirehose from JS object
                this.actualInstance = EndpointAWSKinesisFirehose.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointAWSKinesisFirehose
            errorMessages.push("Failed to construct EndpointAWSKinesisFirehose: " + err)
        }

        try {
            if (typeof instance === "EndpointDatadog") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointDatadog.validateJSON(instance); // throw an exception if no match
                // create EndpointDatadog from JS object
                this.actualInstance = EndpointDatadog.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointDatadog
            errorMessages.push("Failed to construct EndpointDatadog: " + err)
        }

        try {
            if (typeof instance === "EndpointIBMQRadar") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointIBMQRadar.validateJSON(instance); // throw an exception if no match
                // create EndpointIBMQRadar from JS object
                this.actualInstance = EndpointIBMQRadar.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointIBMQRadar
            errorMessages.push("Failed to construct EndpointIBMQRadar: " + err)
        }

        try {
            if (typeof instance === "EndpointAzureMonitor") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointAzureMonitor.validateJSON(instance); // throw an exception if no match
                // create EndpointAzureMonitor from JS object
                this.actualInstance = EndpointAzureMonitor.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointAzureMonitor
            errorMessages.push("Failed to construct EndpointAzureMonitor: " + err)
        }

        try {
            if (typeof instance === "EndpointAzureBlobStorage") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointAzureBlobStorage.validateJSON(instance); // throw an exception if no match
                // create EndpointAzureBlobStorage from JS object
                this.actualInstance = EndpointAzureBlobStorage.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointAzureBlobStorage
            errorMessages.push("Failed to construct EndpointAzureBlobStorage: " + err)
        }

        try {
            if (typeof instance === "EndpointSplunk") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointSplunk.validateJSON(instance); // throw an exception if no match
                // create EndpointSplunk from JS object
                this.actualInstance = EndpointSplunk.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointSplunk
            errorMessages.push("Failed to construct EndpointSplunk: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `PostDataStreamingResponseEndpointInner` with oneOf schemas EndpoinrtS3, EndpointAWSKinesisFirehose, EndpointAzureBlobStorage, EndpointAzureMonitor, EndpointDatadog, EndpointDefault, EndpointElasticsearch, EndpointGoogleBigQuery, EndpointIBMQRadar, EndpointKafka, EndpointSplunk. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `PostDataStreamingResponseEndpointInner` with oneOf schemas EndpoinrtS3, EndpointAWSKinesisFirehose, EndpointAzureBlobStorage, EndpointAzureMonitor, EndpointDatadog, EndpointDefault, EndpointElasticsearch, EndpointGoogleBigQuery, EndpointIBMQRadar, EndpointKafka, EndpointSplunk. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>PostDataStreamingResponseEndpointInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostDataStreamingResponseEndpointInner} obj Optional instance to populate.
     * @return {module:model/PostDataStreamingResponseEndpointInner} The populated <code>PostDataStreamingResponseEndpointInner</code> instance.
     */
    static constructFromObject(data, obj) {
        return new PostDataStreamingResponseEndpointInner(data);
    }

    /**
     * Gets the actual instance, which can be <code>EndpoinrtS3</code>, <code>EndpointAWSKinesisFirehose</code>, <code>EndpointAzureBlobStorage</code>, <code>EndpointAzureMonitor</code>, <code>EndpointDatadog</code>, <code>EndpointDefault</code>, <code>EndpointElasticsearch</code>, <code>EndpointGoogleBigQuery</code>, <code>EndpointIBMQRadar</code>, <code>EndpointKafka</code>, <code>EndpointSplunk</code>.
     * @return {(module:model/EndpoinrtS3|module:model/EndpointAWSKinesisFirehose|module:model/EndpointAzureBlobStorage|module:model/EndpointAzureMonitor|module:model/EndpointDatadog|module:model/EndpointDefault|module:model/EndpointElasticsearch|module:model/EndpointGoogleBigQuery|module:model/EndpointIBMQRadar|module:model/EndpointKafka|module:model/EndpointSplunk)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>EndpoinrtS3</code>, <code>EndpointAWSKinesisFirehose</code>, <code>EndpointAzureBlobStorage</code>, <code>EndpointAzureMonitor</code>, <code>EndpointDatadog</code>, <code>EndpointDefault</code>, <code>EndpointElasticsearch</code>, <code>EndpointGoogleBigQuery</code>, <code>EndpointIBMQRadar</code>, <code>EndpointKafka</code>, <code>EndpointSplunk</code>.
     * @param {(module:model/EndpoinrtS3|module:model/EndpointAWSKinesisFirehose|module:model/EndpointAzureBlobStorage|module:model/EndpointAzureMonitor|module:model/EndpointDatadog|module:model/EndpointDefault|module:model/EndpointElasticsearch|module:model/EndpointGoogleBigQuery|module:model/EndpointIBMQRadar|module:model/EndpointKafka|module:model/EndpointSplunk)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = PostDataStreamingResponseEndpointInner.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of PostDataStreamingResponseEndpointInner from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/PostDataStreamingResponseEndpointInner} An instance of PostDataStreamingResponseEndpointInner.
     */
    static fromJSON = function(json_string){
        return PostDataStreamingResponseEndpointInner.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {String} endpoint_type
 */
PostDataStreamingResponseEndpointInner.prototype['endpoint_type'] = undefined;

/**
 * @member {String} url
 */
PostDataStreamingResponseEndpointInner.prototype['url'] = undefined;

/**
 * @member {String} log_line_separator
 */
PostDataStreamingResponseEndpointInner.prototype['log_line_separator'] = undefined;

/**
 * @member {String} payload_format
 */
PostDataStreamingResponseEndpointInner.prototype['payload_format'] = undefined;

/**
 * @member {Number} max_size
 */
PostDataStreamingResponseEndpointInner.prototype['max_size'] = undefined;

/**
 * @member {Array.<Object.<String, String>>} headers
 */
PostDataStreamingResponseEndpointInner.prototype['headers'] = undefined;

/**
 * @member {String} kafka_topic
 */
PostDataStreamingResponseEndpointInner.prototype['kafka_topic'] = undefined;

/**
 * @member {String} bootstrap_servers
 */
PostDataStreamingResponseEndpointInner.prototype['bootstrap_servers'] = undefined;

/**
 * @member {Boolean} use_tls
 */
PostDataStreamingResponseEndpointInner.prototype['use_tls'] = undefined;

/**
 * @member {String} access_key
 */
PostDataStreamingResponseEndpointInner.prototype['access_key'] = undefined;

/**
 * @member {String} region
 */
PostDataStreamingResponseEndpointInner.prototype['region'] = undefined;

/**
 * @member {String} object_key_prefix
 */
PostDataStreamingResponseEndpointInner.prototype['object_key_prefix'] = undefined;

/**
 * @member {String} bucket_name
 */
PostDataStreamingResponseEndpointInner.prototype['bucket_name'] = undefined;

/**
 * @member {String} content_type
 */
PostDataStreamingResponseEndpointInner.prototype['content_type'] = undefined;

/**
 * @member {String} host_url
 */
PostDataStreamingResponseEndpointInner.prototype['host_url'] = undefined;

/**
 * @member {String} secret_key
 */
PostDataStreamingResponseEndpointInner.prototype['secret_key'] = undefined;

/**
 * @member {String} dataset_id
 */
PostDataStreamingResponseEndpointInner.prototype['dataset_id'] = undefined;

/**
 * @member {String} project_id
 */
PostDataStreamingResponseEndpointInner.prototype['project_id'] = undefined;

/**
 * @member {String} table_id
 */
PostDataStreamingResponseEndpointInner.prototype['table_id'] = undefined;

/**
 * @member {module:model/EndpointGoogleBigQueryServiceAccountKey} service_account_key
 */
PostDataStreamingResponseEndpointInner.prototype['service_account_key'] = undefined;

/**
 * @member {String} api_key
 */
PostDataStreamingResponseEndpointInner.prototype['api_key'] = undefined;

/**
 * @member {String} stream_name
 */
PostDataStreamingResponseEndpointInner.prototype['stream_name'] = undefined;

/**
 * @member {String} log_type
 */
PostDataStreamingResponseEndpointInner.prototype['log_type'] = undefined;

/**
 * @member {String} shared_key
 */
PostDataStreamingResponseEndpointInner.prototype['shared_key'] = undefined;

/**
 * @member {String} time_generated_field
 */
PostDataStreamingResponseEndpointInner.prototype['time_generated_field'] = undefined;

/**
 * @member {String} workspace_id
 */
PostDataStreamingResponseEndpointInner.prototype['workspace_id'] = undefined;

/**
 * @member {String} storage_account
 */
PostDataStreamingResponseEndpointInner.prototype['storage_account'] = undefined;

/**
 * @member {String} container_name
 */
PostDataStreamingResponseEndpointInner.prototype['container_name'] = undefined;

/**
 * @member {String} blob_sas_token
 */
PostDataStreamingResponseEndpointInner.prototype['blob_sas_token'] = undefined;


PostDataStreamingResponseEndpointInner.OneOf = ["EndpoinrtS3", "EndpointAWSKinesisFirehose", "EndpointAzureBlobStorage", "EndpointAzureMonitor", "EndpointDatadog", "EndpointDefault", "EndpointElasticsearch", "EndpointGoogleBigQuery", "EndpointIBMQRadar", "EndpointKafka", "EndpointSplunk"];

export default PostDataStreamingResponseEndpointInner;
