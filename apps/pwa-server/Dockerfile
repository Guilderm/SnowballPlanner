# Use the official Node.js 16 Alpine image as the base
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 8080 (optional but recommended for clarity)
EXPOSE 8080

# Start the application
CMD ["node", "dist/main.js"]
