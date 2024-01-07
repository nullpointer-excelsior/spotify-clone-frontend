FROM node:18-alpine3.18 AS build
WORKDIR /app
ENV PUBLIC_SPOTIFY_CLONE_BACKEND_URL=http://host.docker.internal:3017
COPY . .
RUN npm install
RUN npx astro build

FROM node:18-alpine3.18
WORKDIR /app
COPY --from=build /app/dist /app
COPY --from=build /app/node_modules /app/node_modules
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
ENTRYPOINT [ "node", "/app/server/entry.mjs" ]