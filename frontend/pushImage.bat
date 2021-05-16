@echo off
set repositoryName=registry.gitlab.com/club-map/main/frontend
set imageFullName=%repositoryName%:latest

echo [Main App STARTING] pushing image %imageFullName%..

echo [Main App] pushing image
call docker push %imageFullName%

echo [Main App FINISHED] image %imageFullName% pushed

