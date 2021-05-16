@ECHO OFF

set repositoryName=registry.gitlab.com/club-map/main/frontend
set imageFullName=%repositoryName%:latest

echo [Main App STARTING] building %imageFullName%..

echo [Main App] creating distr
call npm install
call npm run build

echo [Main App] creating docker image...
call docker build -t %imageFullName% .

echo [Main App FINISHED] image has been built

