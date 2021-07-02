FROM nginx

COPY build/ /usr/share/nginx/html

COPY .nginx/nginx.conf /etc/nginx/nginx.conf

RUN ["cat","/etc/nginx/nginx.conf"]

# ENTRYPOINT ["nginx"]

EXPOSE 80