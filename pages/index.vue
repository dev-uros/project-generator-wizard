<script setup lang="ts">
import { useSetWizardStep } from '~/composables/setWizardStep'

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
</script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1 class="align-text-bottom">
            Project Generator Wizard
            <UIcon name="game-icons:wizard-face" class="w-8 h-8" />
          </h1>

          <ColorScheme>
            <USelectMenu
              class="w-36"
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
            />
          </ColorScheme>
        </div>
      </template>
      <UTabs
        :items="wizardSteps"
        orientation="vertical"
        v-model="selectedStep"
        :ui="{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }"
      >
        <template #item="{ item }">
          <ProjectFlavour
            v-if="item.label === 'Project Flavour'"
            :header-label="item.description"
            @set-next-step="setWizardStep"
            :project-types="projectTypeOptions"
            :key="item.label"
          />
          <FrontendFlavour
            v-else-if="item.label === 'Frontend Flavour'"
            :header-label="item.description"
            @set-next-step="setWizardStep"
            :key="item.label"
            :frontend-flavour-options="frontendOptions"
          />
          <BackendFlavour
            v-else-if="item.label === 'Backend Flavour'"
            :header-label="item.label"
            @set-next-step="setWizardStep"
            :backend-flavour-options="backendOptions"
            :key="item.label"
          />
        </template>
      </UTabs>
    </UCard>
    <WizardSummaryModal
      v-if="wizardSummaryModal"
      v-model="wizardSummaryModal"
      :selected-project-flavour="selectedProjectFlavour"
      :selected-front-end="selectedFrontend"
      :selected-back-end="selectedBackend"
      @close-wizard-summary-modal="wizardSummaryModal = false"
    />
  </UContainer>
</template>

<style scoped></style>
