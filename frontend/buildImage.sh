#!/bin/bash
set -e

repositoryName=registry.gitlab.com/club-map/main/frontend
imageFullName=$repositoryName:latest

echo [Main App STARTING] building $imageFullName..

echo [Main App] creating distr
npm install

echo [Main App] creating docker image...
docker build -t $imageFullName .

echo [Main App FINISHED] image has been built
