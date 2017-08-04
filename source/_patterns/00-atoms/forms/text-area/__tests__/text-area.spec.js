/* eslint-env mocha */
import React from "react";
import {test}from "ava";
import {mount} from "enzyme";
import {spy} from "sinon";
import TextArea from "../index";

test('TextArea listens to change', (t) => {
    const onChange = spy();
    const wrapper = mount(
        <TextArea id="custom-text-area" onChangeFunction={onChange} />
    );
    wrapper.find('textarea').simulate('change');

    t.is(wrapper.find('textarea').length, 1);
    t.is(wrapper.find('#custom-text-area').length, 1);
    t.is(onChange.calledOnce, true);
});