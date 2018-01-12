/* eslint-env mocha */
import React from "react";
import {test} from 'ava';
import {mount, configure} from "enzyme";
import {spy} from "sinon";
import TextField from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('TextField listens to change', (t) => {
    const onChange = spy();
    const wrapper = mount(
        <TextField id="custom-text-field" onChangeFunction={onChange} />
    );
    wrapper.find('input').simulate('change', {target: {value: 'My old value'}});

    t.is(wrapper.find('input').length, 1);
    t.is(wrapper.find("TextField#custom-text-field").length, 1);
    t.is(onChange.calledOnce, true);
});