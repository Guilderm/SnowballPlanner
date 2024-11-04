# apps\pwa-server\dockerfile

# Step 1: Use an official Node.js runtime as a base image
FROM node:18-alpine AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the remaining application files
COPY ./ .

# Step 5: Build the application
RUN npm run build

# Step 6: Expose the hardcoded port
EXPOSE 3300

# Step 7: Start the application
CMD ["npm", "run", "start:prod"]
