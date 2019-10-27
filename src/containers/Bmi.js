import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/App.scss';
import _ from 'lodash';
import SideBarLeft from '../components/SideBarLeft';
import { Link } from 'react-router-dom';
import { getUser, logout } from '../actions/UserActions';
import { getUsersScore } from '../actions/PlayersActions';
import { getSteps } from '../actions/StepsActions';

class Bmi extends Component {

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
        
    renderSideBarLeft() {
        return _.map(this.props.players, (players, key) => {
            return (
                    
                    <SideBarLeft>
                    <Link to={`/bmi/${key}`}><li class="list-group-item"> { players.name }
                                <span class="badge">  {players.measureBMI} </span>
                            </li></Link>
                    </SideBarLeft>
                    );
        });

    }

    render() {
                
        return (
                <main class="main">

                    { this.renderNavbar() }
                    
                        <section class="containerLeft">    
                            { this.renderSideBarLeft() }
                        </section>
                    

                </main>
               
                );
    }
};

export default connect(state => ({
        user: state.user, 
        players: state.players, 
        bmi: state.bmi
    }), {getUsersScore, getUser, logout, getSteps },
)(Bmi);