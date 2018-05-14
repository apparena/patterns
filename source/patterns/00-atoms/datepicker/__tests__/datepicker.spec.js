/* eslint-env mocha */
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { spy } from 'sinon';
import { DatePicker } from 'apparena-patterns-react';

test('listens to the change', () => {
  const onSelect = spy();
  const wrapper = mount(<DatePicker onChange={onSelect} />);
  wrapper.find('input').simulate('change');
  expect(onSelect.calledOnce).toBe(true);
});
