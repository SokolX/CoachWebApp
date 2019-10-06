import React, { Component }  from 'react';

export default class SideBarLeft extends Component {

    render() {
        return (
                <div>
                    <ul class="list-group">
                            {this.props.children}
                    </ul>
                </div>
                );
    }
};