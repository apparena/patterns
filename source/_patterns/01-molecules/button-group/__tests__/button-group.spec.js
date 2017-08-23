/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import ButtonGroup from '../button-group';
import Button from '../../../00-atoms/button/button';

test('renders a group of buttons', (t) => {
    const wrapper = shallow(
        <ButtonGroup>
            <Button title="1"/>
            <Button title="2"/>
            <Button title="3"/>
            <Button title="4"/>
        </ButtonGroup>
    );

    t.is(wrapper.find('div.btn-group').length, 1);
    t.is(wrapper.find('.btn-group').find(Button).length, 4);
});

test('renders a custom aria-label', (t) => {
    const wrapper = shallow(
        <ButtonGroup ariaLabel="custom-btn-group">
            <Button title="1"/>
        </ButtonGroup>
    );

    t.is(wrapper.find('div.btn-group').length, 1);
    t.is(wrapper.find('div[aria-label="custom-btn-group"]').length, 1);
    t.is(wrapper.find('.btn-group').find(Button).length, 1);
});