import React, { Component } from 'react';

export default class Box extends Component {

render() {
    const { title, body, footer } = this.props;
        
    return (
            <div>
                <main class="main-start-page">
                    <h1>{title}</h1>
                        {body}          
                        {footer}  
                </main>               
            </div>
        )
    }
}
