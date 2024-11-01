<script lang="ts" setup>

const accordionItems = [
  {
    label: 'Home Page',
    icon: 'material-symbols-light:home',
    defaultOpen: true,
    slot: 'home-page',
  },
  {
    label: 'About Us Page',
    icon: 'material-symbols:groups',
    slot: 'about-us',
  },
  {
    label: 'Services Page',
    icon: 'carbon:gears',
    slot: 'services',
  },
  {
    label: 'Products Page',
    icon: 'bxs:category-alt',
    slot: 'products',
  },
  {
    label: 'Blog Page',
    icon: 'mingcute:quill-pen-ai-fill',
    slot: 'blog',
  },
  {
    label: 'FAQ Page',
    icon: 'material-symbols:help',
    slot: 'questions',
  },
  {
    label: 'Contact Page',
    icon: 'material-symbols:android-contacts',
    slot: 'contact',
  }
]

const emit = defineEmits<{
  closeSide: []
  openFeatureDetailsDialog: []
}>()
</script>

<template>
  <USlideover>
    <UCard
        class="flex flex-col flex-1 overflow-auto"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Website features
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="emit('closeSide')"/>
        </div>
      </template>

      <div class="h-full">
        <UAccordion :items="accordionItems">
          <template #home-page>
            <article class="prose prose-sm dark:prose-invert">
              <p>Project Generator Wizard scaffolds website home page which contains:</p>

              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="ph:flag-banner-fold-fill"/>
                </UBadge>
                CTA:
              </p>
              <p>Sample hero image with call to action button links</p>
              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="radix-icons:component-placeholder"/>
                </UBadge>
                Placeholders:
              </p>
              <p>Two place holders for additional content</p>

            </article>
          </template>
          <template #about-us>
            <article class="prose prose-sm dark:prose-invert">
              <p>Project Generator Wizard scaffolds website about us page which contains:</p>

              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="material-symbols:info-rounded"/>
                </UBadge>
                About Us:
              </p>
              <p>Two example sections that can contain some data about company, company mission</p>
              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="iconoir:stats-down-square-solid"/>
                </UBadge>
                Stats:
              </p>
              <p>Example section with possible stats, such as downloads/new users/new registers</p>
              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="material-symbols:groups"/>
                </UBadge>
                Team:
              </p>
              <p>Section contains team members, their avatars with some basic data, name, surname, position</p>
            </article>
          </template>
          <template #services>
            <article class="prose prose-sm dark:prose-invert">
              <p>Project Generator Wizard scaffolds website services page which contains:</p>

              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="carbon:gears"/>
                </UBadge>
                Services:
              </p>
              <p>Three example service sections</p>
              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="carbon:pricing-container"/>
                </UBadge>
                Pricing:
              </p>
              <p>Example pricing component which contains annual/monthly toggle, and 3 pricing tiers</p>
            </article>
          </template>
          <template #products>
            <article class="prose prose-sm dark:prose-invert">
              <p>Project Generator Wizard scaffolds website products page which contains:</p>
              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="material-symbols:person-add-outline"/>
                </UBadge>
                Product list:
              </p>
              <p>Example, non paginated list of products, where each product consists of:</p>
              <ul class="list-none">
                <li>
                  Product name
                </li>
                <li>
                  Product description
                </li>
                <li>
                  Product price
                </li>
                <li>
                  Buy now button
                </li>
                <li>
                  More info button
                </li>
              </ul>

            </article>
          </template>
          <template #blog>
            <article class="prose prose-sm dark:prose-invert">
              <p>Project Generator Wizard scaffolds website blog page which contains:</p>

              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="mdi:post"/>
                </UBadge>
                Blog posts list:
              </p>
              <p>Example paginated list of posts where each post consists of: </p>
              <ul class="list-none">
                <li>
                  Post title
                </li>
                <li>
                  Post excerpt
                </li>
                <li>
                  Post rating
                </li>
                <li>
                  Post published at date
                </li>
                <li>
                  Read more button
                </li>
              </ul>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="mdi:email-newsletter"/>
                </UBadge>
                Sign up for newsletter:
              </p>
              <p>Example sign up for newsletter component</p>

            </article>
          </template>
          <template #questions>
            <article class="prose prose-sm dark:prose-invert">
              <p>Project Generator Wizard scaffolds website frequently asked questions page which contains:</p>


              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="material-symbols:help"/>
                </UBadge>
                FAQ:
              </p>
              <p>Simple example collapsable component with questions and answers</p>

            </article>
          </template>
          <template #contact>
            <article class="prose prose-sm dark:prose-invert">
              <p>Project Generator Wizard scaffolds website contact page which contains:</p>


              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="material-symbols:android-contacts"/>
                </UBadge>
                Basic contact details:
              </p>
              <ul class="list-none">
                <li>
                  Location
                </li>
                <li>
                  Email Address
                </li>
                <li>
                  Phone Number
                </li>
                <li>
                  Working Hours
                </li>
              </ul>
              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="hugeicons:maps-location-01"/>
                </UBadge>
                Map:
              </p>
              <p>Integration with Leaflet in order to provide map of company location</p>
            </article>
          </template>

        </UAccordion>
      </div>

      <template #footer>
        <UButton block label="Preview" @click="emit('openFeatureDetailsDialog')">
          <template #leading>
            <UIcon name="material-symbols:preview" class="w-7 h-7"/>
          </template>
        </UButton>
      </template>
    </UCard>
  </USlideover>

</template>

<style scoped></style>
