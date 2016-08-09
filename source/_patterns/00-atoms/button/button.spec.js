/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {assert} from "chai";
import Button from "./button";

describe('<Button />', () => {

    it('renders a button', () => {
        const wrapper = shallow(
            <Button />
        );
        assert.ok(wrapper.is('button'));
    });
});