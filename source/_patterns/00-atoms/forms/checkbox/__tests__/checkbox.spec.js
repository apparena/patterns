/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import CheckBox from '../index';

test('renders with default text', () => {
    const wrapper = shallow(
        <CheckBox/>
    );
    expect(wrapper.find('.form-check')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('label').contains('identifier missing!')).to.equal(true);
});

test('listens to change', () => {
    const onSelect = spy();
    const wrapper = mount(
        <CheckBox onFilterSelect={onSelect}/>
    );
    wrapper.find('input').simulate('change');
    expect(onSelect).to.have.property('callCount', 1);
});

test('sends values to the change event', () => {
    const onChange = spy();
    const wrapper = mount(
        <CheckBox text="hello" onFilterSelect={onChange}/>
    );
    wrapper.find('input').simulate('change');
    expect(onChange.calledOnce).to.equal(true);
    expect(onChange.firstCall.args).to.have.length(2);
    expect(typeof onChange.firstCall.args[0]).to.equal(typeof {});
    expect(typeof onChange.firstCall.args[1]).to.equal(typeof '');
});