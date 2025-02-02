# build stage
FROM node:23.7.0-alpine AS builder

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .

RUN npm run build

# run stage
FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html


#run commmand -> docker run -p 8080:80 <image-id>