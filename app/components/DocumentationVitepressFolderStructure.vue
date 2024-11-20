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
import DocsFolderClosed from "~/components/icons/DocsFolderClosed.vue";
import DocsFolderOpened from "~/components/icons/DocsFolderOpened.vue";

const vitepressProjectStructure = [
  {
    iconClosed: AppFolderClosed,
    iconOpened: AppFolderOpened,
    label: 'app',
    slot: 'app-folder'
  },
  {
    iconClosed: DotenvFileClosed,
    iconOpened: DotenvFileOpened,
    label: '.env.docker',
    content: 'Env file containing frontend container name'
  },
  {
    iconClosed: DockerFileClosed,
    iconOpened: DockerFileOpened,
    label: 'docker-compose.yml',
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


const vitepressAppFolder = [
  {
    label: 'docs',
    iconClosed: DocsFolderClosed,
    iconOpened: DocsFolderOpened,
    slot: 'app-docs-folder'
  },
  {
    label: '.gitignore',
    iconClosed: GitFileClosed,
    iconOpened: GitFileOpened,
    content: 'Gitignore file'
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
  }
]

const appDocsFolder = [
  {
    label: '.vitepress',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-docs-vitepress-folder',
  },
  {
    label: 'administration',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-docs-administration-folder'
  },
  {
    label: 'assets',
    iconClosed: AssetsFolderClosed,
    iconOpened: AssetsFolderOpened,
    slot: 'app-docs-assets-folder',
  },
  {
    label: 'public',
    iconClosed: PublicFolderClosed,
    iconOpened: PublicFolderOpened,
    slot: 'app-docs-public-folder',
  },
  {
    label: 'index.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Documentation app index page'
  },

]

const appDocsVitepressFolder = [
  {
    label: 'config.mts',
    iconClosed: TsConfigFileClosed,
    iconOpened: TsConfigFileOpened,
    content: 'Vitepress config file'
  }
]

const appDocsAdministrationFolder = [
  {
    label: 'application.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Markdown file containing application feature docs'
  },
  {
    label: 'users.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Markdown file containing user administration feature docs'
  }
]

const appDocsAssetsFolder = [
  {
    label: 'images',
    iconClosed: ImagesFolderClosed,
    iconOpened: ImagesFolderOpened,
    slot: 'app-docs-assets-images-folder'
  },
]
const appDocsAssetsImagesFolder = [
  {
    label: 'home',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-docs-assets-images-home-folder'
  },
]

const appDocsAssetsImagesHomeFolder = [
  {
    label: 'home.webp',
    iconClosed: ImageFileClosed,
    iconOpened: ImageFileOpened,
    content: 'Home Page image'
  },
]
const appDocsPublicFolder = [
  {
    label: 'icons',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    slot: 'app-docs-public-icons-folder'
  },
]

const appDocsPublicIconsFolder = [
  {
    label: 'favicon.ico',
    iconOpened: FaviconFileClosed,
    iconClosed: FaviconFileOpened,
    content: 'App favicon'
  },
]

</script>

<template>
  <UCard>
    <template #header>
      Vitepress Documentation
    </template>
    <UAccordion
        class="overflow-y-scroll max-h-96"
        multiple
        variant="ghost"
        :items="vitepressProjectStructure"
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

      <template #app-folder>
        <UAccordion
            class="pl-5"
            multiple
            variant="ghost"
            :items="vitepressAppFolder"
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

          <template #app-docs-folder>
            <UAccordion
                class="pl-5"
                multiple
                variant="ghost"
                :items="appDocsFolder"
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

              <template #app-docs-vitepress-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appDocsVitepressFolder">
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
              <template #app-docs-administration-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appDocsAdministrationFolder">
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
              <template #app-docs-assets-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appDocsAssetsFolder">
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

                  <template #app-docs-assets-images-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="appDocsAssetsImagesFolder">
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

                      <template #app-docs-assets-images-home-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appDocsAssetsImagesHomeFolder">
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
              <template #app-docs-public-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appDocsPublicFolder">
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

                  <template #app-docs-public-icons-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="appDocsPublicIconsFolder">
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

        </UAccordion>
      </template>
    </UAccordion>

  </UCard>

</template>

<style scoped></style>
