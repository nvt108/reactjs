import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import BookManager from './books/component/BookManager'
import { Provider } from 'react-redux';
import {store} from "./app-store";

ReactDOM.render(
    <Provider store={store}>
        <BookManager />
    </Provider>,
    document.getElementById('root')
);