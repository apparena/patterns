/* eslint-env mocha */
<<<<<<< HEAD
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
    expect(wrapper.find('select')).to.have.length(1);
    expect(wrapper.find('optgroup')).to.have.length(1);
    expect(wrapper.find('option')).to.have.length(5);
})
=======
import React from 'react';
import {test} from 'ava';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import SelectMenu from '../index';

test('renders elements correctly', () => {
    const wrapper = shallow(
        <SelectMenu id="custom-select-menu" options={[1, 2, 3, 4, 5]}/>
    );
    expect(wrapper.find('select')).to.have.length(1);
    expect(wrapper.find('optgroup')).to.have.length(1);
    expect(wrapper.find('option')).to.have.length(5);
});

test('handles change correctly', () => {
    const onChange = spy();
    const wrapper = mount(
        <SelectMenu id="custom-select-menu" options={[1, 2, 3, 4, 5]} onChangeFunction={onChange}/>
    );
    wrapper.find('select').simulate('change', {target: {value: 4}});

    expect(onChange).to.have.property('callCount', 1);
    expect(onChange.firstCall.args[0]['target']['value']).to.equal(4);
    expect(wrapper.find('select')).to.have.length(1);
    expect(wrapper.find('optgroup')).to.have.length(1);
    expect(wrapper.find('option')).to.have.length(5);
});
>>>>>>> 3c3bc4e8471f121b9a788fcf2d6b5090fe331479
