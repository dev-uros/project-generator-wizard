<script setup lang="ts">
import BaseHeader from "src/modules/shared/components/BaseHeader.vue";
interface BaseHeaderPropsInterface {
  icon: string,
  title: string
}
withDefaults(defineProps<BaseHeaderPropsInterface>(), {
  icon: 'edit_note',
  title: 'Basic Header Title'
})
</script>

<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <BaseHeader :title="title" :icon="icon"></BaseHeader>
      </q-card-section>
      <q-separator inset/>
      <slot name="content"/>
    </q-card>
  </q-page>

</template>

<style scoped>

</style>
