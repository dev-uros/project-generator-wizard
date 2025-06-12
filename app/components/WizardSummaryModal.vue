<script lang="ts" setup>
import FrontendQuasarSpaFolderStructure from '~/components/FrontendQuasarSpaFolderStructure.vue'
import FolderIconClosed from '~/components/icons/FolderIconClosed.vue'
import ZipFolderIcon from '~/components/icons/ZipFolderIcon.vue'
import DockerFileClosed from '~/components/icons/DockerFileClosed.vue'
import DocumentationVitepressStandAloneFolderStructure from '~/components/DocumentationVitepressStandAloneFolderStructure.vue'
import MobileIonicVueFolderStructure from "~/components/MobileIonicVueFolderStructure.vue";
import MobileVueIonicDownloadPreview from "~/components/MobileVueIonicDownloadPreview.vue";

defineProps([
  'wizardSummaryModal',
  'selectedProjectFlavour',
  'selectedBackEnd',
  'selectedFrontEnd'
])

const state = reactive({
  appName: ''
})
const generateProjectButtonLoadingState = ref(false)

const defaultAppName = 'Default Project Name'

const generatedProjectNamesBackofficeLaravelQuasar = computed(function () {
  if (!state.appName) {
    return {
      downloadZipName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}.zip`,
      unzippedFolderName: defaultAppName.replace(/\s+/g, '-').toLowerCase(),
      frontendProjectFolderName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-app`,
      documentationProjectFolderName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-documentation`,
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
        .toLowerCase()}-app`,
      documentationAppContainerName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-documentation`
    }
  }
  return {
    downloadZipName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}.zip`,
    unzippedFolderName: state.appName.replace(/\s+/g, '-').toLowerCase(),
    frontendProjectFolderName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-app`,
    documentationProjectFolderName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-documentation`,
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
      .toLowerCase()}-app`,
    documentationAppContainerName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-documentation`
  }
})
const downloadZipBackofficeLaravelQuasar = async () => {
  generateProjectButtonLoadingState.value = true
  const result = await $fetch(
    '/api/generateBackofficeLaravelQuasarProjectTemplate',
    {
      method: 'POST',
      body: {
        projectName: state.appName
      }
    }
  )

  // Create a link element to trigger the download
  const url = window.URL.createObjectURL(result as Blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${
    state.appName
      ? state.appName.replace(/\s+/g, '-').toLowerCase()
      : 'default-project'
  }.zip` // Set the desired filename
  // Append to the body and trigger click
  document.body.appendChild(a)
  a.click()

  // Clean up
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url) // Release the blob URL
  generateProjectButtonLoadingState.value = false
}

const generatedProjectNamesWebsiteNuxtDaisyUi = computed(function () {
  if (!state.appName) {
    return {
      downloadZipName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}.zip`,
      unzippedFolderName: defaultAppName.replace(/\s+/g, '-').toLowerCase(),
      frontendWebsiteContainerName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-website`
    }
  }
  return {
    downloadZipName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}.zip`,
    unzippedFolderName: state.appName.replace(/\s+/g, '-').toLowerCase(),
    frontendWebsiteContainerName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-website`
  }
})
const downloadZipWebsiteNuxtDaisyUi = async () => {
  generateProjectButtonLoadingState.value = true
  const result = await $fetch(
    '/api/generateWebsiteNuxtDaisyUiProjectTemplate',
    {
      method: 'POST',
      body: {
        projectName: state.appName
      }
    }
  )

  // Create a link element to trigger the download
  const url = window.URL.createObjectURL(result as Blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${
    state.appName
      ? state.appName.replace(/\s+/g, '-').toLowerCase()
      : 'default-project'
  }.zip` // Set the desired filename

  // Append to the body and trigger click
  document.body.appendChild(a)
  a.click()

  // Clean up
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url) // Release the blob URL
  generateProjectButtonLoadingState.value = false
}

//mobile

