/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Alert from '../index';

test('alerts with custom text', () => {
    const wrapper = shallow(
        <Alert text="Hello World" type="danger"/>
    );
    expect(wrapper.contains('Hello World')).to.equal(true);
    expect(wrapper.find('.alert-danger')).to.have.length(1);
});

test('respects the type', () => {
    const wrapper = shallow(
        <Alert text="Hello World" type="info"/>
    );
    expect(wrapper.find('.alert-info')).to.have.length(1);
});

test('allows me to insert custom classes as a string', () => {
    const wrapper = shallow(
        <Alert text="Hello World" type="info" classNames="custom-class-1 custom-class-2"/>
    );
    expect(wrapper.find('.custom-class-1')).to.have.length(1);
    expect(wrapper.find('.custom-class-2')).to.have.length(1);
});

test('is dismissable at will', () => {
    const wrapper = shallow(
        <Alert text="Hello World" type="danger" dismissible/>
    );
    expect(wrapper.find('button')).to.have.length(1);
    expect(wrapper.find('.alert-danger')).to.have.length(1);
});

test('is not dismissable by default', () => {
    const wrapper = shallow(
        <Alert text="Hello World" type="danger"/>
    );
    expect(wrapper.find('button')).to.have.length(0);
    expect(wrapper.find('.alert-danger')).to.have.length(1);
});