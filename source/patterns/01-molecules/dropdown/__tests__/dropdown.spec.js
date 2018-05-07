/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders a dropdown', () => {
    const wrapper = shallow(
        <Index>
            <ul className="dropdown-menu">
                <li className="dropdown-item">1</li>
                <li className="dropdown-item">2</li>
            </ul>
        </Index>
    );
    console.log(wrapper.html())
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('li').length).toBe(2);
});