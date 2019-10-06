/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { databaseCoach } from '../FirebaseConnector';
export const FETCH_COACH = 'fetch_coach';
export const COACH_STATUS = 'coach_status';

export function getCoach() {
    return dispatch => {
        dispatch({
            type: COACH_STATUS,
            payload: true
        });
        
        databaseCoach.on('value', data => {
            dispatch({
                type: COACH_STATUS, 
                payload: false
            });
            
            dispatch({ 
                type: FETCH_COACH, 
                payload: data.val()
            });
            
        }, () => {
            dispatch({
                type: COACH_STATUS,
                payload: -1
            });
        });
    };
}