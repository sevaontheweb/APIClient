import React, { Component } from 'react';
import ApiBlock from './ApiBlock.js';
import ModalDialog from './ModalDialog.js';


export default class ApisList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            apis: this.props.apis,
            activeVirtualization: null,
            editDialogIsVisible: false
        }
        this.openEditDialog_func = this.openEditDialog_func.bind(this);
        this.closeEditDialog_func = this.closeEditDialog_func.bind(this);
    }
  
  
    openEditDialog_func (data) {
        this.setState({
            activeVirtualization: data,
            editDialogIsVisible: true
        });
    }

    closeEditDialog_func () {
        this.setState({
            activeVirtualization: null,
            editDialogIsVisible: false
        });
    }
    
    render() {
      var putApi = this.props.putApi;
      var openEditDialog = this.openEditDialog_func;
      var closeEditDialog = this.closeEditDialog_func;
  
      //if(typeof apis !== "undefined" && typeof apis.virtualizationList !== "undefined" && apis.virtualizationList.length > 0) {
        return (
          <div className="apis-list">
            {
              //apis.virtualizationList.map(function(item){
              this.state.apis.virtualizationList.map(function(item){
                {/* return <ApiBlock key={ item.virtualizationID } api_name={ item.name } api_id={ item.virtualizationID } /> */}
                return <ApiBlock 
                  virtualization = { item }
                  putApi = { putApi }
                  openEditDialog = { openEditDialog }
  
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
            <ModalDialog 
                virtualization={ this.state.activeVirtualization }
                isVisible={ this.state.editDialogIsVisible }
                putApi={ this.props.putApi }
                closeEditDialog = { closeEditDialog }
            />
          </div>
        )
      // }
      // else {
      //   return <div />
      // }
    }
  }
  