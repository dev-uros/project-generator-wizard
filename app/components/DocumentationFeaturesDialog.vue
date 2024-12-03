<script lang="ts" setup>
const emit = defineEmits<{
  closeDialog: []
}>()

const documentationFeatureTabs = [
  {
    label: 'Documentation',
    icon: 'material-symbols-light:home',

    previous: null,
    previousLabel: null,
    next: 1,
  },
]



const currentlySelectedFeatureTabIndex = ref(0);
const selectedStep = computed({
  get() {
    return currentlySelectedFeatureTabIndex.value
  },
  set(newSelectedValueIndex: number) {
    currentlySelectedFeatureTabIndex.value = newSelectedValueIndex
  }
})

const setSelectedStep = (index: number) => {
  selectedStep.value = index

}
</script>

<template>
  <UModal fullscreen>
    <UCard
        :ui="{
            base: 'flex flex-col',
            rounded: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            body: {
              base: 'grow'
            }
          }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Website pages preview
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                   @click="emit('closeDialog')"/>
        </div>
      </template>

      <UTabs :items="documentationFeatureTabs" v-model="selectedStep">
        <template #default="{ item, index, selected }">
          <span class="truncate hidden lg:block md:hidden" :class="[selected && 'text-primary-500 dark:text-primary-400']">{{ item.label }}</span>
        </template>
        <template #item="{item}">

          <UCard>

            <div v-if="item.label === 'Documentation'" class="w-full gap-4">
              <p class="mb-8">Documentation preview</p>

              <iframe src="https://vitepress-standalone-documentation-preview.urosminic.com/" title="Website Template" class="w-full min-h-screen"></iframe>
            </div>


          </UCard>

        </template>
      </UTabs>

    </UCard>
  </UModal>
</template>

<style scoped></style>
