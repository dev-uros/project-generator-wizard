<script lang="ts" setup>
const emit = defineEmits<{
  closeDialog: []
}>()

const websiteFeatureTabs = [
  {
    label: 'Home Page',
    icon: 'material-symbols-light:home',
    desktopImages: [
      '/images/website-preview-home-page.webp',
    ],
    mobileImages: [
      '/images/website-preview-home-page-mobile.webp',
    ],
    previous: null,
    previousLabel: null,
    next: 1,
    nextLabel: 'About Us Page'
  },
  {
    label: 'About Us Page',
    icon: 'material-symbols:groups',
    desktopImages: [
      '/images/website-preview-about-us-page-1.webp',
      '/images/website-preview-about-us-page-2.webp',

    ],
    mobileImages: [
      '/images/website-preview-about-us-page-1-mobile.webp',
      '/images/website-preview-about-us-page-2-mobile.webp',
      '/images/website-preview-about-us-page-3-mobile.webp',
      '/images/website-preview-about-us-page-4-mobile.webp',
    ],
    previous: 0,
    previousLabel: 'Home Page',
    next: 2,
    nextLabel: 'Services Page'
  },
  {
    label: 'Services Page',
    icon: 'carbon:gears',
    desktopImages: [
      '/images/website-preview-services-page-1.webp',
      '/images/website-preview-services-page-2.webp',

    ],
    mobileImages: [
      '/images/website-preview-services-page-1-mobile.webp',
      '/images/website-preview-services-page-2-mobile.webp',
      '/images/website-preview-services-page-3-mobile.webp',
      '/images/website-preview-services-page-4-mobile.webp',
      '/images/website-preview-services-page-5-mobile.webp',
    ],
    previous: 1,
    previousLabel: 'About Us Page',
    next: 3,
    nextLabel: 'Products Page'
  },
  {
    label: 'Products Page',
    icon: 'bxs:category-alt',
    desktopImages: [
      '/images/website-preview-products-page.webp'
    ],
    mobileImages: [
      '/images/website-preview-products-page-mobile.webp'
    ],
    previous: 2,
    previousLabel: 'Services Page',
    next: 4,
    nextLabel: 'Blog Page'
  },
  {
    label: 'Blog Page',
    icon: 'mingcute:quill-pen-ai-fill',
    desktopImages: [
      '/images/website-preview-blog-page-1.webp',
      '/images/website-preview-blog-page-2.webp'
    ],
    mobileImages: [
      '/images/website-preview-blog-page-1-mobile.webp',
      '/images/website-preview-blog-page-2-mobile.webp'
    ],
    previous: 3,
    previousLabel: 'Products Page',
    next: 5,
    nextLabel: 'FAQ Page'
  },
  {
    label: 'FAQ Page',
    icon: 'material-symbols:help',
    desktopImages: [
      '/images/website-preview-faq-page.webp'
    ],
    mobileImages: [
      '/images/website-faq-page-mobile.webp'
    ],
    previous: 4,
    previousLabel: 'Blog Page',
    next: 6,
    nextLabel: 'Contact Page'
  },
  {
    label: 'Contact Page',
    icon: 'material-symbols:android-contacts',
    desktopImages: [
      '/images/website-preview-contact-page.webp'
    ],
    mobileImages: [
      '/images/website-contact-page-mobile.webp'
    ],
    previous: 5,
    previousLabel: 'FAQ Page',
    next: null,
    nextLabel: null
  }
]

