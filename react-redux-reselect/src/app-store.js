import { createStore } from 'redux';
import { book } from './books/reducer';
import { combineReducers } from "redux";
const reducers = combineReducers({
    book,
});
export const store = createStore(reducers);