<script setup lang="ts">
import {IonItem, IonLabel, IonButton, IonIcon} from "@ionic/vue";
import {trashOutline} from "ionicons/icons";
import {User} from "@/types";
import {computed} from "vue";
import {useAppStore} from "@/store/appStore";

interface Props {
  user: User
}
const props = defineProps<Props>()

const appStore = useAppStore();

const userFullName = computed(()=>{
  return `${props.user.name} ${props.user.surname}`
})

const deleteUser = async() => {
  await appStore.removeUser(props.user.id);
}
</script>

<template>
  <ion-item>
    <ion-label>{{ userFullName }}</ion-label>
    <ion-button slot="end" shape="round" color="danger" fill="outline" @click="deleteUser">
      <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
    </ion-button>
  </ion-item>
</template>

<style scoped>

</style>