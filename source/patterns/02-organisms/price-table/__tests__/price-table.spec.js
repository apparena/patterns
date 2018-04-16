/**
 * Created by marius on 1/10/17.
 */
/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import {spy} from 'sinon';
import Index from '../index';
import Plans from '../price-table.json';
import styles from '../index.scss';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders Pricetable', (t) => {
    const onClick = spy();
    const wrapper = shallow(
        <Index
            plans={Plans}
            onClick={onClick}
        />
    );
    t.is(wrapper.find(`.${styles.priceTable}`).length, 1);
});
