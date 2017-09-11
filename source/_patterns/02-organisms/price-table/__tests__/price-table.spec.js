/**
 * Created by marius on 1/10/17.
 */
/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import PriceTable from '../price-table';
import Plans from '../price-table.json';
import styles from '../price-table.scss';


test('renders Pricetable', (t) => {
    const onClick = spy();
    const wrapper = shallow(
        <PriceTable
            plans={Plans}
            onClick={onClick}
        />
    );
    t.is(wrapper.find(`.${styles.priceTable}`).length, 1);
});
