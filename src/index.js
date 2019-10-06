import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';
import LoadingComponent from './containers/LoadingComponent';
import AuthenticatedComponent from './containers/AuthenticatedComponent';
import Players from './containers/Players';
import PlayersDetail from './containers/PlayersDetail';
import Training from './containers/Training'
import TrainingDetail from './containers/TrainingDetail';
import Bmi from './containers/Bmi'
import BmiDetail from './containers/BmiDetail';
import Blog from './containers/Blog';
import PostDetail from './containers/PostDetail';
import Messages from './containers/Messages'
import Conversation from './containers/Conversation';
import Account from './containers/Account'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <LoadingComponent>
            <Switch>
                <Route path="/createAccount" component={CreateAccount}/>
                <Route path="/login" component={Login}/>
                <AuthenticatedComponent>
                    <Route path="/players" component={Players}/>
                    <Route path="/players/:id" component={PlayersDetail}/>
                    <Route path="/training" component={Training}/>
                    <Route path="/training/:id" component={TrainingDetail}/>
                    <Route path="/bmi" component={Bmi}/>
                    <Route path="/bmi/:id" component={BmiDetail}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/blog/:id" component={PostDetail}/>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/messages/:id" component={Conversation}/>
                    <Route path="/account" component={Account}/>
                </AuthenticatedComponent>                 
            </Switch>
        </LoadingComponent>
    </BrowserRouter>
</Provider>,
document.getElementById('root'));
registerServiceWorker();

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