const logImages = [
  '/images/logs.webp',
  '/images/log-filters.webp'
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

      <UTabs :items="websiteFeatureTabs" v-model="selectedStep">
        <template #default="{ item, index, selected }">
          <span class="truncate hidden lg:block md:hidden" :class="[selected && 'text-primary-500 dark:text-primary-400']">{{ item.label }}</span>
        </template>
        <template #item="{item}">

          <UCard>
            <template #header>
              {{ item.label }}
              <div class="flex flex-row gap-4 justify-evenly mt-4 lg:hidden">
                <UButton class="w-1/2"
                         :disabled="item.previous === null"
                         @click="setSelectedStep(item.previous)"
                         icon="material-symbols:arrow-left-alt">
                  {{ item.previousLabel }}
                </UButton>
                <UButton class="w-1/2 justify-end"
                         :disabled="item.next === null"
                         @click="setSelectedStep(item.next)"
                         trailing-icon="material-symbols:arrow-right-alt">
                  {{ item.nextLabel }}
                </UButton>
              </div>
            </template>

            <div v-if="item.label === 'Home Page'" class="flex flex-col xl:flex-row w-full gap-4">
              <div class="w-full xl:w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>
                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <img alt="Home Page Desktop View Images" :src="item" class="w-full"/>
                </UCarousel>
              </div>
              <div class="w-full xl:w-1/2 text-center">
                <h2 class="py-2 text-center">Mobile View</h2>
                <UCarousel
                    v-slot="{ item }"
                    :items="item.mobileImages"
                    :ui="{item: 'basis-full',container: 'rounded-lg'}"
                    :prev-button="{color: 'green', class: '-start-12'}"
                    :next-button="{color: 'green', class: '-end-12'}"
                    arrows
                    class="w-64 mx-auto"
                >
                  <img alt="Home Page Mobile View Images" :src="item" class="w-full" />
                </UCarousel>

              </div>
            </div>
            <div v-else-if="item.label === 'About Us Page'" class="flex flex-col xl:flex-row w-full gap-4">
              <div class="w-full xl:w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>
                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <img alt="About Us Page Desktop View" :src="item" class="w-full" />
                </UCarousel>
              </div>
              <div class="w-full xl:w-1/2 text-center">
                <h2 class="py-2 text-center">Mobile View</h2>

                <UCarousel
                    v-slot="{ item }"
                    :items="item.mobileImages"
                    :ui="{item: 'basis-full',container: 'rounded-lg'}"
                    :prev-button="{color: 'green', class: '-start-12'}"
                    :next-button="{color: 'green', class: '-end-12'}"
                    arrows
                    class="w-64 mx-auto"
                >
                  <img alt="About Us Page Mobile View" :src="item" class="w-full" draggable="false"/>
                </UCarousel>

              </div>
            </div>
            <div v-else-if="item.label === 'Services Page'" class="flex flex-col xl:flex-row w-full gap-4">
              <div class="w-full xl:w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <img alt="Services Page Desktop View" :src="item" class="w-full" />
                </UCarousel>
              </div>
              <div class="w-full xl:w-1/2 text-center">
                <h2 class="py-2 text-center">Mobile View</h2>

                <UCarousel
                    v-slot="{ item }"
                    :items="item.mobileImages"
                    :ui="{item: 'basis-full',container: 'rounded-lg'}"
                    :prev-button="{color: 'green', class: '-start-12'}"
                    :next-button="{color: 'green', class: '-end-12'}"
                    arrows
                    class="w-64 mx-auto"
                >
                  <img alt="Services Page Mobile View" :src="item" class="w-full" />
                </UCarousel>

              </div>
            </div>
            <div v-else-if="item.label === 'Products Page'" class="flex flex-col xl:flex-row w-full gap-4">
              <div class="w-full xl:w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <img alt="Products Page Desktop View" :src="item" class="w-full" />
                </UCarousel>
              </div>
              <div class="w-full xl:w-1/2 text-center">
                <h2 class="py-2 text-center">Mobile View</h2>

                <UCarousel
                    v-slot="{ item }"
                    :items="item.mobileImages"
                    :ui="{item: 'basis-full',container: 'rounded-lg'}"
                    :prev-button="{color: 'green', class: '-start-12'}"
                    :next-button="{color: 'green', class: '-end-12'}"
                    arrows
                    class="w-64 mx-auto"
                >
                  <img alt="Products Page Mobile View" :src="item" class="w-full" />
                </UCarousel>

              </div>
            </div>
            <div v-if="item.label === 'Blog Page'" class="flex flex-col xl:flex-row w-full gap-4">
              <div class="w-full xl:w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <img alt="Blog Page Desktop View" :src="item" class="w-full" />
                </UCarousel>
              </div>
              <div class="w-full xl:w-1/2 text-center">
                <h2 class="py-2 text-center">Mobile View</h2>

                <UCarousel
                    v-slot="{ item }"
                    :items="item.mobileImages"
                    :ui="{item: 'basis-full',container: 'rounded-lg'}"
                    :prev-button="{color: 'green', class: '-start-12'}"
                    :next-button="{color: 'green', class: '-end-12'}"
                    arrows
                    class="w-64 mx-auto"
                >
                  <img alt="Blog Page Mobile View" :src="item" class="w-full" />
                </UCarousel>

              </div>
            </div>
            <div v-if="item.label === 'FAQ Page'" class="flex flex-col xl:flex-row w-full gap-4">
              <div class="w-full xl:w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <img alt="FAQ Page Desktop View" :src="item" class="w-full" draggable="false"/>
                </UCarousel>
              </div>
              <div class="w-full xl:w-1/2 text-center">
                <h2 class="py-2 text-center">Mobile View</h2>

                <UCarousel
                    v-slot="{ item }"
                    :items="item.mobileImages"
                    :ui="{item: 'basis-full',container: 'rounded-lg'}"
                    :prev-button="{color: 'green', class: '-start-12'}"
                    :next-button="{color: 'green', class: '-end-12'}"
                    arrows
                    class="w-64 mx-auto"
                >
                  <img alt="FAQ page Mobile View" :src="item" class="w-full" />
                </UCarousel>

              </div>
            </div>
            <div v-if="item.label === 'Contact Page'" class="flex flex-col xl:flex-row w-full gap-4">
              <div class="w-full xl:w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <img alt="Contact Page Desktop View" :src="item" class="w-full" >
                </UCarousel>
              </div>
              <div class="w-full xl:w-1/2 text-center">
                <h2 class="py-2 text-center">Mobile View</h2>

                <UCarousel
                    v-slot="{ item }"
                    :items="item.mobileImages"
                    :ui="{item: 'basis-full',container: 'rounded-lg'}"
                    :prev-button="{color: 'green', class: '-start-12'}"
                    :next-button="{color: 'green', class: '-end-12'}"
                    arrows
                    class="w-64 mx-auto"
                >
                  <img alt="Contact Page Mobile View" :src="item" class="w-full" />
                </UCarousel>

              </div>
            </div>

          </UCard>

        </template>
      </UTabs>

    </UCard>
  </UModal>
</template>

<style scoped></style>
