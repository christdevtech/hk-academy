#!/bin/bash

# Set NIXPACKS_PATH if not already set
export NIXPACKS_PATH=${NIXPACKS_PATH:-/opt/nixpacks}

# Set production environment variables
export NODE_ENV=production
export PAYLOAD_CONFIG_PATH=dist/payload/payload.config.js

# Start the application
echo "Starting application..."
node dist/server.js