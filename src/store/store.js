import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authRed } from '../reducers/authReducer';
import { notificationsReducer } from '../reducers/notificationsReducer';
import { groupReducer } from '../reducers/groupReducer';
import { registerReducer } from '../reducers/registerReducer';
import { settingsReducer } from '../reducers/settingsReducer';
import { chatReducer } from '../reducers/chatReducer';
const reducers = combineReducers({
    authRed,
    registerReducer,
    groupReducer,
    settingsReducer,
    chatReducer,
    notificationsReducer,
});
const composeEnhancers = 
    ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;
export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);