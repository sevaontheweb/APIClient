# SwaggerJsClient.ReadyapiApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVirtulizations**](ReadyapiApi.md#getVirtulizations) | **GET** /sv/v1/virtualizations | Get currently deployed virtualizations
[**putVirtualization**](ReadyapiApi.md#putVirtualization) | **PUT** /sv/v1/virtualizations/{virtualizationID} | Post test recipe


<a name="getVirtulizations"></a>
# **getVirtulizations**
> VirtualizationResponse getVirtulizations()

Get currently deployed virtualizations



### Example
```javascript
var SwaggerJsClient = require('swagger-js-client');

var apiInstance = new SwaggerJsClient.ReadyapiApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVirtulizations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**VirtualizationResponse**](VirtualizationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putVirtualization"></a>
# **putVirtualization**
> putVirtualization(virtualizationID, opts)

Post test recipe



### Example
```javascript
var SwaggerJsClient = require('swagger-js-client');

var apiInstance = new SwaggerJsClient.ReadyapiApi();

var virtualizationID = "virtualizationID_example"; // String | 

var opts = { 
  'body': new SwaggerJsClient.Virtualization() // Virtualization | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putVirtualization(virtualizationID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualizationID** | **String**|  | 
 **body** | [**Virtualization**](Virtualization.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

