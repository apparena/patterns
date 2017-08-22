/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import Alert from '../index';

test('alerts with custom text', (t) => {
    const wrapper = shallow(
        <Alert text="Hello World" type="danger"/>
    );
    t.is(wrapper.contains('Hello World'), true);
    t.is(wrapper.find('.alert-danger').length, 1);
});

test('respects the type', (t) => {
    const wrapper = shallow(
        <Alert text="Hello World" type="info"/>
    );
    t.is(wrapper.find('.alert-info').length, 1);
});

test('allows me to insert custom classes as a string', (t) => {
    const wrapper = shallow(
        <Alert text="Hello World" type="info" classNames="custom-class-1 custom-class-2"/>
    );
    t.is(wrapper.find('.custom-class-1').length, 1);
    t.is(wrapper.find('.custom-class-2').length, 1);
});

test('is dismissable at will', (t) => {
    const wrapper = shallow(
        <Alert text="Hello World" type="danger" dismissible/>
    );
    t.is(wrapper.find('button').length, 1);
    t.is(wrapper.find('.alert-danger').length, 1);
});

test('is not dismissable by default', (t) => {
    const wrapper = shallow(
        <Alert text="Hello World" type="danger"/>
    );
    t.is(wrapper.find('button').length, 0);
    t.is(wrapper.find('.alert-danger').length, 1);
});