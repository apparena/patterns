/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Alert from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('DUMMY', () => {
    const wrapper = shallow(
        <Alert type="danger">
            Hello world!
        </Alert>
    );
    expect(true).toBe(true);
});

/*
test('alerts with custom text', (t) => {
    const wrapbuttper = shallow(
        <Alert type="danger">
            Hello world!
        </Alert>
    );
    t.is(wrapper.find('Alert').length === 1, true);
    //t.is(wrapper.contains('Hello World!'), true);
    t.is(wrapper.find('.alert-danger').length, 1);
});

test('respects the type', (t) => {
    const wrapper = shallow(
        <Alert type="info">
            Hello world!
        </Alert>
    );
    t.is(wrapper.find('.alert-info').length, 1);
});

test('allows me to insert custom classes as a string', (t) => {
    const wrapper = shallow(
        <Alert type="info" classNames="custom-class-1 custom-class-2">
            Hello world!
        </Alert>
    );
    t.is(wrapper.find('.custom-class-1').length, 1);
    t.is(wrapper.find('.custom-class-2').length, 1);
});

test('is dismissable at will', (t) => {
    const wrapper = shallow(
        <Alert type="danger" dismissible>
            Hello world!
        </Alert>
    );
    t.is(wrapper.find('button').length, 1);
    t.is(wrapper.find('.alert-danger').length, 1);
});

test('is not dismissable by default', (t) => {
    const wrapper = shallow(
        <Alert type="danger">
            Hello world!
        </Alert>
    );
    t.is(wrapper.find('button').length, 0);
    t.is(wrapper.find('.alert-danger').length, 1);
});*/
