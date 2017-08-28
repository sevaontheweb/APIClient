import React from 'react';
import ReactDOM from 'react-dom';
import ApisList from './ApisList';

it('renders without crashing', () => {
  var data =
  {
    "virtualizationList":
      [{"virtualizationID":"1","apiType":"REST","name":"petstore3","protocol":"HTTP","port":8083,"running":true},
      {"virtualizationID":"2","apiType":"WSDL","name":"currencyconverter2","protocol":"HTTPS","port":8089,"running":true},
      {"virtualizationID":"3","apiType":"REST","name":"paystore","protocol":"HTTPS","port":8088,"running":true}
    ]
  };
  var putApi = function(){};

  const div = document.createElement('div');
  ReactDOM.render(
    <ApisList
      apis = { data }
      putApi = { putApi }
   />, div);
});
