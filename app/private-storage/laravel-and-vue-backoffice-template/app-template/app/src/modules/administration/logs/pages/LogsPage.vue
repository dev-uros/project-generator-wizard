<template>
  <PageContainer icon="view_list" title="Logovi">
    <template #content>
      <LogsPageFilters @set-log-folder-and-file="setLogFolderAndFile"/>
      <LogsTable :rows="logsStore.apiLogFileEntries" @show-log-details="showLogDetails"/>
    </template>
  </PageContainer>

</template>

<script setup lang="ts">
import PageContainer from "../../../shared/components/PageContainer.vue";
import {useLogsStore} from "../store";
import LogsPageFilters from "src/modules/administration/logs/components/LogsPageFilters.vue";
import LogsTable from "src/modules/administration/logs/components/LogsTable.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

const logsStore = useLogsStore();
const router = useRouter();
const selectedLogFolder = ref();
const selectedLogFile = ref();

const setLogFolderAndFile = (folder: string, file: string) => {
  selectedLogFolder.value = folder;
  selectedLogFile.value = file;
}
const showLogDetails = (requestId: string) => {

  const routeData = router.resolve({name: 'logs.details', params: {folder: selectedLogFolder.value, file: selectedLogFile.value, requestId: requestId}});
  window.open(routeData.href, '_blank');
}
</script>
