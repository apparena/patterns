/* eslint-env mocha */
import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import {spy} from "sinon";
import Input from "../input";

describe('<Input />', () => {
    it('is focused by default', () => {
        const onChange = spy();
        const wrapper = mount(
            <Input onChange={onChange} />
        );
        expect(wrapper.find('input').node).to.equal(document.activeElement);
    });

    it('accepts custom functions', () => {
        const onChange = spy();
        const wrapper = mount(
            <Input onChange={onChange} />
        );
        wrapper.find('input').simulate('change', {target: {value: 'My old value'}})
            .simulate('change', {target: {value: 'My new value'}});
        expect(onChange).to.have.property('callCount', 2);
    });
});