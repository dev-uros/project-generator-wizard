<template>
  <q-form
    ref="userForm"
    @submit="processUser"
    class="q-gutter-md"
  >
    <q-input
      filled
      v-model="userData.name"
      label="Ime"
      hint="Unesite ime korisnika"
      lazy-rules
      :rules="nameRules"
      autofocus
    />
    <q-input
      filled
      v-model="userData.surname"
      label="Prezime"
      hint="Unesite prezime korisnika"
      lazy-rules
      :rules="surnameRules"
    />

    <q-input
      filled
      v-model="userData.email"
      label="E-mail"
      hint="Unesite e-mail korisnika"
      lazy-rules
      :rules="emailRules"
    />
    <q-btn :label="buttonAction" type="submit" color="primary"/>
  </q-form>
</template>
<script setup lang="ts">
import {reactive, ref} from "vue";
import {Validator} from "quasar-easy-validate";

export type UserData = {
  name: string,
  surname: string,
  email: string
}
interface UserFormProps {
  mode: 'create' | 'update',
  userData?: UserData
}

const props = withDefaults(defineProps<UserFormProps>(), {
  userData: ()=> {
    return {
      name: '',
      surname: '',
      email: ''
    }
  }
})

const emit = defineEmits<{
  processUser: [userData: UserData]
}>()

const userForm = ref();

const buttonAction = props.mode === 'create' ? 'Kreiraj' : 'Ažuriraj'

const userData = reactive({
  name: props.userData.name,
  surname: props.userData.surname,
  email: props.userData.email
})
const nameRules = [(name: string) => new Validator(name)
  .required('Ime korisnika je obavezno')
  .stringMin(3, 'Ime korisnika mora imati barem 3 karaktera')
  .stringMax(255, 'Ime korisnika može imati najviše 255 karaktera')
  .validate()]
const surnameRules = [(surname: string) => new Validator(surname)
  .required('Prezime korisnika je obavezno')
  .stringMin(3, 'Prezime korisnika mora imati barem 3 karaktera')
  .stringMax(255, 'Prezime korisnika može imati najviše 255 karaktera')
  .validate()]
const emailRules = [(email: string) => new Validator(email)
  .required('E-mail korisnika je obavezan')
  .stringMin(3, 'E-mail korisnika mora imati barem 3 karaktera')
  .stringMax(255, 'E-mail korisnika može imati najviše 255 karaktera')
  .email('Nevalidna e-mail adresa')
  .validate()];

const processUser = () => {
  emit('processUser', userData);
}

const resetForm = () => {
  userData.name = '';
  userData.surname = '';
  userData.email = ''

  userForm.value.resetValidation();
}
defineExpose({resetForm})

</script>

<style scoped>

</style>
