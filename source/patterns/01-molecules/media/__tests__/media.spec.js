/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Index from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders media', () => {
    const wrapper = shallow(
        <Index classNames="custom-media"
               mediaClassNames="custom-media-element"
               mediaHref="custom-location"
               mediaObject={<img src="../../../../../build/generator/frontend/src" alt="yes"/>}
               mediaBodyClassNames="custom-media-body"
               mediaBodyHeaderClassNames="custom-media-heading"
               mediaBodyHeader="this is a test"
               mediaBody="Testing is as successful as ever"
        />
    );
    expect(wrapper.find('div.media').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('a + div').length).toBe(1);
    expect(wrapper.find('a[href=\'custom-location\']').length).toBe(1);
    expect(wrapper.find('.custom-media').length).toBe(1);
    expect(wrapper.find('.custom-media-element').length).toBe(1);
    expect(wrapper.find('.custom-media-body').length).toBe(1);
    expect(wrapper.find('.custom-media-heading').length).toBe(1);
    expect(wrapper.find('.custom-media-heading').contains('this is a test')).toBe(true);
    expect(
        wrapper.find('.custom-media-body').contains('Testing is as successful as ever')
    ).toBe(true);
    expect(
        wrapper.find('.custom-media-body').contains('Testing is as successful as ever')
    ).toBe(true);
});

test('renders media to the right at will', () => {
    const wrapper = shallow(
        <Index classNames="custom-media"
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
    expect(wrapper.find('div.media').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('div + a').length).toBe(1);
    expect(wrapper.find('a[href=\'custom-location\']').length).toBe(1);
    expect(wrapper.find('.custom-media').length).toBe(1);
    expect(wrapper.find('.custom-media-element').length).toBe(1);
    expect(wrapper.find('.custom-media-body').length).toBe(1);
    expect(wrapper.find('.custom-media-heading').length).toBe(1);
    expect(wrapper.find('.custom-media-heading').contains('this is a test')).toBe(true);
    expect(
        wrapper.find('.custom-media-body').contains('Testing is as successful as ever')
    ).toBe(true);
    expect(
        wrapper.find('.custom-media-body').contains('Testing is as successful as ever')
    ).toBe(true);
});