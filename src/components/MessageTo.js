/*
 * Importuje z npm paczkę moment do obsługi czasu unix. 
 */

import React from 'react';
import Moment from 'react-moment';

const MessageTo = (props) => {
    
    return (
            <div>
                <div className="containerMessageTo">
                    <div class="contentMessageTo">
                        {props.contentMessage}
                    </div>
                    <span class="time-right">
                        <Moment unix format="YYYY.MM.DD HH:MM">{(props.dateSend/1000)}</Moment>
                    </span>
                </div>
            </div>
            );
};
export default MessageTo;