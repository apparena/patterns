/* eslint-env mocha */
import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import ProgressTracker from '../index';
import ProgressTrackerStep from '../../../00-atoms/progress-tracker-step';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('one inactive step', () => {
    const wrapper = mount(
        <ProgressTracker>
            <ProgressTrackerStep/>
        </ProgressTracker>
    );
    expect(wrapper.html().includes('span')).toBe(true);
    expect(wrapper.html().includes('li')).toBe(true);
    expect(wrapper.find('ol').length).toBe(1);
    expect(wrapper.find('ol').find('ProgressTrackerStep').length).toBe(1);
});

test('two steps one inactive', () => {
    const wrapper = mount(
        <ProgressTracker>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep/>
        </ProgressTracker>
    );
    expect(wrapper.html().includes('span')).toBe(true);
    expect(wrapper.html().includes('li')).toBe(true);
    expect(wrapper.find('ol').length).toBe(1);
    expect(wrapper.find('ol').find('ProgressTrackerStep').length).toBe(2);
});