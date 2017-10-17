/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import ListGroup from '../list-group';

test('renders a ListGroup', (t) => {
    const wrapper = shallow(
        <ListGroup classNames="custom-list-group" listItems={[
            {disabled: 'Im disabled'},
            {0: <div>Lines of code</div>},
            {1: 'Im normal'},
            {'list-group-item-danger': '9001 errors were found in your code. Fix now?'}
            ]}
        />
    );
    t.is(wrapper.find('.custom-list-group').length, 1);
    t.is(wrapper.find('ul.list-group').length, 1);
    t.is(wrapper.find('.list-group-item').length, 4);
    t.is(wrapper.find('.disabled').length, 1);
    t.is(wrapper.find('.list-group-item-danger').length, 1);
});