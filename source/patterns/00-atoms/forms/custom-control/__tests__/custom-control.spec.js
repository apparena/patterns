import React from 'react';
import CustomControl from '../index';

test('Checked checkbox', () => {
  const onChange = () => {};
  const wrapper = mount(<CustomControl name="checkedCheckboxTest" id="checkedCheckboxTest" checked onChange={onChange} value="active" />);

  // Check if the components state is checked
  expect(wrapper.state('checked')).toEqual(true);
  expect(wrapper.find('input').props().checked).toEqual(true);
});

test('Unchecked checkbox', () => {
  const onChange = () => {};
  const wrapper = mount(<CustomControl name="checkedCheckboxTest" id="checkedCheckboxTest" onChange={onChange} value="active" />);

  // Check if the components state is checked
  expect(wrapper.state('checked')).toEqual(false);
  expect(wrapper.find('input').props().checked).toEqual(false);
});
