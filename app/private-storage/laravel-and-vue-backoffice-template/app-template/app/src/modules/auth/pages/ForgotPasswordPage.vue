<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section class="bg-primary">
        <q-img src="/images/blank-image.jpg" style="max-height: 150px"></q-img>
        <q-separator color="white"/>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">
          <q-avatar icon="account_circle" /> Zaboravljena lozinka
        </div>
      </q-card-section>
      <q-card-section>
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model.trim="email"
            type="email"
            label="E-mail"
            hint="Unesite Vašu e-mail adresu"
            :rules="emailRules"
          />

          <div class="button-container">
            <q-btn label="Napravi zahtev za izmenu lozinke" type="submit" color="primary" style="width: 60%"/>
            <q-btn label="Nazad na logovanje" type="button" color="primary" flat class="q-ml-sm" @click="redirectToLogin" style="width: 35%"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import {ref} from 'vue'
import {useAuthStore} from "../store";
import {Validator} from "quasar-easy-validate";

const router = useRouter();
const userStore = useAuthStore();

//EMAIL INPUT START
const email = ref('');
const emailRules = [(email: string) => (new Validator(email)
  .required('E-mail je obavezan')
  .stringMin(3, 'E-mail može imati minimalno 3 karaktera')
  .stringMax(255, 'E-mail može imati maksimalno 255 karaktera')
  .email('Email nije validan')
  .validate())
];
//EMAIL INPUT END
//REDIRECT TO LOGIN START
function redirectToLogin() {
  router.replace({
    name: 'login'
  })
}
//REDIRECT TO LOGIN END
//ON SUBMIT START
async function onSubmit(){
  await userStore.forgotPassword(email.value);
  await router.replace({
    name: 'login'
  })
}
//ON SUBMIT END


</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.button-container{
  display: flex;
  justify-content: space-between;
}
</style>
