/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import Box from '../components/Box';
import InputField from '../components/InputField';
import Error from '../components/Error';
import FooterFormButton from '../components/FooterFormButton';
import { login, getUser } from '../actions/UserActions';
import { connect } from  'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '', 
            error: ''
        };
    }
    
    componentWillMount() {
        if (this.props.user !== null) {
        this.props.history.push('/players');
        }
    }
    
    //bez tego nie przeładuje strony -> button Login przkier do mainPage "/"
    componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push('/players');
    }
  }
    
    submitLogin(event) {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password).catch(err => { 
            this.setState({
                error: err
            });
        });
    }

    renderBody() {
        
        const errStyle = {
            borderColor: 'red'
        };
        
        return (
                <section>
                <form onSubmit={event => { this.submitLogin(event);}}>
                    <div>
                        <InputField id="email" type="text" label="E-mail" 
                                    inputAction={(event) => this.setState({ email: event.target.value })}
                                    style={ this.state.error ? errStyle : null }
                        />
                        <InputField id="password" type="password" label="Hasło" 
                                    inputAction={(event) => this.setState({ password: event.target.value })}
                                    style={ this.state.error ? errStyle : null }
                        />
                        
                        {this.state.error && <Error>Email/hasło niepoprawne</Error>}
                        
                        <FooterFormButton submitLabel="Zaloguj" otherLabel="Zostań trenerem" goToLink="/createAccount" { ...this.props }/>
                    </div>
                    
                </form>
                </section>
                );
    }

    render() {
        return(
               <div>
                    <Box title="Logowanie" body={this.renderBody()}></Box>
                            <div class="containerInput">
                            <p>&copy; 2018 <b>Łukasz Sokołek</b>, All rights reserved</p>
                            </div>
               </div>
              );

        }
    }

function mapStateToProps(state) {
    return { user: state.user };
}
                
export default connect(mapStateToProps, { login, getUser })(Login);