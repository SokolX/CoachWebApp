import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form'
import _ from 'lodash';
import { getMessages, sendMessage, messagesReciver } from '../actions/MessagesActions';

import MessageFrom from '../components/MessageFrom';
import MessageTo from '../components/MessageTo';

class Conversation extends Component {
    
    renderMessages() {
        
        const { user } = this.props;
  
        return _.map(this.props.message, (message, key) => {

            if(this.props.user.key !== message.keyFrom) {

                return  <MessageFrom key={message.key}
                             dateSend={ message.dateSend }
                             contentMessage= { message.contentMessage }
                    />;        
            } else {

                return  <MessageTo key={message.key}
                             dateSend={ message.dateSend }
                             contentMessage= { message.contentMessage }
                    />;
            }
            
        });
        
    }

    renderField(field) {
        
            const errStyle = {
                borderColor: 'red'
            };
            
            return (
                    <input type="text" placeholder={`Napisz wiadomość...`} { ...field.input } 
                            className={ field.class } 
                            style={ field.meta.touched && field.meta.error ? errStyle : null } required/>
                );
    }
    onSubmit(values) {
        
        var pathToUser = window.location.pathname;
        var keyTo = pathToUser.slice(pathToUser.lastIndexOf("/")+1);
        var keyFrom = this.props.user.key; 
        var dateSend = Date.now();
        this.props.sendMessage(values, dateSend, keyFrom, keyTo).then(this.props.dispatch(reset('NewMessage')));
    }
    
    render() {
    const { handleSubmit } = this.props;
    return (
      <div>
            <div class="main conversation">
                <div class="containerTable">
                    { this.renderMessages() }
                </div>   
            </div> 
            <div class="containerInput">
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } class="footerForm-message">    
                    <Field
                        name="contentMessage"
                        component={ this.renderField }
                        label="Body"
                        class="footer-body-message"
                    />
                    <button type="submit" className="btn footer-button-message">Wyślij</button>
                </form>
                       
            </div>
      </div>
    );
  }
};

let form = reduxForm({
    form: 'NewMessage'
})(Conversation);


function mapStateToProps(state, ownProps) {
  return { 
      message: state.messages[ownProps.match.params.id],
      user: state.user, 
      messages: state.messages
  };
}

//Tu trzeba wykorzystać  tak zamknięte funkcje, bo form korzysta bezpośrendio z metody sendMessage 
//mapStateToProps nie działa
form = connect(mapStateToProps, { sendMessage, getMessages, messagesReciver })(form);

export default form;