/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import ProgressBar from '../progress-bar';

test('renders the bare minimum', (t) => {
    const wrapper = shallow(
        <ProgressBar value="25" maxValue="100" minWidth="4" type="danger"/>
    );
    t.is(wrapper.find('progress[value="25"]').length, 1);
    t.is(wrapper.find('progress[max="100"]').length, 1);
});

test('respects custom class names', (t) => {
    const wrapper = shallow(
        <ProgressBar classNames="custom-progress-bar custom-progress-bar-2" value="25" maxValue="100" minWidth="4" type="danger"/>
    );
    t.is(wrapper.find('progress[value="25"]').length, 1);
    t.is(wrapper.find('progress[max="100"]').length, 1);
    t.is(wrapper.find('.custom-progress-bar').length, 1);
    t.is(wrapper.find('.custom-progress-bar-2').length, 1);
});

test('renders text without hiding it by default', (t) => {
    const wrapper = shallow(
        <ProgressBar value="25" maxValue="100" minWidth="4" type="danger" text="Hello World"/>
    );
    t.is(wrapper.find('progress[value="25"]').length, 1);
    t.is(wrapper.find('progress[max="100"]').length, 1);
    t.is(wrapper.find('#progress-bar-caption').length, 1);
    t.is(wrapper.contains('Hello World'), true);
});

test('respects the type', (t) => {
    const wrapper = shallow(
        <ProgressBar value="25" maxValue="100" minWidth="4" type="info"/>
    );
    t.is(wrapper.find('progress[value="25"]').length, 1);
    t.is(wrapper.find('progress[max="100"]').length, 1);
    t.is(wrapper.find('.progress-info').length, 1);
});

test('can use a custom ID for the caption', (t) => {
    const wrapper = shallow(
        <ProgressBar value="25" maxValue="100" minWidth="4" type="danger" text="Hello World" captionID="custom-caption-id"/>
    );
    t.is(wrapper.find('progress[value="25"]'), 1);
    t.is(wrapper.find('progress[max="100"]'), 1);
    t.is(wrapper.find('#custom-caption-id'), 1);
    t.is(wrapper.contains('Hello World'), true);
});