/* eslint-env mocha */
import React from "react";
import {shallow, mount} from "enzyme";
import {spy} from "sinon";
import {test} from 'ava';
import Button from "../button";

test('renders a button', t => {
    const wrapper = shallow(
    <Button />
    );
    t.is(wrapper.is('button'), true);
});

test('renders children', t => {
    const wrapper = shallow(
        <Button><p>Hello World</p></Button>
    )
    t.is(wrapper.is('button'), true);
    t.is(wrapper.find('p').length, 1);
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

test('give the button an href', t => {
    const wrapper = shallow(
        <Button href="wololo" />
    )
    t.is(wrapper.is('a'), true)
})
