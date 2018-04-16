/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Input from '../../../00-atoms/forms/input/index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders an InputGroup', (t) => {
    const wrapper = shallow(
        <Index>
            <Input />
            <Input />
        </Index>
    );
    t.is(wrapper.html().includes('span'), true);
    t.is(wrapper.html().includes('input'), true);
});