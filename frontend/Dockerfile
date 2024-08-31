# Use Node.js as the base image
FROM node:18.14.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install a simple HTTP server
RUN npm install -g serve

# Start the frontend service
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 5000
