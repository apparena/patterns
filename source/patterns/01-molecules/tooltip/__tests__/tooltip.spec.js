/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Tooltip from '../index';
import Button from '../../../00-atoms/button';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders tooltip', () => {
    const wrapper = shallow(
        <Tooltip label="Test"><Button>Test</Button></Tooltip>
    );
    expect(wrapper.find('div').length).toBe(1);
});
