/* eslint-env mocha */
<<<<<<< HEAD
import React from "react";
import {test} from "ava";
import {shallow} from "enzyme";
import Icon from "../index";

test ('Icon renders an icon', t => {
    const wrapper = shallow(
        <Icon name="customer" className="customer" />
    );
    t.is(wrapper.find('i').length, 1);
    t.is(wrapper.find('i.customer').length,1 )
})
=======
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Icon from '../index';

test('renders an icon', () => {
    const wrapper = shallow(
        <Icon iconClass="custom-icon-class"/>
    );
    expect(wrapper.find('i')).to.have.length(1);
    expect(wrapper.find('i.custom-icon-class')).to.have.length(1);
});
>>>>>>> 3c3bc4e8471f121b9a788fcf2d6b5090fe331479
