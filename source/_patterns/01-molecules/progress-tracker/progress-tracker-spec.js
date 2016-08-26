/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import ProgressTracker from "./progress-tracker-step";
import ProgressTrackerStep from "../../00-atoms/progress-tracker-step/progress-tracker-step";

/*
describe('<ProgressTracker />', () => {
    it('one inactive step', () => {
        const wrapper = shallow(
            <div>
                <ProgressTracker>
                    <ProgressTrackerStep />
                </ProgressTracker>
            </div>
        );
        expect(wrapper.find(".progress-tracker-step-active")).to.have.length(0);
        expect(wrapper.find(".progress-tracker")).to.have.length(1);
        expect(wrapper.find("ol")).to.have.length(1);
    });


});*/
