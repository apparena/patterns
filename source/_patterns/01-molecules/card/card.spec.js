/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import Card from "./card";

describe('<Card />', () => {

    it('renders a card', () => {
        const wrapper = shallow(
            <Card />
        );
        expect(wrapper.is('div')).toBeTruthy();
    });
});