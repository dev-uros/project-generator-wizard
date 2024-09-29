<script lang="ts" setup>
import BackofficeMoreInfoSide from "~/components/BackofficeMoreInfoSide.vue";
import BackofficeFeaturesDialog from "~/components/BackofficeFeaturesDialog.vue";

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
      <h1>Backoffice application</h1>
      <UDivider/>
      <p>
        A backoffice application is a software tool designed to manage and support the internal
        operations of a company or organization.
      </p>
      <p>
        In essence, a backoffice application helps streamline the internal workings of a business,
        improving efficiency, accuracy, and control over day-to-day operations.
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
