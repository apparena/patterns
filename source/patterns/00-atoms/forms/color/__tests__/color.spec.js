import React from 'react';
import ColorPicker from '../index';

test('Form color rendered', () => {
  const wrapper = mount(<ColorPicker />);

  // Check if the components state is checked
  expect(wrapper.find('div.triangleShadow').length).toEqual(1);
});
