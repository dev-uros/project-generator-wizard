include ./.env.docker
#Builds the container
up:
	docker-compose -f $(DOCKER_COMPOSE_FILE) --env-file .env.docker up -d --build
#Shuts down container
down:
	docker-compose -f $(DOCKER_COMPOSE_FILE) --env-file .env.docker down
	docker container prune
	docker image prune -a
#Makes a dump folder for database backup
dump:
	mkdir -p docker/database/dump
#Makes a database backup
backup:
	docker exec -t $(DB_CONTAINER_NAME) pg_dump -c -U postgres $(DB_NAME) > ./docker/database/dump/$(DB_DUMP_FILENAME)
#Restores a database from backup file
restore:
	cat ./docker/database/dump/$(DB_DUMP_FILENAME) | docker exec -i $(DB_CONTAINER_NAME) psql -U postgres es -d $(DB_NAME)
#SSH into container webserver
webserver:
	docker exec -it $(WEBSERVER_CONTAINER_NAME) sh
#SSH into container php
php:
	docker exec -it $(PHP_CONTAINER_NAME) bash
#Sets .env file in /src directory
env:
	$(MAKE) fix-env
	cat $(PWD)/.env.local >> $(PWD)/src/.env
	$(MAKE) fix-env-test
	cat $(PWD)/.env.local.testing >> $(PWD)/src/.env.testing

fix-env:
	if [ -a $(PWD)/src/.env ]; \
		then rm -f $(PWD)/src/.env; \
	fi
	touch $(PWD)/src/.env

fix-env-test:
	if [ -a $(PWD)/src/.env.testing ]; \
		then rm -f $(PWD)/src/.env.testing; \
	fi
	touch $(PWD)/src/.env.testing
#Generates fresh APP_KEY
set-key:
	docker exec -it $(PHP_CONTAINER_NAME) php artisan key:generate
	docker exec -it $(PHP_CONTAINER_NAME) php artisan key:generate --env=testing
	$(MAKE) set-local-key

set-local-key:
	rm -f $(PWD)/.env.local
	touch $(PWD)/.env.local
	cat $(PWD)/src/.env >> $(PWD)/.env.local
	rm -f $(PWD)/.env.local.testing
	touch $(PWD)/.env.local.testing
	cat $(PWD)/src/.env.testing >> $(PWD)/.env.local.testing

run-initial-migrations:
	docker exec -it $(PHP_CONTAINER_NAME) php artisan migrate
	docker exec -it $(PHP_CONTAINER_NAME) php artisan db:seed

init-composer:
	docker exec -it $(PHP_CONTAINER_NAME) composer install

init-healthcheck:
	curl -H "Accept: application/json" -X GET "http://localhost/api/healthcheck"

init:
	echo "Laravel Api Initializing"
	$(MAKE) env
	$(MAKE) up
	$(MAKE) init-composer
	$(MAKE) set-key
	$(MAKE) run-initial-migrations
	$(MAKE) dump
	$(MAKE) init-healthcheck

partial-init:
	echo "Laravel Api Initializing"
	$(MAKE) env
	$(MAKE) up
	$(MAKE) init-composer
	$(MAKE) run-initial-migrations
	$(MAKE) dump
	$(MAKE) init-healthcheck
