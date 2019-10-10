import React, { Component } from 'react';

export default class Box extends Component {

render() {
    const { title, body, footer } = this.props;
        
    return (
            <main class="auth">
                <h1 class="auth__header">{title}</h1>
                {body}        
                {footer}  
            </main>               
        )
    }
}
