<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section class="bg-primary">
        <q-img src="/images/blank-image.jpg" style="max-height: 150px"></q-img>
        <q-separator color="white" />
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md" @submit="onSubmit">
          <q-input
            filled
            v-model.trim="loginForm.email"
            hint="Unesite Vaš e-mail"
            label="Email"
            lazy-rules
            :rules="emailRules"
          />
          <q-input
            filled
            label="Lozinka"
            hint="Unesite Vašu loziniku"
            color="black"
            :type="isPwd ? 'password' : 'text'"
            v-model.trim="loginForm.password"
            :rules="passwordRules"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="button-container">
            <q-btn label="Uloguj se" type="submit" color="primary" />
            <q-btn
              label="Zaboravljena lozinka?"
              type="button"
              color="primary"
              flat
              class="q-ml-sm"
              @click="forgottenPassword"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Validator } from 'quasar-easy-validate'
import { useAuthStore } from '../store'

const router = useRouter()
const userStore = useAuthStore()

const loginForm = reactive({
  email: '',
  password: '',
})

const emailRules = [
  (email: string) =>
    new Validator(email)
      .required('E-mail je obavezan')
      .stringMin(3, 'E-mail može imati minimalno 3 karaktera')
      .stringMax(255, 'E-mail može imati maksimalno 255 karaktera')
      .email('Email nije validan')
      .validate(),
]

const isPwd = ref(true)

const passwordRules = [
  (password: string) => new Validator(password).required('Lozinka je obavezna').validate(),
]

async function onSubmit() {
  await userStore.login(loginForm)
  await router.replace({
    name: 'home',
  })
}

function forgottenPassword() {
  router.push({
    name: 'forgot-password',
  })
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
