import React from 'react';
import Moment from 'react-moment';

const MessageFrom = (props) => {

    return (
            <div>
                <div className="containerMessageFrom">
                    <div class="contentMessageFrom">
                        {props.contentMessage}
                    </div>
                    <span class="time-left">
                        <Moment unix format="YYYY.MM.DD HH:MM">{(props.dateSend/1000)}</Moment>
                    </span>
                </div>
            </div>
            );
};
export default MessageFrom;