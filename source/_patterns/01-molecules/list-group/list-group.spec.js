/* eslint-env mocha */
import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import ListGroup from "./list-group";

describe('<ListGroup />', () => {
    it('renders a ListGroup', () => {
        const wrapper = shallow(
            <ListGroup classNames="custom-list-group" listItems={{disabled: 'Im disabled',
                0: <div>Lines of code<span className="tag tag-default tag-pill pull-xs-right">666</span></div>,
                1: 'Im normal',
                'list-group-item-danger': '9001 errors were found in your code. Fix now?'
            }} />
        );
        expect(wrapper.find(".custom-list-group")).to.have.length(1);
        expect(wrapper.find("ul.list-group")).to.have.length(1);
        expect(wrapper.find(".list-group-item")).to.have.length(4);
        expect(wrapper.find(".tag")).to.have.length(1);
        expect(wrapper.find(".disabled")).to.have.length(1);
        expect(wrapper.find(".list-group-item-danger")).to.have.length(1);
    });
});