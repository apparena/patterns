/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {mount, shallow, configure} from 'enzyme';
import {spy} from 'sinon';
import Button from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders a button', (t) => {
    const wrapper = shallow(<Button/>);
    t.is(wrapper.is('button'), true);
});

test('renders children', (t) => {
    const wrapper = shallow(
        <Button><p>Hello World</p></Button>
    );
    t.is(wrapper.is('button'), true);
    t.is(wrapper.find('p').length, 1);
    t.is(wrapper.find('p').contains('Hello World'), true);
});

test('renders loading state', (t) => {
    const wrapper = shallow(
        <Button type="primary" state="loading"><p>Hello World</p></Button>
    );
    t.is(wrapper.is('button'), true);
    t.is(wrapper.find('Spinner').length === 1, true);
});

test('renders success state', (t) => {
    const wrapper = shallow(
        <Button type="primary" state="success"><p>Hello World</p></Button>
    );
    t.is(wrapper.is('button'), true);
    t.is(wrapper.find('Icon').length === 1, true);
});

test('renders danger state', (t) => {
    const wrapper = shallow(
        <Button type="primary" state="danger"><p>Hello World</p></Button>
    );
    t.is(wrapper.is('button'), true);
    t.is(wrapper.find('Icon').length === 1, true);
});

test('reacts to onClick', (t) => {
    const onClick = spy();
    const wrapper = mount(
        <Button onClick={onClick}><p>Hello World</p></Button>
    );
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    t.is(onClick.calledThrice, true);
});

test('give the button an href', (t) => {
    const wrapper = shallow(
        <Button href="wololo"/>
    );
    t.is(wrapper.is('a'), true);
});
