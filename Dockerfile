FROM node:16 AS Production 

ENV NODE_ENV=production

WORKDIR /backend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 27017
CMD [ "nodemon" ]
