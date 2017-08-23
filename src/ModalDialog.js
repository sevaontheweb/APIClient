import React, { Component } from 'react';


export default class ModalDialog extends Component {
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

// export default ModalDialog;