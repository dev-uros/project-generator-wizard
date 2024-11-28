<script lang="ts" setup>
import SrcFolderClosed from "~/components/icons/SrcFolderClosed.vue";
import SrcFolderOpened from "~/components/icons/SrcFolderOpened.vue";
import DotenvFileClosed from "~/components/icons/DotenvFileClosed.vue";
import DotenvFileOpened from "~/components/icons/DotenvFileOpened.vue";
import GitFileClosed from "~/components/icons/GitFileClosed.vue";
import GitFileOpened from "~/components/icons/GitFileOpened.vue";
import DockerFileClosed from "~/components/icons/DockerFileClosed.vue";
import DockerFileOpened from "~/components/icons/DockerFileOpened.vue";
import GnuFileClosed from "~/components/icons/GnuFileClosed.vue";
import GnuFileOpened from "~/components/icons/GnuFileOpened.vue";
import MarkdownFileClosed from "~/components/icons/MarkdownFileClosed.vue";
import MarkdownFileOpened from "~/components/icons/MarkdownFileOpened.vue";
import FolderIconClosed from "~/components/icons/FolderIconClosed.vue";
import FolderIconOpened from "~/components/icons/FolderIconOpened.vue";
import HtmlFileClosed from "~/components/icons/HtmlFileClosed.vue";
import HtmlFileOpened from "~/components/icons/HtmlFileOpened.vue";
import ConfigFileClosed from "~/components/icons/ConfigFileClosed.vue";
import ConfigFileOpened from "~/components/icons/ConfigFileOpened.vue";
import RoutesFolderClosed from "~/components/icons/RoutesFolderClosed.vue";
import RoutesFolderOpened from "~/components/icons/RoutesFolderOpened.vue";
import NpmFileClosed from "~/components/icons/NpmFileClosed.vue";
import NpmFileOpened from "~/components/icons/NpmFileOpened.vue";
import PublicFolderClosed from "~/components/icons/PublicFolderClosed.vue";
import PublicFolderOpened from "~/components/icons/PublicFolderOpened.vue";
import FaviconFileOpened from "~/components/icons/FaviconFileOpened.vue";
import FaviconFileClosed from "~/components/icons/FaviconFileClosed.vue";
import CssFolderOpened from "~/components/icons/CssFolderOpened.vue";
import CssFolderClosed from "~/components/icons/CssFolderClosed.vue";
import JsFileOpened from "~/components/icons/JsFileOpened.vue";
import JsFileClosed from "~/components/icons/JsFileClosed.vue";
import AppFolderClosed from "~/components/icons/AppFolderClosed.vue";
import AppFolderOpened from "~/components/icons/AppFolderOpened.vue";
import EslintFileClosed from "~/components/icons/EslintFileClosed.vue";
import EslintFileOpened from "~/components/icons/EslintFileOpened.vue";
import PrettierFileClosed from "~/components/icons/PrettierFileClosed.vue";
import PrettierFileOpened from "~/components/icons/PrettierFileOpened.vue";
import PostCssConfigFileClosed from "~/components/icons/PostCssConfigFileClosed.vue";
import PostCssConfigFileOpened from "~/components/icons/PostCssConfigFileOpened.vue";
import TsConfigFileClosed from "~/components/icons/TsConfigFileClosed.vue";
import TsConfigFileOpened from "~/components/icons/TsConfigFileOpened.vue";
import ImagesFolderOpened from "~/components/icons/ImagesFolderOpened.vue";
import ImagesFolderClosed from "~/components/icons/ImagesFolderClosed.vue";
import ImageFileOpened from "~/components/icons/ImageFileOpened.vue";
import ImageFileClosed from "~/components/icons/ImageFileClosed.vue";
import AssetsFolderClosed from "~/components/icons/AssetsFolderClosed.vue";
import AssetsFolderOpened from "~/components/icons/AssetsFolderOpened.vue";
import ModulesFolderClosed from "~/components/icons/ModulesFolderClosed.vue";
import ModulesFolderOpened from "~/components/icons/ModulesFolderOpened.vue";
import VueFileClosed from "~/components/icons/VueFileClosed.vue";
import VueFileOpened from "~/components/icons/VueFileOpened.vue";
import TsFileClosed from "~/components/icons/TsFileClosed.vue";
import TsFileOpened from "~/components/icons/TsFileOpened.vue";
import SvgFileClosed from "~/components/icons/SvgFileClosed.vue";
import SvgFileOpened from "~/components/icons/SvgFileOpened.vue";
import ScssFileClosed from "~/components/icons/ScssFileClosed.vue";
import ScssFileOpened from "~/components/icons/ScssFileOpened.vue";
import ComponentFolderClosed from "~/components/icons/ComponentFolderClosed.vue";
import ComponentFolderOpened from "~/components/icons/ComponentFolderOpened.vue";
import MiddlewareFolderClosed from "~/components/icons/MiddlewareFolderClosed.vue";
import MiddlewareFolderOpened from "~/components/icons/MiddlewareFolderOpened.vue";
import ServiceFolderClosed from "~/components/icons/ServiceFolderClosed.vue";
import ServiceFolderOpened from "~/components/icons/ServiceFolderOpened.vue";
import NuxtFileClosed from "~/components/icons/NuxtFileClosed.vue";
import NuxtFileOpened from "~/components/icons/NuxtFileOpened.vue";
import TailwindFileClosed from "~/components/icons/TailwindFileClosed.vue";
import TailwindFileOpened from "~/components/icons/TailwindFileOpened.vue";
import RobotsFileClosed from "~/components/icons/RobotsFileClosed.vue";
import RobotsFileOpened from "~/components/icons/RobotsFileOpened.vue";
import PluginFolderOpened from "~/components/icons/PluginFolderOpened.vue";
import PluginFolderClosed from "~/components/icons/PluginFolderClosed.vue";
import SQLFileClosed from "~/components/icons/SQLFileClosed.vue";
import SQLFileOpened from "~/components/icons/SQLFileOpened.vue";
import PostmanFolderClosed from "~/components/icons/PostmanFolderClosed.vue";
import PostmanFolderOpened from "~/components/icons/PostmanFolderOpened.vue";
import JsonFileClosed from "~/components/icons/JsonFileClosed.vue";
import JsonFileOpened from "~/components/icons/JsonFileOpened.vue";

