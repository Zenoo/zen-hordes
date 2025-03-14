#!/bin/bash

# Define the name of the zip file
ZIP_FILE="source.zip"

# Remove the existing zip file if it exists
if [ -f "$ZIP_FILE" ]; then
  rm "$ZIP_FILE"
fi

# Download the source code zip file from GitHub
curl -L -o "$ZIP_FILE" https://github.com/Zenoo/zen-hordes/archive/refs/heads/main.zip
