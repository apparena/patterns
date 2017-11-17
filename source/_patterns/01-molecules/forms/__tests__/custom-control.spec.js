/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import CustomControl from '../custom-control';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

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