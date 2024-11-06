# develop stage
FROM node:20-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g nuxi
COPY /app .


# Build Stage
FROM node:20-alpine AS build-stage
WORKDIR /app
# Copy the package.json and package-lock.json from the app directory
COPY app/package*.json ./
RUN npm install
# Copy the entire app directory contents into the container's /app directory
COPY app/ .
RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Production Stage
FROM node:20-alpine AS production-stage
WORKDIR /app
# Copy the build output from the build stage
COPY --from=build-stage /app/.output /app/.output
COPY --from=build-stage /app/package*.json /app/
COPY --from=build-stage /app/private-storage /app/private-storage
# Install only production dependencies
RUN npm install --production
# Expose port 3000 for the application
EXPOSE 3000
# Start the Nuxt app in production mode
CMD ["node", ".output/server/index.mjs"]
