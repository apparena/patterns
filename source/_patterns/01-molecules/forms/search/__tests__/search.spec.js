/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Search from '../index';

test('renders search', () => {
    const wrapper = shallow(
        <Search formClassNames="custom-form" labelClassNames="custom-label" inputClassNames="custom-input" id="custom-search-id" method="POST" prompt="Please search" placeholder="Type now"/>
    );
    expect(wrapper.find('form.custom-form')).to.have.length(1);
    expect(wrapper.find('label.custom-label')).to.have.length(1);
    expect(wrapper.find('input.custom-input')).to.have.length(1);
    expect(wrapper.find('form[method="POST"]')).to.have.length(1);
    expect(wrapper.find('input[placeholder="Type now"]')).to.have.length(1);
    expect(wrapper.find('label').contains('Please search')).to.equal(true);
});