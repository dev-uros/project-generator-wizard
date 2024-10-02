<script lang="ts" setup>

import type {BACKEND_OPTION} from "~/constants";


interface Props {
  headerLabel: string,
  backendFlavourOptions: BACKEND_OPTION[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  setNextStep: [index: number, selectedBackend: string]
}>()


const selectedBackend = ref('laravel')


const backendRadioGrayscale = computed(() => {
  if (selectedBackend.value === 'laravel') {
    return {
      laravelGrayScale: false,
      fastifyGrayScale: true,
      noneGrayScale: true,
      electronGrayScale: true

    }
  }
  if (selectedBackend.value === 'fastify') {
    return {
      laravelGrayScale: true,
      fastifyGrayScale: false,
      noneGrayScale: true,
      electronGrayScale: true


    }
  }

  if (selectedBackend.value === 'none') {
    return {
      laravelGrayScale: true,
      fastifyGrayScale: true,
      noneGrayScale: false,
      electronGrayScale: true

    }
  }


  if (selectedBackend.value === 'electron') {
    return {
      laravelGrayScale: true,
      fastifyGrayScale: true,
      noneGrayScale: true,
      electronGrayScale: false
    }
  }
})

onUpdated(() => {

  console.log(props.backendFlavourOptions)
  if (!props.backendFlavourOptions.some((backend: BACKEND_OPTION) => backend.value === selectedBackend.value)) {
    selectedBackend.value = props.backendFlavourOptions[0].value
  }
})
</script>

<template>
  <UCard>
    <template #header>{{ headerLabel }}</template>
    <div class="flex space-x-2.5">
      <URadioGroup v-model="selectedBackend" :options="backendFlavourOptions">
        <template #label="{ option }">
          <UCard class="w-48 mb-2">
            <template #header>
              {{ option.label }}
            </template>
            <div class="flex justify-center items-center gap-2" v-if="option.value === 'laravel'">
              <UIcon v-for="icon in option.icons" :name="icon.name" class="w-10 h-10"
                     :class="{'grayscale': backendRadioGrayscale.laravelGrayScale}"/>

            </div>
            <div class="flex justify-center items-center" v-else-if="option.value === 'fastify'">
              <UIcon v-for="icon in option.icons" :name="icon.name" class="w-10 h-10"
                     :class="{'grayscale': backendRadioGrayscale.fastifyGrayScale}"/>

            </div>
            <div class="flex justify-center items-center" v-else-if="option.value === 'electron'">
              <UIcon v-for="icon in option.icons" :name="icon.name" class="w-10 h-10"
                     :class="{'grayscale': backendRadioGrayscale.electronGrayScale}"/>
            </div>
            <div class="flex justify-center items-center" v-else-if="option.value === 'none'">
              <UIcon v-for="icon in option.icons" :name="icon.name" class="w-10 h-10"
                     :class="{'grayscale': backendRadioGrayscale.noneGrayScale}"/>
            </div>

          </UCard>

        </template>

      </URadioGroup>

      <UCard class="flex-grow">
        <template #header>
          <div v-if="selectedBackend === 'laravel'">
            <article class="prose lg:prose-xl dark:prose-invert">
              <h1>Php/Laravel API</h1>
              <UDivider/>
              <p>
                <ULink
                    to="https://www.php.net/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Php:
                </ULink>
                A popular server-side scripting language for web development, known for its simplicity and wide
                use in
                building dynamic websites and web applications.

              </p>
              <p>
                <ULink
                    to="https://laravel.com/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Laravel:
                </ULink>
                A PHP framework that simplifies web development with elegant syntax, built-in tools, and
                features like
                routing, authentication, and database management.

              </p>
            </article>

          </div>
          <div v-if="selectedBackend === 'fastify'">
            <article class="prose lg:prose-xl dark:prose-invert">
              <h1>Node/Fastify API</h1>
              <UDivider/>
              <p>
                <ULink
                    to="https://nodejs.org/en"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Node:
                </ULink>
                A JavaScript runtime built on Chrome's V8 engine, used for building scalable, server-side applications
                with non-blocking, event-driven architecture.

              </p>
              <p>
                <ULink
                    to="https://fastify.dev/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Fastify:
                </ULink>
                A fast, lightweight web framework for Node.js, focused on low overhead, high performance, and
                extensibility through a powerful plugin system.

              </p>
            </article>

          </div>
          <div v-if="selectedBackend === 'electron'">
            <article class="prose lg:prose-xl dark:prose-invert">
              <h1>Node/Electron</h1>
              <UDivider/>
              <p>
                <ULink
                    to="https://nodejs.org/en"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Node:
                </ULink>
                A JavaScript runtime built on Chrome's V8 engine, used for building scalable, server-side applications
                with non-blocking, event-driven architecture.

              </p>
              <p>
                <ULink
                    to="https://laravel.com/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Electron.js:
                </ULink>
                A framework that allows developers to build cross-platform desktop applications using web
                technologies like HTML, CSS, and JavaScript. It combines Chromium for rendering the UI and Node.js for
                backend functionality, enabling the creation of powerful apps that run on Windows, macOS, and Linux.

              </p>
            </article>


          </div>

          <div v-if="selectedBackend === 'none'">
            <article class="prose lg:prose-xl dark:prose-invert">
              <h1>No backend</h1>
              <UDivider/>
              <!--                <p>-->
              <!--                  Node: A JavaScript runtime built on Chrome's V8 engine, used for building scalable, server-side applications-->
              <!--                  with non-blocking, event-driven architecture.-->
              <!--                  <ULink-->
              <!--                      to="https://nodejs.org/en"-->
              <!--                      target="_blank"-->
              <!--                      active-class="text-primary"-->
              <!--                      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"-->
              <!--                  >-->
              <!--                    More info-->
              <!--                  </ULink>-->
              <!--                </p>-->
              <!--                <p>-->
              <!--                  Fastify: A fast, lightweight web framework for Node.js, focused on low overhead, high performance, and-->
              <!--                  extensibility through a powerful plugin system.-->
              <!--                  <ULink-->
              <!--                      to="https://fastify.dev/"-->
              <!--                      target="_blank"-->
              <!--                      active-class="text-primary"-->
              <!--                      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"-->
              <!--                  >-->
              <!--                    More info-->
              <!--                  </ULink>-->
              <!--                </p>-->
            </article>

          </div>

        </template>
        <template #footer>
          <div class="flex flex-row justify-between">
            <UButton label="Previous" @click="emit('setNextStep', 1, selectedBackend)">
              <template #leading>
                <UIcon name="i-heroicons-arrow-left-20-solid" class="w-5 h-5"/>
              </template>
            </UButton>
            <UButton label="Next" @click="emit('setNextStep', 3, selectedBackend)">
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5"/>
              </template>
            </UButton>
          </div>

        </template>
      </UCard>
    </div>
  </UCard>
</template>

<style scoped></style>
