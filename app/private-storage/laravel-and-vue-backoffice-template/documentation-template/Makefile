include ./.env.docker

up:
	docker compose up --build

down:
	docker compose down
	docker container prune
	docker image prune -a

vpress:
	docker exec -it $(DOCUMENTATION_CONTAINER) sh
