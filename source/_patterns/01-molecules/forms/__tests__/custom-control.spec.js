/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import CustomControl from '../custom-control';

test('renders checkboxes', (t) => {
    const wrapper = shallow(
        <CustomControl
            type="checkbox"
            label="custom-box"
        >
            <input
                onChange={() => {}}
                checked
                type="checkbox"
                name="showAll"
            />
        </CustomControl>
    );
    t.is(wrapper.is('div'), true);
});