import React from 'react';
import ReactDOM from 'react-dom';
import ContextMenu from './ContextMenu';
import ReactDOMServer from 'react-dom/server';
import TestUtils from 'react-dom/test-utils';



it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ContextMenu />, div);
});



it('renders without crashing with params', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ContextMenu
    menuPosY = {0}
    menuPosX = {0}
    isVisible = { true }
    apiIsRunning = { false }
    virtualization = {
      {"virtualizationID":"2","apiType":"WSDL","name":"currencyconverter2","protocol":"HTTPS","port":8089,"running":true}
    }
  />, div);
});



it('shows "Stop" when related virt is running', () => {
  const div = document.createElement('div');
  expect(ReactDOMServer.renderToStaticMarkup(
    <ContextMenu
      menuPosY = {0}
      menuPosX = {0}
      isVisible = { true }
      apiIsRunning = { true }
      virtualization = {
        {"virtualizationID":"2","apiType":"WSDL","name":"currencyconverter2","protocol":"HTTPS","port":8089,"running":true}
      }
    />
   ).includes("Stop")
  );
});



it('shows "Start" when related virt is stoped', () => {
  const div = document.createElement('div');
  expect(ReactDOMServer.renderToStaticMarkup(
    <ContextMenu
      menuPosY = {0}
      menuPosX = {0}
      isVisible = { true }
      apiIsRunning = { true }
      virtualization = {
        {"virtualizationID":"2","apiType":"WSDL","name":"currencyconverter2","protocol":"HTTPS","port":8089,"running":false}
      }
    />
   ).includes("Start")
  );
});



it('fires Edit onClick handler', () => {
  const div = document.createElement('div');

  var dummy = ""
  var dummyMenuEditClick = function () {
    dummy = "clicked";
  }

  var contextMenu = TestUtils.renderIntoDocument( 
    <ContextMenu
      menuPosY = {0}
      menuPosX = {0}
      isVisible = { true }
      apiIsRunning = { false }
      virtualization = {
        {"virtualizationID":"2","apiType":"WSDL","name":"currencyconverter2","protocol":"HTTPS","port":8089,"running":true}
      }
      openEditDialog = { dummyMenuEditClick }
    />
  );

  var menuItems = TestUtils.scryRenderedDOMComponentsWithClass(contextMenu, 'context-menu__menu-item');
  expect(menuItems.length).toEqual(2);
  TestUtils.Simulate.click(menuItems[0])
  expect(dummy).toEqual("clicked");
});



it('fires Edit onClick handler', () => {
  const div = document.createElement('div');

  var dummy = ""
  var dummyMenuEditClick = function () {
    dummy = "clicked";
  }

  var contextMenu = TestUtils.renderIntoDocument( 
    <ContextMenu
      menuPosY = {0}
      menuPosX = {0}
      isVisible = { true }
      apiIsRunning = { false }
      virtualization = {
        {"virtualizationID":"2","apiType":"WSDL","name":"currencyconverter2","protocol":"HTTPS","port":8089,"running":true}
      }
      openEditDialog = { dummyMenuEditClick }
    />
  );

  var menuItems = TestUtils.scryRenderedDOMComponentsWithClass(contextMenu, 'context-menu__menu-item');
  expect(menuItems.length).toEqual(2);
  TestUtils.Simulate.click(menuItems[0])
  expect(dummy).toEqual("clicked");
});