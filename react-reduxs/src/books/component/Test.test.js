import 'jsdom-global/register';
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Test from './Test';
import { expect } from 'chai';


describe('<Test />', () => {
    it('renders an `class .app`', () => {
        const wrapper = shallow(<Test />);
        expect(wrapper.find('.app')).to.have.lengthOf(1);
    });

    it("should render my component", () => {
        const wrapper  = shallow(<Test />);
        expect(wrapper.contains(<h1>nguyen</h1>)).to.equal(true);
        expect(wrapper.contains(<th>ID</th>)).to.equal(true);
    });
});

