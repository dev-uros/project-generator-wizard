<script lang="ts" setup>
import FolderIconClosed from "~/components/icons/FolderIconClosed.vue";
import ZipFolderIcon from "~/components/icons/ZipFolderIcon.vue";
import DockerFileClosed from "~/components/icons/DockerFileClosed.vue";
import CapacitorFileClosed from "~/components/icons/CapacitorFileClosed.vue";

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
        </ul>
      </UCard>

      <UCard>
        <template #header>App config</template>
        <ul class="list-none space-y-1.5">
          <li>
            <div class="flex flex-row gap-4">
              App ID: {{ generatedProjectNames.appId }}
            </div>

            <div class="flex flex-row gap-4">
              App name: {{ generatedProjectNames.appName }}
            </div>
          </li>
        </ul>
      </UCard>

</template>

<style scoped></style>
