/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders breadcrumbs', () => {
    const wrapper = shallow(
        <Index crumbNames={['One', 'Two', 'Three']} crumbLocations={['/one', '/one/two', '']}/>
    );
    expect(wrapper.find('ol.breadcrumb').length).toBe(1);
    expect(wrapper.find('li').length).toBe(3);
    expect(wrapper.find('.breadcrumb-item').length).toBe(3);
    expect(wrapper.find('.active').length).toBe(1);
});

test('renders custom classes', () => {
    const wrapper = shallow(
        <Index classNames="custom-breadcrumb" crumbNames={['One', 'Two', 'Three', 'Four']} crumbLocations={['/one', '/one/two', '/one/two/three', '']}/>
    );
    expect(wrapper.find('ol.breadcrumb').length).toBe(1);
    expect(wrapper.find('.custom-breadcrumb').length).toBe(1);
    expect(wrapper.find('li').length).toBe(4);
    expect(wrapper.find('.breadcrumb-item').length).toBe(4);
    expect(wrapper.find('.active').length).toBe(1);
});