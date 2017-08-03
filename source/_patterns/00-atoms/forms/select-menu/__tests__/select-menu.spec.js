/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import SelectMenu from '../index';

test('renders elements correctly', () => {
    const wrapper = shallow(
        <SelectMenu id="custom-select-menu" options={[1, 2, 3, 4, 5]}/>
    );
    expect(wrapper.find('select')).to.have.length(1);
    expect(wrapper.find('optgroup')).to.have.length(1);
    expect(wrapper.find('option')).to.have.length(5);
});

test('handles change correctly', () => {
    const onChange = spy();
    const wrapper = mount(
        <SelectMenu id="custom-select-menu" options={[1, 2, 3, 4, 5]} onChangeFunction={onChange}/>
    );
    wrapper.find('select').simulate('change', {target: {value: 4}});

    expect(onChange).to.have.property('callCount', 1);
    expect(onChange.firstCall.args[0]['target']['value']).to.equal(4);
    expect(wrapper.find('select')).to.have.length(1);
    expect(wrapper.find('optgroup')).to.have.length(1);
    expect(wrapper.find('option')).to.have.length(5);
});