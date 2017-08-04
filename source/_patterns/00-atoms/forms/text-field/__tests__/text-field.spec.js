/* eslint-env mocha */
import React from "react";
import {test} from 'ava';
import {mount} from "enzyme";
import {spy} from "sinon";
import TextField from "../index";

test('TextField listens to change', t => {
    const onChange = spy();
    const wrapper = mount(
        <TextField id="custom-text-field" onChangeFunction={onChange} />
    );
    wrapper.find('input').simulate('change');

    t.is(wrapper.find('input').length, 1);
    t.is(wrapper.find("#custom-text-field").length, 1);
    t.is(onChange.calledOnce, true);
});