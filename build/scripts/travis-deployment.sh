#!/bin/bash

# build & deploy react patterns
yarn build
SEMVER_LAST_TAG=$(npm view apparena-patterns-react version)
SEMVER_RELEASE_LEVEL=$(git log --oneline -1 --pretty=%B | cat | tr -d '\n' | cut -d "[" -f2 | cut -d "]" -f1)
ROOT_DIR=$(pwd)

case ${SEMVER_RELEASE_LEVEL} in
*\ *)
    >&2 echo "Specified release level invalid"
    ;;
*)
    if [ -n ${SEMVER_RELEASE_LEVEL} ]; then
        case ${SEMVER_RELEASE_LEVEL} in
        major|minor|patch)
            cp ~/.npmrc ~/.npmrc.bak
            echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
            git clone https://github.com/fsaintjacques/semver-tool /tmp/semver &> /dev/null
            SEMVER_NEW_TAG=$(/tmp/semver/src/semver bump ${SEMVER_RELEASE_LEVEL} ${SEMVER_LAST_TAG})
            npm --no-git-tag-version version ${SEMVER_NEW_TAG} --allow-same-version
            cd build/apparena-patterns-react
            npm publish
            ;;
        *)
            >&2 echo "Specified release level invalid"
            ;;
        esac
    else
        >&2 echo "No release level specified"
    fi
    ;;
esac

cd ${ROOT_DIR}
