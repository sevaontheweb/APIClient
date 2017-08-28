import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './'

import ContextMenu from './ContextMenu.js';
import ModalDialog from './ModalDialog.js';
import ApiBlock from './ApiBlock.js';
import ApisList from './ApisList.js';



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <ApisList 
          apis={ this.props.apis }
          putApi={ this.props.putApi }
        />

      </div>
    );
  }
}

export default App;
