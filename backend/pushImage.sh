#!/bin/bash
set -e

repositoryName=registry.gitlab.com/club-map/main/backend
imageFullName=$repositoryName:latest

echo [Main App STARTING] pushing image $imageFullName..

echo [Main App] pushing image
docker push $imageFullName

echo [Main App FINISHED] image $imageFullName pushed

