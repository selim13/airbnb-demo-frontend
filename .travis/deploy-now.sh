#!/bin/bash
set -ev

find "${TRAVIS_BUILD_DIR}/build" -type f -name "*.map" -size +1M -exec rm {} \;
DEPLOYMENT_URL=$(now deploy \
    --public \
    --static \
    --name airbnb-master \
    --token="${NOW_TOKEN}" "${TRAVIS_BUILD_DIR}/build")
now alias set ${DEPLOYMENT_URL} ${NOW_MASTER_ALIAS} --token="${NOW_TOKEN}"
