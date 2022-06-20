FROM node:alpine3.15

WORKDIR /code
COPY package.json /code
RUN npm i 
COPY . /code

EXPOSE 3000

CMD ["npm", "start"]