# Use an official Node.js runtime as a parent image
FROM node:18backend/node_modules


# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY backend/package*.json ./

# Install project dependencies
RUN npm install

# Copy application code to the working directory
COPY backend/. .

# Define the command to run your app
EXPOSE 3000
CMD ["npm", "start"]