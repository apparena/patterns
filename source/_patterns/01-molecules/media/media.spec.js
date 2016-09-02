/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import Media from "./media";

describe('<Media />', () => {
    it('renders media', () => {
        const wrapper = shallow(
            <Media classNames="custom-media"
                   mediaClassNames="custom-media-element"
                   mediaHref="custom-location"
                   mediaObject={<img src="." alt="yes" />}
                   mediaBodyClassNames="custom-media-body"
                   mediaBodyHeaderClassNames="custom-media-heading"
                   mediaBodyHeader="this is a test"
                   mediaBody="Testing is as successful as ever"
            />
        );
        expect(wrapper.find("div.media")).to.have.length(1);
        expect(wrapper.find("img")).to.have.length(1);
        expect(wrapper.find("a + div")).to.have.length(1);
        expect(wrapper.find("a[href='custom-location']")).to.have.length(1);
        expect(wrapper.find(".custom-media")).to.have.length(1);
        expect(wrapper.find(".custom-media-element")).to.have.length(1);
        expect(wrapper.find(".custom-media-body")).to.have.length(1);
        expect(wrapper.find(".custom-media-heading")).to.have.length(1);
        expect(wrapper.find(".custom-media-heading").contains('this is a test')).to.equal(true);
        expect(wrapper.find(".custom-media-body").contains('Testing is as successful as ever')).to.equal(true);
        expect(wrapper.find(".custom-media-body").contains('Testing is as successful as ever')).to.equal(true);
    });

    it('renders media to the right at will', () => {
        const wrapper = shallow(
            <Media classNames="custom-media"
                   mediaPosition="right"
                   mediaClassNames="custom-media-element"
                   mediaHref="custom-location"
                   mediaObject={<img src="." alt="yes" />}
                   mediaBodyClassNames="custom-media-body"
                   mediaBodyHeaderClassNames="custom-media-heading"
                   mediaBodyHeader="this is a test"
                   mediaBody="Testing is as successful as ever"
            />
        );
        expect(wrapper.find("div.media")).to.have.length(1);
        expect(wrapper.find("img")).to.have.length(1);
        expect(wrapper.find("div + a")).to.have.length(1);
        expect(wrapper.find("a[href='custom-location']")).to.have.length(1);
        expect(wrapper.find(".custom-media")).to.have.length(1);
        expect(wrapper.find(".custom-media-element")).to.have.length(1);
        expect(wrapper.find(".custom-media-body")).to.have.length(1);
        expect(wrapper.find(".custom-media-heading")).to.have.length(1);
        expect(wrapper.find(".custom-media-heading").contains('this is a test')).to.equal(true);
        expect(wrapper.find(".custom-media-body").contains('Testing is as successful as ever')).to.equal(true);
        expect(wrapper.find(".custom-media-body").contains('Testing is as successful as ever')).to.equal(true);
    });
});