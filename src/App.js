import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './'

import ContextMenu from './ContextMenu.js';
import ModalDialog from './ModalDialog.js';
import ApiBlock from './ApiBlock.js';


class ApisList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apis: this.props.apis }
  }


  
  render() {
    var putApi = this.props.putApi;

    //if(typeof apis !== "undefined" && typeof apis.virtualizationList !== "undefined" && apis.virtualizationList.length > 0) {
      return (
        <div>
          {
            //apis.virtualizationList.map(function(item){
            this.state.apis.virtualizationList.map(function(item){
              {/* return <ApiBlock key={ item.virtualizationID } api_name={ item.name } api_id={ item.virtualizationID } /> */}
              return <ApiBlock 
                virtualization = { item }
                putApi = { putApi }

                key={ item.name } 
                name={ item.name }
                virtualizationID={ item.virtualizationID }
                apiType={ item.apiType }
                protocol={ item.protocol }
                port={ item.port }
                running={ item.running }
              />
            })
          }
        </div>
      )
    // }
    // else {
    //   return <div />
    // }
  }

}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apis: this.props.apis }
  }
  


  render() {



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>

        <ApisList 
          apis={ this.state.apis }
          putApi={ this.props.putApi } />

      </div>
    );
  }
}

export default App;
