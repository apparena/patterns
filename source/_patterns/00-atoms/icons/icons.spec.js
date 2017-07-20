/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import Icon from "./index";

describe('<Icon />', () => {
    it('renders an icon', () => {
        const wrapper = shallow(
            <Icon iconClass="custom-icon-class"/>
        );
        expect(wrapper.find('i')).to.have.length(1);
        expect(wrapper.find('i.custom-icon-class')).to.have.length(1);
    });
});