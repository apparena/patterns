import React from 'react';
import { mount, configure } from 'enzyme';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../source/frontend/home';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('main frontend is rendered correctly', () => {
  const home = mount(<HashRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
                     </HashRouter>);

  expect(home.find('input#searchInput')).toHaveLength(1);
  expect(home.find('input#searchInput').props().value).toEqual('');
  expect(home.find('ul').length).toBeGreaterThanOrEqual(2);
  expect(home.find('div > h3').length).toBeGreaterThanOrEqual(1);
  expect(home.find('div[type="card-header"]').props().children).toEqual('Components');
  expect(home.find('div[type="card-body"] > p').props().children).toEqual('These React components will help you build App-Arena applications and add-ons.');
});

test('search finds correct results when there are some', () => {
  const home = mount(<HashRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
                     </HashRouter>);

  expect(home.find('input#searchInput')).toHaveLength(1);
  expect(home.find('input#searchInput').props().value).toEqual('');
  home.find('input#searchInput').simulate('change', { target: { value: 'Button' } });
  expect(home.find('input#searchInput').props().value).toEqual('Button');
  expect(home.find('li').length).toBeGreaterThanOrEqual(2);

  let liItems = 0;
  home.find('li').forEach((li) => {
    if (li.children().children().props().children.match(/[bB]utton/) !== null) {
      liItems++;
    }
  });
  expect(liItems).toBeGreaterThanOrEqual(1);
});

test('search finds no results when there are none', () => {
  const home = mount(<HashRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
  </HashRouter>);

  expect(home.find('input#searchInput')).toHaveLength(1);
  expect(home.find('input#searchInput').props().value).toEqual('');
  home.find('input#searchInput').simulate('change', { target: { value: 'asdfghjklqwerty' } });
  expect(home.find('input#searchInput').props().value).toEqual('asdfghjklqwerty');
  // TODO: Figure out how to ignore static pages
  // expect(home.find("li")).toHaveLength(1);
});

test('components are displayed properly', () => {
  const home = mount(<HashRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
  </HashRouter>);

  let buttonListItem = home.find("li > Link[to='/Button'] > a");
  buttonListItem.simulate('click', { button: 0 });
  buttonListItem = home.find("li > Link[to='/Col'] > a");
  buttonListItem.simulate('click', { button: 0 });

  expect(home.find('Example')).toHaveLength(1);
  expect(home.find('ReactMarkdown')).toHaveLength(1);
  expect(home.find('Props')).toHaveLength(1);
  expect(home.find('Description')).toHaveLength(1);
  expect(home.find('div > h3')).not.toHaveLength(1);
  expect(home.find('h3 + p')).toHaveLength(0);
});
