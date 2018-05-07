/* eslint-env mocha */
import React from "react";
import {mount, configure} from 'enzyme';
import {spy} from "sinon";
import TextArea from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('TextArea listens to change', () => {
    const onChange = spy();
    const wrapper = mount(
        <TextArea id="custom-text-area" onChangeFunction={onChange} />
    );
    wrapper.find('textarea').simulate('change', {target: {value: 'My old value'}});

    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('TextArea#custom-text-area').length).toBe(1);
    expect(onChange.calledOnce).toBe(true);
});

