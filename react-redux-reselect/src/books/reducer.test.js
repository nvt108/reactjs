import React from 'react';
import { expect,assert } from 'chai';
import book from "./reducer";

describe('Reducers', () => {
    it("selector test", () => {
        const action = {type: 'ADD'};
        const state = {
            books: [
                {id: 1, name: 'You!!', price: 10},
            ]
        };
        const result = {
            books: [
                {id: 1, name: 'You!!', price: 10},
                {id: 2, name: ''},
            ],
            saleOff: 10
        };
        assert.deepEqual(book(state,action),result);
    });

});