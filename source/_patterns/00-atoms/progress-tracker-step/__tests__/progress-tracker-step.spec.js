/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import ProgressTrackerStep from '../progress-tracker-step';
import style from '../progress-tracker-step.scss';

test('one inactive step', () => {
    const wrapper = shallow(
        <ProgressTrackerStep/>
    );
    expect(wrapper.find(`.${style['progress-tracker-step-active']}`)).to.have.length(0);
});

test('one active step', () => {
    const wrapper = shallow(
        <ProgressTrackerStep active/>
    );
    expect(wrapper.find(`.${style['progress-tracker-step-active']}`)).to.have.length(1);
});

test('two steps one active', () => {
    const wrapper = shallow(
        <div>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep/>
        </div>
    );
    expect(wrapper.html().includes('progress-tracker-step"')).to.equal(true);
    expect(wrapper.html().includes('progress-tracker-step-active"')).to.equal(true);
});

test('two active steps', () => {
    const wrapper = shallow(
        <div>
            <ProgressTrackerStep active/>
            <ProgressTrackerStep active/>
        </div>
    );
    expect(wrapper.html().includes('progress-tracker-step"')).to.equal(false);
    expect(wrapper.html().includes('progress-tracker-step-active"')).to.equal(true);
});