import React, { Component } from 'react';


export default class ErrorMessage extends Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }

    render () {
        if( typeof this.props.message === "undefined" || 
            this.props.message == false ) {
            return ( <span />)
        } else {
            return (
                <span className="modal__error-message">
                    { this.props.message }
                </span>
            )
        }
    }
}