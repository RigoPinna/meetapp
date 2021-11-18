import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authRed } from '../reducers/authReducer';
import { notificationsReducer } from '../reducers/notificationsReducer';
import { groupReducer } from '../reducers/groupReducer';
import { registerReducer } from '../reducers/registerReducer';
import { settingsReducer } from '../reducers/settingsReducer';
const reducers = combineReducers({
    groupReducer,
    registerReducer,
    settingsReducer,
    authRed,
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