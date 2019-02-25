/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import ButtonGroup from '../index';
import Button from '../../../00-atoms/button/docs';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders a group of buttons', () => {
    const wrapper = shallow(
        <ButtonGroup>
            <Button title="1"/>
            <Button title="2"/>
            <Button title="3"/>
            <Button title="4"/>
        </ButtonGroup>
    );
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.html().includes('button')).toBe(true);
});