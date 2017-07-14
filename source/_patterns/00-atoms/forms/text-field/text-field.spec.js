/* eslint-env mocha */
import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import {spy} from "sinon";
import TextField from "./text-field";

describe('<TextField />', () => {
    it('listens to change', () => {
        const onChange = spy();
        const wrapper = mount(
            <TextField id="custom-text-field" onChangeFunction={onChange}/>
        );
        wrapper.find('input').simulate('change');

        expect(wrapper.find('input')).to.have.length(1);
        expect(wrapper.find('#custom-text-field')).to.have.length(1);
        expect(onChange).to.have.property('callCount', 1);
    });
});