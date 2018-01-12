#!/bin/bash

# build & deploy react patterns
yarn build
SEMVER_LAST_TAG=$(npm view apparena-patterns-react version)
SEMVER_RELEASE_LEVEL=$(git log --oneline -1 --pretty=%B | cat | tr -d '\n' | cut -d "[" -f2 | cut -d "]" -f1)
ROOT_DIR=$(pwd)

if [ -n $SEMVER_RELEASE_LEVEL ]; then
    git clone https://github.com/fsaintjacques/semver-tool /tmp/semver &> /dev/null
    SEMVER_NEW_TAG=$(/tmp/semver/src/semver bump $SEMVER_RELEASE_LEVEL $SEMVER_LAST_TAG)
    npm --no-git-tag-version version ${SEMVER_NEW_TAG}
    cd build/apparena-patterns-react
    npm publish
else
    >&2 echo "No release level specified"
fi

cd ${ROOT_DIR}
