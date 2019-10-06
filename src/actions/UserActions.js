import { auth, databaseCoach } from '../FirebaseConnector';
export const GET_USER = 'get_user';
export const FETCH_USER = 'fetch_user';
export const USER_STATUS = 'user_status';

export function getUser() {
    
    return dispatch => {
        dispatch({
            type: USER_STATUS,
            payload: true
        });
        
        auth.onAuthStateChanged(user => {
            dispatch({
                type: GET_USER,
                payload: user
            });
            dispatch({
            type: USER_STATUS,
            payload: false
        });

        databaseCoach.child(user.uid).on('value', data => {
            dispatch({
                type: USER_STATUS,
                payload: false
            });

            dispatch({
                type: FETCH_USER,
                payload: data.val()
            });
            console.log('user data =', data.val());
        }, () => {
            dispatch({
                type: USER_STATUS,
                payload: -1
            });
        });
        });
    };
}

export function login(email, password) {
    return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return dispatch => auth.signOut();
}

export function createAccount(email, password) {
  return dispatch => auth.createUserWithEmailAndPassword(email, password);
}