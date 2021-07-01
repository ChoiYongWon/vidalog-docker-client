FROM nginx

COPY build/ /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["ls","/usr/share/nginx/html"]

EXPOSE 80