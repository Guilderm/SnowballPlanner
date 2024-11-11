# Stage 1: Builder
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy root package files
COPY package*.json ./

# Copy workspace package files
COPY apps/pwa-server/package*.json apps/pwa-server/
COPY apps/shared/package*.json apps/shared/

# Install dependencies using npm ci for a clean install
RUN npm ci

# Copy source code for shared and pwa-server
COPY apps/shared apps/shared
COPY apps/pwa-server apps/pwa-server

# Build the shared and pwa-server packages
RUN npm run build --workspace=shared && npm run build --workspace=pwa-server

# Stage 2: Production
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /usr/src/app

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/apps/pwa-server/dist ./dist

# Copy root package files for production dependencies
COPY package*.json ./
COPY apps/pwa-server/package*.json apps/pwa-server/
COPY apps/shared/package*.json apps/shared/

# Set environment to production
ENV NODE_ENV=production

# Install production dependencies
RUN npm ci --production

# Expose port 8080
EXPOSE 8080

# Start the application
CMD ["node", "dist/main.js"]
