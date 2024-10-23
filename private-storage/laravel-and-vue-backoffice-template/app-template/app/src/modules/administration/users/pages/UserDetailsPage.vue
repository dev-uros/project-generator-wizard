<template>
  <PageContainer :title="`${userData!.name} ${userData!.surname}`" icon="account_circle">
    <template #content>
      <q-card-section>
        <BackButton></BackButton>
      </q-card-section>
      <q-card-section>
        <UserForm
          ref="userForm"
          mode="update"
          :user-data="userStore.userDetails"
          @process-user="updateUser"/>
        <q-card-actions align="right">
          <q-btn flat label="Pošalji aktivacioni e-mail" icon="send" color="blue-5"
                 @click="resendActivationEmail"></q-btn>
          <q-btn flat :label="accountStateButton.label" :icon="accountStateButton.icon"
                 :color="accountStateButton.color" @click="setAccountState">
            <BaseTooltip :tooltip="accountStateButton.tooltip"/>
          </q-btn>
        </q-card-actions>
      </q-card-section>
    </template>

  </PageContainer>

</template>
<script setup lang="ts">
import {computed} from 'vue';
import BackButton from 'src/modules/shared/components/BaseBackButton.vue'
import BaseTooltip from "src/modules/shared/components/BaseTooltip.vue";
import {useRoute} from "vue-router";
import {useQuasar} from "quasar";
import UserForm, {UserData} from "../components/UserForm.vue";
import PageContainer from "src/modules/shared/components/PageContainer.vue";
import {useUsersStore} from "../store";

const $q = useQuasar();
const route = useRoute();
const userId = +route.params.id;
const userStore = useUsersStore();

const userData = userStore.userDetails;


const accountStateButton = computed(function () {
  return userStore.getUserDetails?.is_active ?
    {
      label: 'Deaktiviraj nalog',
      color: 'negative',
      icon: 'highlight_off',
      tooltip: 'Ova akcija deaktivira korisnički nalog i korisnik više neće imati pravo pristupa sistemu!'
    } :
    {
      label: 'Aktiviraj nalog',
      color: 'positive',
      icon: 'check_circle_outline',
      tooltip: 'Ova akcija aktivira korisnički nalog i korisnik će ponovo imati pravo pristupa sistemu!'
    }
})


const updateUser = async (userData: UserData) => {
  await userStore.updateUser(userId, userData)
}

const setAccountState = async () => {
  $q.dialog({
    title: accountStateButton.value.label,
    message: accountStateButton.value.tooltip,
    cancel: true,
    persistent: true
  }).onOk(async () => {
    await userStore.setAccountState(userId)
  })
}

const resendActivationEmail = async () => {
  await userStore.sendActivationEmail(userId)
}

</script>
<style scoped>

</style>
