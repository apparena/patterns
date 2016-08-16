[![Gitter](https://img.shields.io/gitter/room/pattern-lab/php.svg)](https://gitter.im/apparena)

# App-Arena.com Patterns for UI development

This package contains patterns (UI, ReactJS) for UI development in App-Arena.com. 

## Demo

You can play with a demo of all patterns [styleguide.app-arena.com](styleguide.app-arena.com).

## Requirements

Pattern Lab uses [NPM](https://npmjs.com/) to manage project dependencies.

## Installing

Use NPM's [`npm install` command](https://docs.npmjs.com/cli/install) to install the package in your project.

1. In a terminal window navigate to where you want to install the patterns library
2. Type `npm install apparena-patterns`

## Sass setup and compilation

The main SCSS file is `source/css/app-arena-styles.scss`. To compile all sass files the npm package `node-sass`
is used. So to setup your compiler just run `npm install` and you are ready to go.

In case you got some errors related to the node-sass lib, rebuild your node-sass lib by running:
`npm rebuild node-sass`.

We've setup a grunt task runner to compile all sass files. To compile your SCSS run:
`grunt`
