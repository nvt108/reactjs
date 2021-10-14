import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect,assert } from 'chai';
import {getBooks} from "./selector";

describe('Selector', () => {
    it("selector test", () => {
        const state = {
            book: {
                saleOff: 10, // 10/%
                books: [
                    {id: 1, price: 10},
                    {id: 2, price: 9},
                    {id: 3, price: 1000},
                ]
            }
        };

        const booksResult = [
            {id: 1, price: 10, salePrice: "9.00"},
            {id: 2, price: 9, salePrice: "8.10"},
            {id: 3, price: 1000, salePrice: "900.00"},
        ];
        assert.deepEqual(getBooks(state),booksResult);
    });

});