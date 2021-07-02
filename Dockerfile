FROM nginx

COPY build/ /usr/share/nginx/html

COPY .nginx/default.conf /etc/nginx/conf.d/default.conf

RUN ["cat","/etc/nginx/conf.d/default.conf"]

# ENTRYPOINT ["nginx"]

EXPOSE 80