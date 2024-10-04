<script lang="ts" setup>
const laravelProjectStructure = [
  {
    icon: 'vscode-icons:folder-type-docker',
    label: 'docker',
    slot: 'docker-folder'
  },
  {
    icon: 'vscode-icons:folder-type-src',
    label: 'src',
    slot: 'src-folder'
  },
  {
    icon: 'vscode-icons:file-type-dotenv',
    label: '.env.docker',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    icon: 'vscode-icons:file-type-dotenv',
    label: '.env.local',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    disabled: true
  },
  {
    icon: 'vscode-icons:file-type-dotenv',
    label: '.env.local.testing',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    icon: 'vscode-icons:file-type-git',
    label: '.gitignore',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    icon: 'vscode-icons:file-type-docker',
    label: 'docker-compose.yml',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    icon: 'catppuccin:makefile',
    label: 'Makefile',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    icon: 'vscode-icons:file-type-markdown',
    label: 'README.md',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
]
const laravelDockerFolder = [
  {
    icon: 'vscode-icons:default-folder',
    label: 'database',
    slot: 'docker-database-folder'
  },
  {
    icon: 'vscode-icons:folder-type-nginx',
    label: 'nginx',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    slot: 'docker-nginx-folder'
  },
  {
    icon: 'vscode-icons:folder-type-php',
    label: 'php-fpm',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    slot: 'docker-phpfpm-folder'
  },
  {
    icon: 'vscode-icons:file-type-markdown',
    label: 'README.md',
    content: 'Readme file explaining php docker image'
  },
  {
    icon: 'vscode-icons:file-type-html',
    label: 'README.html',
    content: 'Readme file explaining php docker image',
  }
]

const laravelDockerDatabaseFolder = [
  {
    icon: 'vscode-icons:default-folder',
    label: 'dump',
    content: 'Folder for database dump file',
  },
  {
    icon: 'vscode-icons:file-type-git',
    label: '.gitignore',
    slot: 'docker-folder'
  },
]

const laravelDockerPhpFpmFolder = [
  {
    icon: 'vscode-icons:file-type-docker',
    label: 'Dockerfile',
    content: 'Dockerfile for php',
  },
  {
    icon: 'vscode-icons:file-type-light-config',
    label: 'php-ini-overrides.ini',
    content: 'Php ini settings',
  },
]

const laravelDockerNginxFolder = [
  {
    label: 'nginx.conf',
    icon: 'vscode-icons:file-type-nginx',
    content: 'Nginx configuration file'
  }
]

const laravelSrcFolder = [
  {
    label: 'app',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-folder'
  },
  {
    label: 'bootstrap',
    icon: 'vscode-icons:default-folder',
    slot: 'src-bootstrap-folder',
    content: 'The bootstrap directory contains the app.php file which bootstraps the framework. ' +
        'This directory also houses a cache directory which contains framework generated files for performance optimization such as the route and services cache files.'
  },
  {
    label: 'config',
    icon: 'vscode-icons:default-folder',
    slot: 'src-config-folder',
    content: "The config directory, as the name implies, contains all of your application's configuration files. " +
        "It's a great idea to read through all of these files and familiarize yourself with all of the options available to you."
  },
  {
    label: 'database',
    icon: 'vscode-icons:default-folder',
    content: ''
  }
]

const srcAppFolder = [
  {
    label: 'Console',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-console-folder',
    description: 'The Console directory contains all of the custom Artisan commands for your application. These commands may be generated using the make:command command.'
  },
  {
    label: 'Cron',
    icon: 'vscode-icons:default-folder',
    content: 'The Cron directory can contain all of the invokable classes that can be used in task scheduler.',
    slot: 'src-app-cron-folder'
  },
  {
    label: 'Enum',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-enum-folder',
    content: 'The Enum directory can contain all of your php enums.'
  },
  {
    label: 'Exceptions',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-exceptions-folder',
  },
  {
    label: 'Http',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-http-folder'
  },
  {
    label: 'Interfaces',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-interfaces-folder',
  },
  {
    label: 'Jobs',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-jobs-folder',
  },
  {
    label: 'Mail',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-mail-folder'
  },
  {
    label: 'Models',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-models-folder'
  },
  {
    label: 'Notifications',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-notifications-folder'
  },
  {
    label: 'Observers',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-observers-folder'
  },
  {
    label: 'Providers',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-providers-folder'
  },
  {
    label: 'Repositories',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-repositories-folder'
  },
  {
    label: 'Rules',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-rules-folder'
  },
  {
    label: 'Services',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-services-folder'
  },
  {
    label: 'Traits',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-traits-folder'
  }
]

const srcBootstrapFolder = [
  {
    label: 'cache',
    icon: 'vscode-icons:default-folder',
    slot: 'src-bootstrap-cache-folder'
  },
  {
    label: 'app.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  }
]

const srcBootstrapCacheFolder = [
  {
    label: '.gitignore',
    icon: 'vscode-icons:file-type-git',
    disabled: true
  },
  {
    label: 'packages.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label: 'services.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  }
]

const srcConfigFolder = [
  {
    label:'app.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'auth.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'broadcasting.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'cache.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'cors.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'database.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'filesystems.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'frontend-app.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'hashing.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'logging.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'mail.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'queue.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'sanctum.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'services.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'session.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label:'view.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  }
]
const srcAppHttpFolder = [
  {
    label: 'Controllers',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-http-controllers-folder',
    content: 'The Console directory contains all of the custom Artisan commands for your application. These commands may be generated using the make:command command.'
  },
  {
    label: 'Middleware',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-http-middleware-folder',
    content: 'The Cron directory can contain all of the invokable classes that can be used in task scheduler.'
  },
  {
    label: 'Requests',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-http-requests-folder',
    content: 'The Enum directory can contain all of your php enums.'
  },
  {
    label: 'Kernel.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'The Exceptions directory contains all of the custom exceptions for your application. These exceptions may be generated using the make:exception command.'
  }
]

const srcAppHttpControllersFolder = [
  {
    label: 'AuthController.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Controller that contains auth functionalities (login, logout, forgotPassword, resetPassword, activateAccount, autoLogin)'
  },
  {
    label: 'Controller.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Base controller class which all other controllers extend'
  },
  {
    label: 'LogViewerController.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Controller which provides two methods, one lists all the log folders, and the other log files within selected folder provided by previous method'
  },
  {
    label: 'SetSessionTimeoutPeriodController.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Controller which provides method to set needed inactivity time before user sanctum token is revoked'
  },
  {
    label: 'SetUserAccountState.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Controller which provides method to set user account state from active to inactive and vice-versa.'
  },
  {
    label: 'UserController.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Controller which provides CRUD method for users, as well as functionality to manually send user account activation email.'
  }
]

const srcAppHttpMiddlewareFolder = [
  {
    label: 'EnsureUserAccountIsActive.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Middleware that checks is user flagged as active or inactive in database, prevents inactive users that still have valid sanctum tokens from accessing endpoints.'
  },
  {
    label: 'EnsureUserAccountIsActive.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Middleware that checks is user flagged as active or inactive in database, prevents inactive users that still have valid sanctum tokens from accessing endpoints.'
  },
  {
    label: 'LogRequestResponseMiddleware.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Middleware which stores request/response data to folders in storage.'
  },
  {
    label: 'LogUserAction.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Middleware which stores user action in database. It stores route name, user id, user ip'
  }
]

const srcAppHttpRequestsFolder = [
  {
    label: 'ActivateAccountRequest.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Activate account request data validation'
  },
  {
    label: 'ForgotPasswordRequest.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Forgot password request data validation'
  },
  {
    label: 'LoginUserRequest.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'User login request data validation'
  },
  {
    label: 'ResetPasswordRequest.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Reset password request data validation'
  },
  {
    label: 'SetSessionTimeOutPeriodRequest.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Set session timeout period request data validation'
  },
  {
    label: 'StoreUserRequest.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Store new user request data validation'
  },
  {
    label: 'UpdateUserRequest.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Update user request data validation'
  }
]

const srcAppConsoleFolder = [
  {
    label: 'Commands',
    icon: 'vscode-icons:default-folder',
    description: 'Folder that contains Laravel commands created by php artisan make:command command',
    slot: 'src-app-console-commands-folder'
  },
  {
    label: 'Kernel.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Contains schedule function where cron jobs can be called from.'
  }
];

const srcAppCronFolder = [
  {
    label: 'LogoutInactiveUser.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Invokable class, used in scheduler to periodically check for inactive users and delete their sanctum tokens from database.'
  }
]

const srcAppEnumFolder = [
  {
    label: 'NonLoggableRoutes.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'This file provides enum of routes that are not loggable by user action logger (since no user is logged in while they are being called)'
  }
]

const srcAppExceptionsFolder = [
  {
    label: 'Handler.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'The default handler currently sends application errors with its details to provided email addresses. (Only when environment is set to production)'
  }
]

const srcAppInterfacesFolder = [
  {
    label: 'PasswordResetRepositoryInterface.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Interfaces contains all the methods that are implemented in PasswordResetRepository.php'
  },
  {
    label: 'SessionTimeoutRepositoryInterface.php.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Interfaces contains all the methods that are implemented in SessionTimeoutRepository.php'
  },
  {
    label: 'UserLoginLogRepositoryInterface.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Interfaces contains all the methods that are implemented in UserLoginLogRepository.php'
  },
  {
    label: 'UserLogRepositoryInterface.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Interfaces contains all the methods that are implemented in UserLogRepository.php'
  },
  {
    label: 'UserRepositoryInterface.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Interfaces contains all the methods that are implemented in UserRepository.php'
  }
]

const srcAppJobsFolder = [
  {
    label: 'SendForgotPasswordMail.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Sends user forgot password email via queue'
  },
  {
    label: 'SendUserCreationEmail.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Sends user welcome email via queue'
  },
  {
    label: 'StoreUserAction.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Sends user action in database via queue'
  }
]

const srcAppMailFolder = [
  {
    label: 'ForgotPasswordMail.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'For sending forgot password email'
  },
  {
    label: 'SendErrorAlert.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'For sending server errors'
  },
  {
    label: 'WelcomeMail.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'For sending welcome new user email'
  },
]

const srcAppModelsFolder = [
  {
    label: 'PasswordReset.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Represents password_resets table model'
  },
  {
    label: 'RouteList.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Represents routes table model'
  },
  {
    label: 'SanctumToken.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Represents personal_access_tokens table model'
  },
  {
    label: 'SessionTimeout.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Represents session_timeout table model'
  },
  {
    label: 'User.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Represents users table model'
  },
  {
    label: 'UserActionLog.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Represents user_action_logs table model'
  },
  {
    label: 'UserLog.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Represents user_logs table model'
  },
  {
    label: 'UserLoginLog.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Represents user_login_logs table model'
  }

]

const srcAppNotificationsFolder = [
  {
    label: 'DatabaseApproachingMaxConnections.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Notification that triggers when database gets near maximum number of connections'
  }
]

const srcAppObserversFolder = [
  {
    label: 'UserObserver.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Observes create and update methods used on User model, and then stores data into user_logs table'
  }
]

const srcAppProvidersFolder = [
  {
    label: 'AppServiceProvider.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label: 'AuthServiceProvider.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label: 'BroadcastServiceProvider.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label: 'EventServiceProvider.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  },
  {
    label: 'RouteServiceProvider.php',
    icon: 'vscode-icons:file-type-php3',
    disabled: true
  }
]

const srcAppRepositoriesFolder = [
  {
    label: 'PasswordResetRepository.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Contains queries that use PasswordReset model'
  },
  {
    label: 'SessionTimeoutRepository.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Contains queries that use SessionTimeout model'
  },
  {
    label: 'UserLoginLogRepository.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Contains queries that use UserLoginLog model'
  },
  {
    label: 'UserLogRepository.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Contains queries that use UserLog model'
  },
  {
    label: 'UserRepository.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Contains queries that use User model'
  }
]

const srcAppRulesFolder = [
  {
    label: 'CheckUserPasswordResetToken.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Custom rule that checks password validity upon user reset password action'
  },
  {
    label: 'ValidateUserAccountActivationToken.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Custom rule that checks user account activation token upon account activation action'
  },
  {
    label: 'ValidateUserPassword.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Custom rule that checks password validity upon user login action'
  }
]

const srcAppTraitsFolder = [
  {
    label: 'ResponseWithHttpStatus.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Trait used for returning uniformed responses from controllers'
  },
  {
    label: 'SerializeDate.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Trait used in models to convert timestamp to server time zone'
  }
]

const srcAppServicesFolder = [
  {
    label: 'AuthService.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'AuthService contains all methods related to user authentication functionalities (login, forgotPassword, resetPassword, activateAccount, autoLogin)'
  },
  {
    label: 'StoreUserLoginLogService.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'StoreUserLoginLogService contains method for storing user login logs'
  },
  {
    label: 'UserService.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'UserService contains methods related to User model (create, update, manuallySendWelcomeMail)'
  }
]
const srcAppConsoleCommandsFolder = [
  {
    label: 'Make',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-console-commands-make-folder'
  },
  {
    label: 'DatabaseBackup.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Php artisan command for creating database backups'
  },
  {
    label: 'DeployScript.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Php artisan command for running laravel clear/create cache on deployment'
  },
  {
    label: 'GenerateRoutes.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Php artisan command for storing routes (based on their route name) in database, important to run when new routes are created, because logs and user actions are logged based on api routes '
  }
]

const srcAppConsoleCommandsMakeFolder = [
  {
    label: 'MakeInterfaceCommand.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'This laravel backend uses repository pattern, and php artisan make:interface command is used within php artisan make:repository command for automatic interface file creation'
  },
  {
    label: 'MakeRepositoryCommand.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'This laravel backend uses repository pattern. Command php artisan make:repository MyRepository creates repository class in repositories folder and interface in interfaces folder ' +
        '(example: php artisan make:repository MyRepository creates MyRepository.php file in repositories which implements MyRepositoryInterface, and creates MyRepositoryInterface.php file in interfaces folder)'
  },
  {
    label: 'MakeServiceCommand.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'This laravel backend uses service pattern where business logic is implemented in service class. Command php artisan make:service ServiceName creates service class in services folder.' +
        'For example php artisan make:service MyService creates MyService.php file in services folder'
  },
  {
    label: 'MakeTraitCommand.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'Php artisan command for making traits. For example php artisan make:trait MyTrait creates MyTrait.php file in traits folder'
  }
]
</script>

<template>
  <UAccordion
      multiple
      variant="ghost"
      :items="laravelProjectStructure"
  >
    <template #docker-folder>
      <UAccordion
          class="pl-5"
          multiple
          variant="ghost"
          :items="laravelDockerFolder"
      >

        <template #docker-database-folder>
          <UAccordion
              class="pl-5"

              multiple
              variant="ghost"
              :items="laravelDockerDatabaseFolder"
          ></UAccordion>
        </template>

        <template #docker-nginx-folder>
          <UAccordion
              class="pl-5"
              multiple
              variant="ghost"
              :items="laravelDockerNginxFolder"
          ></UAccordion>
        </template>

        <template #docker-phpfpm-folder>
          <UAccordion
              class="pl-5"
              multiple
              variant="ghost"
              :items="laravelDockerPhpFpmFolder"
          ></UAccordion>
        </template>

      </UAccordion>
    </template>

    <template #src-folder>
      <UAccordion
          class="pl-5"
          multiple
          variant="ghost"
          :items="laravelSrcFolder"
      >
        <template #src-app-folder>
          <UAccordion
              class="pl-5"
              multiple
              variant="ghost"
              :items="srcAppFolder"
          >
            <template #src-app-console-folder>
              The Console directory contains all of the custom Artisan commands for your application. These commands may
              be generated using the make:command command.
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppConsoleFolder">
                <template #src-app-console-commands-folder>
                  <UAccordion
                      class="pl-5"
                      multiple
                      variant="ghost"
                      :items="srcAppConsoleCommandsFolder">

                    <template #src-app-console-commands-make-folder>
                      <UAccordion
                          class="pl-5"
                          multiple
                          variant="ghost"
                          :items="srcAppConsoleCommandsMakeFolder"/>
                    </template>
                  </UAccordion>
                </template>
              </UAccordion>
            </template>
            <template #src-app-cron-folder>
              Here you can put invokable classes that will be used in scheduler.
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppCronFolder"
              />
            </template>
            <template #src-app-enum-folder>
              Here you can put enums used in the application.
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppEnumFolder"
              />
            </template>
            <template #src-app-exceptions-folder>
              The Exceptions directory contains all of the custom exceptions for your application. These exceptions may
              be generated using the make:exception command.
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppExceptionsFolder"
              />
            </template>
            <template #src-app-http-folder>
              The Http directory contains your controllers, middleware, and form requests. Almost all of the logic to
              handle requests entering your application will be placed in this directory.
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppHttpFolder"

              >
                <template #src-app-http-controllers-folder>
                  <UAccordion
                      class="pl-5"
                      multiple
                      variant="ghost"
                      :items="srcAppHttpControllersFolder"

                  />
                </template>
                <template #src-app-http-middleware-folder>
                  Besides Laravel's default middlewares, the following are also provided (and used in project)
                  <UAccordion
                      class="pl-5"
                      multiple
                      variant="ghost"
                      :items="srcAppHttpMiddlewareFolder"

                  />
                </template>
                <template #src-app-http-requests-folder>
                  <UAccordion
                      class="pl-5"
                      multiple
                      variant="ghost"
                      :items="srcAppHttpRequestsFolder"

                  />
                </template>
              </UAccordion>
            </template>
            <template #src-app-interfaces-folder>
              The Interfaces directory contains all interfaces that repositories implement
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppInterfacesFolder"

              />
            </template>
            <template #src-app-jobs-folder>
              The Jobs directory contains all job classes created by php artisan make:job command
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppJobsFolder"

              />
            </template>
            <template #src-app-mail-folder>
              The Mail directory contains all mailable classes created by php artisan make:mail command
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppMailFolder"

              />
            </template>
            <template #src-app-models-folder>
              The Models directory contains all model classes that represent database tables created by php artisan
              make:model command
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppModelsFolder"

              />
            </template>
            <template #src-app-notifications-folder>
              The Notifications directory contains all notification classes created by php artisan make:notification
              command
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppNotificationsFolder"

              />
            </template>
            <template #src-app-observers-folder>
              The Observers directory contains all observer classes that observe model actions, created by php artisan
              make:observer command
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppObserversFolder"

              />
            </template>
            <template #src-app-providers-folder>
              The Providers directory contains all of the service providers for your application. Service providers
              bootstrap your application by binding services in the service container, registering events, or performing
              any other tasks to prepare your application for incoming requests.
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppProvidersFolder"

              />
            </template>
            <template #src-app-repositories-folder>
              Repositories contain queries based on their respective models
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppRepositoriesFolder"

              />
            </template>
            <template #src-app-rules-folder>
              This directory does not exist by default, but will be created for you if you execute the make:rule Artisan
              command. The Rules directory contains the custom validation rule objects for your application. Rules are
              used to encapsulate complicated validation logic in a simple object.
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppRulesFolder"

              />
            </template>
            <template #src-app-services-folder>
              This directory contains all service classes created by php artisan make:service command
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppServicesFolder"

              />
            </template>
            <template #src-app-traits-folder>
              This directory contains all traits created by php artisan make:trait command
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppTraitsFolder"

              />
            </template>
          </UAccordion>
        </template>
        <template #src-bootstrap-folder>
          The bootstrap directory contains the app.php file which bootstraps the framework. This directory also houses a
          cache directory which contains framework generated files for performance optimization such as the route and
          services cache files.

          <UAccordion
              class="pl-5"
              multiple
              variant="ghost"
              :items="srcBootstrapFolder"
          >
            <template #src-bootstrap-cache-folder>
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcBootstrapCacheFolder"
              />
            </template>
          </UAccordion>
        </template>
        <template #src-config-folder>
          The config directory, as the name implies, contains all of your application's configuration files. It's a
          great idea to read through all of these files and familiarize yourself with all of the options available to
          you.
          <UAccordion
              class="pl-5"
              multiple
              variant="ghost"
              :items="srcConfigFolder"
          />
        </template>
      </UAccordion>
    </template>
  </UAccordion>

</template>

<style scoped></style>
