# Set the base image
FROM node:16.14.2-alpine

# Retrieve sources
WORKDIR /app
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy all files to /app
COPY . /app/

# Add env variables
ENV REACT_APP_API_KEY=09e602f1bemsha1f0480e2d251bap1bd366jsn76abceacd44c

# Expose PORT
EXPOSE 3000

# Declare entrypoint
ENTRYPOINT ["npm", "start"]