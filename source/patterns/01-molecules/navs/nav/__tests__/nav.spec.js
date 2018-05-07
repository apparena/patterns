/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Nav from '../index';
import NavItem from '../../nav-item/index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders nav', () => {
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
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.html().includes('li')).toBe(true);
    expect(wrapper.html().includes('a')).toBe(true);
});