<script lang="ts" setup>
import BackofficeFeaturesDialog from "~/components/BackofficeFeaturesDialog.vue";
import BackofficeMoreInfoSide from "~/components/BackofficeMoreInfoSide.vue";
</script>

<template>
  <div>
    <article class="prose lg:prose-xl dark:prose-invert">
      <h1>Website</h1>
      <UDivider/>
      <p>
        A website is an online platform designed to provide information, services, or interactions to its users. It
        serves as the digital presence of a business, organization, or individual, accessible to a global audience via
        the internet.
      </p>
      <p>
        In essence, a website helps businesses or organizations connect with their target audience, showcase their
        offerings, and provide convenient access to their services, while also enhancing brand visibility and user
        engagement in the digital space.
      </p>
<!--      <UButton label="More info" color="gray" @click="moreInfoSideOpened = true">-->
<!--        <template #trailing>-->
<!--          <UIcon name="material-symbols:info-outline" class="w-5 h-5"/>-->
<!--        </template>-->
<!--      </UButton>-->
    </article>

<!--    <BackofficeMoreInfoSide v-model="moreInfoSideOpened"-->
<!--                            @close-side="closeSideDialog"-->
<!--                            @open-feature-details-dialog="openFeaturesDialog"/>-->
<!--    <BackofficeFeaturesDialog v-model="detailedFeaturesDialogOpened"-->
<!--                              @close-dialog="closeFeaturesDialog"/>-->
  </div>
</template>

<style scoped></style>
