FROM node:18.8-alpine as base

# Define build argument at the top to make it available to all stages
ARG RESEND_API_KEY

FROM base as builder
# Set environment variable for the builder stage
ENV RESEND_API_KEY=$RESEND_API_KEY
WORKDIR /home/node/app
COPY package*.json ./
COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime
ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
WORKDIR /home/node/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build
EXPOSE 3000
CMD ["node", "dist/server.js"]