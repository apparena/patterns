/* eslint-env mocha */
<<<<<<< HEAD
import React from "react";
import {test} from 'ava';
import {mount} from "enzyme";
import {spy} from "sinon";
import TextField from "../index";

test('TextField listens to change', t => {
    const onChange = spy();
    const wrapper = mount(
        <TextField id="custom-text-field" onChangeFunction={onChange} />
    );
    wrapper.find('input').simulate('change');

    t.is(wrapper.find('input').length, 1);
    t.is(wrapper.find("#custom-text-field").length, 1);
    t.is(onChange.calledOnce, true);
=======
import React from 'react';
import {test} from 'ava';
import {mount} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import TextField from '../index';

test('listens to change', () => {
    const onChange = spy();
    const wrapper = mount(
        <TextField id="custom-text-field" onChangeFunction={onChange}/>
    );
    wrapper.find('input').simulate('change');

    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('#custom-text-field')).to.have.length(1);
    expect(onChange).to.have.property('callCount', 1);
>>>>>>> 3c3bc4e8471f121b9a788fcf2d6b5090fe331479
});