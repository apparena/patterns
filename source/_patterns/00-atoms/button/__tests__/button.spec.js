/* eslint-env mocha */
import React from "react";
import {shallow, mount} from "enzyme";
import {spy} from "sinon";
import {test} from 'ava';
import {expect} from 'chai';
import Button from "../button";

test('renders a button', t =>{
    const wrapper = shallow(<Button />);
    t.is(wrapper.is('button'), true);
});

test('renders children', t => {
    const wrapper = shallow(
        <Button><p>Hello World</p></Button>
    )
    t.is(wrapper.is('button'), true);
    expect(wrapper.find('p')).to.have.length(1);
    t.is(wrapper.find('p').contains('Hello World'), true);
});

test('reacts to onClick', t => {
    var onClick = spy();
    const wrapper = mount(
        <Button onClick={onClick}><p>Hello World</p></Button>
    );
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    t.is(onClick.calledThrice, true);
});

test.failing('reacts to onClick with identifier', t => {
    const onClick = spy();
    const wrapper = mount(
        <Button identifier="custom-button-id" onClick={onClick}><p>Hellow World</p></Button>
    );
    wrapper.find('button').simulate('click');
    t.is(onClick.calledWith("custom-button-id"), true);
})