<script setup lang="ts">
import {AccountState} from "../types";
import {ref} from "vue";
const accountStateOptions = [
  {id: AccountState.ALL, name: 'SVI'},
  {id: AccountState.ACTIVE, name: 'AKTIVAN'},
  {id: AccountState.INACTIVE, name: 'NEAKTIVAN'},
];

const emit = defineEmits<{
  fetchUsers: [accountState: number],
}>()
const accountState = ref(accountStateOptions[0])

const fetchUsers = () => {
  emit('fetchUsers', accountState.value!.id)
}
</script>

<template>
  <q-card-section class="row">
    <q-select
      class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"
      filled
      color="primary"
      label="Status naloga"
      v-model="accountState"
      @update:model-value="fetchUsers"
      :options="accountStateOptions"
      option-value="id"
      option-label="name"
    />
  </q-card-section>
</template>

<style scoped>

</style>
