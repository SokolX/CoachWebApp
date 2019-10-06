import { databaseSteps } from '../FirebaseConnector';

/*
 * typy akcji
 */
export const FETCH_STEPS = 'fetch_steps';
export const STEPS_STATUS = 'steps_status';

/*
 *twórcy akcji
 */
export function getSteps() {
    return dispatch => {
        dispatch({
            type: STEPS_STATUS,
            payload: true
        });

        databaseSteps.on('value', data => {
            dispatch({
                type: STEPS_STATUS,
                payload: false
            });

            dispatch({
                type: FETCH_STEPS,
                payload: data.val()
            });
        }, () => {
            dispatch({
                type: STEPS_STATUS,
                payload: -1
            });
        });
    };
}