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

const fastifyProjectStructure = [
  {
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    label: 'init-scripts',
    slot: 'init-scripts-folder'
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

const fastifyInitScriptsFolder = [
  {
    label: 'init.sql',
    iconClosed: SQLFileClosed,
    iconOpened: SQLFileOpened,
    content: 'Database init script'
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

const appComponentsFolder = [
  {
    label: 'icons',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-components-icons-folder',
  },
  {
    label: 'BaseFooter.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Footer component'
  },
  {
    label: 'BaseHeader.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Header component'
  },
  {
    label: 'ThemeConfigurator.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component that lets you select a color theme'
  },
  {
    label: 'ThemeConfiguratorItem.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component that represents each individual color theme available by default'
  },
]

const appComponentsIconsFolder = [
  {
    label: 'AboutUsIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing about us svg icon'
  },
  {
    label: 'BlogIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing blog svg icon'
  },
  {
    label: 'ContactIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing contact svg icon'
  },
  {
    label: 'EmailContactIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing email svg icon'
  },
  {
    label: 'FAQIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing FAQ svg icon'
  },
  {
    label: 'LocationPinIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing location pin svg icon'
  },
  {
    label: 'NewsLetterIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing newsletter svg icon'
  },
  {
    label: 'PhoneContactIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing phone contact svg icon'
  },
  {
    label: 'ProductIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing product svg icon'
  },
  {
    label: 'ServiceAnalyticsIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing analytic service svg icon'
  },
  {
    label: 'ServiceConsultingIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing consulting service svg icon'
  },
  {
    label: 'ServiceIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing service svg icon'
  },
  {
    label: 'ServiceWrenchIcon.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing service wrench svg icon'
  },
]

const appLayoutsFolder = [

  {
    label: 'default.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'App default layout component'
  }
]

const appPagesFolder = [
  {
    label: 'about.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'About us page'
  },
  {
    label: 'blog.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Blog page'
  },
  {
    label: 'contact.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Contact page'
  },
  {
    label: 'faq.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'FAQ page'
  },
  {
    label: 'index.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Home page'
  },
  {
    label: 'products.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Products page'
  },
  {
    label: 'services.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Services page'
  },
]

const appPublicFolder = [
  {
    label: 'blog-image-1.jpg',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Blog post image'
  },
  {
    label: 'blog-image-2.jpg',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Blog post image'
  },
  {
    label: 'blog-image-3.jpg',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Blog post image'
  },
  {
    label: 'blog-image-4.jpg',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Blog post image'
  },
  {
    label: 'blog-image-5.webp',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Blog post image'
  },
  {
    label: 'company-logo.jpg',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Company logo image'
  },
  {
    label: 'default-avatar.webp',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Default female avatar image'
  },
  {
    label: 'favicon.ico',
    iconClosed: FaviconFileClosed,
    iconOpened: FaviconFileOpened,
    content: 'Favicon'
  },
  {
    label: 'index-image.webp',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Home page hero image'
  },
  {
    label: 'product-image.webp',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Default product image'
  },
  {
    label: 'robots.txt',
    iconClosed: RobotsFileClosed,
    iconOpened: RobotsFileOpened,
    content: 'Robots txt file'
  },
]

const appServerFolder = [
  {
    label: 'tsconfig.json',
    iconClosed: TsConfigFileClosed,
    iconOpened: TsConfigFileOpened,
    content: 'Typescript config file for server'
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
                :items="appComponentsFolder"
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

              <template #app-components-icons-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appComponentsIconsFolder">
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

          <template #src-plugins-folder>
            <UAccordion
                class="pl-5"
                multiple
                variant="ghost"
                :items="appLayoutsFolder"
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
                :items="appPagesFolder"
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

          <template #app-public-folder>
            <UAccordion
                class="pl-5"
                multiple
                variant="ghost"
                :items="appPublicFolder"
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

          <template #app-server-folder>
            <UAccordion
                class="pl-5"
                multiple
                variant="ghost"
                :items="appServerFolder"
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
