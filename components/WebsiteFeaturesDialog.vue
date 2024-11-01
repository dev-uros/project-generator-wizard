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
    ]
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
    ]
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
    ]
  },
  {
    label: 'Products Page',
    icon: 'bxs:category-alt',
    desktopImages: [
      '/images/website-preview-products-page.webp'
    ],
    mobileImages: [
      '/images/website-preview-products-page-mobile.webp'
    ]
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
    ]
  },
  {
    label: 'FAQ Page',
    icon: 'material-symbols:help',
    desktopImages: [
      '/images/website-preview-faq-page.webp'
    ],
    mobileImages: [
      '/images/website-faq-page-mobile.webp'
    ]
  },
  {
    label: 'Contact Page',
    icon: 'material-symbols:android-contacts',
    desktopImages: [
      '/images/website-preview-contact-page.webp'
    ],
    mobileImages: [
      '/images/website-contact-page-mobile.webp'
    ]
  }
]

const logImages = [
  '/images/logs.webp',
  '/images/log-filters.webp'
]
</script>

<template>
  <UModal fullscreen>
    <UCard
        :ui="{
            base: 'h-full flex flex-col',
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

      <UTabs :items="websiteFeatureTabs">
        <template #item="{item}">

          <UCard>
            <template #header>
              {{ item.label }}
            </template>
            <div v-if="item.label === 'Home Page'" class="flex flex-row w-full gap-4">
              <div class="w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>
                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden mt-11"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>
              </div>
              <div class="w-1/2 text-center">
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
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>

              </div>
            </div>
            <div v-else-if="item.label === 'About Us Page'" class="flex flex-row w-full gap-4">
              <div class="w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>
                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden mt-16"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>
              </div>
              <div class="w-1/2">
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
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>

              </div>
            </div>
            <div v-else-if="item.label === 'Services Page'" class="flex flex-row w-full gap-4">
              <div class="w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden mt-11"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>
              </div>
              <div class="w-1/2">
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
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>

              </div>
            </div>
            <div v-else-if="item.label === 'Products Page'" class="flex flex-row w-full gap-4">
              <div class="w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden mt-11"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>
              </div>
              <div class="w-1/2">
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
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>

              </div>
            </div>
            <div v-if="item.label === 'Blog Page'" class="flex flex-row w-full gap-4">
              <div class="w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden mt-14"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>
              </div>
              <div class="w-1/2">
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
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>

              </div>
            </div>
            <div v-if="item.label === 'FAQ Page'" class="flex flex-row w-full gap-4">
              <div class="w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden mt-11"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>
              </div>
              <div class="w-1/2">
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
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>

              </div>
            </div>
            <div v-if="item.label === 'Contact Page'" class="flex flex-row w-full gap-4">
              <div class="w-1/2">
                <h2 class="py-2 text-center">Desktop View</h2>

                <UCarousel v-slot="{ item }" :items="item.desktopImages" :ui="{ item: 'basis-full' }"
                           class="rounded-lg overflow-hidden mt-11"
                           :next-button="{color: 'green'}"
                           :prev-button="{color: 'green'}"
                           arrows>
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
                </UCarousel>
              </div>
              <div class="w-1/2">
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
                  <NuxtImg :src="item" class="w-full" draggable="false"/>
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
