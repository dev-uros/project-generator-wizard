include ./.env.docker

env:
	$(MAKE) fix-env
	cat $(PWD)/.env.local >> $(PWD)/app/.env

fix-env:
	if [ -a $(PWD)/app/.env ]; \
		then rm -f $(PWD)/app/.env; \
	fi
	touch $(PWD)/app/.env

up:
	docker compose up --build

down:
	docker compose -f docker-compose.yaml down
	docker container prune
	docker image prune -a

node:
	  docker exec -it $(NODE_CONTAINER) /bin/sh
