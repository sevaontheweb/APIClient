import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



//import ('../node_modules/swagger-js-client/src/index.js');
// import("./bundled.js")
var defaultApiPath = "http://localhost:8090";
var args = process.argv.slice(2);

// console.log(`server started listening on port ${port}`)

var api_client = require("swagger-js-client");
var apiInstance = new api_client.ReadyapiApi();
// if(args.length > 0) {
//     apiInstance.apiClient.basePath = args[0];
// } else {
//     apiInstance.apiClient.basePath = defaultApiPath;    
// }
apiInstance.apiClient.basePath = defaultApiPath;    

//import Modal from './Modal';


var getApis = function(callback) {
    apiInstance.getVirtulizations( function(error, data, response) {
        if (error) {
            console.error(error);
            // resp.status(500).send("virtualization server error");
            //return { errorcode: 500, errormessage: "virtualization server error" };
            callback({ errorcode: 500, errormessage: "virtualization server error" });
        } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            // resp.send(data);
            // return data;
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



var renderApis = function (data, editDialogIsVisible = false) {
    var putApi = putApi_func;
    // var openEditDialog = openEditDialog_func;

    // ToDo why cannot update page without that stuff?
    document.getElementById('root').innerHTML = "";

    ReactDOM.render (
        <App 
            apis={ data }
            putApi={ putApi }
        />,
        document.getElementById('root')
    )
}

// ReactDOM.render(<App />, document.getElementById('root'));
getApis(
    // function(data) { 
    // ReactDOM.render (
    //     <App 
    //         apis={ data }
    //         putApi= { putApi }
    //     />,
    //     document.getElementById('root')
    // )
    // }
    renderApis
);
registerServiceWorker();
