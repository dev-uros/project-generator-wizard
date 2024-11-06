<script lang="ts" setup>
import BackofficeFeaturesDialog from "~/components/BackofficeFeaturesDialog.vue";
import BackofficeMoreInfoSide from "~/components/BackofficeMoreInfoSide.vue";
</script>

<template>
  <div>
    <article class="prose lg:prose-xl dark:prose-invert">
      <h1>Desktop App</h1>
      <UDivider/>
      <p>
        A desktop application is a software program designed to run on a personal computer or workstation, providing
        users with powerful tools and features tailored for specific tasks or workflows. Unlike web applications,
        desktop apps are installed locally on a device, enabling them to leverage system resources and offer a more
        responsive user experience.
      </p>
      <p>
        In essence, a desktop application streamlines workflows, enhances productivity, and delivers a robust user
        experience, allowing users to efficiently manage their tasks and interact with complex data or processes
        directly from their computers.
      </p>
      <UButton label="More info" color="gray" @click="moreInfoSideOpened = true">
        <template #trailing>
          <UIcon name="material-symbols:info-outline" class="w-5 h-5"/>
        </template>
      </UButton>
    </article>

    <BackofficeMoreInfoSide v-model="moreInfoSideOpened"
                            @close-side="closeSideDialog"
                            @open-feature-details-dialog="openFeaturesDialog"/>
    <BackofficeFeaturesDialog v-model="detailedFeaturesDialogOpened"
                              @close-dialog="closeFeaturesDialog"/>
  </div>
</template>

<style scoped></style>
