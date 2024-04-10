# object_storage

ObjectStorage - JavaScript client for object_storage
REST API OpenAPI documentation for the Object Storage
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0 (v1)
- Package version: 1.0.0 (v1)
- Generator version: 7.4.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install object_storage --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your object_storage from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ObjectStorage = require('object_storage');

var defaultClient = ObjectStorage.ApiClient.instance;
// Configure API key authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new ObjectStorage.StorageApi()
var bucketCreate = new ObjectStorage.BucketCreate(); // {BucketCreate} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.storageApiBucketsCreate(bucketCreate, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.azion.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ObjectStorage.StorageApi* | [**storageApiBucketsCreate**](docs/StorageApi.md#storageApiBucketsCreate) | **POST** /v4/storage/buckets | Create a new bucket
*ObjectStorage.StorageApi* | [**storageApiBucketsDestroy**](docs/StorageApi.md#storageApiBucketsDestroy) | **DELETE** /v4/storage/buckets/{name} | Delete a bucket
*ObjectStorage.StorageApi* | [**storageApiBucketsList**](docs/StorageApi.md#storageApiBucketsList) | **GET** /v4/storage/buckets | List buckets
*ObjectStorage.StorageApi* | [**storageApiBucketsObjectsCreate**](docs/StorageApi.md#storageApiBucketsObjectsCreate) | **POST** /v4/storage/buckets/{bucket_name}/objects/{object_key} | Create new object key
*ObjectStorage.StorageApi* | [**storageApiBucketsObjectsDestroy**](docs/StorageApi.md#storageApiBucketsObjectsDestroy) | **DELETE** /v4/storage/buckets/{bucket_name}/objects/{object_key} | Delete object key
*ObjectStorage.StorageApi* | [**storageApiBucketsObjectsList**](docs/StorageApi.md#storageApiBucketsObjectsList) | **GET** /v4/storage/buckets/{bucket_name}/objects | List buckets objects
*ObjectStorage.StorageApi* | [**storageApiBucketsObjectsRetrieve**](docs/StorageApi.md#storageApiBucketsObjectsRetrieve) | **GET** /v4/storage/buckets/{bucket_name}/objects/{object_key} | Download object
*ObjectStorage.StorageApi* | [**storageApiBucketsObjectsUpdate**](docs/StorageApi.md#storageApiBucketsObjectsUpdate) | **PUT** /v4/storage/buckets/{bucket_name}/objects/{object_key} | Update the object key
*ObjectStorage.StorageApi* | [**storageApiBucketsPartialUpdate**](docs/StorageApi.md#storageApiBucketsPartialUpdate) | **PATCH** /v4/storage/buckets/{name} | Update bucket info


## Documentation for Models

 - [ObjectStorage.Bucket](docs/Bucket.md)
 - [ObjectStorage.BucketCreate](docs/BucketCreate.md)
 - [ObjectStorage.BucketObject](docs/BucketObject.md)
 - [ObjectStorage.BucketUpdate](docs/BucketUpdate.md)
 - [ObjectStorage.EdgeAccessEnum](docs/EdgeAccessEnum.md)
 - [ObjectStorage.ObjectResponseData](docs/ObjectResponseData.md)
 - [ObjectStorage.PaginatedBucketList](docs/PaginatedBucketList.md)
 - [ObjectStorage.PaginatedBucketObjectList](docs/PaginatedBucketObjectList.md)
 - [ObjectStorage.ResponseBucket](docs/ResponseBucket.md)
 - [ObjectStorage.StateEnum](docs/StateEnum.md)
 - [ObjectStorage.SuccessBucketOperation](docs/SuccessBucketOperation.md)
 - [ObjectStorage.SuccessObjectOperation](docs/SuccessObjectOperation.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### tokenAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
