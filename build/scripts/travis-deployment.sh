#!/bin/bash

# build & deploy react patterns.
npm run build
GIT_REMOTE="https://sbuckpesch:${GITHUB_TOKEN}@github.com/apparena/patterns.git"
SEMVER_LAST_TAG=$(npm view apparena-patterns-react version)
SEMVER_RELEASE_LEVEL=$(git log --oneline -1 --pretty=%B | cat | tr -d '\n' | cut -d "[" -f2 | cut -d "]" -f1)
ROOT_DIR=$(pwd)

case ${SEMVER_RELEASE_LEVEL} in
*\ *)
    >&2 echo "Specified release level invalid"
    echo "Specified release level invalid"
    ;;
*)
    if [ -n ${SEMVER_RELEASE_LEVEL} ]; then
        case ${SEMVER_RELEASE_LEVEL} in
        major|minor|patch)
            cp ~/.npmrc ~/.npmrc.bak
            echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
            git clone https://github.com/fsaintjacques/semver-tool /tmp/semver &> /dev/null
            SEMVER_NEW_TAG=$(/tmp/semver/src/semver bump ${SEMVER_RELEASE_LEVEL} ${SEMVER_LAST_TAG})

            echo "---------------------------------------------------"
            echo "Publish a new version on NPM and tag the repository"
            echo "Semver Release Level: ${SEMVER_RELEASE_LEVEL}"
            echo "Semver last version : ${SEMVER_LAST_TAG}"
            echo "Semver next version : ${SEMVER_NEW_TAG}"
            echo "---------------------------------------------------"
            cd build/apparena-patterns-react
            npm config set version-tag-prefix ""
            npm version ${SEMVER_NEW_TAG} --no-git-tag-version --allow-same-version
            npm publish

            echo "---------------------------------------------------"
            echo "Add tag to git repo"
            echo "Tag : ${SEMVER_NEW_TAG}"
            echo "---------------------------------------------------"
            git tag ${SEMVER_NEW_TAG}
            git remote rm origin
            git remote add origin ${GIT_REMOTE}
            git push origin --tags
            ;;
        *)
            >&2 echo "Specified release level invalid"
            echo "Specified release level invalid"
            ;;
        esac
    else
        >&2 echo "No release level specified"
        echo "No release level specified"
    fi
    ;;
esac


cd ${ROOT_DIR}
