<script setup lang="ts">
import BaseTooltip from "src/modules/shared/components/BaseTooltip.vue";
import {User} from "../types";
import useUserTableColumns from "./userTableColumns";
import {ref} from "vue";

const props = defineProps<{
  rows: User[]
}>()

const emit = defineEmits<{
  toggleUserCreationDialog: [],
  showUserDetails: [userId: number]
}>()

const columns = useUserTableColumns()

const filterTable = ref('');

const toggleUserCreationDialog = () => {
  emit('toggleUserCreationDialog')
}

const showUserDetails = (userId: number) => {
  emit("showUserDetails", userId)
}
</script>

<template>
  <q-card-section>
    <q-table :rows="rows" :columns="columns" row-key="name" :filter="filterTable">
      <template v-slot:top-left>
        <q-btn
          round
          color="primary"
          icon="person_add"
          @click="toggleUserCreationDialog"
        >
          <BaseTooltip
            tooltip="Dodaj novog korisnika"
          />

        </q-btn>
      </template>
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
      <template v-slot:body-cell-details="props">
        <q-td :props="props">
          <q-btn
            type="button"
            flat
            @click="showUserDetails(props.row.id)"
          >
            <q-icon
              name="manage_search"
              color="primary"
            />
            <BaseTooltip
              tooltip="Detalji korisnika"
            />
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </q-card-section>

</template>

<style scoped>

</style>
