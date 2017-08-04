/* eslint-env mocha */
import React from "react";
import {shallow, mount} from "enzyme";
import {expect} from "chai";
import {spy} from "sinon";
import {test} from "ava";
import SelectMenu from "../index";

test.failing('Select Menu renders elements correctly', t =>{
    const onChange = spy();
    const wrapper = shallow(
        <SelectMenu defaultValue="" options={[1,2,3,4,5]} onChange={onChange} />
    );
    t.is(wrapper.find('select'), 1)
    t.is(wrapper.find('optgroup').length, 1)
    t.is(wrapper.find('option').length, 5)
    
})

test.failing('handles change correctly', t => {
    const onChange = spy();
    const wrapper = mount(
        <SelectMenu id="custom-select-menu" options={[1,2,3,4,5]} onChange={onChange} />
    );
    wrapper.find('select').simulate('change', {target: {value: 4}});

    t.is(onChange.calledOnce, true);
    t.is(onChange.firstCall.args[0]['target']['value'], 4)
    t.is(wrapper.find('select')).length, 1 );
    t.is(wrapper.find('optgroup')).length, 1 );
    t.is(wrapper.find('option')).length, 5 );
})
