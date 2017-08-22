/* eslint-env mocha */
import React from "react";
import {shallow, mount} from "enzyme";
import {spy} from "sinon";
import {test} from "ava";
import RadioButton from "../index";


    test('renders with default text', (t) => {
        const wrapper = shallow(
            <RadioButton />
        );
        t.is(wrapper.find('.form-check').length, 1);
        t.is(wrapper.find('input').length, 1);
        t.is(wrapper.find('label').contains('identifier missing!'), true);
    });

    test('listens to change', (t) => {
        const onSelect = spy();
        const wrapper = mount(
            <RadioButton onClick={onSelect} />
        );
        wrapper.find('input').simulate('change');
        t.is(onSelect.calledOnce, true);
    });

    test ('sends values to the change event', (t) => {
        const onChange = spy();
        const wrapper = mount(
            <RadioButton text="hello" onClick={onChange}/>
        );
        wrapper.find('input').simulate('change');
        t.is(onChange.calledOnce, true);
        t.is(typeof onChange.firstCall.args[0], typeof {});
    });
