/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, mount} from 'enzyme';
import ProgressTracker from '../progress-tracker';
import ProgressTrackerStep from '../../../00-atoms/progress-tracker-step/progress-tracker-step';


test('one inactive step', (t) => {
    const wrapper = mount(
        <ProgressTracker>
            <ProgressTrackerStep/>
        </ProgressTracker>
    );
    t.is(wrapper.html().includes('progress-tracker-step'), true);
    t.is(wrapper.html().includes('progress-tracker'),true);
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
    t.is(wrapper.html().includes('progress-tracker-step-active'), true);
    t.is(wrapper.html().includes('progress-tracker-step'), true);
    t.is(wrapper.html().includes('progress-tracker'), true);
    t.is(wrapper.find('ol')).to.have.length(1);
    t.is(wrapper.find('ol').find('ProgressTrackerStep').length, 2);
});

test('ten active steps', (t) => {
    const wrapper = mount(
        <ProgressTracker>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
        </ProgressTracker>
    );
    t.is(wrapper.html().includes('progress-tracker-step-active'), true);
    t.is(wrapper.html().includes('progress-tracker-step'), false);
    t.is(wrapper.html().includes('progress-tracker'), true);
    t.is(wrapper.find('ol').length, 1);
    t.is(wrapper.find('ol').find('ProgressTrackerStep').length, 10);
});
