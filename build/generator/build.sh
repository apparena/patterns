#!/usr/bin/env bash

# Init env variables
export RootPath=$(pwd)

echo "$(date): Start building"
echo "RootPath: ${RootPath}"

echo "$(date): Start Yarn install & build"
yarn
yarn build:docs:all
echo "$(date): End Yarn install & build"

# Compress source code to generate the artifacts
echo "$(date): Start building artifacts"
cd build/generator/frontend/src/
tar -cvzf ../../../../artifact.tar.gz . --exclude=artifact.tar.gz --warning=no-file-changed > /dev/null
echo "$(date): End building artifacts"
