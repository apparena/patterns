/* eslint-env mocha */
import React from "react";
import {shallow, mount, configure} from "enzyme";
import {spy} from "sinon";
import CheckBox  from "../index";
import {test} from 'ava';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('listens to the change', (t) => {
    const onSelect = spy();
    const wrapper = mount(
        <CheckBox onChange={onSelect} />
    );
    wrapper.find('input').simulate('change');
    t.is(onSelect.calledOnce, true);
});

test('CheckBox without Tooltip', (t) => {
    const wrapper = shallow(
        <CheckBox renderTooltip={false}/>
    )
    t.is(wrapper.instance().props.renderTooltip, false)
})

test('sends values to the change event', (t) => {
    const onChange = spy();
    const wrapper = mount(
        <CheckBox text="hello" onChange={onChange} />
    );
    wrapper.find('input').simulate('change');
    t.is(onChange.calledOnce, true);
    t.is(typeof onChange.firstCall.args[0], typeof {});
});