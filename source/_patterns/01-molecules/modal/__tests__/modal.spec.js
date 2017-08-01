/* eslint-env mocha */
import React from "react";
import {shallow, mount} from "enzyme";
import {expect} from "chai";
import {spy} from "sinon";
import Modal from "../modal";
import styles from "../modal.scss";

describe("<Modal />", () => {
    it("shows a modal", () => {
        const wrapper = shallow(
            <Modal size="small" headerText="Hello World">
                <p>This is a test</p>
            </Modal>
        );
        expect(wrapper.find('h2')).to.have.length(1);
        expect(wrapper.find('h2').contains('Hello World')).to.equal(true);
        expect(wrapper.find('p')).to.have.length(1);
        expect(wrapper.find('p').contains('This is a test')).to.equal(true);
    });

    it("has a working search bar", () => {
        const searchSpy = spy();
        const wrapper = mount(
            <Modal size="small" headerText="Hello World" onSearch={searchSpy}>
                <p>This is a test</p>
            </Modal>
        );

        wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
        expect(wrapper.find('input')).to.have.length(1);
        setTimeout(() => {
            expect(searchSpy.calledOnce).to.equal(true);
        }, 1000);
    });

    it("debounces the search", () => {
        const searchSpy = spy();
        const wrapper = mount(
            <Modal size="small" headerText="Hello World" onSearch={searchSpy}>
                <p>This is a test</p>
            </Modal>
        );

        wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
        wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
        expect(wrapper.find('input')).to.have.length(1);
        setTimeout(() => {
            expect(searchSpy.calledOnce).to.equal(true);
        }, 1000);
    });

    it("shows a save button and handles save methods", () => {
        const clickSpy = spy();
        const wrapper = mount(
            <Modal size="small" headerText="Hello World" onSave={clickSpy}>
                <p>This is a test</p>
            </Modal>
        );

        expect(wrapper.find('input')).to.have.length(0);
        expect(wrapper.find(`.${styles['modal-button-primary']}`)).to.have.length(1);
        wrapper.find(`.${styles['modal-button-primary']}`).simulate('click');
        expect(clickSpy.calledOnce).to.equal(true);
    });
});