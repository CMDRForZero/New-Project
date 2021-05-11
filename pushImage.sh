#!/bin/bash
set -e


(exec "${BASH_SOURCE%/*}/backend/pushImage.sh")
(exec "${BASH_SOURCE%/*}/frontend/pushImage.sh")

