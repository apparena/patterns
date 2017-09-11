/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import Card from '../card';

test('renders a card', (t) => {
    const wrapper = shallow(
        <Card/>
    );
    t.is(wrapper.is('div'), true);
});