/* eslint-env mocha */
import React from "react";
import {shallow, mount} from "enzyme";
import {spy} from "sinon";
import {test} from 'ava';
import {expect} from 'chai';
import PriceTableSingle from "../index.jsx";

test("it renders the price component single with a onClick URL", t => {
    spy(PriceTableSingle.prototype, 'getInitState');
    const wrapper = mount(
        <PriceTableSingle
            onClick="www.google.com"
            productId="20"
            articles={[{
                key: 'service',
                value: 1,
                price: 63,
                text: `testing component`,
                title: "component test"
            }]}
        />
    );

    t.is(PriceTableSingle.prototype.getInitState.calledOnce, true);
    t.is(wrapper.find('a').length, 1);
    t.is(wrapper.find('button').length, 0);
    t.regex(wrapper.find('a').prop('href'), /^www\.google\.com\?productId=20&orderData=.{10,}$/);

    PriceTableSingle.prototype.getInitState.restore();
});

test("it renders the price component single with a onClick function and it gets executed", t => {
    spy(PriceTableSingle.prototype, 'getInitState');
    const onClick = spy();

    const wrapper = mount(
        <PriceTableSingle
            onClick={onClick}
            productId="20"
            articles={[{
                key: 'service',
                value: 1,
                price: 63,
                text: `testing component`,
                title: "component test"
            }]}
        />
    );

    wrapper.find('button').simulate('click');

    t.is(PriceTableSingle.prototype.getInitState.calledOnce, true);
    t.is(wrapper.find('a').length, 0);
    t.is(wrapper.find('button').length, 1);
    t.is(onClick.calledOnce, true);

    PriceTableSingle.prototype.getInitState.restore();
});