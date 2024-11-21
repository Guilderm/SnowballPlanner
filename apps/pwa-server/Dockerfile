# Stage 1: Builder
FROM node:22.11-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy root package.json and package-lock.json
COPY package.json package-lock.json ./

# Copy the pwa-server directory and the shared code
COPY apps/pwa-server ./apps/pwa-server/
COPY apps/shared ./apps/shared/

# Install dependencies
RUN npm install

# Build the pwa-server workspace
RUN npm run build --workspace=pwa-server

# Stage 2: Production
FROM node:22.11-alpine AS production

WORKDIR /usr/src/app

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/apps/pwa-server/dist ./dist

# Copy the pwa-server package.json
COPY apps/pwa-server/package.json ./apps/pwa-server/

# Install only production dependencies
RUN npm install --production

# Expose the desired port
EXPOSE ${PORT:-3300}

# Start the server
CMD ["node", "dist/main.js"]
