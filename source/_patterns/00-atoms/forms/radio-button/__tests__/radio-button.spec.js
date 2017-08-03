/* eslint-env mocha */
import React from "react";
import {shallow, mount} from "enzyme";
import {expect} from "chai";
import {spy} from "sinon";
import RadioButton from "../index";

describe('<RadioButton />', () => {
    it('renders with default text', () => {
        const wrapper = shallow(
            <RadioButton />
        );
        expect(wrapper.find('.form-check')).to.have.length(1);
        expect(wrapper.find('input')).to.have.length(1);
        expect(wrapper.find('label').contains('identifier missing!')).to.equal(true);
    });

    it('listens to change', () => {
        const onSelect = spy();
        const wrapper = mount(
            <RadioButton onFilterSelect={onSelect} />
        );
        wrapper.find('input').simulate('change');
        expect(onSelect).to.have.property('callCount', 1);
    });

    it('sends values to the change event', () => {
        const onChange = spy();
        const wrapper = mount(
            <RadioButton text="hello" onFilterSelect={onChange}/>
        );
        wrapper.find('input').simulate('change');
        expect(onChange.calledOnce).to.equal(true);
        expect(onChange.firstCall.args).to.have.length(2);
        expect(typeof onChange.firstCall.args[0]).to.equal(typeof {});
        expect(typeof onChange.firstCall.args[1]).to.equal(typeof "");
    });
});