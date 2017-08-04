/* eslint-env mocha */
<<<<<<< HEAD
import React from "react";
import {test}from "ava";
import {mount} from "enzyme";
import {spy} from "sinon";
import TextArea from "../index";

test('TextArea listens to change', t => {
    const onChange = spy();
    const wrapper = mount(
        <TextArea id="custom-text-area" onChangeFunction={onChange} />
    );
    wrapper.find('textarea').simulate('change');

    t.is(wrapper.find('textarea').length, 1);
    t.is(wrapper.find('#custom-text-area').length, 1);
    t.is(onChange.calledOnce, true);
=======
import React from 'react';
import {test} from 'ava';
import {mount} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import TextArea from '../index';

test('listens to change', () => {
    const onChange = spy();
    const wrapper = mount(
        <TextArea id="custom-text-area" onChangeFunction={onChange}/>
    );
    wrapper.find('textarea').simulate('change');

    expect(wrapper.find('textarea')).to.have.length(1);
    expect(wrapper.find('#custom-text-area')).to.have.length(1);
    expect(onChange).to.have.property('callCount', 1);
>>>>>>> 3c3bc4e8471f121b9a788fcf2d6b5090fe331479
});