/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import InputGroup from '../input-group';

test('renders an InputGroup', () => {
    const wrapper = shallow(
        <InputGroup input={<input type="text"/>} addon="§"/>
    );
    expect(wrapper.find('div.input-group')).to.have.length(1);
    expect(wrapper.find('span + input')).to.have.length(1);
    expect(wrapper.find('div.input-group > span')).to.have.length(1);
    expect(wrapper.find('div.input-group > span').contains('§')).to.equal(true);
});

test('renders an InputGroup to the right if requested', () => {
    const wrapper = shallow(
        <InputGroup input={<input type="text"/>} addon="§" addonPosition="right"/>
    );
    expect(wrapper.find('div.input-group')).to.have.length(1);
    expect(wrapper.find('input + span')).to.have.length(1);
    expect(wrapper.find('div.input-group > span')).to.have.length(1);
    expect(wrapper.find('div.input-group > span').contains('§')).to.equal(true);
});