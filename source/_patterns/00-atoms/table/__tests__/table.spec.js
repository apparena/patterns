/* eslint-env mocha */
import React from "react";
import test from 'ava';
import {mount, configure} from "enzyme";
import Table from "../table";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('Table renders a table', (t) => {
    const wrapper = mount(
        <Table>
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
        </Table>
    );
    t.is(wrapper.find('table').length, 1);
    t.is(wrapper.find('tr').length, 3);
    t.is(wrapper.find('th').length, 6);
})

