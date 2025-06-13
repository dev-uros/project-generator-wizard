<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonRouterOutlet, toastController, useBackButton, useIonRouter} from '@ionic/vue';
import { App } from '@capacitor/app';

const presentToast = async(position: 'top' | 'middle' | 'bottom') => {
  const toast = await toastController.create({
    message: 'Press back again to exit',
    duration: 3000,
    position: position,
  });

  await toast.present();
}

let exitTimeoutId: NodeJS.Timeout | null = null
const ionRouter = useIonRouter();
useBackButton(-1, async () => {
  if (!ionRouter.canGoBack()) {
    if(exitTimeoutId){
      await App.exitApp();
    }else{
      await presentToast('top');

      exitTimeoutId = setTimeout(() => {
        if(exitTimeoutId){
          clearTimeout(exitTimeoutId);
          exitTimeoutId = null;
        }
      }, 3000)
    }
  }
});
</script>
