/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders a card', (t) => {
    const wrapper = shallow(
        <Index/>
    );
    t.is(wrapper.is('div'), true);
});