import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import UserScoreCard from '../components/UserScoreCard';

class PlayersDetail extends Component {
  
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
    const { player } = this.props;
    
    if(!player) 
        return null;

    return (
            <div class="main">
                <div class="containerTable">
                    { this.renderUsersScore() }
                </div>
            </div>
                
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {  
      player: state.players,
      user: state.user
  };
}

export default connect(mapStateToProps)(PlayersDetail);