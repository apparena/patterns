/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, mount, configure} from 'enzyme';
import Spinner from '../index';
import style from '../index.scss'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

/*
test('renders a spinner', (t) => {
    const wrapper = shallow(
        <Spinner />
    );
    // Check if wrapper contains all classes
    t.is(wrapper.find('Spinner').length === 1, true);
    t.is(wrapper.html().includes('spinner'), true);
    t.is(wrapper.html().includes('spinner-default'), true);
    t.is(wrapper.html().includes('spinner-sm'), true);
    t.is(wrapper.html().includes('spinner-dot'), true);
    t.is(wrapper.html().includes('spinner-dot-second'), true);
    t.is(wrapper.html().includes('spinner-dot-third'), true);
});

test('respects sizes and types', (t) => {
    const wrapper = shallow(
        <Spinner size="lg" type="primary"/>
    );

    t.is(wrapper.html().includes('spinner'), true);
    t.is(wrapper.html().includes('spinner-primary'), true);
    t.is(wrapper.html().includes('spinner-lg'), true);
    t.is(wrapper.html().includes('spinner-dot'), true);
    t.is(wrapper.html().includes('spinner-dot-second'), true);
    t.is(wrapper.html().includes('spinner-dot-third'), true);
});

test('allows custom classes', (t) => {
    const wrapper = shallow(
        <Spinner className="custom-spinner"/>
    );

    t.is(wrapper.html().includes('spinner'), true);
    t.is(wrapper.html().includes('spinner-default'), true);
    t.is(wrapper.html().includes('spinner-sm'), true);
    t.is(wrapper.html().includes('spinner-dot'), true);
    t.is(wrapper.html().includes('spinner-dot-second'), true);
    t.is(wrapper.html().includes('spinner-dot-third'), true);
    t.is(wrapper.find('.custom-spinner').length, 1);
});*/
