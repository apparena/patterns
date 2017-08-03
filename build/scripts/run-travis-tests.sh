#!/bin/bash
set -ev
npm run test
npm run test:coverage
cat ./coverage/lcov.info | ./node_modules/.bin/coveralls