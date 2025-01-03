<script setup lang="ts">
import {useLogsStore} from "../store";
import {ref} from "vue";

type UpdateFunction = (callback: () => void) => void;

const emit = defineEmits<{
  setLogFolderAndFile: [logFolder: string, logFile: string]
}>()

const logsStore = useLogsStore();
const selectedLogFolder = ref();
const logFolderStringOptions = logsStore.apiLogFolders;
const logFolderOptions = ref(logFolderStringOptions);

const filterLogFolders  = (val: string, update: UpdateFunction) => {
  update(() => {
    const needle = val.toLowerCase()
    logFolderOptions.value = logFolderStringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
  })
}


const getFiles = async (selectedFolder: string) => {
  logFileStringOptions = []
  selectedLogFile.value = null;

  await logsStore.getApiLogFileList(selectedFolder);
  logFileStringOptions = logsStore.apiLogFiles;

  logsStore.apiLogFileEntries = []
}



const selectedLogFile = ref();

let logFileStringOptions: string[] = [];
const logFileOptions = ref(logFileStringOptions)

const filterLogFiles  = (val: string, update: UpdateFunction) => {
  update(() => {
    const needle = val.toLowerCase()
    logFileOptions.value = logFileStringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
  })
}


const getEntries = async (selectedFile: string) => {
  await logsStore.getApiLogFileEntries(selectedLogFolder.value, selectedFile);
  emit('setLogFolderAndFile', selectedLogFolder.value, selectedLogFile.value)
}
</script>

<template>
  <q-card-section class="row q-gutter-y-md">
    <q-select
      filled
      v-model="selectedLogFolder"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="logFolderOptions"
      @filter="filterLogFolders"
      hint="Unesite naziv rute"
      label="Naziv rute"
      class="full-width"
      @update:model-value="getFiles"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            Nema rezultata
          </q-item-section>
        </q-item>
      </template>
    </q-select>

    <q-select
      filled
      v-model="selectedLogFile"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="logFileOptions"
      @filter="filterLogFiles"
      hint="Unesite naziv log fajla"
      label="Naziv log fajla"
      class="full-width"
      @update:model-value="getEntries"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            Nema rezultata
          </q-item-section>
        </q-item>
      </template>
    </q-select>

  </q-card-section>
</template>

<style scoped>

</style>
