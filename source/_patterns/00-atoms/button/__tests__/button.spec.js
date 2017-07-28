/* eslint-env mocha */
import React from "react";
import {shallow, mount} from "enzyme";
import {spy} from "sinon";
import test from 'ava';

import Button from "../button";

test('renders a button'), t => {
    const wrapper = shallow(<Button />)
    t.is(wrapper.is('button'), true);
}

/*test('<Button />', () => {

    it('renders a button', () => {
        const wrapper = shallow(
            <Button />
        );
        expect(wrapper.is('button')).to.equal(true);
    });

    it('renders text', () => {
        const wrapper = shallow(
            <Button text="aloha" />
        );
        expect(wrapper.is('button')).to.equal(true);
        expect(wrapper.contains('aloha')).to.equal(true);
    });

    it('renders children', () => {
        const wrapper = shallow(
            <Button><p>Hello world</p></Button>
        );
        expect(wrapper.is('button')).to.equal(true);
        expect(wrapper.find('p')).to.have.length(1);
        expect(wrapper.find('p').contains('Hello world')).to.equal(true);
    });

    it('reacts to onClick', () => {
        const onClick = spy();
        const wrapper = mount(
            <Button onClickMethod={onClick}><p>Hello world</p></Button>
        );
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(onClick).to.have.property('callCount', 3);
    });

    it('reacts to onClick with identifier', () => {
        const onClick = spy();
        const wrapper = mount(
            <Button identifier="custom-button-id" onClickMethod={onClick}><p>Hello world</p></Button>
        );
        wrapper.find('button').simulate('click');
        expect(onClick.calledWith("custom-button-id")).to.equal(true);
    });
});*/