##############
### STAGE1 ###
### Build  ###
##############
FROM node:14.17.0-alpine3.12 as build

# couchbase sdk requirements
RUN apk update && apk --no-cache add "python2=2.7.18-r0" "make=4.3-r0" "g++=9.3.0-r2" && rm -rf /var/cache/apk/*

# set working directory
WORKDIR /usr/src/app

# copy code and install dependencies
COPY . .
RUN npm ci

# set sass path so it can find the scss files
ENV SASS_PATH=src/scss

# build application - not used yet this way so it can use AWS environment variables
# RUN npm run build

##############
### STAGE2 ###
###  run   ###
##############

FROM node:14.17.0-alpine3.12
# RUN apk add --no-cache "yarn=1.19.2-r0"
# RUN mkdir /tmp/build/
# Add context to /tmp/build/
# COPY . /tmp/build/
# RUN adduser samweb --home /bin/bash --shell /bin/bash --disabled-password
COPY --from=build --chown=node:node /usr/src/app /usr/src/app

WORKDIR /usr/src/app

USER node:node

# set sass path so the execution can find the scss files
ENV SASS_PATH=src/scss

EXPOSE 3000

# start app
CMD ["npm", "start"]
