/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import Search from '../index';

test('renders search', (t) => {
    const wrapper = shallow(
        <Search formClassNames="custom-form" labelClassNames="custom-label" inputClassNames="custom-input" id="custom-search-id" method="POST" prompt="Please search" placeholder="Type now"/>
    );
    t.is(wrapper.find('form.custom-form').length, 1);
    t.is(wrapper.find('label.custom-label').length, 1);
    t.is(wrapper.find('input.custom-input').length, 1);
    t.is(wrapper.find('form[method="POST"]').length, 1);
    t.is(wrapper.find('input[placeholder="Type now"]').length, 1);
    t.is(wrapper.find('label').contains('Please search'), true);
});