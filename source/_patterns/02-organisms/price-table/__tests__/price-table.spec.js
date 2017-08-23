/**
 * Created by marius on 1/10/17.
 */
/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import PriceTable from '../price-table';


test('renders Pricetable', (t) => {
    const onClick = spy();
    const wrapper = shallow(
        <PriceTable plans={"test-plan"} onClick={onClick} />
    );
    t.is(wrapper.find('div').length, 1);
});
