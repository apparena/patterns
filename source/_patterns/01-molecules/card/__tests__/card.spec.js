/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Card from '../card';

test('renders a card', () => {
    const wrapper = shallow(
        <Card/>
    );
    expect(wrapper.is('div')).toBeTruthy();
});