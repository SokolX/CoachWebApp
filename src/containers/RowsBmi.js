import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const RowsBmi = (props) => {
    
    return (
            <tr>
                <td scope="row">{props.measure_id}</td>
                <td><Moment unix format="YYYY-MM-DD HH:mm:ss" unix tz="Europe/Warsaw">{(props.dateBmiMeasure/1000)}</Moment></td>
                <td>{props.weight}</td>
                <td>{props.bmi}</td>
                <td>{props.zakres}</td>
            </tr>
            );
};

export default RowsBmi;

                