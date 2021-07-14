import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReduser from './authReduser';
import dialogsPageReduser from './dialogsPageReduser';
import proffilePageReduser from './proffilePageReduser';
import usersPageReduser from './usersPageReduser';
import thunkMiddleware from 'redux-thunk';
import appReduser from './appReduser';
import musicReduser from './musicReduser';

let redusers = combineReducers(  
    {
        proffilePage: proffilePageReduser,  
        dialogsPage: dialogsPageReduser,
        usersPage: usersPageReduser,
        auth: authReduser,
        app: appReduser,
        music: musicReduser
    }
);
// let store = createStore(redusers, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware))); 

export default store;
