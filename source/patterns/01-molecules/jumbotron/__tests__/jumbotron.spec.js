/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('allows a custom child', (t) => {
    const wrapper = shallow(
        <Index><h1>Hello World</h1></Index>
    );
    t.is(wrapper.contains(<h1>Hello World</h1>), true);
    t.is(wrapper.find('.jumbotron').length, 1);
});

test('allows multiple custom children', (t) => {
    const wrapper = shallow(
        <Index><h1>Hello World</h1><h2>Another hello</h2></Index>
    );
    t.is(wrapper.contains(<h1>Hello World</h1>),true);
    t.is(wrapper.contains(<h2>Another hello</h2>),true);
    t.is(wrapper.find('.jumbotron').length, 1);
});

test('allows custom classnames', (t) => {
    const wrapper = shallow(
        <Index classNames="custom-class-1 custom-class-2"><h1>Hello World</h1></Index>
    );
    t.is(wrapper.contains(<h1>Hello World</h1>), true);
    t.is(wrapper.find('.jumbotron').length, 1);
    t.is(wrapper.find('.custom-class-1').length, 1);
    t.is(wrapper.find('.custom-class-2').length, 1);
});