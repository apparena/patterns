/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('respects custom class names', () => {
    const wrapper = shallow(
        <Index classNames="custom-progress-bar custom-progress-bar-2" value={25} maxValue={100} minWidth={4} type="danger"/>
    );
    expect(wrapper.find('.custom-progress-bar').length).toBe(1);
    expect(wrapper.find('.custom-progress-bar-2').length).toBe(1);
});

test('renders text without hiding it by default', () => {
    const wrapper = shallow(
        <Index value={25} maxValue={100} minWidth={4} type="danger" text="Hello World"/>
    );
    expect(wrapper.find('#progress-bar-caption').length).toBe(1);
    expect(wrapper.contains('Hello World')).toBe(true);
});

test('can use a custom ID for the caption', () => {
    const wrapper = shallow(
        <Index value={25} maxValue={100} minWidth={4} type="danger" text="Hello World" captionID="custom-caption-id"/>
    );
    expect(wrapper.find('#custom-caption-id').length).toBe(1);
    expect(wrapper.contains('Hello World')).toBe(true);
});