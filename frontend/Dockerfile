FROM node:21-alpine

WORKDIR /code

COPY package.json .

RUN npm install &&\
    npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]