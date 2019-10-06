import React, { Component }  from 'react';

export default class SideBarRight extends Component {

    render() {
        return (

                    <div className="sidebar-right">
                        <div className="sidebar-right-title"> 
            
                            {this.props.children}

                        </div>
                    </div>
                    
                );
    }
};