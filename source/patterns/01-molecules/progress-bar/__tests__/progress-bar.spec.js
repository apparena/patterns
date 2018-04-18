/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('respects custom class names', (t) => {
    const wrapper = shallow(
        <Index classNames="custom-progress-bar custom-progress-bar-2" value={25} maxValue={100} minWidth={4} type="danger"/>
    );
    t.is(wrapper.find('.custom-progress-bar').length, 1);
    t.is(wrapper.find('.custom-progress-bar-2').length, 1);
});

test('renders text without hiding it by default', (t) => {
    const wrapper = shallow(
        <Index value={25} maxValue={100} minWidth={4} type="danger" text="Hello World"/>
    );
    t.is(wrapper.find('#progress-bar-caption').length, 1);
    t.is(wrapper.contains('Hello World'), true);
});

test('can use a custom ID for the caption', (t) => {
    const wrapper = shallow(
        <Index value={25} maxValue={100} minWidth={4} type="danger" text="Hello World" captionID="custom-caption-id"/>
    );
    t.is(wrapper.find('#custom-caption-id').length, 1);
    t.is(wrapper.contains('Hello World'), true);
});