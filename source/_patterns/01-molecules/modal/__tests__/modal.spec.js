/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {mount, shallow} from 'enzyme';
import {spy} from 'sinon';
import Modal from '../modal';
import styles from '../modal.scss';

test('shows a modal', (t) => {
    const wrapper = shallow(
        <Modal size="small" headerText="Hello World">
            <p>This is a test</p>
        </Modal>
    );
    t.is(wrapper.find('h2').length, 1);
    t.is(wrapper.find('h2').contains('Hello World'), true);
    t.is(wrapper.find('p').length,  1);
    t.is(wrapper.find('p').contains('This is a test'), true);
});

test('has a working search bar', (t) => {
    const searchSpy = spy();
    const wrapper = mount(
        <Modal size="small" headerText="Hello World" onSearch={searchSpy}>
            <p>This is a test</p>
        </Modal>
    );

    wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
    t.is(wrapper.find('input').length, 1);
    setTimeout(() => {
        t.is(searchSpy.calledOnce, true);
    }, 1000);
});

test('debounces the search', (t) => {
    const searchSpy = spy();
    const wrapper = mount(
        <Modal size="small" headerText="Hello World" onSearch={searchSpy}>
            <p>This is a test</p>
        </Modal>
    );

    wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
    wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
    t.is(wrapper.find('input').length, 1);
    setTimeout(() => {
        t.is(searchSpy.calledOnce, true);
    }, 1000);
});

test('shows a save button and handles save methods', (t) => {
    const clickSpy = spy();
    const wrapper = mount(
        <Modal size="small" headerText="Hello World" onSave={clickSpy}>
            <p>This is a test</p>
        </Modal>
    );

    t.is(wrapper.find('input').length, 0);
    t.is(wrapper.find(`.${styles['modal-button-primary']}`).length, 1);
    wrapper.find(`.${styles['modal-button-primary']}`).simulate('click');
    t.is(clickSpy.calledOnce, true);
});