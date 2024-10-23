<template>
  <q-tooltip
    class="bg-primary"
    anchor="top middle"
    self="bottom middle"
    :offset="[10, 10]"
  >
    {{ tooltip }}
  </q-tooltip>
</template>

<script setup lang="ts">
interface TooltipProps {
  tooltip: string
}

const props = withDefaults(defineProps<TooltipProps>(), {
  tooltip: 'Tekst!',
})
</script>
