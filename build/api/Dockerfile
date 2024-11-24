FROM node:20-alpine
RUN mkdir -p /app/node_modules && mkdir -p /app/data && chown -R node:node /app
WORKDIR /app
COPY ./build/api/config.json ./config.json
COPY ./api/package*.json ./
RUN npm install
USER node
COPY --chown=node:node ./api/src ./src
VOLUME /app/data
EXPOSE 3000
CMD [ "node", "src/app.js" ]
