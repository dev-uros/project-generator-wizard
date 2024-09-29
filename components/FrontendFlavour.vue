<script lang="ts" setup>
interface Props {
  headerLabel: string
}

defineProps<Props>()

const emit = defineEmits<{
  setNextStep: [index: number]
}>()

const frontendFlavourOptions = [
  {value: 'quasar', label: 'Vue/Quasar', quasarIcon: 'devicon:quasar', vueIcon: 'devicon:vuejs'},
  {value: 'angular', label: 'Angular', angularIcon: 'devicon:angular'},

]

const selectedFrontend = ref('quasar')



const frontendRadioGrayscale = computed(() => {
  if (selectedFrontend.value === 'quasar') {
    return {
      quasarGrayScale: false,
      angularGrayScale: true
    }
  } else {
    return {
      quasarGrayScale: true,
      angularGrayScale: false
    }
  }
})

onMounted(()=>{
  console.log('mounting')
})
onActivated(()=>{
  console.log('activated')
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
              <UIcon :name="option.vueIcon" class="w-10 h-10" :class="{'grayscale': frontendRadioGrayscale.quasarGrayScale}"/>
              <UIcon :name="option.quasarIcon" class="w-10 h-10" :class="{'grayscale': frontendRadioGrayscale.quasarGrayScale}"/>
            </div>
            <div class="flex justify-center items-center" v-else-if="option.value === 'angular'">
              <UIcon :name="option.angularIcon" class="w-10 h-10" :class="{'grayscale': frontendRadioGrayscale.angularGrayScale}"/>
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
                Vue.js: A progressive JavaScript framework for building user interfaces. It's flexible, easy to
                integrate, and uses a component-based architecture for developing web applications.
                <ULink
                    to="https://vuejs.org/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  More info
                </ULink>
              </p>
              <p>
                Quasar: A Vue.js framework for building responsive web, mobile, and desktop apps with one codebase. It
                offers rich UI components, PWA, SSR, and Electron support.
                <ULink
                    to="https://quasar.dev/"
                    target="_blank"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  More info
                </ULink>
              </p>
            </article>

          </div>
          <div v-if="selectedFrontend === 'angular'">
            <article class="prose lg:prose-xl dark:prose-invert">
              <h1>Angular SPA</h1>
              <UDivider/>
              <p>
                Angular is a comprehensive, TypeScript-based framework for developing dynamic, scalable web
                applications. It features two-way data binding, dependency injection, and a modular architecture, making
                it ideal for large enterprise-level applications. Angular also includes a robust ecosystem with built-in
                tools for testing, routing, and optimizing performance. </p>
              <p>
              <ULink
                  to="https://angular.dev/"
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
            <UButton label="Previous" @click="emit('setNextStep', 0)">
              <template #leading>
                <UIcon name="i-heroicons-arrow-left-20-solid" class="w-5 h-5"/>
              </template>
            </UButton>
            <UButton label="Next" @click="emit('setNextStep', 2)">
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
