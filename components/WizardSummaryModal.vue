<script lang="ts" setup>
import FrontendQuasarSpaFolderStructure from '~/components/FrontendQuasarSpaFolderStructure.vue'
import FolderIconClosed from '~/components/icons/FolderIconClosed.vue'
import ZipFolderIcon from '~/components/icons/ZipFolderIcon.vue'
import DockerFileClosed from '~/components/icons/DockerFileClosed.vue'
defineProps([
  'wizardSummaryModal',
  'selectedProjectFlavour',
  'selectedBackEnd',
  'selectedFrontEnd'
])

const state = reactive({
  appName: ''
})

const defaultAppName = 'Default Project Name'

const generatedProjectNames = computed(function () {
  if (!state.appName) {
    return {
      downloadZipName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}.zip`,
      unzippedFolderName: defaultAppName.replace(/\s+/g, '-').toLowerCase(),
      frontendProjectFolderName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-app`,
      backendProjectFolderName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-api`,
      databaseContainerName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-db`,
      databaseTestContainerName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-db-test`,
      webserverContainerName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-api-webserver`,
      phpContainerName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-api-php`,
      frontendAppContainerName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-app`
    }
  }
  return {
    downloadZipName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}.zip`,
    unzippedFolderName: state.appName.replace(/\s+/g, '-').toLowerCase(),
    frontendProjectFolderName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-app`,
    backendProjectFolderName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-api`,
    databaseContainerName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-db`,
    databaseTestContainerName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-db-test`,
    webserverContainerName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-api-webserver`,
    phpContainerName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-api-php`,
    frontendAppContainerName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-app`
  }
})
const downloadZip = async () => {
  const result = await $fetch('/api/generateProjectTemplate', {
    method: 'POST',
    body: {
      projectName: state.appName
    }
  })

  // Create a link element to trigger the download
  const url = window.URL.createObjectURL(result as Blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${state.appName.replace(/\s+/g, '-').toLowerCase()}.zip` // Set the desired filename

  // Append to the body and trigger click
  document.body.appendChild(a)
  a.click()

  // Clean up
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url) // Release the blob URL
}
</script>

<template>
  <UModal fullscreen>
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800'
      }"
    >
      <UCard>
        <div v-if="selectedProjectFlavour.value === 'backoffice'">
          <div class="flex flex-row gap-4">
            <BackendLaravelFolderStructure
              class="basis-1/2"
              v-if="selectedBackEnd.value === 'laravel'"
            />
            <FrontendQuasarSpaFolderStructure
              class="basis-1/2"
              v-if="selectedFrontEnd.value === 'quasar'"
            />
          </div>
        </div>
        <div v-else-if="selectedProjectFlavour.value === 'website'">
          website
        </div>
        <div v-else-if="selectedProjectFlavour.value === 'desktop'">
          desktop
        </div>
      </UCard>

      <div class="mt-4 flex flex-row justify-center">
        <div class="w-96">
          <UForm :state="state" class="space-y-4">
            <UFormGroup label="Application name" name="appName">
              <UInput v-model.trim="state.appName" />
            </UFormGroup>
          </UForm>
        </div>
      </div>
      <div class="flex flex-row justify-center space-x-2.5 mt-4">
        <div>
          <UCard>
            <template #header> Folders </template>
            <ul class="list-none h-36 space-y-1.5">
              <li>
                <div class="flex flex-row gap-4">
                  <ZipFolderIcon />
                  {{ generatedProjectNames.downloadZipName }}
                </div>
              </li>
              <li>
                <div class="flex flex-row gap-4">
                  <FolderIconClosed />
                  {{ generatedProjectNames.unzippedFolderName }}
                </div>
              </li>
              <li class="ml-5">
                <div class="flex flex-row gap-4">
                  <FolderIconClosed />
                  {{ generatedProjectNames.backendProjectFolderName }}
                </div>
              </li>
              <li class="ml-5">
                <div class="flex flex-row gap-4">
                  <FolderIconClosed />
                  {{ generatedProjectNames.frontendProjectFolderName }}
                </div>
              </li>
            </ul>
          </UCard>
        </div>
        <div>
          <UCard>
            <template #header> Docker containers </template>
            <ul class="list-none h-36 space-y-1.5">
              <li>
                <div class="flex flex-row gap-4">
                  <DockerFileClosed />
                  {{ generatedProjectNames.databaseContainerName }}
                </div>
              </li>
              <li>
                <div class="flex flex-row gap-4">
                  <DockerFileClosed />
                  {{ generatedProjectNames.databaseTestContainerName }}
                </div>
              </li>
              <li>
                <div class="flex flex-row gap-4">
                  <DockerFileClosed />
                  {{ generatedProjectNames.webserverContainerName }}
                </div>
              </li>
              <li>
                <div class="flex flex-row gap-4">
                  <DockerFileClosed />
                  {{ generatedProjectNames.phpContainerName }}
                </div>
              </li>
              <li>
                <div class="flex flex-row gap-4">
                  <DockerFileClosed />
                  {{ generatedProjectNames.frontendAppContainerName }}
                </div>
              </li>
            </ul>
          </UCard>
        </div>
      </div>

      <div class="flex justify-center">
        <UButton
          label="Generate"
          class="justify-center mt-4 w-96"
          @click="downloadZip"
        />
      </div>
      <template #footer>
        <div class="flex justify-center">
          <UButton
            color="red"
            variant="ghost"
            label="Cancel"
            @click="$emit('closeWizardSummaryModal')"
            class="w-96 justify-center"
          />
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<style scoped></style>
