#!/bin/bash

# Set NIXPACKS_PATH if not already set
export NIXPACKS_PATH=${NIXPACKS_PATH:-/opt/nixpacks}

# Install dependencies
echo "Installing dependencies..."
yarn install

# Build the application
echo "Building application..."
yarn build

echo "Build completed successfully!"