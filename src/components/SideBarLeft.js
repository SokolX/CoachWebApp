import React, { Component }  from 'react';

export default class SideBarLeft extends Component {

    render() {
        return (
                <div class="">
                        {this.props.children}
                </div>
                );
    }
};