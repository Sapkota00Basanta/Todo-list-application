# Loading base image from node
FROM node:18

# Setting up working directory for our application 
WORKDIR /usr/share/app

# Copying node packages & lock files 
COPY package.json yarn.lock ./
RUN yarn install

# COPY Everything from our application to app directory
COPY . .

# Building our image
RUN yarn build

# Expose default port and run the main script
EXPOSE 3000
CMD [ "yarn", "start" ]