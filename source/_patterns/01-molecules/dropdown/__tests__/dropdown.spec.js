/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import Dropdown from '../dropdown';

test('renders a dropdown', (t) => {
    const wrapper = shallow(
        <Dropdown>
            <ul className="dropdown-menu">
                <li className="dropdown-item">1</li>
                <li className="dropdown-item">2</li>
            </ul>
        </Dropdown>
    );
    t.is(wrapper.find('div.dropdown').length, 1);
    t.is(wrapper.find('li').length, 2);
});