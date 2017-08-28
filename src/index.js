import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// (c) stackoverflow
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var defaultApiPath = "http://localhost:8090";

var api_client = require("swagger-js-client");
var apiInstance = new api_client.ReadyapiApi();
var virt_server_path = getParameterByName('virtserverpath');
if(!virt_server_path) {
    apiInstance.apiClient.basePath = defaultApiPath;
}
else {
    apiInstance.apiClient.basePath = virt_server_path;
}


var getApis = function(callback) {

    apiInstance.getVirtulizations( function(error, data, response) {
        if (error) {
            console.error(error);
            callback({ errorcode: 500, errormessage: "virtualization server error" });
        } else {
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            callback(data);
        }
    });

}




var putApi_func = function(data) {
    var opts = {
        'body': data
    }
    apiInstance.putVirtualization(data.virtualizationID, opts, function (error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully.');
            getApis(renderApis)
        }
    });
}



var renderApis = function (data) {
    var putApi = putApi_func;

    ReactDOM.render (
        <App 
            apis={ data }
            putApi={ putApi }
        />,
        document.getElementById('root')
    )
}

getApis(

    renderApis
);
registerServiceWorker();
