<script lang="ts" setup>
import FolderIconClosed from "~/components/icons/FolderIconClosed.vue";
import ZipFolderIcon from "~/components/icons/ZipFolderIcon.vue";
import DockerFileClosed from "~/components/icons/DockerFileClosed.vue";

defineProps(['generatedProjectNames'])
</script>

<template>
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
              {{ generatedProjectNames.frontendWebsiteContainerName }}
            </div>
          </li>
        </ul>
      </UCard>
    </div>
  </div>
</template>

<style scoped></style>
