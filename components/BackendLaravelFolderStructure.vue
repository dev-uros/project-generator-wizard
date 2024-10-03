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
    content: 'The bootstrap directory contains the app.php file which bootstraps the framework. ' +
        'This directory also houses a cache directory which contains framework generated files for performance optimization such as the route and services cache files.'
  },
  {
    label: 'config',
    icon: 'vscode-icons:default-folder',
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
    content: 'The Console directory contains all of the custom Artisan commands for your application. These commands may be generated using the make:command command.'
  },
  {
    label: 'Cron',
    icon: 'vscode-icons:default-folder',
    content: 'The Cron directory can contain all of the invokable classes that can be used in task scheduler.'
  },
  {
    label: 'Enum',
    icon: 'vscode-icons:default-folder',
    content: 'The Enum directory can contain all of your php enums.'
  },
  {
    label: 'Exceptions',
    icon: 'vscode-icons:default-folder',
    content: 'The Exceptions directory contains all of the custom exceptions for your application. These exceptions may be generated using the make:exception command.'
  },
  {
    label: 'Http',
    icon: 'vscode-icons:default-folder',
    slot: 'src-app-http-folder'
  },
  {
    label: 'Interfaces',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Jobs',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Mail',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Models',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Notifications',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Observers',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Provides',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Repositories',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Rules',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Services',
    icon: 'vscode-icons:default-folder',
    content: ''
  },
  {
    label: 'Traits',
    icon: 'vscode-icons:default-folder',
    content: ''
  }
]
const srcAppHttpFolder = [
  {
    label: 'Controllers',
    icon: 'vscode-icons:default-folder',
    content: 'The Console directory contains all of the custom Artisan commands for your application. These commands may be generated using the make:command command.'
  },
  {
    label: 'Middleware',
    icon: 'vscode-icons:default-folder',
    content: 'The Cron directory can contain all of the invokable classes that can be used in task scheduler.'
  },
  {
    label: 'Requests',
    icon: 'vscode-icons:default-folder',
    content: 'The Enum directory can contain all of your php enums.'
  },
  {
    label: 'Kernel.php',
    icon: 'vscode-icons:file-type-php3',
    content: 'The Exceptions directory contains all of the custom exceptions for your application. These exceptions may be generated using the make:exception command.'
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
            <template #src-app-http-folder>
              The Http directory contains your controllers, middleware, and form requests. Almost all of the logic to handle requests entering your application will be placed in this directory.
              <UAccordion
                  class="pl-5"
                  multiple
                  variant="ghost"
                  :items="srcAppHttpFolder"

              />
            </template>
          </UAccordion>
        </template>
      </UAccordion>
    </template>
  </UAccordion>

</template>

<style scoped></style>
