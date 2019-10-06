import { databasePlayers } from '../FirebaseConnector';
export const FETCH_PLAYERS = 'fetch_players';
export const PLAYERS_STATUS = 'players_status';

export function getUsersScore() {
    return dispatch => {
        dispatch({
            type: PLAYERS_STATUS,
            payload: true
        });
        
        databasePlayers.on('value', data => {
            dispatch({
                type: PLAYERS_STATUS, 
                payload: false
            });
            
            dispatch({ 
                type: FETCH_PLAYERS, 
                payload: data.val()
            });
        }, () => {
            dispatch({
                type: PLAYERS_STATUS,
                payload: -1
            });
        });
    };
}