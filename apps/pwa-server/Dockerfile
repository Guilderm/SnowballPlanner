# C:\Repository\DebtFreePlanner\apps\pwa-server\Dockerfile

# Stage 1: Build
FROM node:22.11-alpine AS builder

# Enable corepack for pnpm
RUN corepack enable

WORKDIR /usr/src

# Copy necessary files
COPY apps/pwa-server ./pwa-server/
COPY apps/shared ./shared/

# Set working directory for pwa-server
WORKDIR /usr/src/pwa-server

# Install dependencies for the `pwa-server` project and shared modules
RUN pnpm install  --verbose

# Build the application
RUN pnpm run build

# Stage 3: Production Image
FROM node:22.11-alpine AS production

WORKDIR /usr/src

# Copy only the built files and dependencies
COPY --from=builder /usr/src/pwa-server/dist ./pwa-server/dist
COPY --from=builder /usr/src/pwa-server/node_modules ./pwa-server/node_modules

# Expose application port
EXPOSE 3300

# Start the application
CMD ["node", "./pwa-server/dist/src/main.js"]
