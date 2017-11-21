/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {mount, shallow, configure} from 'enzyme';
import {spy} from 'sinon';
import Modal from '../modal';
import ModalHeader from '../modal-header';
import styles from '../modal.scss';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

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