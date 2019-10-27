import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/App.scss';
import _ from 'lodash';

import SideBarLeft from '../components/SideBarLeft';
import UserScoreCard from '../components/UserScoreCard';
import { getUser, logout } from '../actions/UserActions';
import { getUsersScore } from '../actions/PlayersActions';
import { Link } from 'react-router-dom';
import { getSteps } from '../actions/StepsActions';

class Players extends Component {

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
                        <Link to={`/players/${key}`}>
                            <p> { players.name } <b>{ players.email }</b></p>
                        </Link>
                    </SideBarLeft>
                    );
        });
    }
    renderUsersScore() {

        return _.map(this.props.player, (player, key) => {

        var pathToUser = window.location.pathname;
        var keyTo = pathToUser.slice(pathToUser.lastIndexOf("/")+1);
        if(key === keyTo) {
            return (
                <UserScoreCard key={key}
                    name={player.name}
                    email={ player.email }
                    address={ player.address }
                    dateOfBirth={ (player.dateOfBirth/1000) }
                    height={ player.height }
                    weight={ player.weight }
                    genderType={player.genderType}
                    numberOfWorkout={player.numberOfWorkout}
                    userStepsCounterEver={ player.userStepsCounterEver }
                    measureBMI={player.measureBMI}
                    numberOfBmi={player.numberOfBmi} 
                    toMessage={ '/messages/' + key }
                    toBmi={ '/bmi/' + key }
                    toHistory={ '/training/' + key } 
                />
               
                );
    }
    
});
}

    render() {
        
        return (
                <main class="main">
                    
                        { this.renderNavbar() }
                        
                        <section class="containerLeft">  
                            { this.renderSideBarLeft()}
                        </section>
                        <section class="containerRight">  
                            { this.renderSideBarLeft()}
                        </section>

                        <section class="containerCenter">  
                            { this.renderUsersScore()}
                        </section>
                </main>
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