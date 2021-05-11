#!/bin/bash
set -e
cd backend
./buildImage.sh
cd ..

cd frontend
./buildImage.sh
cd ..