/* eslint-env mocha */
import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import {spy} from "sinon";
import TextArea from "./index";

describe('<TextArea />', () => {
    it('listens to change', () => {
        const onChange = spy();
        const wrapper = mount(
            <TextArea id="custom-text-area" onChangeFunction={onChange}/>
        );
        wrapper.find('textarea').simulate('change');

        expect(wrapper.find('textarea')).to.have.length(1);
        expect(wrapper.find('#custom-text-area')).to.have.length(1);
        expect(onChange).to.have.property('callCount', 1);
    });
});