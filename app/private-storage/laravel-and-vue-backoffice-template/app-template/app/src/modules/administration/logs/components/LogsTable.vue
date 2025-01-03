<script setup lang="ts">
import BaseTooltip from "src/modules/shared/components/BaseTooltip.vue";
import type {ApiLogFileEntry} from "../types";
import {ref} from "vue";
import useLogsTableColumns from "./logsTableColumns";

defineProps<{
  rows: ApiLogFileEntry[]
}>()
const emit = defineEmits<{
  showLogDetails: [requestId: string]
}>()

const columns = useLogsTableColumns()

const filterTable = ref('');


const showLogDetails = (requestId: string) => {
  emit("showLogDetails", requestId)
}


const getPillColor = (requestStatus: number) =>{
  switch (requestStatus){
    case 500:
      return 'red';
    case 422:
      return 'orange';
    case 200:
      return 'green';
    default:
      return 'white'
  }
}
</script>

<template>
  <q-card-section>
    <q-table :rows="rows" :columns="columns" row-key="name" :filter="filterTable">
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          placeholder="Pretraga"
          v-model="filterTable"
        >
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props" class="bg-primary text-white">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="requestTimeStamp" :props="props">
            {{ props.row.requestTimeStamp }}
          </q-td>
          <q-td key="user" :props="props">
             ({{ props.row.userId }}) {{ props.row.user }}
          </q-td>
          <q-td key="status" :props="props">
            <q-badge :color="getPillColor(props.row.status)">
              {{ props.row.status }}
            </q-badge>
          </q-td>
          <q-td key="details" :props="props">
            <q-btn
              type="button"
              flat
              @click="showLogDetails(props.row.requestId)"
              >
              <q-icon
                name="manage_search"
                color="primary"
              />
              <BaseTooltip
                tooltip="Detalji loga"
              />
              </q-btn>
          </q-td>

        </q-tr>
      </template>

    </q-table>
  </q-card-section>

</template>

<style scoped>

</style>
