/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import Nav from "./nav";

describe('<Nav />', () => {
    it('renders nav', () => {
        const wrapper = shallow(
            <Nav classNames="custom-nav" listItems={{
                'this is a test': ['#', 'custom-a', 'li-li'],
                'and another test': ['dashboard', 'custom-a', 'la-li'],
            }} />
        );
        expect(wrapper.find("ul.nav")).to.have.length(1);
        expect(wrapper.find("li")).to.have.length(2);
        expect(wrapper.find("a.custom-a")).to.have.length(2);
        expect(wrapper.find("li.la-li")).to.have.length(1);

        // You can't find complex hrefs like ' # '
        // https://github.com/airbnb/enzyme/issues/283
        expect(wrapper.find({href: '#'})).to.have.length(1);
        expect(wrapper.find("a[href='dashboard']")).to.have.length(1);
        expect(wrapper.find("li > a")).to.have.length(2);
        expect(wrapper.find({href: '#'}).contains('this is a test')).to.equal(true);
        expect(wrapper.find("a[href='dashboard']").contains('and another test')).to.equal(true);
    });
});