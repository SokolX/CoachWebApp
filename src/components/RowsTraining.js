import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const RowsTraining = (props) => {

    return (
            <tr>
                <td scope="row">{props.step_id}</td>
                <td><Moment unix format="YYYY-MM-DD HH:mm:ss" unix tz="Europe/Warsaw">{(props.startTime/1000)}</Moment></td>
                <td><Moment unix format="YYYY-MM-DD HH:mm:ss" unix tz="Europe/Warsaw">{(props.stopTime/1000)}</Moment></td>
                <td>{props.stepCounter}</td>
                <td>{props.duration}</td>
            </tr>
            );
};

export default RowsTraining;