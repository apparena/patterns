/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {assert} from "chai";
import Card from "./card";

describe('<Card />', () => {

    it('renders a card', () => {
        const wrapper = shallow(
            <Card />
        );
        assert.ok(wrapper.is('div'));
    });
});