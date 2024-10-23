<template>
  <q-item>
    <q-item-section avatar>
      <q-icon :name="icon" size="30px"/>
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-h5">{{ title }}</q-item-label>
    </q-item-section>
    <slot></slot>
  </q-item>
</template>

<script setup lang="ts">
interface BaseHeaderPropsInterface {
  icon: string,
  title: string
}
withDefaults(defineProps<BaseHeaderPropsInterface>(), {
  icon: 'edit_note',
  title: 'Basic Header Title'
})
</script>

<style scoped>

</style>
