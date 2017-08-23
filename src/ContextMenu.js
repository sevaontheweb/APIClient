import React, { Component } from 'react';

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
              <p className="context-menu__menu-item context-menu__menu-item_disabled">
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

  export default ContextMenu;