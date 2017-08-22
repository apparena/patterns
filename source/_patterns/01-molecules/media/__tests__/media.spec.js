/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow} from 'enzyme';
import Media from '../media';

test('renders media', (t) => {
    const wrapper = shallow(
        <Media classNames="custom-media"
               mediaClassNames="custom-media-element"
               mediaHref="custom-location"
               mediaObject={<img src="../../../../../build/generator/frontend/src" alt="yes"/>}
               mediaBodyClassNames="custom-media-body"
               mediaBodyHeaderClassNames="custom-media-heading"
               mediaBodyHeader="this is a test"
               mediaBody="Testing is as successful as ever"
        />
    );
    t.is(wrapper.find('div.media').length, 1);
    t.is(wrapper.find('img').length, 1);
    t.is(wrapper.find('a + div').length, 1);
    t.is(wrapper.find('a[href=\'custom-location\']').length, 1);
    t.is(wrapper.find('.custom-media').length, 1);
    t.is(wrapper.find('.custom-media-element').length, 1);
    t.is(wrapper.find('.custom-media-body').length, 1);
    t.is(wrapper.find('.custom-media-heading').length, 1);
    t.is(wrapper.find('.custom-media-heading').contains('this is a test'), true);
    t.is(wrapper.find('.custom-media-body').contains('Testing is as successful as ever'), true);
    t.is(wrapper.find('.custom-media-body').contains('Testing is as successful as ever'), true);
});

test('renders media to the right at will', (t) => {
    const wrapper = shallow(
        <Media classNames="custom-media"
               mediaPosition="right"
               mediaClassNames="custom-media-element"
               mediaHref="custom-location"
               mediaObject={<img src="../../../../../build/generator/frontend/src" alt="yes"/>}
               mediaBodyClassNames="custom-media-body"
               mediaBodyHeaderClassNames="custom-media-heading"
               mediaBodyHeader="this is a test"
               mediaBody="Testing is as successful as ever"
        />
    );
    t.is(wrapper.find('div.media').length, 1);
    t.is(wrapper.find('img').length, 1);
    t.is(wrapper.find('div + a').length, 1);
    t.is(wrapper.find('a[href=\'custom-location\']').length, 1);
    t.is(wrapper.find('.custom-media').length, 1);
    t.is(wrapper.find('.custom-media-element').length, 1);
    t.is(wrapper.find('.custom-media-body').length, 1);
    t.is(wrapper.find('.custom-media-heading').length, 1);
    t.is(wrapper.find('.custom-media-heading').contains('this is a test'), true);
    t.is(wrapper.find('.custom-media-body').contains('Testing is as successful as ever'), true);
    t.is(wrapper.find('.custom-media-body').contains('Testing is as successful as ever'), true);
});