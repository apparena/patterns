/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {mount, shallow} from 'enzyme';
import {spy} from 'sinon';
import Modal from '../modal';
import ModalHeader from '../modal-header';
import styles from '../modal.scss';

test('shows a modal', (t) => {
    const wrapper = shallow(
        <Modal>
            <ModalHeader headerText="Hello World">
                <p>This is a test</p>
            </ModalHeader>
        </Modal>
    );
    console.log(wrapper.html())
    t.is(wrapper.html().includes('h5'), true);
    t.is(wrapper.find('p').length,  1);
    t.is(wrapper.find('p').contains('This is a test'), true);
});