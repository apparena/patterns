/* eslint-env mocha */
import React from "react";
import {mount, configure} from "enzyme";
import {spy} from "sinon";
import TextField from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('TextField listens to change', () => {
    const onChange = spy();
    const wrapper = mount(
        <TextField id="custom-text-field" onChangeFunction={onChange} />
    );
    wrapper.find('input').simulate('change', {target: {value: 'My old value'}});

    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find("TextField#custom-text-field").length).toBe(1);
    expect(onChange.calledOnce).toBe(true);
});