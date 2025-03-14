#!/bin/bash

# Check if an argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 {chrome|firefox}"
  exit 1
fi

# Remove the dist directory
rimraf dist

# Adapt the manifest file for the target browser
if [ "$1" = "chrome" ]; then
  # Move manifest-firefox.json out of the way
  mv public/manifest-firefox.json manifest-firefox.json
elif [ "$1" = "firefox" ]; then
  # Move manifest.json out of the way and replace it with manifest-firefox.json
  mv public/manifest.json manifest.json
  mv public/manifest-firefox.json public/manifest.json
else
  echo "Invalid argument: $1"
  echo "Usage: $0 {chrome|firefox}"
  exit 1
fi

# Run the webpack build
webpack --config webpack/webpack.prod.js

# Zip the contents of the dist directory
cd dist
bestzip ../dist.zip *
cd ..

# Restore the manifest files
if [ "$1" = "chrome" ]; then
  # Move manifest-firefox.json back
  mv manifest-firefox.json public/manifest-firefox.json
elif [ "$1" = "firefox" ]; then
  # Move manifests back
  mv public/manifest.json public/manifest-firefox.json
  mv manifest.json public/manifest.json
fi
