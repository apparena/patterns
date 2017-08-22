/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import CustomControl from '../custom-control';

test('renders checkboxes', (t) => {
    const wrapper = shallow(
        <CustomControl label="custom-box" />
            
    );
    t.is(wrapper.is('div'), true)
});