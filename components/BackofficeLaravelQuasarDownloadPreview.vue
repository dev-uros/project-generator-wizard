<script lang="ts" setup>
import FolderIconClosed from "~/components/icons/FolderIconClosed.vue";
import ZipFolderIcon from "~/components/icons/ZipFolderIcon.vue";
import DockerFileClosed from "~/components/icons/DockerFileClosed.vue";

defineProps(['generatedProjectNames'])
</script>

<template>

      <UCard>
        <template #header> Folders </template>
        <ul class="list-none space-y-1.5">
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

      <UCard>
        <template #header> Docker containers </template>
        <ul class="list-none space-y-1.5">
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

</template>

<style scoped></style>
