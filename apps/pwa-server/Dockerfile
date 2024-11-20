# Stage 1: Builder
FROM node:22.11-alpine AS builder

WORKDIR /usr/src/app

# Copy root package files
COPY package*.json ./

# Copy pwa-server package files
COPY apps/pwa-server/package*.json apps/pwa-server/

# Install dependencies
RUN npm ci

# Copy source code
COPY apps/pwa-server apps/pwa-server
COPY apps/shared apps/shared

# Build the pwa-server package
RUN npm run build --workspace=pwa-server

# Stage 2: Production
FROM node:22.11-alpine AS production

WORKDIR /usr/src/app

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/apps/pwa-server/dist ./dist

# Copy package files
COPY package*.json ./
COPY apps/pwa-server/package*.json apps/pwa-server/

# Install production dependencies
RUN npm ci --production

# Expose port 8080
EXPOSE 3300

# Start the application
CMD ["node", "dist/main.js"]
