# Use official Node.js image as base
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Make sure the public directory exists
RUN mkdir -p public
COPY public ./public

# Expose port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]