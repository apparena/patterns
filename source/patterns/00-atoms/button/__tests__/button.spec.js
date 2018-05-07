/* eslint-env mocha */
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { spy } from 'sinon';
import Button from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders a button', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.is('button')).toBe(true);
});

test('renders children', () => {
  const wrapper = shallow(<Button><p>Hello World</p></Button>);
  expect(wrapper.is('button')).toBe(true);
  expect(wrapper.find('p').length).toBe(1);
  expect(wrapper.find('p').contains('Hello World')).toBe(true);
});

test('renders loading state', () => {
  const wrapper = shallow(<Button type="primary" state="loading"><p>Hello World</p></Button>);
  expect(wrapper.is('button')).toBe(true);
  expect(wrapper.find('Spinner').length === 1).toBe(true);
});

test('renders success state', () => {
  const wrapper = shallow(<Button type="primary" state="success"><p>Hello World</p></Button>);
  expect(wrapper.is('button')).toBe(true);
  expect(wrapper.find('Icon').length === 1).toBe(true);
});

test('renders danger state', () => {
  const wrapper = shallow(<Button type="primary" state="danger"><p>Hello World</p></Button>);
  expect(wrapper.is('button')).toBe(true);
  expect(wrapper.find('Icon').length === 1).toBe(true);
});

test('reacts to onClick', () => {
  const onClick = spy();
  const wrapper = mount(<Button onClick={onClick}><p>Hello World</p></Button>);
  wrapper.find('button').simulate('click');
  wrapper.find('button').simulate('click');
  wrapper.find('button').simulate('click');
  expect(onClick.calledThrice).toBe(true);
});

test('give the button an href', () => {
  const wrapper = shallow(<Button href="wololo" />);
  expect(wrapper.is('a')).toBe(true);
});
