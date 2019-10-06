import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/App.scss';
import _ from 'lodash';

import SideBarLeft from '../components/SideBarLeft'
import { getUser, logout } from '../actions/UserActions';
import { getUsersScore } from '../actions/PlayersActions';
import { Link } from 'react-router-dom';
import { getSteps } from '../actions/StepsActions';

class Players extends Component {

    renderNavbar() {
        return(
            <header class="site-header">
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
                    </ul>
                </nav>

        <button class="navigation__switcher navigation__switcher--js" aria-label="Open the navigation">&#9776</button>

    </header>
/*
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
                          <a class="nav-link active" title="Dane sportowców"><Link to="/players">Sportowcy</Link></a>
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
                        <a class="nav-link" title="Twoje dane"><Link to="/account">Konto</Link></a>
                        </li>
                        <li class="nav-item last-item">
                          <a class="nav-link"  title="Opuść aplikację"onClick={() => { this.props.logout();}}>Wyloguj</a>
                        </li>
                       </ul>
                    </div>
                  </nav>*/
                );  
    }
    
    renderSideBarLeft() {
        return _.map(this.props.players, (players, key) => {
            return (
                    <SideBarLeft>
                        <Link to={`/players/${key}`}>
                            <li class="list-group-item"> { players.name } <b>{ players.email }</b></li>
                        </Link>
                    </SideBarLeft>
                    );
        });
    }

    render() {
        
        return (
                <div>
                    { this.renderNavbar() }
                    <div class="scroll">
                        <div class="left">  
                            { this.renderSideBarLeft()}
                        </div>
                    </div>
                </div>
                );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user, 
        players: state.players
    };
};
/*
 * 
const mapDispatchToProps = (dispatch) => {
    return {
        getUsersScore, 
        getUser, 
        logout, 
        getSteps
    };
};
 */
export default connect(mapStateToProps, {getUsersScore, getUser, logout, getSteps})(Players);