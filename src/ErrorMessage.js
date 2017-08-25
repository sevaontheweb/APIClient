import React, { Component } from 'react';


export default class ErrorMessage extends Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }

    render () {
        if( typeof this.props.message != undefined ) {
            return (
                <p className="modal__error-message">
                    { this.props.message }
                </p>
            )
        } else {
            return ( <p />)
        }
    }
}