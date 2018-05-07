/* eslint-env mocha */
import React from "react";
import {shallow, mount, configure} from "enzyme";
import {spy} from "sinon";
import RadioButton from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders with default text', () => {
    const wrapper = shallow(
        <RadioButton />
    );
    expect(wrapper.find('.form-check').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('label').contains('identifier missing!')).toBe(true);
});

test('listens to change', () => {
    const onSelect = spy();
    const wrapper = mount(
        <RadioButton onClick={onSelect} />
    );
    wrapper.find('input').simulate('change');
    expect(onSelect.calledOnce).toBe(true);
});

test ('sends values to the change event', () => {
    const onChange = spy();
    const wrapper = mount(
        <RadioButton text="hello" onClick={onChange}/>
    );
    wrapper.find('input').simulate('change');
    expect(onChange.calledOnce).toBe(true);
    expect(typeof onChange.firstCall.args[0]).toBe(typeof {});
});
