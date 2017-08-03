#[App-Arena Patterns](https://design.app-arena.com/)

[![npm package](https://img.shields.io/npm/v/apparena-patterns-react.svg)](https://www.npmjs.org/package/apparena-patterns-react)
[![PeerDependencies](https://img.shields.io/david/peer/apparena/patterns.svg)](https://david-dm.org/apparena/patterns#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/apparena/patterns.svg)](https://david-dm.org/apparena/patterns)
[![DevDependencies](https://img.shields.io/david/dev/apparena/patterns.svg)](https://david-dm.org/apparena/patterns#info=devDependencies&view=list)
[![Coverage Status](https://coveralls.io/repos/github/apparena/patterns/badge.svg?branch=develop)](https://coveralls.io/github/apparena/patterns?branch=develop)
[![Build Status](https://travis-ci.org/apparena/patterns.svg?branch=master)](https://travis-ci.org/apparena/patterns)

App-Arena Patterns is a set of [React](http://facebook.github.io/react/) components that implement the App-Arena CI.

Check out our [documentation site](http://design.app-arena.com/) for live examples.
It's still a work in progress, but hopefully you can see where we're headed.

**Recently Updated?** Please read the [changelog](https://github.com/apparena/patterns/releases), this README and the documentation before posting an issue.

## Required Knowledge

We recommend that you get to know [React](http://facebook.github.io/react/)
before diving into apparena-patterns-react. App-Arena Patterns is a set of React components,
so understanding how React fits into web development is important.

## Installation

App-Arena Patterns are available as an [npm package](https://www.npmjs.org/package/apparena-patterns-react).

**Stable channel**
```sh
npm install apparena-patterns-react
yarn add apparena-patterns-react
```

## Usage

Here is a quick example to get you started:

**./App.js**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
    <MyAwesomeReactComponent />
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

**./MyAwesomeReactComponent.js**
```jsx
import React from 'react';
import {Button} from 'apparena-patterns-react';

const MyAwesomeReactComponent = () => (
  <Button type="primary">Label</Button>
);

export default MyAwesomeReactComponent;
```

Please refer to each component's documentation page to see how they should be imported.

## Roadmap

The future plans and high priority features and enhancements can be found
in the [ROADMAP.md](https://github.com/apparena/patterns/blob/master/ROADMAP.md) file.

## Contribute

[App-Arena Patterns](http://design.app-arena.com/) came about from our love of
[React](http://facebook.github.io/react/)

## License
This project is licensed under the terms of the
[MIT license](https://github.com/callemall/apparena-patterns-react/blob/master/LICENSE)