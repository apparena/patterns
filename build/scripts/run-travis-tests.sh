#!/bin/bash
set -ev
yarn run test
yarn run test:generator
yarn run test:coverage
cat ./coverage/lcov.info | ./node_modules/.bin/coveralls
cat ./coverage/lcov.info | ./node_modules/.bin/coveralls
bash <(curl -s https://codecov.io/bash) -f ./coverage/coverage-final.json