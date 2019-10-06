import { FETCH_STEPS } from '../actions/StepsActions';

export default function (state = {}, action) {
        switch (action.type) {
            case FETCH_STEPS:
                return action.payload;
            default:
                return state;
        }
}