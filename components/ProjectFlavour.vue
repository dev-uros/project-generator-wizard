<script lang="ts" setup>
import ProjectFlavourBackoffice from "~/components/ProjectFlavourBackoffice.vue";
import ProjectFlavourWebsite from "~/components/ProjectFlavourWebsite.vue";
import ProjectFlavourDesktop from "~/components/ProjectFlavourDesktop.vue";

interface Props {
  headerLabel: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  setNextStep: [index: number, projectFlavour: string]
}>()

const projectFlavourOptions = [
  {
    value: 'backoffice',
    label: 'Backoffice',
    icon: 'material-symbols:admin-panel-settings-outline'
  },
  {
    value: 'website',
    label: 'Website',
    icon: 'streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network'
  },
  {
    value: 'desktop',
    label: 'Desktop',
    icon: 'material-symbols-light:desktop-windows-outline'
  }
]

const selectedProjectFlavour = ref('backoffice')

</script>

<template>
  <UCard>
    <template #header>{{ headerLabel }}</template>
    <div class="flex space-x-2.5">
      <URadioGroup v-model="selectedProjectFlavour" :options="projectFlavourOptions">
        <template #label="{ option }">
          <UCard class="w-48 mb-2">
            <template #header>
              {{ option.label }}
            </template>
            <div class="flex justify-center items-center">
              <UIcon :name="option.icon" class="w-10 h-10 text-green-500"
                     :class="{'grayscale': selectedProjectFlavour !== option.value }"
              />
            </div>
          </UCard>

        </template>

      </URadioGroup>

      <UCard class="flex-grow">
        <template #header>
          <ProjectFlavourBackoffice v-if="selectedProjectFlavour === 'backoffice'"
                                    class="max-h-96 overflow-auto p-4"/>
          <ProjectFlavourWebsite v-else-if="selectedProjectFlavour === 'website'"
                                 class="max-h-96 overflow-auto  p-4"/>
          <ProjectFlavourDesktop v-else-if="selectedProjectFlavour === 'desktop'"
                                 class="max-h-96 overflow-auto  p-4"/>

        </template>
        <template #footer>
          <div class="flex flex-col items-end">
            <UButton label="Next" @click="emit('setNextStep', 1, selectedProjectFlavour)">
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
