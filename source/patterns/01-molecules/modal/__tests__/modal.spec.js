/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Modal from '../index';
import ModalHeader from '../modal-header';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('shows a modal', () => {
    const wrapper = shallow(
        <Modal>
            <ModalHeader headerText="Hello World">
                <p>This is a test</p>
            </ModalHeader>
        </Modal>
    );
    expect(wrapper.html().includes('h5')).toBe(true);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').contains('This is a test')).toBe(true);
});