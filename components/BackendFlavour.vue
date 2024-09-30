<script lang="ts" setup>

interface BackendFlavour {
  value: string,
  label: string,
  phpIcon?:string,
  laravelIcon?:string,
  nodeIcon?:string,
  fastifyIcon?:string,
  noBackendIcon?:string
}
interface Props {
  headerLabel: string,
  backendFlavourOptions: BackendFlavour[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  setNextStep: [index: number]
}>()


const selectedBackend = ref('laravel')


const backendRadioGrayscale = computed(() => {
  if (selectedBackend.value === 'laravel') {
    return {
      laravelGrayScale: false,
      fastifyGrayScale: true,
      noneGrayScale: true
    }
  }
  if (selectedBackend.value === 'laravel') {
    return {
      laravelGrayScale: true,
      fastifyGrayScale: false,
      noneGrayScale: true

    }
  }

  if (selectedBackend.value === 'none') {
    return {
      laravelGrayScale: true,
      fastifyGrayScale: true,
      noneGrayScale: false
    }
  }

})


const appNameModal = ref(false);
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
                <UIcon :name="option.phpIcon" class="w-10 h-10"
                       :class="{'grayscale': backendRadioGrayscale.laravelGrayScale}"/>
                <UIcon :name="option.laravelIcon" class="w-10 h-10"
                       :class="{'grayscale': backendRadioGrayscale.laravelGrayScale}"/>
              </div>
              <div class="flex justify-center items-center" v-else-if="option.value === 'fastify'">
                <UIcon :name="option.nodeIcon" class="w-10 h-10"
                       :class="{'grayscale': backendRadioGrayscale.fastifyGrayScale}"/>
                <UIcon :name="option.fastifyIcon" class="w-10 h-10"
                       :class="{'grayscale': backendRadioGrayscale.fastifyGrayScale}"/>
              </div>
              <div class="flex justify-center items-center" v-else-if="option.value === 'none'">
                <UIcon :name="option.noBackendIcon" class="w-10 h-10"
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
                  Php: A popular server-side scripting language for web development, known for its simplicity and wide
                  use in
                  building dynamic websites and web applications.
                  <ULink
                      to="https://www.php.net/"
                      target="_blank"
                      active-class="text-primary"
                      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    More info
                  </ULink>
                </p>
                <p>
                  Laravel: A PHP framework that simplifies web development with elegant syntax, built-in tools, and
                  features like
                  routing, authentication, and database management.
                  <ULink
                      to="https://laravel.com/"
                      target="_blank"
                      active-class="text-primary"
                      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    More info
                  </ULink>
                </p>
              </article>

            </div>
            <div v-if="selectedBackend === 'fastify'">
              <article class="prose lg:prose-xl dark:prose-invert">
                <h1>Node/Fastify API</h1>
                <UDivider/>
                <p>
                  Node: A JavaScript runtime built on Chrome's V8 engine, used for building scalable, server-side applications
                  with non-blocking, event-driven architecture.
                  <ULink
                      to="https://nodejs.org/en"
                      target="_blank"
                      active-class="text-primary"
                      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    More info
                  </ULink>
                </p>
                <p>
                  Fastify: A fast, lightweight web framework for Node.js, focused on low overhead, high performance, and
                  extensibility through a powerful plugin system.
                  <ULink
                      to="https://fastify.dev/"
                      target="_blank"
                      active-class="text-primary"
                      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    More info
                  </ULink>
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
              <UButton label="Previous" @click="emit('setNextStep', 1)">
                <template #leading>
                  <UIcon name="i-heroicons-arrow-left-20-solid" class="w-5 h-5"/>
                </template>
              </UButton>
              <UButton label="Next" @click="appNameModal = true">
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5"/>
                </template>
              </UButton>
            </div>

          </template>
        </UCard>
      </div>
      <UModal v-model="appNameModal">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <h1>Wizard is cooking</h1>
          </template>
          <p>Selected ingredients</p>
          <div class="flex justify-between">
            <UIcon name="material-symbols:admin-panel-settings-outline" class="w-20 h-20 text-green-500"
            />
            <UIcon name="devicon:php" class="w-20 h-20"/>
            <UIcon name="devicon:laravel" class="w-20 h-20"/>
            <UIcon name="devicon:vuejs" class="w-20 h-20"/>
            <UIcon name="devicon:quasar" class="w-20 h-20"/>
          </div>
          <UInput v-model="value" />

          <template #footer>
            <UButton label="Generate"/>
          </template>
        </UCard>
      </UModal>
    </UCard>
</template>

<style scoped></style>
