<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section class="bg-primary">
        <q-img src="/images/blank-image.jpg" style="max-height: 150px"></q-img>
        <q-separator color="white"/>
      </q-card-section>
      <q-card-section>
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model.trim='resetPasswordForm.password'
            label='Lozinka'
            hint='Unesite lozinku'
            color='black'
            :type="isPwd ? 'password' : 'text'"
            :rules="passwordRules"
            lazy-rules
            @keyup="passwordCheck"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class='cursor-pointer'
                @click='isPwd = !isPwd'
              />
            </template>
          </q-input>

          <q-list dense >
            <q-item>
              <q-item-section avatar>
                <q-icon :color="upperCasePassed ? 'positive' : 'negative'" :name="upperCasePassed ? 'done' : 'close'" />
              </q-item-section>

              <q-item-section>Veliko slovo</q-item-section>
            </q-item>

            <q-item >
              <q-item-section avatar>
                <q-icon :color="symbolPassed ? 'positive' : 'negative'" :name="symbolPassed ? 'done' : 'close'" />
              </q-item-section>

              <q-item-section>Simbol</q-item-section>
            </q-item>

            <q-item >
              <q-item-section avatar>
                <q-icon :color="minCharactersPassed ? 'positive' : 'negative'" :name="minCharactersPassed ? 'done' : 'close'" />
              </q-item-section>

              <q-item-section>Barem osam karaktera (!,@,#,$,%,^,&,*)</q-item-section>
            </q-item>

            <q-item >
              <q-item-section avatar>
                <q-icon :color="numberPassed ? 'positive' : 'negative'" :name="numberPassed ? 'done' : 'close'" />
              </q-item-section>
              <q-item-section>Barem jedan broj</q-item-section>
            </q-item>
          </q-list>
          <q-input
            filled
            v-model.trim='resetPasswordForm.password_confirmation'
            label='Potvrda lozinke'
            hint='Potvrdite unetu lozinku'
            lazy-rules
            color='black'
            :type="isPwdConfirm ? 'password' : 'text'"
            :rules="passwordConfirmationRules"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwdConfirm ? 'visibility_off' : 'visibility'"
                class='cursor-pointer'
                @click='isPwdConfirm = !isPwdConfirm'
              />
            </template>
          </q-input>

          <div>
            <q-btn label="Resetuj lozinku" type="submit" color="primary"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue';
import {useRoute,useRouter} from 'vue-router';
import {Validator} from "quasar-easy-validate";
import {useAuthStore} from "../store";


const route = useRoute();
const router = useRouter();
const userStore = useAuthStore();

const resetPasswordForm = reactive({
  password: '',
  password_confirmation: '',
  email: route.query.email!.toString(),
  token: route.params.token as string
})

const isPwd = ref(true);
const isPwdConfirm = ref(true);

const passwordRules = [(password: string) => (new Validator(password)
  .required('Lozinka je obavezna')
  .password('Lozinka mora da sadrži barem jedno veliko slovo, malo slovo, cifru i specijalan karakter (!,@,#,$,%,^,&,*).')
  .validate())
];

function containsUpperCase(password: string) {
  return /[A-Z]/.test(password);
}

function containsSymbol(password:string) {
  // Specify the list of symbols you want to check for
  const symbolList = /[!@#$%^&*]/;
  
  return symbolList.test(password);
}

function hasNeededAmountOfCharacters(password: string, numberOfCharacters: number){
  return password.length >= numberOfCharacters;
}

function containsNumber(password: string) {
  return /\d/.test(password);
}

const upperCasePassed = ref(false);
const symbolPassed = ref(false);
const minCharactersPassed = ref(false);
const numberPassed = ref(false);

const passwordCheck = () => {

  upperCasePassed.value = containsUpperCase(resetPasswordForm.password);

  symbolPassed.value = containsSymbol(resetPasswordForm.password);

  numberPassed.value = containsNumber(resetPasswordForm.password);

  minCharactersPassed.value = hasNeededAmountOfCharacters(resetPasswordForm.password, 8)

}
const passwordConfirmationRules = [(passwordConfirmation: string) => (new Validator(passwordConfirmation)
  .required('Morate potvrditi lozinku')
  .password('Lozinka mora da sadrži barem jedno veliko slovo, malo slovo, cifru i specijalan karakter (!,@,#,$,%,^,&,*).')
  .sameAs(resetPasswordForm.password, 'Lozinke se ne podudaraju')
  .validate())
];
//ON SUBMIT START
async function onSubmit(){

  await userStore.resetPassword(resetPasswordForm);
  await router.replace({
    name: 'login'
  })
}
//ON SUBMIT END
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 500px;
  margin: 0 auto
}

</style>
