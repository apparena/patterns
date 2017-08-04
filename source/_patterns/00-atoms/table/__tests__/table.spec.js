/* eslint-env mocha */
<<<<<<< HEAD
import React from "react";
import test from 'ava';
import {shallow} from "enzyme";
import {expect} from "chai";
import Table from "../table";

test('Table renders a table', t => {
    const wrapper = shallow(
        <Table tableData={[
            { cols: ['Left', 'Right'] },
            {rows: { 0: ['25%', '75%'],
                1: ['50%', '50%'],
                2: ['66%', '33%']
            }}
        ]}/>
    );
    t.is(wrapper.find('table').length, 1);
    expect(wrapper.find('tr')).to.have.length(4);
})

/*describe('<Table />', () => {
    it('renders a table', () => {
        const wrapper = shallow(
            <Table tableData={[
                { cols: ['Left', 'Right'] },
                { rows: { 0: ['25%', '75%'],
=======
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Table from '../table';

test('renders a table', () => {
    const wrapper = shallow(
        <Table tableData={[
            {cols: ['Left', 'Right']},
            {
                rows: {
                    0: ['25%', '75%'],
>>>>>>> 3c3bc4e8471f121b9a788fcf2d6b5090fe331479
                    1: ['50%', '50%'],
                    2: ['66%', '33%']
                }
            }
        ]}/>
    );
    expect(wrapper.find('table.table')).to.have.length(1);
    expect(wrapper.find('tr')).to.have.length(4);
    expect(wrapper.find('th')).to.have.length(2);
    expect(wrapper.find('td')).to.have.length(6);
});

test('allows styling of individual rows', () => {
    const wrapper = shallow(
        <Table tableData={[
            {cols: ['Left', 'Right']},
            {
                rows: {
                    0: ['25%', '75%'],
                    1: ['50%', '50%'],
                    2: ['class-names:table-danger', '66%', '33%']
                }
<<<<<<< HEAD
                }
            ]}/>
        );
        expect(wrapper.find('table.table')).to.have.length(1);
        expect(wrapper.find('tr')).to.have.length(4);
        expect(wrapper.find('th')).to.have.length(2);
        expect(wrapper.find('td')).to.have.length(6);
        expect(wrapper.find('tr.table-danger')).to.have.length(1);
    });
});*/
=======
            }
        ]}/>
    );
    expect(wrapper.find('table.table')).to.have.length(1);
    expect(wrapper.find('tr')).to.have.length(4);
    expect(wrapper.find('th')).to.have.length(2);
    expect(wrapper.find('td')).to.have.length(6);
    expect(wrapper.find('tr.table-danger')).to.have.length(1);
});
>>>>>>> 3c3bc4e8471f121b9a788fcf2d6b5090fe331479
