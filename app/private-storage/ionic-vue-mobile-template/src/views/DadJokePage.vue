<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dad Jokes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Dad Jokes</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card style="max-width: 350px; max-height: 600px; margin: 0 auto">
        <img alt="Dad Joke image" src="/assets/images/dad-joke.png"/>
        <ion-card-header>
          <ion-card-title>Dad Joke Generator</ion-card-title>
          <ion-card-subtitle>Enjoy random dad jokes!</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-text color="tertiary">
            <h3>{{ dadJoke }}</h3>
          </ion-text>
          <br>
          <ion-button :disabled="jokeLoading" @click="generateDadJoke">Generate Dad Joke!
            <ion-spinner name="dots" v-if="jokeLoading"></ion-spinner>
            <ion-icon slot="end" :icon="megaphoneOutline" v-else/>
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon,
IonCardTitle, IonCardSubtitle, IonCard, IonCardContent, IonCardHeader, IonText, IonSpinner} from '@ionic/vue';
import {megaphoneOutline} from "ionicons/icons";
import {ref} from "vue";
import {getDadJoke} from "@/services/getDadJoke";


const dadJoke = ref('')

const jokeLoading = ref(false);
const generateDadJoke = async () => {
  jokeLoading.value = true;

  dadJoke.value = await getDadJoke()

  jokeLoading.value = false;


}
</script>
