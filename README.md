# [App-Arena Patterns](https://components.app-arena.com/)

[![npm package](https://img.shields.io/npm/v/apparena-patterns-react.svg)](https://www.npmjs.org/package/apparena-patterns-react)
[![PeerDependencies](https://img.shields.io/david/peer/apparena/patterns.svg)](https://david-dm.org/apparena/patterns#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/apparena/patterns.svg)](https://david-dm.org/apparena/patterns)
[![DevDependencies](https://img.shields.io/david/dev/apparena/patterns.svg)](https://david-dm.org/apparena/patterns#info=devDependencies&view=list)
[![Coverage Status](https://coveralls.io/repos/github/apparena/patterns/badge.svg?branch=develop)](https://coveralls.io/github/apparena/patterns?branch=develop)
[![Build Status](https://travis-ci.org/apparena/patterns.svg?branch=master)](https://travis-ci.org/apparena/patterns)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

App-Arena Patterns is a set of [React](http://facebook.github.io/react/) components that implement the App-Arena CI.

Check out our [documentation site](http://components.app-arena.com/) for live examples.
It's still a work in progress, but hopefully you can see where we're headed.

**Recently Updated?** Please read the [changelog](https://github.com/apparena/patterns/releases), this README and the documentation before posting an issue.

## Getting Started

We recommend that you get to know [React](http://facebook.github.io/react/)
before diving into apparena-patterns-react. App-Arena Patterns is a set of React components,
so understanding how React fits into web development is important.

### Installation

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

## Pattern documentation

This repository also contains the code for the pattern documentation. You can view
the documentation at [https://components.app-arena.com/](https://components.app-arena.com/).

## Contributing

Before getting started make sure to install the dependencies with
`npm install` or `yarn`.

To see your changes in the frontend:

* use `npm run build:frontend:dev` (or `npm run build:frontend:watch` if you want a watcher) and open public/index_dev.html in your browser
* use `npm run start` and open localhost:3001 in your browser

Now you're ready and you can get to work!  
If you would like to contribute to the documentation or write documentation
for a new component please have a look at [our guide to writing documentation!](/docs/WRITING_DOCUMENTATION.md)
If you want to start hacking away at the frontend, which can be found at [https://components.app-arena.com/](https://components.app-arena.com/),
please read [our guide to working on the frontend.](/docs/FRONTEND_DEVELOPMENT.md)

### Creating a new pattern

We provide a yeoman generator that requires 2 clicks to create a new pattern.

1. Install the generator: `npm install -g generator-apparena-pattern`
2. Run the generator: `yo apparena-pattern`
3. Follow the onscreen prompts
4. Overwrite the file *source/patterns/index.js* if prompted (make a backup of your changes!)

Done! Now edit your newly created pattern under *source/patterns/...*

### Preparing for the pull request

Your commits leading up to the pull request should be named properly.
Each commit should begin with the name of the component that you have worked on
in square brackets followed by a quick summary of what was done.  
Example: `[Component] Added documentation`

If you want to have your changes published to NPM as well then you
should prefix the pull request message with the semver release level
in square brackets, these are: [major], [minor], or [patch].
If you add the component name into the message it has to come after
the semver release level (e.g. "[patch][Component] Added documentation").  
Omitting the semver release level, or using an invalid one, skips the
NPM deployment and only updates the documentation.

Always run the tests and the linter prior to opening a pull request and fix
any issues, errors and warnings that occur.

## Roadmap

The future plans and high priority features and enhancements can be found
in the [ROADMAP.md](https://github.com/apparena/patterns/blob/master/ROADMAP.md) file.

## License
This project is licensed under the terms of the
[MIT license](https://github.com/callemall/apparena-patterns-react/blob/master/LICENSE)