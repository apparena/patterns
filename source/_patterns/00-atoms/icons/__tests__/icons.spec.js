/* eslint-env mocha */
import React from "react";
import {test} from "ava";
import {shallow, configure} from "enzyme";
import Icon from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test ('Icon renders an icon', (t) => {
    const wrapper = shallow(
        <Icon name="customer" className="customer" />
    );
    t.is(wrapper.find('i').length, 1);
    t.is(wrapper.find('i.customer').length, 1);
})
