<script lang="ts" setup>
import ProjectFlavourBackoffice from '~/components/ProjectFlavourBackoffice.vue'
import ProjectFlavourWebsite from '~/components/ProjectFlavourWebsite.vue'
import ProjectFlavourDesktop from '~/components/ProjectFlavourDesktop.vue'
import type { PROJECT_TYPE } from '~/constants'

interface Props {
  headerLabel: string
  projectTypes: PROJECT_TYPE[]
  orientation: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  setNextStep: [index: number, projectFlavour: string]
}>()

const selectedProjectType = ref('backoffice')
</script>

<template>
  <UCard>
    <template #header>{{ headerLabel }}</template>
    <div
      class="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-2"
    >
      <URadioGroup
        v-model="selectedProjectType"
        :options="projectTypes"
        v-if="orientation === 'vertical'"
      >
        <template #label="{ option }">
          <UCard class="w-48 mb-2">
            <template #header>
              {{ option.label }}
            </template>
            <div class="flex justify-center items-center">
              <UIcon
                :name="option.icon"
                class="w-10 h-10 text-green-500"
                :class="{ grayscale: selectedProjectType !== option.value }"
              />
            </div>
            <template v-if="option.disabled" #footer>
              <div class="flex justify-center text-gray-500">
                {{ option.disabled ? 'Work in progress' : '' }}
              </div>
            </template>
          </UCard>
        </template>
      </URadioGroup>

      <USelectMenu
        v-else
        value-attribute="value"
        class="py-4"
        v-model="selectedProjectType"
        :options="projectTypes"
      />
      <UCard class="flex-grow">
        <template #header>
          <ProjectFlavourBackoffice
            v-if="selectedProjectType === 'backoffice'"
            class="overflow-auto p-4"
          />
          <ProjectFlavourWebsite
            v-else-if="selectedProjectType === 'website'"
            class="overflow-auto p-4"
          />
          <ProjectFlavourMicroService
            v-else-if="selectedProjectType === 'microservice'"
            class="overflow-auto p-4"
          />
          <ProjectFlavourDesktop
            v-else-if="selectedProjectType === 'desktop'"
            class="overflow-auto p-4"
          />
        </template>
        <template #footer>
          <div class="flex flex-col items-end">
            <UButton
              label="Next"
              @click="emit('setNextStep', 1, selectedProjectType)"
            >
              <template #trailing>
                <UIcon
                  name="i-heroicons-arrow-right-20-solid"
                  class="w-5 h-5"
                />
              </template>
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </UCard>
</template>

<style scoped></style>
