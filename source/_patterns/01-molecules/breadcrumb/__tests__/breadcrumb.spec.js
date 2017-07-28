/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import Breadcrumb from "../breadcrumb";

describe('<Breadcrumb />', () => {
    it('renders breadcrumbs', () => {
        const wrapper = shallow(
            <Breadcrumb crumbNames={['One', 'Two', 'Three']} crumbLocations={['/one', '/one/two', '']} />
        );
        expect(wrapper.find("ol.breadcrumb")).to.have.length(1);
        expect(wrapper.find("li")).to.have.length(3);
        expect(wrapper.find(".breadcrumb-item")).to.have.length(3);
        expect(wrapper.find(".active")).to.have.length(1);
    });

    it('renders custom classes', () => {
        const wrapper = shallow(
            <Breadcrumb classNames="custom-breadcrumb" crumbNames={['One', 'Two', 'Three', 'Four']} crumbLocations={['/one', '/one/two', '/one/two/three', '']} />
        );
        expect(wrapper.find("ol.breadcrumb")).to.have.length(1);
        expect(wrapper.find(".custom-breadcrumb")).to.have.length(1);
        expect(wrapper.find("li")).to.have.length(4);
        expect(wrapper.find(".breadcrumb-item")).to.have.length(4);
        expect(wrapper.find(".active")).to.have.length(1);
    });
});