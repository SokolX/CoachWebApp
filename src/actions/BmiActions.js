import { databaseBmi } from '../FirebaseConnector';
export const FETCH_BMI = 'fetch_bmi';
export const BMI_STATUS = 'bmi_status';

export function getBmi() {
    return dispatch => {
        dispatch({
            type: BMI_STATUS,
            payload: true
        });
        
        databaseBmi.on('value', data => {
            dispatch({
                type: BMI_STATUS, 
                payload: false
            });
            
            dispatch({ 
                type: FETCH_BMI, 
                payload: data.val()
            });
            
        }, () => {
            dispatch({
                type: BMI_STATUS,
                payload: -1
            });
        });
    };
}