/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import Tooltip from '../index';
import Button from '../../../00-atoms/button';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders tooltip', (t) => {
    const wrapper = shallow(
        <Tooltip label="Test"><Button>Test</Button></Tooltip>
    );
    t.is(wrapper.find('div').length, 1);
});
