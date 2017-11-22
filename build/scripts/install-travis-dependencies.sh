#!/bin/bash
set -ev
cd build/generator/frontend
yarn
cd ../../../
yarn
yarn run build:docs