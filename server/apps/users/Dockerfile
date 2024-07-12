FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate --schema=./apps/users/prisma/schema.prisma

RUN npm run build users

CMD ["node", "dist/apps/users/main"]