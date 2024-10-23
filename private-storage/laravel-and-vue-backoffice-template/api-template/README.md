
#  PROJECT SETUP

##  Requirements

- Installed `Docker`
	-  [Get Docker](https://www.docker.com/)
- Installed `GNU Make`
	- [Get GNU Make](https://formulae.brew.sh/formula/make#default)


###  Project initialization

1.  Run the following command: `make init`
	-  Running `make init` does the following:
		- `.env `and `.env.testing` files will be generated inside of `src` directory (based on `.env.local` and `.env.local.testing` files in project root directory)
		- `Docker` containers will be built (`php container`, `nginx container`, `database container`, `testing database container`)
		- Composer install will be run inside of php container
		- Laravel app key will be set
		- Initial migration will be run
		- Curl request will be executed targeting http://localhost/api/healthcheck (*should return server up in terminal if everything initiated properly*) and application will be available at http://localhost)

**Run this command only once!**

###  Additional information

1.  Command `make up` brings the docker containers up and running

2.  Command `make down` shuts the docker containers down

3.  Command `make webserver` enters the docker nginx webserver terminal (*use for server commands like apt get...*)

4.  Command `make php` enters the docker php terminal (*use for php commands like php artisan install, composer install...*)

5.  Command `make dump` creates the dump folder for database dump

6.  Command `make backup` created database dump file inside of dump folder

7.  Command `make restore` restores database from the dump located in dump folder
8. Regarding email .env settings,  all parameters are setup (beside username, and password) in a manner to work with [Mailtrap](https://mailtrap.io/), **free** email testing service, if you want to use the same service, create your account and put your data in .env, if you want to use some other service, just edit the .env data according to the service you are using, the project is in no way tied to Mailtrap.
9. Emails are sent via queued jobs, so, in order for app the actually send the emails you have to run `make php` command to ssh into php container terminal, and from there run `php artisan queue:work`
10. When making changes to .env or .env.testing files, you can make them inside of the .env.local and .env.local.testing and then run `make env` command. The command copies data from .env.local and .env.local.testing to .env and .env.testing files inside of the src directory. By default, .env.local and .env.local.testing are not ignored by git tracking, so local environment variables can easily be shared amongst the collaborators.
11. In case project is already initiated and pushed to source control, collaborators can clone the project and run `make partial-init` command, which does basically the same steps as `make init` command, without setting app key again (so there are no conflicts)
12. The project doesn't run any additional packages, its basically a clean Laravel installation with all the functionality code available for edit, extension, further work, etc...

**When finished with developing run make down!**
