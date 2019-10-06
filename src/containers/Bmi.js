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
                        <a class="nav-link active" title="Pomiary BMI sportowców"><Link to="/bmi">BMI</Link></a>
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
                </nav>
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
                <div>

                    { this.renderNavbar() }
                    <div class="scroll">
                        <div class="left">    
                            { this.renderSideBarLeft() }
                        </div>
                    </div>

                </div>
               
                );
    }
};

export default connect(state => ({
        user: state.user, 
        players: state.players, 
        bmi: state.bmi
    }), {getUsersScore, getUser, logout, getSteps },
)(Bmi);