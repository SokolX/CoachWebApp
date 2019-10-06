/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, { Component } from 'react';
import { Table } from 'reactstrap';


export default class TableGenerall extends Component {
    
        render() {
        const { thead, tbody } = this.props;
        
        return (
                <div>
                    <Table responsive>
                        <thead>
                            {thead}
                        </thead>
                        <tbody>
                            {tbody} 
                        </tbody>
                    </Table>
                </div>
            )
    }
}
