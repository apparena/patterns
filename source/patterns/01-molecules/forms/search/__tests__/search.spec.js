/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Search from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders search', () => {
    const wrapper = shallow(
        <Search formClassNames="custom-form" labelClassNames="custom-label" inputClassNames="custom-input" id="custom-search-id" method="POST" prompt="Please search" placeholder="Type now"/>
    );
    expect(wrapper.find('form.custom-form').length).toBe(1);
    expect(wrapper.find('label.custom-label').length).toBe(1);
    expect(wrapper.find('input.custom-input').length).toBe(1);
    expect(wrapper.find('form[method="POST"]').length).toBe(1);
    expect(wrapper.find('input[placeholder="Type now"]').length).toBe(1);
    expect(wrapper.find('label').contains('Please search')).toBe(true);
});