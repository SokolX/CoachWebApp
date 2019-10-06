import { databaseMessages } from '../FirebaseConnector'
export const FETCH_MESSAGES = 'fetch_messages';
export const MESSAGES_STATUS = 'messages_status';

export function getMessages() {
    return dispatch => {
        dispatch({
            type: MESSAGES_STATUS,
            payload: true
        });
        
        databaseMessages.on('value', data => {
            dispatch({
                type: MESSAGES_STATUS, 
                payload: false
            });
            
            dispatch({
                type: FETCH_MESSAGES, 
                payload: data.val()
            });
        }, () => {
            dispatch({
                type: MESSAGES_STATUS,
                payload: -1
            });
        });
    };
}

export function messagesReciver(rate, id, uid) {
  return dispatch => databaseMessages.child(id).child('rate').push({ content: rate.content, uid });
}

export function sendMessage(comment, dateSend, keyFrom, keyTo) {
      console.log(keyTo);
    return dispatch => databaseMessages.child(keyTo).push({ contentMessage: comment.contentMessage, dateSend, keyFrom, keyTo });
}