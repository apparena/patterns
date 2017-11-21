#!/usr/bin/env bash

# Init env variables
export RootPath=$(pwd)

echo "$(date): Start building"
echo "RootPath: ${RootPath}"

echo "$(date): Start Yarn install & build"
yarn
yarn build:docs:all
echo "$(date): End Yarn install & build"
