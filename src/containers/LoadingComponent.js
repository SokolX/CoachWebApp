/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/UserActions';
import { getPosts } from '../actions/PostActions';
import { getUsersScore } from '../actions/PlayersActions';
import { getSteps } from '../actions/StepsActions';
import { getBmi } from '../actions/BmiActions';
import { getMessages } from '../actions/MessagesActions'; 

class LoadingComponent extends Component {
    
    componentWillMount() {
        const { playersLoading, userLoading, postsLoading, stepsLoading, bmiLoading, messagesLoading } = this.props;
        if(userLoading === undefined) {
            this.props.getUser();
        }
        if(postsLoading === undefined) {
            this.props.getPosts();
        }
        
        if(playersLoading === undefined) {
            this.props.getUsersScore();
        }
        
        if(stepsLoading === undefined) {
            this.props.getSteps();
        }
        
        if(bmiLoading === undefined) {
            this.props.getBmi();
        }
        
        
        if(messagesLoading === undefined) {
            this.props.getMessages();
        }
        
        console.log('componentWillMount! -> Loading Component');
    }
    
    componentWillReceiveProps(nextProps) {

        if(nextProps.postsLoading === -1 && nextProps.user !== null) {
            this.props.getPosts();
            console.log('componentWillReceiveProps! -> Loading Component');
        }
        
        else if(nextProps.playersLoading === -1 && nextProps.user !== null) {
            this.props.getUsersScore();
            console.log('componentWillReceiveProps! -> Loading Component');
        }
                
        else if(nextProps.stepsLoading === -1 && nextProps.user !== null) {
            this.props.getSteps();
            console.log('componentWillReceiveProps! -> Loading Component');
        } 
        
        else if(nextProps.bmiLoading === -1 && nextProps.user !== null) {
            this.props.getBmi();
            console.log('componentWillReceiveProps! -> Loading Component');
        }
        
        else if(nextProps.messagesLoading === -1 && nextProps.user !== null) {
            this.props.getMessages();
            console.log('componentWillReceiveProps! -> Loading Component');
        }
    }
    
    render() {
        const { userLoading, postsLoading, playersLoading, stepsLoading, bmiLoading, messagesLoading, children } = this.props;
        
        if((!userLoading && !postsLoading) || (this.props.user === null)) {
            return(
                <div>
                    {children}
                </div>
                );
        
        } else if((!userLoading && !playersLoading) || (this.props.user === null)) {
            return(
                <div>
                    {children}
                </div>
                );
        } else if((!userLoading && !stepsLoading) || (this.props.user === null)) {
            return(
                <div>
                    {children}
                </div>
                );
        } else if((!userLoading && !bmiLoading) || (this.props.user === null)) {
            return(
                <div>
                    {children}
                </div>
                );
        
        } else if((!userLoading && !messagesLoading) || (this.props.user === null)) {
            return(
                <div>
                    {children}
                </div>
                );

        } else {
            return (
                    <div><i class="fa fa-spinner fa-spin"></i>Loading...</div>
                    );         
            }    
        } 
};

function mapStateToProps(state) {
    return { 
        userLoading: state.loading.user, 
        postsLoading: state.loading.posts, 
        playersLoading: state.loading.players,
        stepsLoading: state.loading.steps,
        bmiLoading: state.loading.bmi, 
        messagesLoading: state.loading.messages, 
        user: state.user 
    };
}

export default withRouter(connect(mapStateToProps, { getUser, getPosts, getUsersScore, getSteps, getBmi, getMessages })(LoadingComponent));