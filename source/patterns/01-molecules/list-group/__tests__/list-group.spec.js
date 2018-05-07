/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders a ListGroup', () => {
    const wrapper = shallow(
        <Index classNames="custom-list-group" listItems={[
            {disabled: 'Im disabled'},
            {0: <div>Lines of code</div>},
            {1: 'Im normal'},
            {'list-group-item-danger': '9001 errors were found in your code. Fix now?'}
            ]}
        />
    );
    expect(wrapper.find('.custom-list-group').length).toBe(1);
    expect(wrapper.find('ul.list-group').length).toBe(1);
    expect(wrapper.find('.list-group-item').length).toBe(4);
    expect(wrapper.find('.disabled').length).toBe(1);
    expect(wrapper.find('.list-group-item-danger').length).toBe(1);
});