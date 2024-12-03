<script lang="ts" setup>
const moreInfoSideOpened = ref(false)

const detailedFeaturesDialogOpened = ref(false)

const closeSideDialog = () => {
  moreInfoSideOpened.value = false
}

const openFeaturesDialog = () => {
  closeSideDialog()
  detailedFeaturesDialogOpened.value = true
}

const closeFeaturesDialog = () => {
  detailedFeaturesDialogOpened.value = false
}
</script>

<template>
  <div>
    <article class="prose lg:prose-xl dark:prose-invert">
      <h1>Documentation</h1>
      <UDivider />
      <p>
        A documentation app is a digital platform designed to create, organize,
        and manage content that provides information, guidance, or reference
        materials to its users. It serves as a centralized resource hub for
        businesses, organizations, or individuals, enabling seamless access to
        structured information across devices.
      </p>
      <p>
        In essence, a documentation app helps streamline the process of content
        creation and sharing, improving productivity, collaboration, and
        knowledge retention. It enhances user experience by offering clear,
        organized, and easily searchable documentation, fostering better
        understanding and engagement within teams or with external users.
      </p>

      <UButton
        label="Preview"
        color="gray"
        @click="detailedFeaturesDialogOpened = true"
      >
        <template #trailing>
          <UIcon name="material-symbols:preview" class="w-5 h-5" />
        </template>
      </UButton>
    </article>

    <LazyDocumentationFeaturesDialog
      v-model="detailedFeaturesDialogOpened"
      @close-dialog="closeFeaturesDialog"
    />
  </div>
</template>

<style scoped></style>