const fastifyProjectStructure = [
  {
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    label: 'dump-scripts',
    slot: 'dump-scripts-folder'
  },
  {
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    label: 'init-scripts',
    slot: 'init-scripts-folder'
  },
  {
    iconClosed: PostmanFolderClosed,
    iconOpened: PostmanFolderOpened,
    label: 'postman',
    slot: 'postman-folder'
  },
  {
    iconClosed: SrcFolderClosed,
    iconOpened: SrcFolderOpened,
    label: 'src',
    slot: 'src-folder'
  },
  {
    iconClosed: DotenvFileClosed,
    iconOpened: DotenvFileOpened,
    label: '.env.docker',
    content: 'Env file containing frontend container name'
  },
  {
    iconClosed: DotenvFileClosed,
    iconOpened: DotenvFileOpened,
    label: '.env.local',
    content: 'Env file which contains env variables for local development, so main .env file can easily be setup with make env NAME=local command, which copies all data from this file into .env file inside of src folder',
  },
  {
    iconClosed: GitFileClosed,
    iconOpened: GitFileOpened,
    label: '.gitignore',
    content: 'Gitignore file for project'
  },
  {
    iconClosed: DockerFileClosed,
    iconOpened: DockerFileOpened,
    label: 'docker-compose.yaml',
    content: 'Docker compose file'
  },
  {
    iconClosed: DockerFileClosed,
    iconOpened: DockerFileOpened,
    label: 'Dockerfile',
    content: 'Dockerfile'
  },
  {
    iconClosed: GnuFileClosed,
    iconOpened: GnuFileOpened,
    label: 'Makefile',
    content: 'Makefile containing commands'
  },
  {
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    label: 'README.md',
    content: 'Readme file containing instructions how to start project'
  },
]

const fastifyDumpScriptsFolder = [
  {
    label: '.gitkeep',
    iconClosed: GitFileClosed,
    iconOpened: GitFileOpened,
    content: 'Gitkeep for dump folder'
  }
]
const fastifyInitScriptsFolder = [
  {
    label: 'init.sql',
    iconClosed: SQLFileClosed,
    iconOpened: SQLFileOpened,
    content: 'Database init script'
  }
]

