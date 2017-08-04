/* eslint-env mocha */
<<<<<<< HEAD
import React from "react";
import {shallow, mount} from "enzyme";
import {spy} from "sinon";
import CheckBox  from "../index";
import {test} from 'ava';

test.failing('check default Tooltip options', t => {
    const wrapper = shallow(
        <CheckBox />
    );
    t.is(wrapper.find('tooltip').length, 1);
});

test('listens to the change', t => {
    const onSelect = spy();
    const wrapper = mount(
        <CheckBox onChange={onSelect} />
    );
    wrapper.find('input').simulate('change');
    t.is(onSelect.calledOnce, true);
});

test.failing('CheckBox without Tooltip', t => {
    const wrapper = shallow(
        <CheckBox renderTooltip="false"/>
    )
    t.is(wrapper.find('Tooltip').length, 0)
})

test.failing('sends values to the change event', t => {
    const onChange = spy();
    const wrapper = mount(
        <CheckBox text="hello" onChange={onChange} />
    );
    wrapper.find('input').simulate('change');
    t.is(onChange.calledOnce, true);
    t.is(typeof onChange.firstCall.args[0], typeof {});
    t.is(typeof onChange.firstCall.args[1], typeof "");
=======
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
>>>>>>> 3c3bc4e8471f121b9a788fcf2d6b5090fe331479
});