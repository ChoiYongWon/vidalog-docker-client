FROM nginx

COPY build/ /usr/share/nginx/html

# COPY .nginx/nginx.conf /etc/nginx/conf.d

RUN ["ls","/etc/nginx/conf.d"]

# ENTRYPOINT ["nginx"]

EXPOSE 80