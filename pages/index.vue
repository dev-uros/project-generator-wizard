<script setup lang="ts">

import ProjectFlavour from "~/components/ProjectFlavour.vue";
import FrontendFlavour from "~/components/FrontendFlavour.vue";
import BackendFlavour from "~/components/BackendFlavour.vue";

const projectFlavours = ref([{
  label: 'Project Flavour',
  icon: 'i-heroicons-information-circle',
  description: 'Select project flavour that you would like to conjure',
  disabled: false,
}, {
  label: 'Frontend Flavour',
  icon: 'i-heroicons-arrow-down-tray',
  description: 'Select your user interface magic',
  disabled: true,
}, {
  label: 'Backend Flavour',
  icon: 'i-heroicons-eye-dropper',
  description: 'Finally, this is the content for Tab3',
  disabled: true
}]);

const currentlySelectedFlavourIndex = ref(0);

const selectedFlavour = computed({
  get() {
    return currentlySelectedFlavourIndex.value
  },
  set(newSelectedValueIndex: number) {
    currentlySelectedFlavourIndex.value = newSelectedValueIndex
  }
})

const frontendOptions = ref([
  {value: 'quasar', label: 'Vue/Quasar', quasarIcon: 'devicon:quasar', vueIcon: 'devicon:vuejs'},
  {value: 'angular', label: 'Angular', angularIcon: 'devicon:angular'}
]);

const backendOptions = ref([
  {value: 'laravel', label: 'Php/Laravel', phpIcon: 'devicon:php', laravelIcon: 'devicon:laravel'},
  {value: 'fastify', label: 'Node/Fastify', nodeIcon: 'devicon:nodejs', fastifyIcon: 'devicon-plain:fastify'},
]);


//0 - prvi korak tip projekta
//1 - drugi korak tip frontend-a
//2 - treci korak tip backend-a

const selectedProjectType = ref()
const selectedFrontendType = ref()
const selectedBackendType = ref();
const setWizardStep = (index: number, selectedOption: string) => {
  if (index === 0) {

    projectFlavours.value[index].disabled = false;
    projectFlavours.value[1].disabled = true;
    projectFlavours.value[2].disabled = true;
  }
  if (index === 1) {
    if (selectedOption === 'backoffice') {
      selectedProjectType.value = selectedOption;
      frontendOptions.value = [
        {value: 'quasar', label: 'Vue/Quasar', quasarIcon: 'devicon:quasar', vueIcon: 'devicon:vuejs'},
        {value: 'angular', label: 'Angular', angularIcon: 'devicon:angular'}
      ]
    }

    if (selectedOption === 'website') {
      selectedProjectType.value = selectedOption;

      frontendOptions.value = [
        {value: 'astro', label: 'Astro/Daisy UI', astroIcon: 'devicon:astro', daisyIcon: 'simple-icons:daisyui'},
        {value: 'nuxt', label: 'Nuxt/Daisy UI', nuxtIcon: 'devicon:nuxtjs', daisyIcon: 'simple-icons:daisyui'}
      ]
    }

    if (selectedOption === 'desktop') {
      selectedProjectType.value = selectedOption;

      frontendOptions.value = [
        {value: 'quasar', label: 'Vue/Quasar', quasarIcon: 'devicon:quasar', vueIcon: 'devicon:vuejs'},
      ]
    }

    projectFlavours.value[0].disabled = true;
    projectFlavours.value[index].disabled = false;
    projectFlavours.value[2].disabled = true;
  }
  if (index === 2) {
    if (selectedProjectType.value === 'backoffice' && selectedOption === 'quasar') {
      backendOptions.value = [
        {value: 'laravel', label: 'Php/Laravel', phpIcon: 'devicon:php', laravelIcon: 'devicon:laravel'},
        {value: 'fastify', label: 'Node/Fastify', nodeIcon: 'devicon:nodejs', fastifyIcon: 'devicon-plain:fastify'},
      ]
    }

    if (selectedProjectType.value === 'backoffice' && selectedOption === 'angular') {
      backendOptions.value = [
        {value: 'laravel', label: 'Php/Laravel', phpIcon: 'devicon:php', laravelIcon: 'devicon:laravel'},
      ]
    }
    if (selectedProjectType.value === 'website' && selectedOption === 'nuxt') {
      backendOptions.value = [
        {value: 'none', label: 'None', noBackendIcon: 'fluent-emoji-high-contrast:no-entry'},
      ]
    }

    if (selectedProjectType.value === 'website' && selectedOption === 'astro') {
      backendOptions.value = [
        {value: 'none', label: 'None', noBackendIcon: 'fluent-emoji-high-contrast:no-entry'},
      ]
    }

    if (selectedProjectType.value === 'desktop' && selectedOption === 'quasar') {
      backendOptions.value = [
        {value: 'none', label: 'None', noBackendIcon: 'fluent-emoji-high-contrast:no-entry'},
      ]
    }

    projectFlavours.value[0].disabled = true;
    projectFlavours.value[1].disabled = true;
    projectFlavours.value[index].disabled = false;
  }

  setTimeout(() => selectedFlavour.value = index, 0)
}


</script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1 class="align-text-bottom">Project Generator Wizard
            <UIcon name="game-icons:wizard-face" class="w-8 h-8"/>
          </h1>

          <ColorScheme>
            <USelectMenu class="w-36" v-model="$colorMode.preference" :options="['system', 'light', 'dark']"/>
          </ColorScheme>
        </div>
      </template>
      <UTabs :items="projectFlavours" orientation="vertical"
             v-model="selectedFlavour"
             :ui="{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }">

        <template #item="{item}">
          <ProjectFlavour v-if="item.label === 'Project Flavour'"
                          :header-label="item.description"
                          @set-next-step="setWizardStep"
                          :key="item.label"/>
          <FrontendFlavour v-else-if="item.label === 'Frontend Flavour'"
                           :header-label="item.description"
                           @set-next-step="setWizardStep"
                           :key="item.label"
                           :frontend-flavour-options="frontendOptions"/>
          <BackendFlavour v-else-if="item.label === 'Backend Flavour'"
                          :header-label="item.label"
                          @set-next-step="setWizardStep"
                          :backend-flavour-options="backendOptions"
                          :key="item.label"/>

        </template>
      </UTabs>
    </UCard>
  </UContainer>

</template>

<style scoped>

</style>
