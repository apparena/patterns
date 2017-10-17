/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import Jumbotron from '../jumbotron';

test('allows a custom child', (t) => {
    const wrapper = shallow(
        <Jumbotron><h1>Hello World</h1></Jumbotron>
    );
    t.is(wrapper.contains(<h1>Hello World</h1>), true);
    t.is(wrapper.find('.jumbotron').length, 1);
});

test('allows multiple custom children', (t) => {
    const wrapper = shallow(
        <Jumbotron><h1>Hello World</h1><h2>Another hello</h2></Jumbotron>
    );
    t.is(wrapper.contains(<h1>Hello World</h1>),true);
    t.is(wrapper.contains(<h2>Another hello</h2>),true);
    t.is(wrapper.find('.jumbotron').length, 1);
});

test('allows custom classnames', (t) => {
    const wrapper = shallow(
        <Jumbotron classNames="custom-class-1 custom-class-2"><h1>Hello World</h1></Jumbotron>
    );
    t.is(wrapper.contains(<h1>Hello World</h1>), true);
    t.is(wrapper.find('.jumbotron').length, 1);
    t.is(wrapper.find('.custom-class-1').length, 1);
    t.is(wrapper.find('.custom-class-2').length, 1);
});