<script lang="ts" setup>

const moreInfoSideOpened = ref(false);

const detailedFeaturesDialogOpened = ref(false);

const closeSideDialog = () => {
  moreInfoSideOpened.value = false;
}

const openFeaturesDialog = () => {
  closeSideDialog()
  detailedFeaturesDialogOpened.value = true;
}

const closeFeaturesDialog = () => {
  detailedFeaturesDialogOpened.value = false;
  moreInfoSideOpened.value = true;

}
</script>

<template>
  <div>
    <article class="prose lg:prose-xl dark:prose-invert">
      <h1>Mobile</h1>
      <UDivider/>
      <p>
        A mobile app is a software application specifically designed to run on smartphones and tablets. It offers users
        convenient access to tools, content, or services directly from their mobile devices, enabling on-the-go interaction
        and engagement.
      </p>
      <p>
        Mobile apps empower businesses and organizations to deliver personalized experiences, streamline user tasks, and
        maintain continuous connectivity with their audience. They play a key role in enhancing customer satisfaction,
        boosting brand loyalty, and expanding digital reach in an increasingly mobile-first world.
      </p>
      <UButton label="More info" color="gray" @click="moreInfoSideOpened = true">
        <template #trailing>
          <UIcon name="material-symbols:info-outline" class="w-5 h-5"/>
        </template>
      </UButton>
    </article>

    <LazyWebsiteMoreInfoSide v-model="moreInfoSideOpened"
                            @close-side="closeSideDialog"
                            @open-feature-details-dialog="openFeaturesDialog"/>
    <LazyWebsiteFeaturesDialog v-model="detailedFeaturesDialogOpened"
                              @close-dialog="closeFeaturesDialog"/>
  </div>
</template>

<style scoped></style>
