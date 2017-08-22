/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';
import ProgressTrackerStep from '../progress-tracker-step';
import style from '../progress-tracker-step.scss';

test('one inactive step', (t) => {
    const wrapper = shallow(
        <ProgressTrackerStep/>
    );
    t.is(wrapper.find(`.${style['progress-tracker-step-active']}`).length, 0);
});

test('one active step', (t) => {
    const wrapper = shallow(
        <ProgressTrackerStep active/>
    );
    t.is(wrapper.find(`.${style['progress-tracker-step-active']}`).length, 1);
});

test('two steps one active', (t) => {
    const wrapper = shallow(
        <div>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep/>
        </div>
    );
    t.is(wrapper.html().includes('progress-tracker-step'), true);
    t.is(wrapper.html().includes('progress-tracker-step-active'), true);
});

test('reacts on change', (t) => {
    const onClick = spy();
    const wrapper = mount(
        <div>
            <ProgressTrackerStep onClick={onClick}/>
        </div>
    );
    t.is(wrapper.html().includes('progress-tracker-step'), true);
    wrapper.find('li').simulate('click');
    t.is(onClick.calledOnce, true)
});
