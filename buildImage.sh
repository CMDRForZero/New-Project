#!/bin/bash
set -e

imageTag=$1
if [ -z "$1" ]
  then
    echo No image tag provided. latest will be used
    imageTag=latest
fi

(exec "${BASH_SOURCE%/*}/back/backend/buildImage.sh" $imageTag)
(exec "${BASH_SOURCE%/*}/front/frontend/buildImage.sh" $imageTag)