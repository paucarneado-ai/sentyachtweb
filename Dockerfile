FROM nginx:alpine
COPY architecture-diagram.html /usr/share/nginx/html/index.html
EXPOSE 80
