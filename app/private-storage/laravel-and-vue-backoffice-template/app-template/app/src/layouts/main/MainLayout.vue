<style>
.right-drawer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}


</style>

<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer"/>

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" alt="logo image" @click="backToHome"
                 style="cursor: pointer">
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer">
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          switch-toggle-side
          expand-separator
          icon="perm_identity"
          label="Administracija"
        >

          <q-list class="text-primary">
            <q-item
              clickable
              v-ripple
              :active="link === 'users'"
              :to="{name: 'users.index'}"
              @click="link = 'users'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="account_circle"/>
              </q-item-section>

              <q-item-section>Korisnici</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :active="link === 'logs'"
              :to="{name: 'logs.index'}"
              @click="link = 'logs'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="folder"/>
              </q-item-section>

              <q-item-section>Logovi</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :active="link === 'docs'"
              :to="{name: 'docs.index'}"
              @click="link = 'docs'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="description"/>
              </q-item-section>

              <q-item-section>Dokumentacija</q-item-section>
            </q-item>

          </q-list>

        </q-expansion-item>

        <q-expansion-item
          switch-toggle-side
          expand-separator
          icon="settings"
          label="Podešavanja"
        >
          <q-list class="text-primary">
            <q-item
              clickable
              v-ripple
              :active="link === 'sessionTimeout'"
              @click="link = 'sessionTimeout'"
              :to="{name: 'settings.session-timeout'}"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="lock_clock"/>
              </q-item-section>

              <q-item-section>Sesija</q-item-section>
            </q-item>

          </q-list>
        </q-expansion-item>

      </q-list>

    </q-drawer>

    <q-drawer class="right-drawer"
              show-if-above v-model="rightDrawerOpen" side="right" bordered>

      <q-item class="right-drawer-header">
        <q-item-section side>
          <q-avatar rounded size="48px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ authenticatedUser.name }} {{ authenticatedUser.surname }}</q-item-label>
          <q-badge color="green" label="online"/>
        </q-item-section>
        <q-item-section side>
          <q-btn flat icon="logout" @click="logout">
            <BaseTooltip tooltip="Izloguj se" class="bg-red"/>
          </q-btn>
        </q-item-section>

      </q-item>

      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="right-drawer-dark-mode bg-primary text-white shadow-2 q-pa-sm"
        :breakpoint="0"
      >
        <q-tab name="light" icon="wb_sunny"/>
        <q-tab name="dark" icon="bedtime"/>
      </q-tabs>

    </q-drawer>


    <q-page-container>
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
    </q-page-container>


  </q-layout>
</template>

<script setup lang="ts">
import type { ComputedRef} from 'vue';
import {computed, ref, watch} from 'vue'
import {Cookies, useQuasar} from "quasar";
import {useRouter} from "vue-router";

import BaseTooltip from "src/modules/shared/components/BaseTooltip.vue";
import type {User} from "src/modules/administration/users/types";
import {useAuthStore} from "src/modules/auth/store";


const authUserStore = useAuthStore();
const authenticatedUser: ComputedRef<User> = computed(function () {
  return authUserStore.getUser
})

const router = useRouter();


const logout = async () => {

  await authUserStore.logout();
  await router.replace({
    name: 'login'
  })

}
const $q = useQuasar();

const link = ref('');
const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)


const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const tab = ref(Cookies.get('darkMode') ?? 'light')
setDarkMode(tab.value !== 'light');
watch(tab, (value) => {
  if (value === 'light') {
    setDarkMode(false);
    Cookies.set('darkMode', 'light', {
      path: '/',
    });
  } else {
    Cookies.set('darkMode', 'dark', {
      path: '/',
    });
    setDarkMode(true);
  }

})

function setDarkMode(isDarkMode: boolean) {
  $q.dark.set(isDarkMode);
}

const backToHome = () => {
  router.push({
    name: 'home'
  })
}


</script>
