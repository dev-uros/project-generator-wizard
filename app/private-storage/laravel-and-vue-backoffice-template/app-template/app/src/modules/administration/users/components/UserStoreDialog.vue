<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide" persistent>
    <q-card class="no-padding">
      <q-card-section class="bg-primary text-white my-header">
        <BaseHeader icon="person_add" title="Kreiranje novog korisnika"></BaseHeader>
        <q-btn v-close-popup icon="close" color="white" flat rounded></q-btn>
      </q-card-section>
      <q-card-section>
        <UserForm :user-data="undefined" ref="userForm" mode="create" @process-user="storeUser" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="negative" label="Odustani" @click="onDialogCancel" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import UserForm from './UserForm.vue'
import { useUsersStore } from '../store'
import BaseHeader from 'src/modules/shared/components/BaseHeader.vue'
import type { StoreNewUserRequest } from '../types'

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
])

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

const userStore = useUsersStore()
const storeUser = async (request: StoreNewUserRequest) => {
  await userStore.storeNewUser(request)
  onDialogOK()
}
</script>

<style scoped>
.my-header {
  display: flex;
  justify-content: space-between;
}
</style>
