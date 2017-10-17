/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import InputGroup from '../input-group';
import Input from '../../../00-atoms/forms/input';

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