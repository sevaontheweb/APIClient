import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './'



class ContextMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiIsRunning: this.props.apiIsRunning,
      isVisible: this.props.isVisible
    }
    //this.hideMenu = this.hideMenu.bind(this);
  }

  // hideMenu() {
  //   this.setState({
  //     isVisible: false
  //   });
  //   alert("click")
  // }




  render () {

    if (this.props.isVisible) {
      return(
        <div className="context-menu__wrapper"
            onClick={ this.props.hideContextMenu }
            onContextMenu={ this.props.hideContextMenu }
          >
          <div className="context-menu__menu" style={{ top: this.props.menuPosY, left: this.props.menuPosX }} >
            <div className="context-menu__menu-header" style={{ fontSize: "0.8em", textAlign: "right" }} >
              { this.props.virtualizationID }
            </div>
            <p className="context-menu__menu-item">
              Edit
            </p>
            <p className="context-menu__menu-item" onClick={ this.props.toggleApiRunning } >
              { this.props.apiIsRunning ? "Undeploy" : "Deploy" }
            </p>
          </div>
        </div>
      )
    } else {
      return <div />
    }
  }
}



class ModalDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: this.props.isVisible
    }
  }

  render () {
    if(this.state.isVisible) {
      return (
        <div className="modal__table" >
          <div className="modal__table-row">
            <div className="modal__table-cell">
              <div className="modal__dialog">
                <div className="modal__header">Edit</div>
                <p className="modal__label">
                  name
                </p>
                <p className="modal__input">
                  <input type="text" name="name" value={ this.props.name } />
                </p>
                <p className="modal__label">
                  port
                </p>
                <p className="modal__input">
                  <input type="text" name="port" value={ this.props.port } />
                </p>
                <p className="modal__label">
                  protocol
                </p>
                <p className="modal__input">
                  <select name="protocol" value={this.props.protocol} >
                    <option value="HTTP" >HTTP</option>
                    <option value="HTTPS" >HTTPS</option>
                  </select>
                </p>
                <div className="modal__footer">
                  <button className="modal__button">Ok</button> <button className="modal__button">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <div />
    }

  }
}



class ApiBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicksNum: 0,
            virtualizationID: this.props.virtualizationID,
            apiType: this.props.apiType,
            name: this.props.name,
            protocol: this.props.protocol,
            port: this.props.port,
            running: this.props.running,
            menuIsVisible: false // this.props.menuIsVisible
        //    isGoing: true,
        //    numberOfGuests: 2
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.buttonHandleClick = this.buttonHandleClick.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);
        this.hideContextMenu = this.hideContextMenu.bind(this);
        this.toggleApiRunning = this.toggleApiRunning.bind(this);
    }

    buttonHandleClick() {
        this.setState((prevState, props) => ({
          clicksNum: prevState.clicksNum + 1,
          menuIsVisible: true,
          menuPosX: 0,
          menuPosY: 0
        }));
    }

    onContextMenu(e) {
      e.preventDefault();

      var x = e.clientX;
      var y = e.clientY;

      this.setState((prevState, props) => ({
        menuIsVisible: true, // !prevState.menuIsVisible,
        menuPosX: x,
        menuPosY: y
      }));      
      //alert(this.state.menuIsVisible)
    }

    hideContextMenu(e) {
      // this.setState ({
      //   menuIsVisible: false
      // });

      this.setState((prevState, props) => ({
        menuIsVisible: false, // !prevState.menuIsVisible,
      }));
      e.stopPropagation();
      e.preventDefault();
    }

    toggleApiRunning () {
      var virt = this.props.virtualization;
      virt.running = !virt.running;
      this.props.putApi(virt);
    }

    render() {
      return (
        <div className="api-block" onContextMenu={ this.onContextMenu } >
          <h3 className="api-name">{ this.props.name }</h3>
          <h4 className="api-id"> ID { this.props.virtualizationID }</h4>
          {/* <button className={ this.props.running === true ? "btn-running" : "btn-stoped" } >
              Start / Stop
          </button> */}
          <p className="api-running">
          { this.props.running === true ? "running" : "stoped" }
          </p>
          <p className="api-type">
            { this.props.apiType }
          </p>
          <p className="api-property-display">
            <span className="api-property-label">port</span> { this.props.port }
          </p>
          <p className="api-property-display">
            <span className="api-property-label">protocol</span> { this.props.protocol }
          </p>

          <p className="api-description">
            <button onClick={ this.buttonHandleClick }>
                Save { this.state.clicksNum } times
            </button>
          </p>

          <ContextMenu
            virtualization={ this.props.virtualization }
            toggleApiRunning={ this.toggleApiRunning }

            isVisible={ this.state.menuIsVisible }
            apiIsRunning={ this.state.running }
            menuPosX={ this.state.menuPosX }
            menuPosY={ this.state.menuPosY }
            hideContextMenu={ this.hideContextMenu }
            virtualizationID={ this.props.virtualizationID }
          />

        </div>
      )
    }
}

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
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ApisList 
          apis={ this.state.apis }
          putApi={ this.props.putApi } />

      </div>
    );
  }
}

export default App;
