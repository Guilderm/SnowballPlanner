# Stage 1: Builder
FROM node:22.11-alpine AS builder

WORKDIR /usr/src/app

# Copy package files first to optimize caching
COPY package*.json ./
COPY apps/pwa-server/package*.json apps/pwa-server/

# Install dependencies and copy source code in a single layer
RUN npm ci && \
    mkdir -p apps/pwa-server && \
    mkdir -p apps/shared

# Copy the source code
COPY apps/pwa-server apps/pwa-server
COPY apps/shared apps/shared

# Build the pwa-server package
RUN npm run build --workspace=pwa-server

# Stage 2: Production
FROM node:22.11-alpine AS production

WORKDIR /usr/src/app

# Copy the built application and package files in a single layer
COPY --from=builder /usr/src/app/apps/pwa-server/dist ./dist
COPY package*.json ./
COPY apps/pwa-server/package*.json apps/pwa-server/

# Install production dependencies and clean up in a single layer
RUN npm ci --production && \
    rm -rf /usr/src/app/apps/pwa-server/src /usr/src/app/apps/pwa-server/test

# Expose port 3300
EXPOSE 3300

# Start the application
CMD ["node", "dist/main.js"]
