import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostReducer from './PostReducer'
import UserReducer from './UserReducer'
import LoadingReducer from './LoadingReducer'
import PlayersReducer from './PlayersReducer'
import StepsReducer from './StepsReducer'
import BmiReducer from './BmiReducer'
import MessagesReducer from './MessagesReducer'

const rootReducer = combineReducers({
    form: formReducer,
    posts: PostReducer, 
    user: UserReducer, 
    loading: LoadingReducer, 
    players: PlayersReducer, 
    steps: StepsReducer,
    bmi: BmiReducer,
    messages: MessagesReducer, 
});

export default rootReducer;