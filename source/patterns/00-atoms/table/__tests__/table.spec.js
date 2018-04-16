/* eslint-env mocha */
import React from "react";
import test from 'ava';
import {mount, configure} from "enzyme";
import Index from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('Table renders a table', (t) => {
    const wrapper = mount(
        <Index>
            <tr>
                <th />
                <th />
            </tr>
            <tr>
                <th />
                <th />
            </tr>
            <tr>
                <th />
                <th />
            </tr>
        </Index>
    );
    t.is(wrapper.find('table').length, 1);
    t.is(wrapper.find('tr').length, 3);
    t.is(wrapper.find('th').length, 6);
})

