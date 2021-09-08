import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { groupReducer } from '../reducers/groupReducer';

const reducers = combineReducers({
    groupReducer,
   
});


export const store = createStore( 
    reducers,
    compose(
        applyMiddleware( thunk )
    )
);