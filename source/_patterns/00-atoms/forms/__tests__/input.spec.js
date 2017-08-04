/* eslint-env mocha */
<<<<<<< HEAD
import React from "react";
import {mount} from "enzyme";
import {spy} from "sinon";
import Input from "../input";
import {test} from 'ava';

test('Input is focused by default', t =>{
    const wrapper = mount(
        <Input autoFocus />
    );
    t.is(wrapper.find('input').node, document.activeElement);
});

test('Input accepts custom functions', t => {
    const onChange = spy();
    const wrapper = mount(
        <Input onChange={onChange} />
    );
    wrapper.find('input').simulate('change',{target: {value: 'My old value'}})
        .simulate('change', {target: {value:'My new value'}});
    t.is(onChange.calledTwice, true);
});
=======
import React from 'react';
import {test} from 'ava';
import {mount} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import Input from '../input';

test('is focused by default', () => {
    const onChange = spy();
    const wrapper = mount(
        <Input onChange={onChange}/>
    );
    expect(wrapper.find('input').node).to.equal(document.activeElement);
});

test('accepts custom functions', () => {
    const onChange = spy();
    const wrapper = mount(
        <Input onChange={onChange}/>
    );
    wrapper.find('input').simulate('change', {target: {value: 'My old value'}})
        .simulate('change', {target: {value: 'My new value'}});
    expect(onChange).to.have.property('callCount', 2);
});
>>>>>>> 3c3bc4e8471f121b9a788fcf2d6b5090fe331479
