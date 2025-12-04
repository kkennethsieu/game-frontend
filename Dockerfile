# Use Node for dev
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose dev server port (Vite default is 5173)
EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev", "--", "--host"]
