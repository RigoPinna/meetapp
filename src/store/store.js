import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { groupReducer } from '../reducers/groupReducer';
import { registerReducer } from '../reducers/registerReducer';
import { settingsReducer } from '../reducers/settingsReducer';

const reducers = combineReducers({
    groupReducer,
    registerReducer,
    settingsReducer,
});


export const store = createStore( 
    reducers,
    compose(
        applyMiddleware( thunk )
    )
);