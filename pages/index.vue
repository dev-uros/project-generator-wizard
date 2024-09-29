<script setup lang="ts">

import ProjectFlavour from "~/components/ProjectFlavour.vue";
import FrontendFlavour from "~/components/FrontendFlavour.vue";
import BackendFlavour from "~/components/BackendFlavour.vue";

const projectFlavours = [{
  label: 'Project Flavour',
  icon: 'i-heroicons-information-circle',
  description: 'Select project flavour that you would like to conjure',
}, {
  label: 'Frontend Flavour',
  icon: 'i-heroicons-arrow-down-tray',
  description: 'Select your user interface magic',
}, {
  label: 'Backend Flavour',
  icon: 'i-heroicons-eye-dropper',
  description: 'Finally, this is the content for Tab3',
}];

const currentlySelectedFlavourIndex = ref(0);

const selectedFlavour = computed({
  get() {
    return currentlySelectedFlavourIndex.value
  },
  set(newSelectedValueIndex: number) {
    currentlySelectedFlavourIndex.value = newSelectedValueIndex
  }
})


const setWizardStep = (index: number) => {
  selectedFlavour.value = index;
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
                             :key="item.label"/>
            <BackendFlavour v-else-if="item.label === 'Backend Flavour'"
                            :header-label="item.label"
                            @set-next-step="setWizardStep"
                            :key="item.label"/>

        </template>
      </UTabs>
    </UCard>
  </UContainer>

</template>

<style scoped>

</style>
