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
            menuIsVisible: false
        };

        this.buttonHandleClick = this.buttonHandleClick.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);
        this.hideContextMenu = this.hideContextMenu.bind(this);
        this.toggleApiRunning = this.toggleApiRunning.bind(this);
    }

    buttonHandleClick() {
        this.setState((prevState, props) => ({
          clicksNum: prevState.clicksNum + 1,
        }));
    }

    onContextMenu(e) {
      e.preventDefault();

      var x = e.clientX;
      var y = e.clientY;

      this.setState((prevState, props) => ({
        menuIsVisible: true,
        menuPosX: x,
        menuPosY: y
      }));
    }

    hideContextMenu(e) {
      this.setState((prevState, props) => ({
        menuIsVisible: false,
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
          <p className="api-block__property">
            <span className={
              "api-block__is-running " + 
              ( this.props.running === true ? "api-block__is-running_started" : "api-block__is-running_stoped" )
            } 
            >
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
