#!/bin/bash

aws configure --profile cfdoc << EOM
${KEY}
${SECRET}
eu-central-1
text
EOM

aws --profile cfdoc cloudfront create-invalidation --distribution-id ${DIST_ID} --paths /*