<script lang="ts" setup>

import type {FRONTEND_OPTION} from "~/constants";


interface Props {
  headerLabel: string,
  frontendFlavourOptions: FRONTEND_OPTION[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  setNextStep: [index: number, frontendFlavour: string]
}>()


const selectedFrontend = ref('quasar')

const frontendRadioGrayscale = computed(() => {
  if (selectedFrontend.value === 'quasar') {
    return {
      quasarGrayScale: false,
      nuxtGrayScale: true,
      astroGrayScale: true,
      angularGrayScale: true
    }
  }
  if (selectedFrontend.value === 'angular') {
    return {
      quasarGrayScale: true,
      nuxtGrayScale: true,
      astroGrayScale: true,
      angularGrayScale: false
    }
  }
  if (selectedFrontend.value === 'astro') {
    return {
      quasarGrayScale: true,
      nuxtGrayScale: true,
      astroGrayScale: false,
      angularGrayScale: true
    }
  }

  if (selectedFrontend.value === 'nuxt') {
    return {
      quasarGrayScale: true,
      nuxtGrayScale: false,
      astroGrayScale: true,
      angularGrayScale: true
    }
  }
})

console.log('zdravo');

onUpdated(() => {

  if (!props.frontendFlavourOptions.some((frontend: FRONTEND_OPTION) => frontend.value === selectedFrontend.value)) {
    selectedFrontend.value = props.frontendFlavourOptions[0].value
  }
})

</script>

<template>
  <UCard>
    <template #header>{{ headerLabel }}</template>
    <div class="flex space-x-2.5">
      <URadioGroup v-model="selectedFrontend" :options="frontendFlavourOptions">
        <template #label="{ option }">
          <UCard class="w-48 mb-2">
            <template #header>
              {{ option.label }}
            </template>
            <div class="flex justify-center items-center" v-if="option.value === 'quasar'">
              <UIcon v-for="icon in option.icons" :name="icon.name" class="w-10 h-10"
                     :class="{'grayscale': frontendRadioGrayscale.quasarGrayScale}"/>
            </div>
            <div class="flex justify-center items-center" v-else-if="option.value === 'angular'">
              <UIcon v-for="icon in option.icons" :name="icon.name" class="w-10 h-10"
                     :class="{'grayscale': frontendRadioGrayscale.angularGrayScale}"/>
            </div>
            <div class="flex justify-center items-center" v-if="option.value === 'nuxt'">
              <UIcon v-for="icon in option.icons" :name="icon.name" class="w-10 h-10"
                     :class="{'grayscale': frontendRadioGrayscale.nuxtGrayScale}"/>
            </div>
            <div class="flex justify-center items-center" v-if="option.value === 'astro'">
              <UIcon v-for="icon in option.icons" :name="icon.name" class="w-10 h-10"
                     :class="{'grayscale': frontendRadioGrayscale.astroGrayScale}"/>
            </div>

          </UCard>

        </template>

      </URadioGroup>

      <UCard class="flex-grow">
        <template #header>
          <div v-if="selectedFrontend === 'quasar'">
            <article class="prose lg:prose-xl dark:prose-invert">
              <h1>Vue/Quasar SPA</h1>
              <UDivider/>
              <p>
                <ULink
                    to="https://vuejs.org/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Vue.js:
                </ULink>
                A progressive JavaScript framework for building user interfaces. It's flexible, easy to
                integrate, and uses a component-based architecture for developing web applications.

              </p>
              <p>
                <ULink
                    to="https://quasar.dev/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Quasar:
                </ULink>
                A Vue.js framework for building responsive web, mobile, and desktop apps with one codebase. It
                offers rich UI components, PWA, SSR, and Electron support.

              </p>
            </article>

          </div>
          <div v-if="selectedFrontend === 'angular'">
            <article class="prose lg:prose-xl dark:prose-invert">
              <h1>Angular SPA</h1>
              <UDivider/>
              <p>
                <ULink
                    to="https://angular.dev/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Angular
                </ULink>
                is a comprehensive, TypeScript-based framework for developing dynamic, scalable web
                applications. It features two-way data binding, dependency injection, and a modular architecture, making
                it ideal for large enterprise-level applications. Angular also includes a robust ecosystem with built-in
                tools for testing, routing, and optimizing performance.
              </p>
              <p>

              </p>

            </article>

          </div>
          <div v-if="selectedFrontend === 'nuxt'">
            <article class="prose lg:prose-xl dark:prose-invert">
              <h1>Nuxt SSR/SSG</h1>
              <UDivider/>
              <p>
                <ULink
                    to="https://nuxt.com/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Nuxt 3:
                </ULink>
                A powerful framework built on top of Vue.js for creating modern web applications. It provides
                server-side rendering, static site generation, and seamless routing with a focus on performance and
                developer experience.

              </p>
              <p>
                <ULink
                    to="https://daisyui.com/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  DaisyUI:
                </ULink>
                 A UI component library built on Tailwind CSS that simplifies styling with pre-designed,
                customizable components. It enhances productivity by offering a wide range of accessible and responsive
                UI elements without writing extensive custom CSS.

              </p>
            </article>

          </div>
          <div v-if="selectedFrontend === 'astro'">
            <article class="prose lg:prose-xl dark:prose-invert">
              <h1>Astro SSR/SSG</h1>
              <UDivider/>
              <p>
                <ULink
                    to="https://astro.build/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  Astro:
                </ULink>
                A modern, lightweight framework for building fast, content-focused websites. It supports multiple
                front-end frameworks, generates static sites by default, and optimizes performance with its partial
                hydration approach.

              </p>
              <p>
                <ULink
                    to="https://daisyui.com/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  DaisyUI:
                </ULink>
                A UI component library built on Tailwind CSS that simplifies styling with pre-designed,
                customizable components. It enhances productivity by offering a wide range of accessible and responsive
                UI elements without writing extensive custom CSS.

              </p>
            </article>

          </div>
        </template>
        <template #footer>
          <div class="flex flex-row justify-between">
            <UButton label="Previous" @click="emit('setNextStep', 0, selectedFrontend)">
              <template #leading>
                <UIcon name="i-heroicons-arrow-left-20-solid" class="w-5 h-5"/>
              </template>
            </UButton>
            <UButton label="Next" @click="emit('setNextStep', 2, selectedFrontend)">
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
