FROM apparena/php7-xdebug

# Put apache config
COPY build/apache-vhost.conf /etc/apache2/sites-available/custom-vhost.conf
RUN a2dissite 000-default.conf && a2ensite custom-vhost.conf && a2enmod rewrite

# Install Ruby, SCSS file watcher and run it in the background
RUN apt-get update && apt-get install -y ruby-full \
    && su -c "gem install sass" \
    && sass --watch /var/www/html/source/css:/var/www/html/source/css &