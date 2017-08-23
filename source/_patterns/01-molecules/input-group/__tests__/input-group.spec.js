/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import InputGroup from '../input-group';

test('renders an InputGroup', (t) => {
    const wrapper = shallow(
        <InputGroup input={<input type="text"/>} addon="§"/>
    );
    t.is(wrapper.find('div.input-group').length, 1);
    t.is(wrapper.find('span + input').length, 1);
    t.is(wrapper.find('div.input-group > span').length, 1);
    t.is(wrapper.find('div.input-group > span').contains('§'), true);
});

test('renders an InputGroup to the right if requested', (t) => {
    const wrapper = shallow(
        <InputGroup input={<input type="text"/>} addon="§" addonPosition="right"/>
    );
    t.is(wrapper.find('div.input-group').length, 1);
    t.is(wrapper.find('input + span').length, 1);
    t.is(wrapper.find('div.input-group > span').length, 1);
    t.is(wrapper.find('div.input-group > span').contains('§'), true);
});