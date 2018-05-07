/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders a card', () => {
    const wrapper = shallow(
        <Index/>
    );
    expect(wrapper.is('div')).toBe(true);
});