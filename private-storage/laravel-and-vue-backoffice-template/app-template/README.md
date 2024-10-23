# PROJECT SETUP

## * BEFORE START

- It is required to have `Docker` and `Make command` installed.

### Project initialization

1. Fork/clone this repository
2. Run the following command: `make init`

Running `make init` command will make following prompts:

- Enter project name (required): *this represents the name of the project eg: My Project Frontend*
- Enter webserver container name (required): *this represents the name of docker container that will be built*
- Select websocket server status (1. true, 2. false): *this indicates should components that require websocket connects (eg: Chat) be loaded in application*

After prompts above are entered, .env file will be generated inside of src directory (base on .env.local), docker container will be built and application will be available at http://localhost:9000  


### Additional information

1. Command `make up` brings the docker container up and running
2. Command `make down` shuts the docker container down
3. Command `make webserver` enters the docker container terminal (*use this for npm/quasar commands eg: npm install...*)

**When finished with developing run make down!**