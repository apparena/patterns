/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import Spinner from "./spinner";

describe('<Spinner />', () => {
    it('renders a spinner', () => {
        const wrapper = shallow(
            <Spinner />
        );

        expect(wrapper.html().includes('spinner ')).to.equal(true);
        expect(wrapper.html().includes('spinner-default ')).to.equal(true);
        expect(wrapper.html().includes('spinner-sm"')).to.equal(true);
        expect(wrapper.html().includes('spinner-dot ')).to.equal(true);
        expect(wrapper.html().includes('spinner-dot-second')).to.equal(true);
        expect(wrapper.html().includes('spinner-dot-third')).to.equal(true);
    });

    it('respects sizes and types', () => {
        const wrapper = shallow(
            <Spinner size="lg" type="primary" />
        );

        expect(wrapper.html().includes('spinner ')).to.equal(true);
        expect(wrapper.html().includes('spinner-primary ')).to.equal(true);
        expect(wrapper.html().includes('spinner-lg"')).to.equal(true);
        expect(wrapper.html().includes('spinner-dot ')).to.equal(true);
        expect(wrapper.html().includes('spinner-dot-second')).to.equal(true);
        expect(wrapper.html().includes('spinner-dot-third')).to.equal(true);
    });

    it('allows custom classes', () => {
        const wrapper = shallow(
            <Spinner className="custom-spinner" />
        );

        expect(wrapper.html().includes('spinner ')).to.equal(true);
        expect(wrapper.html().includes('spinner-default ')).to.equal(true);
        expect(wrapper.html().includes('spinner-sm ')).to.equal(true);
        expect(wrapper.html().includes('spinner-dot ')).to.equal(true);
        expect(wrapper.html().includes('spinner-dot-second')).to.equal(true);
        expect(wrapper.html().includes('spinner-dot-third')).to.equal(true);
        expect(wrapper.find('.custom-spinner')).to.have.length(1);
    });
});