FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN useradd -m myuser
USER myuser

COPY --chown=myuser:myuser . .

EXPOSE 3010

CMD ["npm", "run", "start:dev"]