/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import Nav from '../index';

test('renders nav', (t) => {
    const wrapper = shallow(
        <Nav classNames="custom-nav" listItems={{
            'this is a test': ['#', 'custom-a', 'li-li'],
            'and another test': ['dashboard', 'custom-a', 'la-li']
            }}
        />
    );
    t.is(wrapper.find('ul.nav').length, 1);
    t.is(wrapper.find('li').length, 2);
    t.is(wrapper.find('a.custom-a').length, 2);
    t.is(wrapper.find('li.la-li').length, 1);

    // You can't find complex hrefs like ' # '
    // https://github.com/airbnb/enzyme/issues/283
    t.is(wrapper.find({href: '#'}).length, 1);
    t.is(wrapper.find('a[href=\'dashboard\']').length, 1);
    t.is(wrapper.find('li > a').length, 2);
    t.is(wrapper.find({href: '#'}).contains('this is a test'), true);
    t.is(wrapper.find('a[href=\'dashboard\']').contains('and another test'), true);
});