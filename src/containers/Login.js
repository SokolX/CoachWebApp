import React, { Component } from 'react';
import Box from '../components/Box';
import FooterLoginPage from '../components/FooterLoginPage';
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
                <form onSubmit={event => { this.submitLogin(event);}}>
                        <InputField id="email" type="text" label="E-mail" class="auth__input"
                                    inputAction={(event) => this.setState({ email: event.target.value })}
                                    style={ this.state.error ? errStyle : null }
                        />
                        <InputField id="password" type="password" label="Password" 
                                    inputAction={(event) => this.setState({ password: event.target.value })}
                                    style={ this.state.error ? errStyle : null }
                        />
                        {this.state.error && <Error>E-mail/hasło niepoprawne</Error>}
                    
                    <FooterFormButton submitLabel="Log in" otherLabel="Sign up" goToLink="/createAccount" { ...this.props }/>

                </form>
                );
    }

    render() {
        return(
                <main class="main-login">
                    <Box title="CoachApp" body={this.renderBody()}></Box>
                    <FooterLoginPage></FooterLoginPage>
                </main>
              );

        }
    }

function mapStateToProps(state) {
    return { user: state.user };
}
                
export default connect(mapStateToProps, { login, getUser })(Login);