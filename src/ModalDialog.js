import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage.js';



export default class ModalDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false, // this.props.isVisible,
      virtualization: this.props.virtualization
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    var errors_exist = false;
    var name_error_msg = "";
    var port_error_msg = "";

    // validate
    if ( this.refs.name_field.value.length < 1 ) {
      name_error_msg = "Please enter the virtualization name"
      errors_exist = true;
    }
    if ( this.refs.port_field.value.length < 1 ) {
      port_error_msg = "Please enter the virtualization port"
      errors_exist = true;
    }
    if ( isNaN(this.refs.port_field.value * 1)) {
      port_error_msg = "Port should be a number"
      errors_exist = true;
    } else if ( this.refs.port_field.value < 0 || this.refs.port_field.value > 65535) {
      port_error_msg = "Port should be between 0 and 65535"
      errors_exist = true;
    }

    if (errors_exist) {
      this.setState({
        name_error: name_error_msg,
        port_error: port_error_msg
      })
    } else {
      var virt = this.props.virtualization;
      virt.name = this.refs.name_field.value;
      virt.port = this.refs.port_field.value;
      virt.protocol = this.refs.protocol_field.value;
      this.props.putApi(virt);
    }
  }

  handleCloseClick(e) {
    e.preventDefault();

    this.props.closeEditDialog();
  }

  render () {

    

    if(this.props.isVisible) {
      return (
        <div className="modal__table" >
          <div className="modal__table-row">
            <div className="modal__table-cell">
              <div className="modal__dialog">
                <div className="modal__header">Edit</div>
                <form onSubmit={ this.handleSubmit }>
                  <p className="modal__label">
                    name
                  </p>
                  <p className="modal__input">
                    <input type="text" name="name" ref="name_field" defaultValue={ this.props.virtualization.name } />
                  </p>
                  <ErrorMessage message={ this.state.name_error } />

                  <p className="modal__label">
                    port
                  </p>
                  <p className="modal__input">
                    <input type="text" name="port" ref="port_field" defaultValue={ this.props.virtualization.port } />
                  </p>
                  <ErrorMessage message={ this.state.port_error } />

                  <p className="modal__label">
                    protocol
                  </p>
                  <ErrorMessage message={ this.state.protocol_error } />

                  <p className="modal__input">
                    <select name="protocol" ref="protocol_field" defaultValue={this.props.virtualization.protocol} >
                      <option value="HTTP" >HTTP</option>
                      <option value="HTTPS" >HTTPS</option>
                    </select>
                  </p>
                  <div className="modal__footer">
                    <input type="submit" className="modal__button" value="Ok" />
                    <button className="modal__button" onClick={ this.handleCloseClick } >Cancel</button>
                  </div>
                </form>
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

// export default ModalDialog;