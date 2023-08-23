FROM node:16.18.0 as development
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm cache clean --force
RUN npm i -f
EXPOSE 3000
RUN npm run build
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["./entrypoint.sh"]