const generatedProjectNamesMobileVueIonic = computed(function () {
  if (!state.appName) {
    return {
      downloadZipName: `${defaultAppName
          .replace(/\s+/g, '-')
          .toLowerCase()}.zip`,
      unzippedFolderName: defaultAppName.replace(/\s+/g, '-').toLowerCase(),
      appId: `com.${defaultAppName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`,
      appName: defaultAppName
    }
  }
  return {
    downloadZipName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}.zip`,
    unzippedFolderName: state.appName.replace(/\s+/g, '-').toLowerCase(),
    appId: `com.${state.appName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`,
    appName: state.appName
  }
})
const downloadZipMobileVueIonic = async () => {
  generateProjectButtonLoadingState.value = true
  const result = await $fetch(
      '/api/generateMobileVueIonicProjectTemplate',
      {
        method: 'POST',
        body: {
          projectName: state.appName
        }
      }
  )

  // Create a link element to trigger the download
  const url = window.URL.createObjectURL(result as Blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${
      state.appName
          ? state.appName.replace(/\s+/g, '-').toLowerCase()
          : 'default-project'
  }.zip` // Set the desired filename

  // Append to the body and trigger click
  document.body.appendChild(a)
  a.click()

  // Clean up
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url) // Release the blob URL
  generateProjectButtonLoadingState.value = false
}

//mobile end
//microservice logic

const generatedProjectNamesMicroServiceFastify = computed(function () {
  if (!state.appName) {
    return {
      downloadZipName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}.zip`,
      unzippedFolderName: defaultAppName.replace(/\s+/g, '-').toLowerCase(),
      webserverContainerName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-webserver`,
      databaseContainerName: `${defaultAppName
        .replace(/\s+/g, '-')
        .toLowerCase()}-db`
    }
  }
  return {
    downloadZipName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}.zip`,
    unzippedFolderName: state.appName.replace(/\s+/g, '-').toLowerCase(),
    webserverContainerName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-webserver`,
    databaseContainerName: `${state.appName
      .replace(/\s+/g, '-')
      .toLowerCase()}-db`
  }
})
const downloadZipMicroServiceFastify = async () => {
  generateProjectButtonLoadingState.value = true
  const result = await $fetch('/api/generateMicroServiceFastifyTemplate', {
    method: 'POST',
    body: {
      projectName: state.appName
    }
  })

  // Create a link element to trigger the download
  const url = window.URL.createObjectURL(result as Blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${
    state.appName
      ? state.appName.replace(/\s+/g, '-').toLowerCase()
      : 'default-project'
  }.zip` // Set the desired filename

  // Append to the body and trigger click
  document.body.appendChild(a)
  a.click()

  // Clean up
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url) // Release the blob URL
  generateProjectButtonLoadingState.value = false
}

//microservice logic - end

//documentation logic

const generatedProjectNamesDocumentationVitepressStandAlone = computed(
  function () {
    if (!state.appName) {
      return {
        downloadZipName: `${defaultAppName
          .replace(/\s+/g, '-')
          .toLowerCase()}.zip`,
        unzippedFolderName: defaultAppName.replace(/\s+/g, '-').toLowerCase(),
        documentationContainerName: `${defaultAppName
          .replace(/\s+/g, '-')
          .toLowerCase()}-documentation`
      }
    }
    return {
      downloadZipName: `${state.appName
        .replace(/\s+/g, '-')
        .toLowerCase()}.zip`,
      unzippedFolderName: state.appName.replace(/\s+/g, '-').toLowerCase(),
      documentationContainerName: `${state.appName
        .replace(/\s+/g, '-')
        .toLowerCase()}-documentation`
    }
  }
)
const downloadZipDocumentationVitepressStandAlone = async () => {
  generateProjectButtonLoadingState.value = true
  const result = await $fetch(
    '/api/generateDocumentationVitepressStandAloneTemplate',
    {
      method: 'POST',
      body: {
        projectName: state.appName
      }
    }
  )

  // Create a link element to trigger the download
  const url = window.URL.createObjectURL(result as Blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${
    state.appName
      ? state.appName.replace(/\s+/g, '-').toLowerCase()
      : 'default-project'
  }.zip` // Set the desired filename

  // Append to the body and trigger click
  document.body.appendChild(a)
  a.click()

  // Clean up
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url) // Release the blob URL
  generateProjectButtonLoadingState.value = false
}

