/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import Checkboxes from "./checkboxes";
import CheckBox from "../../00-atoms/forms/checkbox";

describe('<Checkboxes />', () => {
    it('renders checkboxes', () => {
        const wrapper = shallow(
            <Checkboxes classNames="custom-boxes">
                <CheckBox/>
                <CheckBox/>
                <CheckBox/>
            </Checkboxes>
        );
        expect(wrapper.find(".checkboxes")).to.have.length(1);
        expect(wrapper.find(".custom-boxes")).to.have.length(1);
        expect(wrapper.find(CheckBox)).to.have.length(3);
    });
});