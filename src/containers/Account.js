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
            <header class="header">
            <nav class="navigation">
                <ul class="navigation__list navigation__list--js">
                    <li class="navigation__item">
                        <a class="navigation__link" title="Dane sportowców"><Link to="/players">Sportowcy</Link></a>
                    </li>
                    <li class="navigation__item">
                        <a class="navigation__link" title="Treningi sportowców"><Link to="/training">Trainings</Link></a>
                    </li>
                    <li class="navigation__item">
                        <a class="navigation__link" title="Pomiary BMI sportowców"><Link to="/bmi">BMI</Link></a>
                    </li>
                    <li class="navigation__item">
                        <a class="navigation__link" title="Napisz post na blogu"><Link to="/blog">Blog</Link></a>
                    </li>
                    <li class="navigation__item">
                        <a class="navigation__link" title="Rozmowy ze sportowcami"><Link to="/messages">Messages</Link></a>
                    </li>
                    <li class="navigation__item">
                        <a class="navigation__link" title="Twoje dane"><Link to="/account">Account</Link></a>
                    </li>
                    <li class="navigation__item">
                      <a class="navigation__link"  title="Opuść aplikację" onClick={() => { this.props.logout();}}>Log out</a>
                    </li>
                </ul>
            </nav>

    <button class="navigation__switcher navigation__switcher--js" aria-label="Open the navigation">&#9776</button>

</header>
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
                <main class="main">
                    { this.renderNavbar() }
                    <section class="containerCenter">
                        { this.renderAccount() }
                    </section>
                </main>
                );
        
    }
};

export default connect(state => ({
        user: state.user, 
        coach: state.coach
    }), {getUser, logout },
)(Account);