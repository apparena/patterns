/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import Alert from "./alert";

describe('<Alert />', () => {
    it('alerts with custom text', () => {
        const wrapper = shallow(
            <Alert text="Hello World" type="danger" />
        );
        expect(wrapper.contains("Hello World")).to.equal(true);
        expect(wrapper.find(".alert-danger")).to.have.length(1);
    });

    it('respects the type', () => {
        const wrapper = shallow(
            <Alert text="Hello World" type="info"/>
        );
        expect(wrapper.find('.alert-info')).to.have.length(1);
    });

    it("allows me to insert custom classes as a string", () => {
        const wrapper = shallow(
            <Alert text="Hello World" type="info" classNames="custom-class-1 custom-class-2"/>
        );
        expect(wrapper.find('.custom-class-1')).to.have.length(1);
        expect(wrapper.find('.custom-class-2')).to.have.length(1);
    });

    it('is dismissable at will', () => {
        const wrapper = shallow(
            <Alert text="Hello World" type="danger" dismissible />
        );
        expect(wrapper.find('button')).to.have.length(1);
        expect(wrapper.find(".alert-danger")).to.have.length(1);
    });

    it('is not dismissable by default', () => {
        const wrapper = shallow(
            <Alert text="Hello World" type="danger" />
        );
        expect(wrapper.find('button')).to.have.length(0);
        expect(wrapper.find(".alert-danger")).to.have.length(1);
    });
});