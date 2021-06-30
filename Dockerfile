FROM nginx

COPY build /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["echo","SUCCESS"]

EXPOSE 80