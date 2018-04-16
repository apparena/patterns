/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Index from '../../../00-atoms/button';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders a group of buttons', (t) => {
    const wrapper = shallow(
        <Index>
            <Index title="1"/>
            <Index title="2"/>
            <Index title="3"/>
            <Index title="4"/>
        </Index>
    );
    t.is(wrapper.find('div').length, 1);
    t.is(wrapper.html().includes('button'), true);
});