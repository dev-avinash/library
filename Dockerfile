FROM mhart/alpine-node:10

WORKDIR /app

COPY . /app

RUN npm install

CMD npm start
