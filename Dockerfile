FROM nginx

COPY build/ /usr/share/nginx/html

RUN ["cat","/etc/nginx/nginx.conf"]
# COPY nginx.conf /etc/nginx/nginx.conf

# ENTRYPOINT ["nginx"]

EXPOSE 80