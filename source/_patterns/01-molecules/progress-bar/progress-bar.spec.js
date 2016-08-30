/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import ProgressBar from "./progress-bar";

describe('<ProgressBar />', () => {
    it('renders the bare minimum', () => {
        const wrapper = shallow(
            <ProgressBar value="25" maxValue="100" minWidth="4" type="danger"/>
        );
        expect(wrapper.find('progress[value="25"]')).to.have.length(1);
        expect(wrapper.find('progress[max="100"]')).to.have.length(1);
    });

    it('respects custom class names', () => {
        const wrapper = shallow(
            <ProgressBar classNames="custom-progress-bar custom-progress-bar-2" value="25" maxValue="100" minWidth="4" type="danger"/>
        );
        expect(wrapper.find('progress[value="25"]')).to.have.length(1);
        expect(wrapper.find('progress[max="100"]')).to.have.length(1);
        expect(wrapper.find('.custom-progress-bar')).to.have.length(1);
        expect(wrapper.find('.custom-progress-bar-2')).to.have.length(1);
    });

    it('renders text without hiding it by default', () => {
        const wrapper = shallow(
            <ProgressBar value="25" maxValue="100" minWidth="4" type="danger" text="Hello World"/>
        );
        expect(wrapper.find('progress[value="25"]')).to.have.length(1);
        expect(wrapper.find('progress[max="100"]')).to.have.length(1);
        expect(wrapper.find('#progress-bar-caption')).to.have.length(1);
        expect(wrapper.contains('Hello World')).to.equal(true);
    });

    it('respects the type', () => {
        const wrapper = shallow(
            <ProgressBar value="25" maxValue="100" minWidth="4" type="info"/>
        );
        expect(wrapper.find('progress[value="25"]')).to.have.length(1);
        expect(wrapper.find('progress[max="100"]')).to.have.length(1);
        expect(wrapper.find('.progress-info')).to.have.length(1);
    });

    it('can use a custom ID for the caption', () => {
        const wrapper = shallow(
            <ProgressBar value="25" maxValue="100" minWidth="4" type="danger" text="Hello World" captionID="custom-caption-id"/>
        );
        expect(wrapper.find('progress[value="25"]')).to.have.length(1);
        expect(wrapper.find('progress[max="100"]')).to.have.length(1);
        expect(wrapper.find('#custom-caption-id')).to.have.length(1);
        expect(wrapper.contains('Hello World')).to.equal(true);
    });
});