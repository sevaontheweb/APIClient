import React, { Component } from 'react';


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

    var virt = this.props.virtualization;
    virt.name = this.refs.name_field.value;
    virt.port = this.refs.port_field.value;
    virt.protocol = this.refs.protocol_field.value;
    this.props.putApi(virt);
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
                  <p className="modal__label">
                    port
                  </p>
                  <p className="modal__input">
                    <input type="text" name="port" ref="port_field" defaultValue={ this.props.virtualization.port } />
                  </p>
                  <p className="modal__label">
                    protocol
                  </p>
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