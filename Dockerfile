FROM nginx

COPY build/ /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf

# ENTRYPOINT ["nginx"]

EXPOSE 80