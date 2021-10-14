import 'jsdom-global/register';
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ListBook from './ListBook';
import {store} from "../../app-store";
import { expect } from 'chai';

describe('<ListBook />', () => {
    it("should render my component", () => {
        const wrapper = shallow(<ListBook store={store}/>).dive();
    });
});