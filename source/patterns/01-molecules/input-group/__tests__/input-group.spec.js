/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Input from '../../../00-atoms/forms/input/index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders an InputGroup', () => {
    const wrapper = shallow(
        <Index>
            <Input />
            <Input />
        </Index>
    );
    expect(wrapper.html().includes('span')).toBe(true);
    expect(wrapper.html().includes('input')).toBe(true);
});