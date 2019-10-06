import { FETCH_PLAYERS } from '../actions/PlayersActions';

export default function (state = {}, action) {
        switch (action.type) {
            case FETCH_PLAYERS:
                return action.payload;
            default:
                return state;
        }
}