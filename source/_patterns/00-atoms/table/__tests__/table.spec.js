/* eslint-env mocha */
import React from "react";
import test from 'ava';
import {mount} from "enzyme";
import Table from "../table";

test('Table renders a table', (t) => {
    const wrapper = mount(
        <Table tableData={[
            { cols: ['Left', 'Right'] },
            {rows: { 0: ['25%', '75%'],
                1: ['50%', '50%'],
                2: ['66%', '33%']
            }
            }
        ]}/>
    );
    console.log(wrapper.find('tr'));
    t.is(wrapper.find('table').length, 1);
    t.is(wrapper.find('tr').length, 4);
    t.is(wrapper.find('th').length, 2);
    t.is(wrapper.find('td').length, 6);
})

/*describe('<Table />', () => {
    it('renders a table', () => {
        const wrapper = shallow(
            <Table tableData={[
                { cols: ['Left', 'Right'] },
                { rows: { 0: ['25%', '75%'],
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

    it('allows styling of individual rows', () => {
        const wrapper = shallow(
            <Table tableData={[
                { cols: ['Left', 'Right'] },
                { rows: { 0: ['25%', '75%'],
                    1: ['50%', '50%'],
                    2: ['class-names:table-danger', '66%', '33%']
                }
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