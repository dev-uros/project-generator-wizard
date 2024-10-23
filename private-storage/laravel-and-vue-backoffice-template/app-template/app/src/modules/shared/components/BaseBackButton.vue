<template>
  <q-btn icon="arrow_back_ios" flat size="md" dense square color="primary" label="NAZAD" @click="goToPreviousPage"></q-btn>
</template>

<script setup lang="ts">

import {useRouter} from 'vue-router';

const router = useRouter();

function goToPreviousPage(){
  router.back();
}

</script>

<style scoped>

</style>
