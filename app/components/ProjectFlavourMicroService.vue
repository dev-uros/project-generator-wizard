<script lang="ts" setup>
const moreInfoSideOpened = ref(false)

const detailedFeaturesDialogOpened = ref(false)

const closeSideDialog = () => {
  moreInfoSideOpened.value = false
}

</script>

<template>
  <div>
    <article class="prose lg:prose-xl dark:prose-invert">
      <h1>Micro Service</h1>
      <UDivider />
      <p>
        A microservice is a modular, independent unit of software designed to
        perform a specific business function or task. It operates as a
        self-contained service, communicating with other microservices through
        lightweight protocols, typically over a network.
      </p>
      <p>
        In essence, a microservice helps organizations develop, deploy, and
        scale applications more efficiently by breaking down complex systems
        into smaller, manageable components. This approach enhances flexibility,
        facilitates faster development cycles, and enables teams to adapt
        quickly to changing business needs while maintaining a robust and
        scalable software ecosystem.
      </p>
      <UButton
        label="More info"
        color="gray"
        @click="moreInfoSideOpened = true"
      >
        <template #trailing>
          <UIcon name="material-symbols:info-outline" class="w-5 h-5" />
        </template>
      </UButton>
    </article>

    <LazyMicroServiceMoreInfoSide
      v-model="moreInfoSideOpened"
      @close-side="closeSideDialog"
    />
  </div>
</template>

<style scoped></style>
