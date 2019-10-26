import React, { Component } from 'react';
import Box from '../components/Box';
import InputField from '../components/InputField';
import FooterLoginPage from '../components/FooterLoginPage';
import Error from '../components/Error';
import FooterFormButton from '../components/FooterFormButton';
import { createAccount } from '../actions/UserActions';
import { connect } from 'react-redux';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '', 
            description: '',
            error: ''
        };
    }
    
    componentWillMount() {
        if (this.props.user === null) {
        this.props.history.push('/players');
        }
    }
    
    //bez tego nie przeładuje strony -> button Login przkier do mainPage "/"

    isValid() {
        const { email, password, confirmPassword } = this.state;
        
        if(email === '' || password === '' || confirmPassword === '') {
            this.setState({
                error: 'Uzupełnij wymagane pola'
            });
            return false;
        }
        
        if(password !== confirmPassword) {
            this.setState({
                error: 'Podane hasła różnią się'
            });
            return false;
        }
        return true;
    }


    submitAccount(event) {
    
        event.preventDefault();
    
        if (!this.isValid()) {
            return;
        }
        
        this.props.createAccount(this.state.email, this.state.password).then(() => {
            this.props.history.replace('/players');
            }).catch(err => {
                this.setState({
                    error: err.message
                });
        });
    }

  renderBody() {
    const errStyle = {
      borderColor: 'red'
    };
    return (

        <form onSubmit={(event) => this.submitAccount(event)}>
          <InputField id="email" type="text" label="E-mail"
                      inputAction={(event) => this.setState({ email: event.target.value })}
                      style={this.state.error ? errStyle : null }/>
          <InputField id="password" type="password" label="Password"
                      inputAction={(event) => this.setState({ password: event.target.value })}
                      style={this.state.error ? errStyle : null }/>
          <InputField id="confirm-password" type="password" label="Password"
                      inputAction={(event) => this.setState({ confirmPassword: event.target.value })}
                      style={this.state.error ? errStyle : null }/>
                      
          {this.state.error && <Error>
            {this.state.error}
          </Error>}
          <FooterFormButton submitLabel="Sign Up" otherLabel="Existing user?" goToLink="/Login" {...this.props}/>
        </form>

    );
  }

    render() {
        return(
            <main class="main-login">
                <Box title="Rejestracja" body={this.renderBody()}></Box>
                <FooterLoginPage></FooterLoginPage>
            </main>
            );
        }
}

export default connect(null, {createAccount})(CreateAccount);