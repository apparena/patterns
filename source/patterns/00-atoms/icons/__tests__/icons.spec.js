/* eslint-env mocha */
import React from "react";
import {shallow, configure} from "enzyme";
import Icon from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test ('Icon renders an icon', () => {
    const wrapper = shallow(
        <Icon name="customer" className="customer" />
    );
    expect(wrapper.find('i').length).toBe(1);
    expect(wrapper.find('i.customer').length).toBe(1);
})
