# Stage 1: Builder
FROM node:22.11-alpine AS builder

WORKDIR /usr/src/app

# Copy package files and source code in a structured way
COPY package*.json ./
COPY apps/pwa-server/package*.json apps/pwa-server/
COPY apps/pwa-server apps/pwa-server
COPY apps/shared apps/shared

# Install dependencies
RUN npm install

# Build the pwa-server package
RUN npm run build --workspace=pwa-server

# Stage 2: Production
FROM node:22.11-alpine AS production

WORKDIR /usr/src/app

# Copy the built application and package files
COPY --from=builder /usr/src/app/apps/pwa-server/dist ./dist
COPY package*.json ./
COPY apps/pwa-server/package*.json apps/pwa-server/

# Install production dependencies
RUN npm install --only=production

# Expose port
EXPOSE ${PORT:-3300}

# Start the application with explicit port logging
CMD echo "Starting server on port: $PORT" && node dist/main.js
