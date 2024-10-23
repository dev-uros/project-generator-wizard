<template>
  <q-layout view="hHh lpR fFf">

    <q-header>
        <q-toolbar>
          <q-toolbar-title>
            <q-img src="/icons/favicon-128x128.png" height="30px" width="30px" style="cursor: pointer"></q-img>
          </q-toolbar-title>
        </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">

</script>

<style scoped>

</style>