const fastifyPostmanFolder = [
  {
    label: 'microservice-template-collection.postman_collection.json',
    iconClosed: JsonFileClosed,
    iconOpened: JsonFileOpened,
    content: 'Postman collection of api endpoints'
  }
]

const fastifySrcFolder = [
  {
    label: 'modules',
    iconClosed: ModulesFolderClosed,
    iconOpened: ModulesFolderOpened,
    slot: 'src-modules-folder'
  },
  {
    label: 'plugins',
    iconClosed: PluginFolderClosed,
    iconOpened: PluginFolderOpened,
    slot: 'src-plugins-folder',
  },
  {
    label: 'schemas',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-schemas-folder'
  },
  {
    label: '.env',
    iconClosed: DotenvFileClosed,
    iconOpened: DotenvFileOpened,
    content: 'Env file containing env variables for the application'
  },
  {
    label: 'app.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Exports app object with its config'
  },
  {
    label: 'package.json',
    iconClosed: NpmFileClosed,
    iconOpened: NpmFileOpened,
    content: 'Npm dependencies'
  },
  {
    label: 'package-lock.json',
    iconClosed: NpmFileClosed,
    iconOpened: NpmFileOpened,
    content: 'Npm lock file'
  },
  {
    label: 'server.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Starts node server with imported app object'
  },
  {
    label: 'tsconfig.json',
    iconClosed: TsConfigFileClosed,
    iconOpened: TsConfigFileOpened,
    content: 'Typescript config file'
  }
]

const srcModulesFolder = [
  {
    label: 'auth',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-modules-auth-folder',
  },
  {
    label: 'pets',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-modules-pets-folder',
  },
]

const srcModulesAuthFolder = [
  {
    label: 'interfaces',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-modules-auth-interfaces-folder'
  },
  {
    label: 'repositories',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-modules-auth-repositories-folder'
  },
  {
    label: 'routes',
    iconClosed: RoutesFolderClosed,
    iconOpened: RoutesFolderOpened,
    slot: 'src-modules-auth-routes-folder'
  },
  {
    label: 'schemas',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-modules-auth-schemas-folder'
  },
  {
    label: 'index.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module entry point'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Read me file with some info about module'
  },
  {
    label: 'types.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Types file to place custom files used in module'
  },
]

const srcModulesAuthInterfacesFolder = [
  {
    label: 'authRepositoryInterface.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Interface for AuthRepository class'
  },
]

const srcModulesAuthRepositoriesFolder = [
  {
    label: 'authRepository.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'AuthRepository class containing queries used in auth functionality'
  },
]

const srcModulesAuthRoutesFolder = [
  {
    label: 'index.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Auth routes are defined in here'
  },
]

const srcModulesAuthSchemasFolder = [
  {
    label: 'generateTokenSchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Schema used in generate-token auth endpoint'
  },
]

//pets
const srcModulesPetsFolder = [
  {
    label: 'interfaces',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-modules-pets-interfaces-folder'
  },
  {
    label: 'repositories',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-modules-pets-repositories-folder'
  },
  {
    label: 'routes',
    iconClosed: RoutesFolderClosed,
    iconOpened: RoutesFolderOpened,
    slot: 'src-modules-pets-routes-folder'
  },
  {
    label: 'schemas',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-modules-pets-schemas-folder'
  },
  {
    label: 'services',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-modules-pets-services-folder'
  },
  {
    label: 'index.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module entry point'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Read me file with some info about module'
  },
  {
    label: 'types.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Types file to place custom files used in module'
  },
]

const srcModulesPetsInterfacesFolder = [
  {
    label: 'petIndexServiceInterface.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Interface for PetIndexService class'
  },
  {
    label: 'petRepositoryInterface.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Interface for PetRepository class'
  },
  {
    label: 'petShowServiceInterface.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Interface for PetShowService class'
  },
  {
    label: 'petStoreServiceInterface.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Interface for PetStoreService class'
  },
  {
    label: 'petUpdateServiceInterface.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Interface for PetUpdateService class'
  },
]

const srcModulesPetsRepositoriesFolder = [
  {
    label: 'petRepository.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'PetRepository class containing queries used in pets functionality'
  },
]

