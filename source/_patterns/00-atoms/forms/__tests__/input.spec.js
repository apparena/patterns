/* eslint-env mocha */
import React from "react";
import {mount} from "enzyme";
import {spy} from "sinon";
import Input from "../input";
import {test} from 'ava';

test('Input is focused by default', (t) => {
    const wrapper = mount(
        <Input autoFocus />
    );
    t.is(wrapper.find('input').node, document.activeElement);
});

test('Input accepts custom functions', (t) => {
    const onChange = spy();
    const wrapper = mount(
        <Input onChange={onChange} />
    );
    wrapper.find('input').simulate('change',{target: {value: 'My old value'}})
        .simulate('change', {target: {value:'My new value'}});
    t.is(onChange.calledTwice, true);
});
