/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import Nav from '../index';
import NavItem from '../../nav-item/index';

test('renders nav', (t) => {
    const wrapper = shallow(
        <Nav classNames="custom-nav">
            <NavItem>
                <a>Hello</a>
            </NavItem>
            <NavItem>
                <a>World</a>
            </NavItem>
        </Nav>
    );
    t.is(wrapper.find('ul').length, 1);
    t.is(wrapper.html().includes('li'), true);
    t.is(wrapper.html().includes('a'), true);
});