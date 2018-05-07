/* eslint-env mocha */
import React from 'react';
import { mount, configure } from 'enzyme';
import { spy } from 'sinon';
import Input from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Input is focused by default', () => {
  const onChange = spy();
  const wrapper = mount(<Input autoFocus onChange={onChange} />);
  expect(wrapper.find('input').instance()).toBe(document.activeElement);
});

test('Input accepts custom functions', () => {
  const onChange = spy();
  const wrapper = mount(<Input onChange={onChange} />);
  wrapper.find('input').simulate('change', { target: { value: 'My old value' } })
    .simulate('change', { target: { value: 'My new value' } });
  expect(onChange.calledTwice).toBe(true);
});
