/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Tooltip from '../tooltip';
import Button from '../../../00-atoms/button/button';


test('renders nav', () => {
    const wrapper = shallow(
        <Tooltip label="Test"><Button>Test</Button></Tooltip>
    );
    expect(wrapper.find('div')).to.have.length(1);
});
