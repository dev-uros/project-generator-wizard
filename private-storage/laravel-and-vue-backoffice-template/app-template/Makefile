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
	docker-compose up --build

down:
	docker-compose -f docker-compose.yaml down
	docker container prune
	docker image prune -a

webserver:
	  docker exec -it $(WEBSERVER_CONTAINER) /bin/sh

init:
	@read -p "Enter project name (required): " project_name; \
	if [ -z "$$project_name" ]; then \
		echo "Project name is required"; \
		exit 1; \
	fi; \
	read -p "Enter webserver container name (required): " container_name; \
	if [ -z "$$container_name" ]; then \
		echo "Webserver container name is required"; \
		exit 1; \
	fi; \
	echo "Select websocket server status:"; \
	select ws_status in "true" "false"; do \
		if [ -n "$$ws_status" ]; then \
			break; \
		fi; \
		echo "Invalid selection"; \
	done; \
	sed -i.bak "s/{{containerName}}/$$container_name/" docker-compose.yaml; \
	rm docker-compose.yaml.bak; \
	sed -i.bak "s/{{applicationName}}/$$project_name/" .env.local; \
	sed -i.bak "s/{{isWebsocketServerEnabled}}/$$ws_status/" .env.local; \
    rm .env.local.bak; \
    sed -i.bak "s/{{containerName}}/$$container_name/" .env.docker; \
    rm .env.docker.bak; \
	echo "Project Name: $$project_name"; \
	echo "Webserver Container Name: $$container_name"; \
	echo "Websocket Server Status: $$ws_status"
	$(MAKE) env
	$(MAKE) up