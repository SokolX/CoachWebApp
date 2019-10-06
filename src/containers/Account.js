import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/App.scss';

import { getUser, logout } from '../actions/UserActions';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Account extends Component {

     constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '', 
            error: ''
        };
    }
        
    renderNavbar() {
        return(
                <nav class="navbar navbar-expand-lg navbar-fixed-top">
                    <a class="navbar-brand" title="Dane sportowców">
                        <Link to="/training"><img src="ic_ludzik.png" alt="Coach logo"/>Coach</Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-reorder"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link" title="Dane sportowców"><Link to="/players">Sportowcy</Link></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" title="Treningi sportowców"><Link to="/training">Treningi</Link></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" title="Pomiary BMI sportowców"><Link to="/bmi">BMI</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" title="Napisz post na blogu"><Link to="/blog">Blog</Link></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" title="Rozmowy ze sportowcami"><Link to="/messages">Wiadomości</Link></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" title="Twoje dane"><Link to="/account">Konto</Link></a>
                        </li>
                        <li class="nav-item last-item">
                          <a class="nav-link"  title="Opuść aplikację"onClick={() => { this.props.logout();}}>Wyloguj</a>
                        </li>
                       </ul>
                    </div>
                </nav>
                );
    }

    renderAccount() {
        
        return (  
                <div class="row">
                    <div class="col-lg-4" id="col-lg-4">Imię: </div>
                    <div class="col-lg-8">{this.props.user.coachName}</div>
                    <div class="col-lg-4">E-mail: </div>
                    <div class="col-lg-8">{this.props.user.coachEmail}</div>
                    <div class="col-lg-4">Data urodzenia: </div>
                    <div class="col-lg-8">
                        <Moment unix format="DD.MM.YYYY">{this.props.user.coachDateOfBirth}</Moment>
                    </div>
                    <div class="col-lg-4">Wzrost: </div>
                    <div class="col-lg-8">{this.props.user.coachHeight} cm</div>
                    <div class="col-lg-4">Waga: </div>
                    <div class="col-lg-8">{this.props.user.coachWeight} kg</div>
                    <div class="col-lg-4">Opis: </div>
                    <div class="col-lg-8">{this.props.user.coachDesc}</div>
                </div>            
                );
    }
    
    render() {
              
        return (
                <div>
                    { this.renderNavbar() }
                    <div class="scroll">
                        <div class="main account">
                            <div class="containerTable">
                                { this.renderAccount() }
                            </div>
                        </div>
                    </div>   
                </div>
                );
        
    }
};

export default connect(state => ({
        user: state.user, 
        coach: state.coach
    }), {getUser, logout },
)(Account);