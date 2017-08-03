/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import ProgressTracker from "../progress-tracker";
import ProgressTrackerStep from "../../../00-atoms/progress-tracker-step/progress-tracker-step";


describe('<ProgressTracker />', () => {
    it('one inactive step', () => {
        const wrapper = shallow(
            <ProgressTracker>
                <ProgressTrackerStep />
            </ProgressTracker>
        );
        expect(wrapper.html().includes('progress-tracker-step"')).to.equal(true);
        expect(wrapper.html().includes('progress-tracker"')).to.equal(true);
        expect(wrapper.find('ol')).to.have.length(1);
        expect(wrapper.find('ol').find('ProgressTrackerStep')).to.have.length(1);
    });

    it('two steps one inactive', () => {
        const wrapper = shallow(
            <ProgressTracker>
                <ProgressTrackerStep active/>
                <ProgressTrackerStep />
            </ProgressTracker>
        );
        expect(wrapper.html().includes('progress-tracker-step-active"')).to.equal(true);
        expect(wrapper.html().includes('progress-tracker-step"')).to.equal(true);
        expect(wrapper.html().includes('progress-tracker"')).to.equal(true);
        expect(wrapper.find('ol')).to.have.length(1);
        expect(wrapper.find('ol').find('ProgressTrackerStep')).to.have.length(2);
    });

    it('ten active steps', () => {
        const wrapper = shallow(
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
        expect(wrapper.html().includes('progress-tracker-step-active"')).to.equal(true);
        expect(wrapper.html().includes('progress-tracker-step"')).to.equal(false);
        expect(wrapper.html().includes('progress-tracker"')).to.equal(true);
        expect(wrapper.find('ol')).to.have.length(1);
        expect(wrapper.find('ol').find('ProgressTrackerStep')).to.have.length(10);
    });

});
