import { POST_STATUS } from '../actions/PostActions';
import { USER_STATUS } from '../actions/UserActions';
import { STEPS_STATUS } from '../actions/StepsActions';
import { BMI_STATUS } from '../actions/BmiActions';
import { PLAYERS_STATUS } from '../actions/PlayersActions';
import { MESSAGES_STATUS } from '../actions/MessagesActions';

export default function (state = {}, action) {
    switch (action.type) {
        case POST_STATUS:
            return { ...state, posts: action.payload };
        case USER_STATUS :
            return { ...state, user: action.payload };
        case STEPS_STATUS :
            return { ...state, steps: action.payload };
        case BMI_STATUS :
            return { ...state, bmi: action.payload };
        case PLAYERS_STATUS :
            return { ...state, players: action.payload };
        case MESSAGES_STATUS :
            return { ...state, messages: action.payload };
        default:
            return state;
    }
}