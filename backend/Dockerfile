FROM node:lts-alpine
WORKDIR /usr/src/api
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3333
CMD ["npm", "start"]
