import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import {expect} from 'chai';
import Router from '../frontend/src/router';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('main frontend is rendered correctly', (t) => {
    const home = mount(
        <Router />
    );

    expect(home.find("input#searchInput")).to.have.length(1);
    expect(home.find("input#searchInput").props().value).to.equal("");
    expect(home.find("ul").length).to.be.at.least(2);
    expect(home.find("div > h3").length).to.be.at.least(1);
    expect(home.find('div[type="card-header"]').props().children).to.equal("Components");
    expect(home.find('div[type="card-body"] > p').props().children).to.equal("These React components will help you build App-Arena applications and add-ons.");
});

test('search finds correct results when there are some', (t) => {
    const home = mount(
        <Router />
    );

    expect(home.find("input#searchInput")).to.have.length(1);
    expect(home.find("input#searchInput").props().value).to.equal("");
    home.find("input#searchInput").simulate("change", {target: {value: "Button"}});
    expect(home.find("input#searchInput").props().value).to.equal("Button");
    expect(home.find("li").length).to.be.at.least(2);
    home.find("li").forEach((li) => {
        if (li.children().children().props().children !== 'App-Arena Components') {
            expect(li.children().children().props().children).to.match(/[bB]utton/);
        }
    });
});

test('search finds no results when there are none', (t) => {
    const home = mount(
        <Router />
    );

    expect(home.find("input#searchInput")).to.have.length(1);
    expect(home.find("input#searchInput").props().value).to.equal("");
    home.find("input#searchInput").simulate("change", {target: {value: "asdfghjklqwerty"}});
    expect(home.find("input#searchInput").props().value).to.equal("asdfghjklqwerty");
    expect(home.find("li")).to.have.length(1);
});

/*

This test is disabled temporarily
---

test('components are displayed properly', (t) => {
    const home = mount(
        <Router  />
    );

    const buttonListItem = home.find("li > Link > a").at(1);
    buttonListItem.simulate("click", {button: 0});
    expect(home.find("Example")).to.have.length(1);
    expect(home.find("ReactMarkdown")).to.have.length(1);
    expect(home.find("Props")).to.have.length(1);
    expect(home.find("Description")).to.have.length(1);
    expect(home.find("div > h3")).not.to.have.length(1);
    expect(home.find("h3 + p")).to.have.length(0);
});*/
