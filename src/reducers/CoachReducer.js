/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { FETCH_COACH } from '../actions/CoachActions';

export default function (state = {}, action) {
        switch (action.type) {
            case FETCH_COACH:
                return action.payload;
            default:
                return state;
        }
}