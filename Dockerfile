# Stage 1: Build the React Application
FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

# Stage 2: Setup the Nginx Server to serve the React Application
#FROM nginx:latest as production
FROM nginx:1.15.2-alpine as production

RUN apk add --no-cache bash
COPY --from=build /app/dist /usr/share/nginx/html

WORKDIR /etc/nginx
COPY ./nginx.conf .
COPY ./env.sh .
COPY ./.env .
RUN chmod +x env.sh

EXPOSE 8080

ENTRYPOINT ["./env.sh", "/usr/share/nginx/html"]
CMD ["nginx", "-g", "daemon off;"]