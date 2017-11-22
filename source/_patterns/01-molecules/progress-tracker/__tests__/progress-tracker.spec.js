/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, mount, configure} from 'enzyme';
import ProgressTracker from '../progress-tracker';
import ProgressTrackerStep from '../../../00-atoms/progress-tracker-step/progress-tracker-step';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('one inactive step', (t) => {
    const wrapper = mount(
        <ProgressTracker>
            <ProgressTrackerStep/>
        </ProgressTracker>
    );
    t.is(wrapper.html().includes('span'), true);
    t.is(wrapper.html().includes('li'), true);
    t.is(wrapper.find('ol').length, 1);
    t.is(wrapper.find('ol').find('ProgressTrackerStep').length, 1);
});

test('two steps one inactive', (t) => {
    const wrapper = mount(
        <ProgressTracker>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep/>
        </ProgressTracker>
    );
    t.is(wrapper.html().includes('span'), true);
    t.is(wrapper.html().includes('li'), true);
    t.is(wrapper.find('ol').length, 1);
    t.is(wrapper.find('ol').find('ProgressTrackerStep').length, 2);
});