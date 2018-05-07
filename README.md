# [App-Arena Patterns](https://brand.app-arena.com/)

[![npm package](https://img.shields.io/npm/v/apparena-patterns-react.svg)](https://www.npmjs.org/package/apparena-patterns-react)
[![PeerDependencies](https://img.shields.io/david/peer/apparena/patterns.svg)](https://david-dm.org/apparena/patterns#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/apparena/patterns.svg)](https://david-dm.org/apparena/patterns)
[![DevDependencies](https://img.shields.io/david/dev/apparena/patterns.svg)](https://david-dm.org/apparena/patterns#info=devDependencies&view=list)
[![Coverage Status](https://coveralls.io/repos/github/apparena/patterns/badge.svg?branch=develop)](https://coveralls.io/github/apparena/patterns?branch=develop)
[![Build Status](https://travis-ci.org/apparena/patterns.svg?branch=master)](https://travis-ci.org/apparena/patterns)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

App-Arena Patterns is a set of
[React](http://facebook.github.io/react/) components that implement the
App-Arena CI.

| Title                                                      | Description                                                       |
|:-----------------------------------------------------------|:------------------------------------------------------------------|
| [Pattern demos](https://brand.app-arena.com/#/ui-patterns) | Demo of all patterns of this library.                             |
| [Contributing](docs/contributing.md)                       | Creating and publishing new patterns or editing the Brand portal. |
| [Pattern generator](docs/pattern-generator.md)             | How the Yeoman pattern generator works and how it can be edited.  |

## Getting started

App-Arena Patterns are available as
[npm package](https://www.npmjs.org/package/apparena-patterns-react).

```sh
yarn add apparena-patterns-react
```
or
```sh
npm install apparena-patterns-react
```
to add all components to your app.

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

Please refer to each
[component's documentation page](https://brand.app-arena.com/#/ui-patterns)
to see how they should be imported.

## Contributing

If you would like to contribute patterns or add patterns to this
library, head over to our [contributing section](/docs/contributing.md).

## License
This project is licensed under the terms of the
[MIT license](LICENSE.md)
