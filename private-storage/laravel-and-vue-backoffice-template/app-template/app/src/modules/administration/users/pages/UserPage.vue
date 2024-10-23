<template>
  <PageContainer icon="group" title="Pregled korisnika">
    <template #content>
      <UserPageFilters @fetch-users="fetchUsers"></UserPageFilters>

      <UserTable :rows="userStore.users"
                 @toggle-user-creation-dialog="toggleUserCreationDialog"
                 @show-user-details="showUserDetails"></UserTable>

    </template>
  </PageContainer>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import PageContainer from "src/modules/shared/components/PageContainer.vue";
import UserPageFilters from "../components/UserPageFilters.vue";
import {useUsersStore} from "../store";
import UserTable from "../components/UserTable.vue";
import {useQuasar} from "quasar";
import {defineAsyncComponent} from "vue";

const $q = useQuasar();
const userStore = useUsersStore();
const router = useRouter();
const UserStoreDialog = defineAsyncComponent(() =>
  import('../components/UserStoreDialog.vue')
)

const fetchUsers = async (accountState: number) => {
  await userStore.getUserList(accountState);
}

function toggleUserCreationDialog() {
  $q.dialog({
    component: UserStoreDialog
  })
}

function showUserDetails(id: number) {
  router.push({
    name: 'users.show',
    params: {id}
  });
}



</script>
