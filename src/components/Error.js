/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';

const Error = (props) => {
    return (
            <div className="alert alert-danger" role="alert">
                { props.children }
            </div>
        );
};

export default Error;