FROM nginx

COPY build/ /usr/share/nginx/html

# COPY .nginx/nginx.conf /etc/nginx/conf.d

RUN ["cat","/etc/nginx/conf.d/default.conf"]

# ENTRYPOINT ["nginx"]

EXPOSE 80