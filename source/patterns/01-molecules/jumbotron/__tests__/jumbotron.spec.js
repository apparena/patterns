/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('allows a custom child', () => {
    const wrapper = shallow(
        <Index><h1>Hello World</h1></Index>
    );
    expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true);
    expect(wrapper.find('.jumbotron').length).toBe(1);
});

test('allows multiple custom children', () => {
    const wrapper = shallow(
        <Index><h1>Hello World</h1><h2>Another hello</h2></Index>
    );
    expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true);
    expect(wrapper.contains(<h2>Another hello</h2>)).toBe(true);
    expect(wrapper.find('.jumbotron').length).toBe(1);
});

test('allows custom classnames', () => {
    const wrapper = shallow(
        <Index classNames="custom-class-1 custom-class-2"><h1>Hello World</h1></Index>
    );
    expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true);
    expect(wrapper.find('.jumbotron').length).toBe(1);
    expect(wrapper.find('.custom-class-1').length).toBe(1);
    expect(wrapper.find('.custom-class-2').length).toBe(1);
});