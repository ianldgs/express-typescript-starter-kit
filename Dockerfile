#
# -- Base --
FROM node:8-alpine as base

RUN mkdir -p /usr/src/app \
    && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY --chown=node:node ./package.json .
COPY --chown=node:node ./package-lock.json .

#
# -- Only production dependencies --
FROM base AS dependencies

RUN apk update && apk upgrade \
    && apk add --no-cache --virtual build-deps git python build-base

USER node

RUN npm install --only-production

#
# -- Typescript build --
FROM dependencies AS build

USER node

COPY --chown=node:node ./ ./
RUN npm install && npm run build

#
# -- Final image --
FROM base AS release

USER node

COPY --chown=node:node ./ ./
COPY --chown=node:node ./.env.production ./.env

COPY --chown=node:node --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

EXPOSE 8080

CMD ["npm", "run", "docker-entrypoint"]
