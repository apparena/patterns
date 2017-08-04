/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Jumbotron from '../jumbotron';

test('allows a custom child', () => {
    const wrapper = shallow(
        <Jumbotron><h1>Hello World</h1></Jumbotron>
    );
    expect(wrapper.contains(<h1>Hello World</h1>)).to.equal(true);
    expect(wrapper.find('.jumbotron')).to.have.length(1);
});

test('allows multiple custom children', () => {
    const wrapper = shallow(
        <Jumbotron><h1>Hello World</h1><h2>Another hello</h2></Jumbotron>
    );
    expect(wrapper.contains(<h1>Hello World</h1>)).to.equal(true);
    expect(wrapper.contains(<h2>Another hello</h2>)).to.equal(true);
    expect(wrapper.find('.jumbotron')).to.have.length(1);
});

test('allows custom classnames', () => {
    const wrapper = shallow(
        <Jumbotron classNames="custom-class-1 custom-class-2"><h1>Hello World</h1></Jumbotron>
    );
    expect(wrapper.contains(<h1>Hello World</h1>)).to.equal(true);
    expect(wrapper.find('.jumbotron')).to.have.length(1);
    expect(wrapper.find('.custom-class-1')).to.have.length(1);
    expect(wrapper.find('.custom-class-2')).to.have.length(1);
});