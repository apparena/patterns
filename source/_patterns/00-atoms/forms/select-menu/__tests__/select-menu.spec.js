/* eslint-env mocha */
import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import {test} from 'ava';
import SelectMenu from '../index';

test('Select Menu renders elements correctly', (t) => {
    const onChange = spy();
    const wrapper = mount(
        <SelectMenu defaultValue="1" options={["1", "2", "3", "4", "5"]} onChange={onChange}/>
    );
    console.log(wrapper.html())
    t.is(wrapper.html().includes('input'), true);
    t.is(wrapper.html().includes('span'), true);
    t.is(wrapper.html().includes('div'),true );

});