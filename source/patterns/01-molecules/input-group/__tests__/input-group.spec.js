/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import InputGroup from '../input-group';
import Input from '../../../00-atoms/forms/input';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders an InputGroup', (t) => {
    const wrapper = shallow(
        <InputGroup>
            <Input />
            <Input />
        </InputGroup>
    );
    t.is(wrapper.html().includes('span'), true);
    t.is(wrapper.html().includes('input'), true);
});