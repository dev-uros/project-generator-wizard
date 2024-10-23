# PROJECT SETUP

## * BEFORE START

- It is required to have `Docker` and `Make command` installed.

### Project initialization

1. Fork/clone this repository
2. Run the following command: `make init`

Running `make init` command will make following prompts:

- Enter project name (required): *this represents the name of the project eg: My Project Frontend*
- Enter docker container base name (required): *this represents the base name of docker containers that will be built(php, nginx, database, database test)*
- Select websocket server status (1. true, 2. false): *this indicates should components that require websocket connects (eg: Chat) be loaded in application*

After prompts above are entered, .env and .env.testing files will be generated inside of src directory (base on .env.local and .env.local.testing), docker containers will be built, curl request will be executed targeting http://localhost/api/healthcheck (*should return server up in terminal if everything initiated properly*) and application will be available at http://localhost


### Additional information

1. Command `make up` brings the docker container up and running
2. Command `make down` shuts the docker container down
3. Command `make webserver` enters the docker webserver terminal (*use for server commands like apt get...*)
4. Command `make php` enters the docker php terminal (*use for php commands like php artisan install, composer install...*)
5. Command `make dump` creates the dump folder for database dump
6. Command `make backup` created database dump file inside of dump folder
7. Command `make restore` restores database from the dump located in dump folder

**When finished with developing run make down!**