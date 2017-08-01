/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import Dropdown from "../dropdown";

describe('<Dropdown />', () => {
    it('renders a dropdown', () => {
        const wrapper = shallow(
            <Dropdown>
                <ul className="dropdown-menu">
                    <li className="dropdown-item">1</li>
                    <li className="dropdown-item">2</li>
                </ul>
            </Dropdown>
        );
        expect(wrapper.find("div.dropdown")).to.have.length(1);
        expect(wrapper.find("li")).to.have.length(2);
    });
});