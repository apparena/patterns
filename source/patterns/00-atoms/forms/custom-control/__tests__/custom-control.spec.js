import React from 'react';
import CustomControl from '../index';

test('checkbox is checked', () => {
  const onChange = () => {};
  const wrapper = mount(<CustomControl name="test1" checked onChange={onChange} />);
  expect(wrapper.state('checked')).toEqual(true);
});
