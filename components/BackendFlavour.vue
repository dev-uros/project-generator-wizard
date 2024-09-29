<script lang="ts" setup>
interface Props {
  headerLabel: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  setNextStep: [index: number]
}>()

const backendFlavourOptions = [
  {value: 'laravel', label: 'Php/Laravel', phpIcon: 'devicon:php', laravelIcon: 'devicon:laravel'},
  {value: 'fastify', label: 'Node/Fastify', nodeIcon: 'devicon:nodejs', fastifyIcon: 'devicon-plain:fastify'},

]

const selectedBackend = ref('laravel')


const backendRadioGrayscale = computed(() => {
  if (selectedBackend.value === 'laravel') {
    return {
      laravelGrayScale: false,
      fastifyGrayScale: true
    }
  } else {
    return {
      laravelGrayScale: true,
      fastifyGrayScale: false
    }
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

          </template>
          <template #footer>
            <div class="flex flex-row justify-between">
              <UButton label="Previous" @click="emit('setNextStep', 1)">
                <template #leading>
                  <UIcon name="i-heroicons-arrow-left-20-solid" class="w-5 h-5"/>
                </template>
              </UButton>
              <UButton label="Next" @click="emit('setNextStep', 3)">
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
