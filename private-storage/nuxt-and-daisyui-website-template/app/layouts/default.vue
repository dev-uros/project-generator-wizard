<script lang="ts" setup>
import BaseHeader from "~/components/BaseHeader.vue";
import BaseFooter from "~/components/BaseFooter.vue";
import {useSetTheme} from "~/composables/setTheme";

if(process.client){
  const selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) useSetTheme(selectedTheme)
}

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <BaseHeader/>

    <main class="flex flex-grow">
      <slot/>
    </main>
    <BaseFooter/>

  </div>
</template>


<style scoped></style>
