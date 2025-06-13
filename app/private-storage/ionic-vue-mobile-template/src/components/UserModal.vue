<script setup lang="ts">
import {IonInput, IonIcon, IonButton, IonContent, IonModal, alertController} from "@ionic/vue";
import {saveOutline} from "ionicons/icons";
import {ref} from "vue";
import {useAppStore} from "@/store/appStore";
const appStore = useAppStore();


const userModal = ref();
const nameInput = ref();

const name = ref('');
const surname = ref('');


const storeUser = async() => {

  if(name.value === '' || surname.value === ''){
    const alert = await alertController.create({
      header: 'Error',
      subHeader: 'User Entry',
      message: 'All user data is required',
      buttons: ['Ok'],
    });

    await alert.present();

    return;
  }
  const user = {
    id: `${Date.now()}`,
    name: name.value,
    surname: surname.value
  }

  await appStore.addUser(user);

  resetForm();

  userModal.value.$el.dismiss();
}

const resetForm = () => {
  name.value = '';
  surname.value = '';
}

const setInputFocus = ( ) => {
    nameInput.value.$el.setFocus();
}
</script>

<template>
  <ion-modal ref="userModal" @didDismiss="resetForm" @didPresent="setInputFocus">
    <ion-content class="ion-padding">
      <ion-input
          ref="nameInput"
          type="text"
          fill="solid"
          label="Name"
          label-placement="floating"
          helper-text="Enter user name"
          v-model.trim="name"

      ></ion-input>

      <br/>
      <ion-input
          ref="surnameInput"
          type="text"
          fill="solid"
          label="Surname"
          label-placement="floating"
          helper-text="Enter user surname"
          v-model.trim="surname"
      ></ion-input>

      <br/>

      <ion-button @click="storeUser">
        Store
        <ion-icon slot="end" :icon="saveOutline"></ion-icon>
      </ion-button>
    </ion-content>
  </ion-modal>

</template>

<style scoped>

</style>