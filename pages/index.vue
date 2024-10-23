<script setup lang="ts">
import {useSetWizardStep} from "~/composables/setWizardStep";
import FrontendQuasarSpaFolderStructure from "~/components/FrontendQuasarSpaFolderStructure.vue";
import FolderIconClosed from "~/components/icons/FolderIconClosed.vue";
import ZipFolderIcon from "~/components/icons/ZipFolderIcon.vue";
import DockerFileClosed from "~/components/icons/DockerFileClosed.vue";

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

// const appName = ref('');


const state = reactive({
  appName: '',
})

const defaultAppName = 'Default Project Name';

const generatedProjectNames = computed(function () {
  if (!state.appName) {
    return {
      downloadZipName: `${defaultAppName.replace(/\s+/g, '-').toLowerCase()}.zip`,
      unzippedFolderName: defaultAppName.replace(/\s+/g, '-').toLowerCase(),
      frontendProjectFolderName: `${defaultAppName.replace(/\s+/g, '-').toLowerCase()}-app`,
      backendProjectFolderName: `${defaultAppName.replace(/\s+/g, '-').toLowerCase()}-api`,
      databaseContainerName: `${defaultAppName.replace(/\s+/g, '-').toLowerCase()}-db`,
      databaseTestContainerName: `${defaultAppName.replace(/\s+/g, '-').toLowerCase()}-db-test`,
      webserverContainerName: `${defaultAppName.replace(/\s+/g, '-').toLowerCase()}-api-webserver`,
      phpContainerName: `${defaultAppName.replace(/\s+/g, '-').toLowerCase()}-api-php`,
      frontendAppContainerName: `${defaultAppName.replace(/\s+/g, '-').toLowerCase()}-app`
    }
  }
  return {
    downloadZipName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}.zip`,
    unzippedFolderName: state.appName.replace(/\s+/g, '-').toLowerCase(),
    frontendProjectFolderName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}-app`,
    backendProjectFolderName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}-api`,
    databaseContainerName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}-db`,
    databaseTestContainerName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}-db-test`,
    webserverContainerName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}-api-webserver`,
    phpContainerName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}-api-php`,
    frontendAppContainerName: `${state.appName.replace(/\s+/g, '-').toLowerCase()}-app`
  }
});
const downloadZip = async () => {
  const result = await $fetch('/api/generateProjectTemplate',{
    method: 'POST',
    body: {
      projectName: state.appName

    }
  })




  // Create a link element to trigger the download
  const url = window.URL.createObjectURL(result as Blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${state.appName.replace(/\s+/g, '-').toLowerCase()}.zip`; // Set the desired filename

  // Append to the body and trigger click
  document.body.appendChild(a);
  a.click();

  // Clean up
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url); // Release the blob URL
};
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

        <div class="mt-4 flex flex-row justify-center">
          <div class="w-96">
            <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
              <UFormGroup label="Application name" name="appName">
                <UInput v-model.trim="state.appName"/>
              </UFormGroup>
            </UForm>
          </div>

        </div>
        <div class="flex flex-row justify-center space-x-2.5 mt-4">
          <div>
            <UCard>
              <template #header>
                Folders
              </template>
              <ul class="list-none h-36 space-y-1.5">
                <li>
                  <div class="flex flex-row gap-4">
                    <ZipFolderIcon/>
                    {{ generatedProjectNames.downloadZipName }}
                  </div>

                </li>
                <li>
                  <div class="flex flex-row gap-4">
                    <FolderIconClosed/>
                    {{ generatedProjectNames.unzippedFolderName }}
                  </div>

                </li>
                <li class="ml-5">
                  <div class="flex flex-row gap-4">
                    <FolderIconClosed/>
                    {{ generatedProjectNames.backendProjectFolderName }}
                  </div>
                </li>
                <li class="ml-5">
                  <div class="flex flex-row gap-4">
                    <FolderIconClosed/>
                    {{ generatedProjectNames.frontendProjectFolderName }}
                  </div>
                </li>
              </ul>
            </UCard>
          </div>
          <div>
            <UCard>
              <template #header>
                Docker containers
              </template>
              <ul class="list-none h-36 space-y-1.5">
                <li>
                  <div class="flex flex-row gap-4">
                    <DockerFileClosed/>
                    {{ generatedProjectNames.databaseContainerName }}
                  </div>
                </li>
                <li>
                  <div class="flex flex-row gap-4">
                    <DockerFileClosed/>
                    {{ generatedProjectNames.databaseTestContainerName }}
                  </div>
                </li>
                <li>
                  <div class="flex flex-row gap-4">
                    <DockerFileClosed/>
                    {{ generatedProjectNames.webserverContainerName }}
                  </div>
                </li>
                <li>
                  <div class="flex flex-row gap-4">
                    <DockerFileClosed/>
                    {{ generatedProjectNames.phpContainerName }}
                  </div>
                </li>
                <li>
                  <div class="flex flex-row gap-4">
                    <DockerFileClosed/>
                    {{ generatedProjectNames.frontendAppContainerName }}
                  </div>
                </li>
              </ul>
            </UCard>
          </div>
        </div>

        <div class="flex justify-center">
        <UButton label="Generate" class="justify-center mt-4 w-96" @click="downloadZip"/>
        </div>
        <template #footer>
          <div class="flex justify-center">
            <UButton  color="red" variant="ghost" label="Cancel" @click="wizardSummaryModal = false" class="w-96 justify-center"/>
          </div>


        </template>
      </UCard>
    </UModal>

  </UContainer>

</template>

<style scoped>

</style>
