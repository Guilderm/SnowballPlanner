# Stage 1: Builder
FROM node:22.11-alpine AS builder

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./
COPY apps/pwa-server/package*.json apps/pwa-server/

# Install dependencies
RUN npm ci

# Copy the source code
COPY apps/pwa-server apps/pwa-server
COPY apps/shared apps/shared

# Build the pwa-server package
RUN npm run build --workspace=pwa-server

# Stage 2: Production
FROM node:22.11-alpine AS production

WORKDIR /usr/src/app

# Copy built application
COPY --from=builder /usr/src/app/apps/pwa-server/dist ./apps/pwa-server/dist

# Copy package files
COPY apps/pwa-server/package*.json ./apps/pwa-server/

# Install production dependencies
WORKDIR /usr/src/app/apps/pwa-server
RUN npm ci --only=production

# Copy any runtime dependencies from shared if needed
COPY apps/shared ../../apps/shared

# Expose port
EXPOSE 3300

# Start the application
CMD ["node", "dist/main.js"]
