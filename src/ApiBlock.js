import React, { Component } from 'react';

import ContextMenu from './ContextMenu.js';


export default class ApiBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicksNum: 0,
            virtualizationID: this.props.virtualizationID,
            virtualization: this.props.virtualization,

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
        // menuIsVisible: true,
        // menuPosX: 0,
        // menuPosY: 0
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
        <div 
          className={ "api-block " + 
            ( this.props.running === true ? "api-block__api_started" : "api-block__api_stoped"  )}
          onContextMenu={ this.onContextMenu } 
        >
          <h3 className="api-block__name">{ this.props.name }</h3>
          {/* <h4 className="api-id"> ID { this.state.virtualizationID }</h4> */}
          {/* <button className={ this.props.running === true ? "btn-running" : "btn-stoped" } >
              Start / Stop
          </button> */}
          <p className="api-block__property">
            <span className={
              "api-block__is-running " + 
              ( this.props.running === true ? "api-block__is-running_started" : "api-block__is-running_stoped" )
            } 
            >
              {/* { this.state.running === true ? "running" : "stoped" } */}
            </span>
          </p>
          <p className="api-block__property">
            <span className="api-block__api-type">
              { this.props.apiType }
            </span>
          </p>
          <p className="api-block__property">
            <span className="api-block__property-label">port</span> { this.props.port }
          </p>
          <p className="api-block__property">
            <span className="api-block__property-label">protocol</span> { this.props.protocol }
          </p>

          {/* <p className="api-description">
            <button onClick={ this.buttonHandleClick }>
                Save { this.state.clicksNum } times
            </button>
          </p> */}

          <ContextMenu
            virtualization={ this.props.virtualization }
            toggleApiRunning={ this.toggleApiRunning }
            openEditDialog={ this.props.openEditDialog }

            isVisible={ this.state.menuIsVisible }
            apiIsRunning={ this.props.running }
            menuPosX={ this.state.menuPosX }
            menuPosY={ this.state.menuPosY }
            hideContextMenu={ this.hideContextMenu }
            virtualizationID={ this.props.virtualizationID }
          />

        </div>
      )
    }
}
