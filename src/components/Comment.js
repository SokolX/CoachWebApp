/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
const Comment = (props) => {
  return (
    <div className="mt-3">
      <div className="card card-outline-secondard">
        <div className="card-block">
          {props.body}
          {props.delete && <button className="btn btn-danger float-right" onClick={props.deleteComment}>Delete</button>}
        </div>
      </div>
    </div>
  );
};

export default Comment;