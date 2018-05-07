/* eslint-env mocha */
import React from "react";
import {shallow, mount, configure} from "enzyme";
import {spy} from "sinon";
import Checkbox  from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('listens to the change', () => {
    const onSelect = spy();
    const wrapper = mount(
        <Checkbox onChange={onSelect} />
    );
    wrapper.find('input').simulate('change');
    expect(onSelect.calledOnce).toBe(true);
});

test('Checkbox without Tooltip', () => {
    const wrapper = shallow(
        <Checkbox renderTooltip={false}/>
    )
    expect(wrapper.instance().props.renderTooltip).toBe(false)
})

test('sends values to the change event', () => {
    const onChange = spy();
    const wrapper = mount(
        <Checkbox text="hello" onChange={onChange} />
    );
    wrapper.find('input').simulate('change');
    expect(onChange.calledOnce).toBe(true);
    expect(typeof onChange.firstCall.args[0]).toBe(typeof {});
});