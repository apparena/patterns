/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import Breadcrumb from '../breadcrumb';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders breadcrumbs', (t) => {
    const wrapper = shallow(
        <Breadcrumb crumbNames={['One', 'Two', 'Three']} crumbLocations={['/one', '/one/two', '']}/>
    );
    t.is(wrapper.find('ol.breadcrumb').length, 1);
    t.is(wrapper.find('li').length, 3);
    t.is(wrapper.find('.breadcrumb-item').length, 3);
    t.is(wrapper.find('.active').length, 1);
});

test('renders custom classes', (t) => {
    const wrapper = shallow(
        <Breadcrumb classNames="custom-breadcrumb" crumbNames={['One', 'Two', 'Three', 'Four']} crumbLocations={['/one', '/one/two', '/one/two/three', '']}/>
    );
    t.is(wrapper.find('ol.breadcrumb').length, 1);
    t.is(wrapper.find('.custom-breadcrumb').length, 1);
    t.is(wrapper.find('li').length, 4);
    t.is(wrapper.find('.breadcrumb-item').length, 4);
    t.is(wrapper.find('.active').length, 1);
});