const srcModulesPetsRoutesFolder = [
  {
    label: 'autohooks.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Route hooks are defined in here'
  },
  {
    label: 'index.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Pets routes are defined in here'
  },
]

const srcModulesPetsSchemasFolder = [
  {
    label: 'indexSchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Schema used in pets list endpoint'
  },
  {
    label: 'petEntitySchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Reusable pet entity schema'
  },
  {
    label: 'showSchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Schema used in pets show endpoint'
  },
  {
    label: 'storeSchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Schema used in pets store endpoint'
  },
  {
    label: 'updateSchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Schema used in pets update endpoint'
  },
]

const srcModulesPetsServicesFolder = [
  {
    label: 'indexService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Service that gets list of pets'
  },
  {
    label: 'showService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Service that shows details of a single pet'
  },
  {
    label: 'storeService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Service that stores pet in database'
  },
  {
    label: 'updateService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Service that updates a pet in database'
  }
]
//pets-end
const srcPluginsFolder = [
  {
    label: 'config.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Config plugin, for loading .env file data'
  },
  {
    label: 'database.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Plugin for connecting to a database'
  },
  {
    label: 'error-handler.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Custom plugin that formats error response based on error code (used for centralized error handling)'
  },
  {
    label: 'jwt.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'JWT plugin used for configuring jwt implementation'
  },
  {
    label: 'swagger.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Swagger plugin, used for swagged config and exposing /documentation endpoint with swagger ui'
  }
]

const srcSchemasFolder = [
  {
    label: 'badRequestSchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'General bad request response schema'
  },
  {
    label: 'config.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: '.env file schema'
  },
  {
    label: 'entityNotFoundSchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'General entity not found request response schema'
  },
  {
    label: 'serverErrorSchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'General server error request response schema'
  },
  {
    label: 'unauthenticatedRequestSchema.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'General unauthenticated request response schema'
  }
]



</script>

