import React, { Component } from 'react';
import { Table } from 'reactstrap';
let order = 'desc';

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
