import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { book } from './books/reducer';
import { combineReducers } from "redux";
const reducers = combineReducers({
    book,
});
export const store = createStore(reducers, applyMiddleware(thunk));