# Stage 1: Builder
FROM node:22.11-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy the required directories
COPY apps/pwa-server ./pwa-server/
COPY apps/shared ./shared/

# Set the working directory to pwa-server
WORKDIR /usr/src/app/pwa-server

# Install dependencies
RUN npm install

# Build the server
RUN npm run build

# Stage 2: Production
FROM node:22.11-alpine AS production

# Set the working directory
WORKDIR /usr/src/app

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/pwa-server/dist ./dist

# Copy production-related files
COPY apps/pwa-server/package.json ./package.json

# Install only production dependencies
RUN npm install --omit=dev

# Expose the desired port
EXPOSE ${PORT:-3300}

# Start the server
CMD ["node", "dist/main.js"]