<template>
  <UCard>
    <template #header>
      Node/Fastify API
    </template>
    <UAccordion
        class="overflow-y-scroll max-h-96"
        multiple
        variant="ghost"
        :items="fastifyProjectStructure"
    >
      <template #default="{ item, index, open }">
        <UButton color="gray" variant="ghost">
          <template #leading>
            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
              <component v-show="!open" :is="item.iconClosed"></component>
              <component v-show="open" :is="item.iconOpened"></component>

            </div>
          </template>

          <span class="truncate">{{ item.label }}</span>

          <template #trailing>
            <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                :class="[open && 'rotate-90']"
            />
          </template>


        </UButton>

      </template>

      <template #dump-scripts-folder>
        <UAccordion
            class="pl-5"
            multiple
            variant="ghost"
            :items="fastifyDumpScriptsFolder"
        >
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost">
              <template #leading>
                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                  <component v-show="!open" :is="item.iconClosed"></component>
                  <component v-show="open" :is="item.iconOpened"></component>

                </div>
              </template>

              <span class="truncate">{{ item.label }} </span>

              <template #trailing>
                <UIcon
                    name="i-heroicons-chevron-right-20-solid"
                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                    :class="[open && 'rotate-90']"
                />
              </template>


            </UButton>

          </template>
        </UAccordion>
      </template>

      <template #init-scripts-folder>
        <UAccordion
            class="pl-5"
            multiple
            variant="ghost"
            :items="fastifyInitScriptsFolder"
        >
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost">
              <template #leading>
                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                  <component v-show="!open" :is="item.iconClosed"></component>
                  <component v-show="open" :is="item.iconOpened"></component>

                </div>
              </template>

              <span class="truncate">{{ item.label }} </span>

              <template #trailing>
                <UIcon
                    name="i-heroicons-chevron-right-20-solid"
                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                    :class="[open && 'rotate-90']"
                />
              </template>


            </UButton>

          </template>
        </UAccordion>
      </template>
      <template #postman-folder>
        <UAccordion
            class="pl-5"
            multiple
            variant="ghost"
            :items="fastifyPostmanFolder"
        >
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost">
              <template #leading>
                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                  <component v-show="!open" :is="item.iconClosed"></component>
                  <component v-show="open" :is="item.iconOpened"></component>

                </div>
              </template>

              <span class="truncate">{{ item.label }} </span>

              <template #trailing>
                <UIcon
                    name="i-heroicons-chevron-right-20-solid"
                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                    :class="[open && 'rotate-90']"
                />
              </template>


            </UButton>

          </template>
        </UAccordion>
      </template>

      <template #src-folder>
        <UAccordion
            class="pl-5"
            multiple
            variant="ghost"
            :items="fastifySrcFolder"
        >
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost">
              <template #leading>
                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                  <component v-show="!open" :is="item.iconClosed"></component>
                  <component v-show="open" :is="item.iconOpened"></component>

                </div>
              </template>

              <span class="truncate">{{ item.label }} </span>

              <template #trailing>
                <UIcon
                    name="i-heroicons-chevron-right-20-solid"
                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                    :class="[open && 'rotate-90']"
                />
              </template>


            </UButton>

          </template>

          <template #src-modules-folder>
            <UAccordion
                class="pl-5"
                multiple
                variant="ghost"
                :items="srcModulesFolder"
            >
              <template #default="{ item, index, open }">
                <UButton color="gray" variant="ghost">
                  <template #leading>
                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                      <component v-show="!open" :is="item.iconClosed"></component>
                      <component v-show="open" :is="item.iconOpened"></component>

                    </div>
                  </template>

                  <span class="truncate">{{ item.label }}</span>

                  <template #trailing>
                    <UIcon
                        name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']"
                    />
                  </template>


                </UButton>

              </template>

              <template #src-modules-auth-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcModulesAuthFolder">
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>

                  <template #src-modules-auth-interfaces-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcModulesAuthInterfacesFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                    </UAccordion>
                  </template>

                  <template #src-modules-auth-repositories-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcModulesAuthRepositoriesFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                    </UAccordion>
                  </template>

                  <template #src-modules-auth-routes-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcModulesAuthRoutesFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                    </UAccordion>
                  </template>

                  <template #src-modules-auth-schemas-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcModulesAuthSchemasFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                    </UAccordion>
                  </template>

                </UAccordion>
              </template>

              <template #src-modules-pets-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcModulesPetsFolder">
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>

                  <template #src-modules-pets-interfaces-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcModulesPetsInterfacesFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                    </UAccordion>
                  </template>

                  <template #src-modules-pets-repositories-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcModulesPetsRepositoriesFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                    </UAccordion>
                  </template>

                  <template #src-modules-pets-routes-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcModulesPetsRoutesFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                    </UAccordion>
                  </template>

                  <template #src-modules-pets-schemas-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcModulesPetsSchemasFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                    </UAccordion>
                  </template>

                  <template #src-modules-pets-services-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcModulesPetsServicesFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                    </UAccordion>
                  </template>

                </UAccordion>
              </template>


            </UAccordion>
          </template>

          <template #src-plugins-folder>
            <UAccordion
                class="pl-5"
                multiple
                variant="ghost"
                :items="srcPluginsFolder"
            >
              <template #default="{ item, index, open }">
                <UButton color="gray" variant="ghost">
                  <template #leading>
                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                      <component v-show="!open" :is="item.iconClosed"></component>
                      <component v-show="open" :is="item.iconOpened"></component>

                    </div>
                  </template>

                  <span class="truncate">{{ item.label }}</span>

                  <template #trailing>
                    <UIcon
                        name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']"
                    />
                  </template>


                </UButton>

              </template>


            </UAccordion>
          </template>

          <template #src-schemas-folder>
            <UAccordion
                class="pl-5"
                multiple
                variant="ghost"
                :items="srcSchemasFolder"
            >
              <template #default="{ item, index, open }">
                <UButton color="gray" variant="ghost">
                  <template #leading>
                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                      <component v-show="!open" :is="item.iconClosed"></component>
                      <component v-show="open" :is="item.iconOpened"></component>

                    </div>
                  </template>

                  <span class="truncate">{{ item.label }}</span>

                  <template #trailing>
                    <UIcon
                        name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']"
                    />
                  </template>


                </UButton>

              </template>


            </UAccordion>
          </template>



        </UAccordion>
      </template>
    </UAccordion>

  </UCard>

</template>

<style scoped></style>
