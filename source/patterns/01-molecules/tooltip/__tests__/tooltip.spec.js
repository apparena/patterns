/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Index from '../../../00-atoms/button';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders tooltip', (t) => {
    const wrapper = shallow(
        <Index label="Test"><Index>Test</Index></Index>
    );
    t.is(wrapper.find('div').length, 1);
});
