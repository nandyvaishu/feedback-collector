FROM node:18
WORKDIR /app
COPY backend/package.json ./
RUN npm install --package-lock-only
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]