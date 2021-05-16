#!/bin/bash
set -e

imageTag=$1
if [ -z "$1" ]
  then
    echo No image tag provided. latest will be used
    imageTag=latest
fi

export imageTag=$imageTag

docker-compose -f docker/docker-compose.yml -p dev down