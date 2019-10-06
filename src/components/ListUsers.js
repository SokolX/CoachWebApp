/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import SimpleBox from '../Components/SimpleBox';
import { logout } from '../Actions/UserActions';

class StepDetail extends Component {
  
    renderUsers() {
    const { userData, uid } = this.props;
    console.log(userData);
    return _.map(_.filter(userData, (user, key) => {
      return key !== uid;
    }), (user, key) => {
      return (
        <SimpleBox key={key} title="User's Name">
          <div className="card-body text-center">
            {user.fname} {user.lname}
          </div>
         
        </SimpleBox>
      );
    });
  }

  render() {
    const { uid, userData } = this.props;
    return (
      <div>
        {uid &&
        <div className="text-center text-white">
          <h1>Welcome {userData[uid].fname} {userData[uid].lname}</h1></div>}
        {this.renderUsers()}
      </div>
    );
  }
};

function mapStateToProps(state) {
  const checkedUser = state.user || {};
  return { uid: checkedUser.uid, userData: state.step };
}

export default connect(mapStateToProps, { logout })(StepDetail);