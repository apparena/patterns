/**
 * Created by marius on 1/10/17.
 */
/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import PriceTable from '../price-table';


test('renders Pricetable', () => {
    const wrapper = shallow(
        <PriceTable/>
    );
    expect(wrapper.find('div')).to.have.length(1);
});
