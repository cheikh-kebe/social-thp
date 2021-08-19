import { createStore, compose, applyMiddleware } from 'redux';
import { allReducers } from '../reducers';
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(allReducers, composedEnhancer);/*this action allows to display all the actions in the redux extension in our browser */
