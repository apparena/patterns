#!/usr/bin/env bash

echo "$(date): Start building"

echo "$(date): Start build"
cd build/generator/frontend
sed -i'' 's;"root": "\./build/generator/frontend/";"root": ".";g' build/config.json
yarn build:prod
echo "$(date): End build"