//documentation logic-end
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
        <div
          v-if="selectedProjectFlavour.value === 'backoffice'"
          class="flex flex-col lg:flex-row gap-4 justify-evenly"
        >
          <div class="w-full lg:w-1/3">
            <BackendLaravelFolderStructure
              v-if="selectedBackEnd.value === 'laravel'"
            />
          </div>
          <div class="w-full lg:w-1/3">
            <FrontendQuasarSpaFolderStructure
              v-if="selectedFrontEnd.value === 'quasar'"
            />
          </div>
          <div class="w-full lg:w-1/3">
            <DocumentationVitepressFolderStructure
              v-if="
                selectedFrontEnd.value === 'quasar' &&
                selectedBackEnd.value === 'laravel'
              "
            />
          </div>
        </div>
        <div
          v-else-if="selectedProjectFlavour.value === 'website'"
          class="flex flex-col gap-4 justify-evenly"
        >
          <WebsiteNuxtFolderStructure
            v-if="selectedFrontEnd.value === 'nuxt'"
          />
        </div>
        <div
            v-else-if="selectedProjectFlavour.value === 'mobile'"
            class="flex flex-col gap-4 justify-evenly"
        >
          <MobileIonicVueFolderStructure
              v-if="selectedFrontEnd.value === 'vueIonic'"
          />
        </div>
        <div v-else-if="selectedProjectFlavour.value === 'desktop'">
          desktop
        </div>
        <div
          class="flex flex-col gap-4 justify-evenly"
          v-else-if="selectedProjectFlavour.value === 'microservice'"
        >
          <MicroServiceFolderStructure
            v-if="selectedBackEnd.value === 'fastify'"
          />
        </div>
        <div
          v-else-if="selectedProjectFlavour.value === 'documentation'"
          class="flex flex-col gap-4 justify-evenly"
        >
          <DocumentationVitepressStandAloneFolderStructure
            v-if="selectedFrontEnd.value === 'vitepress'"
          />
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
      <div class="flex flex-col lg:flex-row justify-center gap-4 mt-4">
        <BackofficeLaravelQuasarDownloadPreview
          :generated-project-names="
            generatedProjectNamesBackofficeLaravelQuasar
          "
          v-if="
            selectedProjectFlavour.value === 'backoffice' &&
            selectedFrontEnd.value === 'quasar' &&
            selectedBackEnd.value === 'laravel'
          "
        />

        <WebsiteNuxtDaisyUiDownloadPreview
          :generated-project-names="generatedProjectNamesWebsiteNuxtDaisyUi"
          v-if="
            selectedProjectFlavour.value === 'website' &&
            selectedFrontEnd.value === 'nuxt'
          "
        />

        <MobileVueIonicDownloadPreview
            :generated-project-names="generatedProjectNamesMobileVueIonic"
            v-if="
            selectedProjectFlavour.value === 'mobile' &&
            selectedFrontEnd.value === 'vueIonic'
          "
        />

        <MicroServiceFastifyDownloadPreview
          :generated-project-names="generatedProjectNamesMicroServiceFastify"
          v-if="
            selectedProjectFlavour.value === 'microservice' &&
            selectedBackEnd.value === 'fastify'
          "
        />

        <DocumentationVitepressStandAloneDownloadPreview
          :generated-project-names="
            generatedProjectNamesDocumentationVitepressStandAlone
          "
          v-if="
            selectedProjectFlavour.value === 'documentation' &&
            selectedFrontEnd.value === 'vitepress'
          "
        />
      </div>
      <div class="flex justify-center">
        <UButton
          v-if="
            selectedProjectFlavour.value === 'backoffice' &&
            selectedFrontEnd.value === 'quasar' &&
            selectedBackEnd.value === 'laravel'
          "
          label="Generate"
          class="justify-center mt-4 w-96"
          @click="downloadZipBackofficeLaravelQuasar"
          :loading="generateProjectButtonLoadingState"
        />
        <UButton
          v-if="
            selectedProjectFlavour.value === 'website' &&
            selectedFrontEnd.value === 'nuxt'
          "
          label="Generate"
          class="justify-center mt-4 w-96"
          @click="downloadZipWebsiteNuxtDaisyUi"
          :loading="generateProjectButtonLoadingState"
        />
        <UButton
            v-if="
            selectedProjectFlavour.value === 'mobile' &&
            selectedFrontEnd.value === 'vueIonic'
          "
            label="Generate"
            class="justify-center mt-4 w-96"
            @click="downloadZipMobileVueIonic"
            :loading="generateProjectButtonLoadingState"
        />
        <UButton
          v-if="
            selectedProjectFlavour.value === 'microservice' &&
            selectedBackEnd.value === 'fastify'
          "
          label="Generate"
          class="justify-center mt-4 w-96"
          @click="downloadZipMicroServiceFastify"
          :loading="generateProjectButtonLoadingState"
        />
        <UButton
          v-if="
            selectedProjectFlavour.value === 'documentation' &&
            selectedFrontEnd.value === 'vitepress'
          "
          label="Generate"
          class="justify-center mt-4 w-96"
          @click="downloadZipDocumentationVitepressStandAlone"
          :loading="generateProjectButtonLoadingState"
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
