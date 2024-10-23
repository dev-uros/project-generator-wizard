<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, ref, watch} from "vue";
import {useQuasar} from "quasar";



const darkMode = ref(false);
const $q = useQuasar()
watch(darkMode,(darkMode)=>{
  $q.dark.set(darkMode);
  $q.localStorage.set('darkMode',darkMode)
})

onMounted(()=>{
  const darkModeIsActive=$q.localStorage.getItem('darkMode');
  if(darkModeIsActive){
    darkMode.value=true
  }
})


</script>
<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.router-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
