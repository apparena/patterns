/* eslint-env mocha */
import React from "react";
import {mount, configure} from "enzyme";
import Index from "../index";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('Table renders a table', () => {
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
    expect(wrapper.find('table').length).toBe(1);
    expect(wrapper.find('tr').length).toBe(3);
    expect(wrapper.find('th').length).toBe(6);
})

