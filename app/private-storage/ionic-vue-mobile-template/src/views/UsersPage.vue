<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Users</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Users</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-list-header>
          <ion-label>Users</ion-label>
          <ion-button id="open-modal">Add new user</ion-button>
        </ion-list-header>
        <UserListItem v-for="user in users" :key="user.id" :user="user"/>
      </ion-list>
      <UserModal ref="userModal" trigger="open-modal" :initial-breakpoint="0.5" :breakpoints="[0, 0.5, 1]"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonListHeader,
  IonLabel
} from '@ionic/vue';
import {useAppStore} from "@/store/appStore";
import UserListItem from "@/components/UserListItem.vue";
import {storeToRefs} from "pinia";
import UserModal from "@/components/UserModal.vue";

const appStore = useAppStore();
const {users} = storeToRefs(appStore);


</script>
