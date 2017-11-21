#!/usr/bin/env bash

echo "$(date): Start building"

echo "$(date): Start build"
cd build/generator/frontend
sed -i'.bak' 's;"root": "\./build/generator/frontend/";"root": ".";g' build/config.json
yarn build
mv build/config.json.bak build/config.json
echo "$(date): End build"
