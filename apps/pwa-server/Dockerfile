# apps\pwa-server\Dockerfile

# Stage 1: Builder
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy root package files
COPY package*.json ./

# Copy workspace package files
COPY apps/pwa-server/package*.json apps/pwa-server/
COPY apps/shared/package*.json apps/shared/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the shared package
RUN npm run build --workspace=shared

# Build the pwa-server
RUN npm run build --workspace=pwa-server

# Stage 2: Production
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/apps/pwa-server/dist ./dist

# Install production dependencies
COPY package*.json ./
COPY apps/pwa-server/package*.json apps/pwa-server/
RUN npm install --production

# Expose port 8080
EXPOSE 8080

# Start the application
CMD ["node", "dist/main.js"]
