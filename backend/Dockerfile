FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY wait-for-it.sh /wait-for-it.sh
EXPOSE 5000
CMD ["./wait-for-it.sh", "db:3306", "--", "node", "index.js"]
