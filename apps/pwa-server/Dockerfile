# Stage 1: Build
FROM node:22.11-alpine AS builder

WORKDIR /usr/src/app

# Step 1: Copy root package.json and lockfile
COPY package*.json ./

# Step 2: Copy all workspace files (including apps/pwa-server and apps/shared)
COPY apps/pwa-server ./apps/pwa-server/
COPY apps/shared ./apps/shared/

# Step 3: Install dependencies at the workspace root
RUN npm install --workspace=apps/pwa-server --no-audit --verbose

# Step 4: Build the pwa-server workspace
WORKDIR /usr/src/app/apps/pwa-server
RUN npm run build

# Stage 2: Production
FROM node:22.11-alpine AS production

WORKDIR /usr/src/app

# Copy only the built files and dependencies
COPY --from=builder /usr/src/app/apps/pwa-server/dist ./dist
COPY --from=builder /usr/src/app/apps/pwa-server/node_modules ./node_modules

# Expose the application port
EXPOSE 3300

# Start the server
CMD ["node", "dist/src/main.js"]
