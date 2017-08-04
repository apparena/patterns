/* eslint-env mocha */
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
});