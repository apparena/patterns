# Contributing

Instructions how to contribute patterns to this library.

## Getting Started

1. Clone this repository
2. `yarn` or `npm install`
3. `yarn start` or `npm run start`
4. Open [localhost:3099](http://localhost:3099/) in your browser

## Create new patterns

Read more in the [Create pattern](create-pattern.md) section.

## Build

We have several NPM scripts managing the development, build and
deployment process:

| Script     | Use case |
|:-----------|:---------|
| yarn build |          |

## Tests

Before you commit or push any changes run

```
yarn test
```

and ensure that all Jest tests run successfully.

## Publish a new version

The following steps have to be performed to publish a new version on NPM
and add a tag to this Git repository:

1. Each commit should begin with the name of the component that you have
   worked on in square brackets followed by a quick summary of what was
   done. Example: `[Component] Added documentation`
2. If you are finished, send a pull request
3. We will check the changes of the pull-request
4. We will **prefix the message when merging the pull request into
   master branch with the semver release level in square brackets**,
   these are: [major], [minor], or [patch]. (Example: `[patch][Button]
   Added documentation to the button componenty`).

> Always run the tests and the linter prior to opening a pull request
> and fix any issues, errors and warnings that occur.

