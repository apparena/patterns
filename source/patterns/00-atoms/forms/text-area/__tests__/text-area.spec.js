/* eslint-env mocha */
import React from "react";
import {test}from "ava";
import {mount, configure} from 'enzyme';
import {spy} from "sinon";
import TextArea from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('TextArea listens to change', (t) => {
    const onChange = spy();
    const wrapper = mount(
        <TextArea id="custom-text-area" onChangeFunction={onChange} />
    );
    wrapper.find('textarea').simulate('change', {target: {value: 'My old value'}});

    t.is(wrapper.find('textarea').length, 1);
    t.is(wrapper.find('TextArea#custom-text-area').length, 1);
    t.is(onChange.calledOnce, true);
});

