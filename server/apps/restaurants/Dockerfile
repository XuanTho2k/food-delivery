FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate --schema=./apps/restaurants/prisma/schema.prisma

RUN npm run build restaurants

CMD ["node", "dist/apps/restaurants/main"]
