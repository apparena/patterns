import React from 'react';
import { mount, configure } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import CustomControl from '../index';

configure({ adapter: new Adapter() });

test('Input is focused by default', (t) => {
  const onChange = spy();
  const wrapper = mount(<CustomControl autoFocus onChange={onChange} />);
  t.is(wrapper.find('input').instance(), document.activeElement);
});

test('Input accepts custom functions', (t) => {
  const onChange = spy();
  const wrapper = mount(<CustomControl onChange={onChange} />);
  wrapper.find('input').simulate('change', { target: { value: 'My old value' } })
    .simulate('change', { target: { value: 'My new value' } });
  t.is(onChange.calledTwice, true);
});
