<script setup lang="ts">
import {useSetWizardStep} from "~/composables/setWizardStep";
import FrontendQuasarSpaFolderStructure from "~/components/FrontendQuasarSpaFolderStructure.vue";

const {
  wizardSteps,
  selectedStep,
  projectTypeOptions,
  frontendOptions,
  backendOptions,
  wizardSummaryModal,
  selectedProjectFlavour,
  selectedFrontend,
  selectedBackend,
  setWizardStep
} = useSetWizardStep()

const appName = ref('');



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
      <UTabs :items="wizardSteps" orientation="vertical"
             v-model="selectedStep"
             :ui="{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }">

        <template #item="{item}">
          <ProjectFlavour v-if="item.label === 'Project Flavour'"
                          :header-label="item.description"
                          @set-next-step="setWizardStep"
                          :project-types="projectTypeOptions"
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
    <UModal v-model="wizardSummaryModal" fullscreen>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1>Wizard is cooking</h1>
        </template>
        <p>Selected ingredients</p>
        <div class="flex justify-between">
          <UIcon :name="selectedProjectFlavour.icon" class="w-20 h-20 text-green-500"/>
          <UIcon v-for="icon in selectedFrontend.icons" :name="icon.name" class="w-20 h-20"/>
          <UIcon v-for="icon in selectedBackend.icons" :name="icon.name" class="w-20 h-20"/>
        </div>

        <UInput v-model="appName" />

        <UCard class="">
          <template #header>
            What are you getting
          </template>
          <div v-if="selectedProjectFlavour.value === 'backoffice'">
            <div class="flex flex-row gap-4">
              <BackendLaravelFolderStructure class="basis-1/2"/>
              <FrontendQuasarSpaFolderStructure class="basis-1/2"/>
            </div>

          </div>
          <div v-else-if="selectedProjectFlavour.value === 'website'">
            website
          </div>
          <div v-else-if="selectedProjectFlavour.value === 'desktop'">
            desktop
          </div>


        </UCard>

        <template #footer>
          <div class="flex justify-between">
            <UButton label="Generate"/>
            <UButton color="red" variant="ghost" label="Cancel" @click="wizardSummaryModal = false"/>
          </div>


        </template>
      </UCard>
    </UModal>

  </UContainer>

</template>

<style scoped>

</style>
