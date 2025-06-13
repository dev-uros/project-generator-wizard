<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet :key="$route.fullPath"></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="users" href="/tabs/users">
          <ion-icon aria-hidden="true" :icon="peopleOutline" />
          <ion-label>Users</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="dad-joke" href="/tabs/dad-joke">
          <ion-icon aria-hidden="true" :icon="happyOutline" />
          <ion-label>Dad Jokes</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import {happyOutline, peopleOutline,} from 'ionicons/icons';
</script>
