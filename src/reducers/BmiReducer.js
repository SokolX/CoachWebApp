import { FETCH_BMI } from '../actions/BmiActions';

export default function (state = {}, action) {
        switch (action.type) {
            case FETCH_BMI:
                return action.payload;
            default:
                return state;
        }
}