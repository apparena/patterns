/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import Tooltip from '../tooltip';
import Button from '../../../00-atoms/button/button';


test('renders tooltip', (t) => {
    const wrapper = shallow(
        <Tooltip label="Test"><Button>Test</Button></Tooltip>
    );
    t.is(wrapper.find('div').length, 1);
});
