# Stage 1: Build
FROM node:22.11-alpine AS builder

WORKDIR /usr/src/app

# Copy necessary files
COPY apps/pwa-server ./pwa-server/
COPY apps/shared ./shared/

# Set working directory for pwa-server
WORKDIR /usr/src/app/pwa-server

# Install dependencies
RUN npm install --verbose

# Build the server
RUN npm run build

# Stage 2: Production
FROM node:22.11-alpine AS production

WORKDIR /usr/src/app

# Copy only the built files and dependencies
COPY --from=builder /usr/src/app/pwa-server/dist ./pwa-server/dist
COPY --from=builder /usr/src/app/pwa-server/node_modules ./pwa-server/node_modules

# Set working directory for production
WORKDIR /usr/src/app/pwa-server

# Expose the application port
EXPOSE 3300

# Start the server
CMD ["node", "dist/src/main.js"]
