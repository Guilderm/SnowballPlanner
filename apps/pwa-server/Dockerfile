# Stage 1: Base and Workspace Setup
FROM node:22.11-alpine AS base

# Install build dependencies: Python, make, and g++
RUN apk add --no-cache python3 make g++

# Create a symbolic link for Python
RUN ln -sf python3 /usr/bin/python

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /usr/src/app

# Copy root files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy package.json files for workspace packages
COPY apps/pwa-server/package.json apps/pwa-server/

# Install dependencies for pwa-server, including devDependencies
RUN pnpm install --filter=@debtfreeplanner/pwa-server --include=dev --config.lockfile=true

# Copy the rest of the application code
COPY apps/pwa-server/ apps/pwa-server/
COPY apps/shared/ apps/shared/

# Stage 2: Build
FROM base AS builder

WORKDIR /usr/src/app/apps/pwa-server

# Build the server
RUN pnpm run build

# Stage 3: Production
FROM node:22.11-alpine AS production

WORKDIR /usr/src/app

# Copy built files and node_modules from the builder stage
COPY --from=builder /usr/src/app/apps/pwa-server /usr/src/app/apps/pwa-server

# Expose the application port
EXPOSE 3300

# Start the server
CMD ["node", "apps/pwa-server/dist/src/main.js"]
