/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Icon from '../index';

test('renders an icon', () => {
    const wrapper = shallow(
        <Icon iconClass="custom-icon-class"/>
    );
    expect(wrapper.find('i')).to.have.length(1);
    expect(wrapper.find('i.custom-icon-class')).to.have.length(1);
});