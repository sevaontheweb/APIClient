import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  div.setAttribute("id", "root");

  var data = 
  {
    "virtualizationList":
      [{"virtualizationID":"1","apiType":"REST","name":"petstore3","protocol":"HTTP","port":8083,"running":true}
      // ,
      // {"virtualizationID":"2","apiType":"WSDL","name":"currencyconverter2","protocol":"HTTPS","port":8089,"running":true},
      // {"virtualizationID":"3","apiType":"REST","name":"paystore","protocol":"HTTPS","port":8088,"running":true}
    ]
  };
  var putApi = function(){};

  ReactDOM.render(<App
    apis={ data }
    putApi={ putApi } />, div);
});



it('renders correct number of apis', () => {
  var data = 
  {
    "virtualizationList":
      [{"virtualizationID":"1","apiType":"REST","name":"petstore3","protocol":"HTTP","port":8083,"running":true},
      {"virtualizationID":"2","apiType":"WSDL","name":"currencyconverter2","protocol":"HTTPS","port":8089,"running":true},
      {"virtualizationID":"3","apiType":"REST","name":"paystore","protocol":"HTTPS","port":8088,"running":true}
    ]
  };
  var putApi = function(){};

  var app = TestUtils.renderIntoDocument(
    <App
      apis={ data }
      putApi={ putApi } 
    />
  )

  var apiItems = TestUtils.scryRenderedDOMComponentsWithClass(app, 'api-block');
  expect(apiItems.length).toEqual(3);
});



it('renders correct api items for started and stoped apis', () => {
  var data = 
  {
    "virtualizationList":
      [{"virtualizationID":"1","apiType":"REST","name":"petstore3","protocol":"HTTP","port":8083,"running":true},
      {"virtualizationID":"2","apiType":"WSDL","name":"currencyconverter2","protocol":"HTTPS","port":8089,"running":false},
      {"virtualizationID":"3","apiType":"REST","name":"paystore","protocol":"HTTPS","port":8088,"running":true}
    ]
  };
  var putApi = function(){};

  var app = TestUtils.renderIntoDocument(
    <App
      apis={ data }
      putApi={ putApi } 
    />
  )

  var apiItems_any = TestUtils.scryRenderedDOMComponentsWithClass(app, 'api-block');
  expect(apiItems_any.length).toEqual(3);

  var apiItems_started = TestUtils.scryRenderedDOMComponentsWithClass(app, 'api-block__api_started');
  expect(apiItems_started.length).toEqual(2);
  
  var apiItems_stoped = TestUtils.scryRenderedDOMComponentsWithClass(app, 'api-block__api_stoped');
  expect(apiItems_stoped.length).toEqual(1);
});
