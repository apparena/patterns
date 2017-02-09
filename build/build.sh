#!/usr/bin/env bash

# Init env variables
export RootPath=$(pwd)
export COMPOSER_HOME=$RootPath
export COMPOSER_CACHE_DIR="/var/cache/composer/"
export COMPOSER_ALLOW_SUPERUSER="1"

echo "$(date): Start building"
echo "RootPath: ${RootPath}"

# Build the theme: Download PHP libs and build styleguide
echo "$(date): Start building PHP"
cd ${RootPath}/dist
composer install
composer generate
echo "$(date): End building PHP"

# Update path in config file
TARGET=${RootPath}/dist/
sed -i "s|/var/www/html/|${TARGET}|g" config/config.yml

# Build the theme: Download JS libs and build webfont and compile CSS
echo "$(date): Start building JS"
bower install
npm i -g icon-font-generator
yarn install
yarn upgrade
grunt
echo "$(date): End building JS"

# Compress source code to generate the arctifact
echo "$(date): Start building artifact"
cd ${RootPath}
tar -cvzf artifact.tar.gz . --exclude=artifact.tar.gz --warning=no-file-changed
echo "$(date): End building artifact"
