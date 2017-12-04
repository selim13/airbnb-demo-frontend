#!/bin/bash
set -ev

if [ "${TRAVIS_BRANCH}" = "master" ] || [ "${TRAVIS_BRANCH}" = "deploy" ]; then
    find "${TRAVIS_BUILD_DIR}/build" -type f -name "*.map" -size +1M -exec rm {} \;
    now --public \
        --static \
        --name airbnb-master \
        --token="${NOW_TOKEN}" "${TRAVIS_BUILD_DIR}/build" 
    now alias --token="${NOW_TOKEN}"
fi
