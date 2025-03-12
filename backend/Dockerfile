FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy server code
COPY server.js ./

# Expose port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]