/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import ButtonGroup from "../button-group";
import Button from "../../../00-atoms/button/button";

describe('<ButtonGroup />', () => {
    it('renders a group of buttons', () => {
        const wrapper = shallow(
            <ButtonGroup>
                <Button title="1"/>
                <Button title="2"/>
                <Button title="3"/>
                <Button title="4"/>
            </ButtonGroup>
        );

        expect(wrapper.find("div.btn-group")).to.have.length(1);
        expect(wrapper.find(".btn-group").find(Button)).to.have.length(4);
    });

    it('renders a custom aria-label', () => {
        const wrapper = shallow(
            <ButtonGroup ariaLabel="custom-btn-group">
                <Button title="1"/>
            </ButtonGroup>
        );

        expect(wrapper.find("div.btn-group")).to.have.length(1);
        expect(wrapper.find('div[aria-label="custom-btn-group"]')).to.have.length(1);
        expect(wrapper.find(".btn-group").find(Button)).to.have.length(1);
    });
});