<script setup lang="ts">
const items = [{
  label: 'Project Flavour',
  icon: 'i-heroicons-information-circle',
  description: 'Select project flavour that you would like to conjure'
}, {
  label: 'Frontend Flavour',
  icon: 'i-heroicons-arrow-down-tray',
  description: 'And, this is the content for Tab2'
}, {
  label: 'Backend Flavour',
  icon: 'i-heroicons-eye-dropper',
  description: 'Finally, this is the content for Tab3'
}]

//

const projectFlavourOptions = [
  {value: 'backoffice', label: 'Backoffice', icon: 'material-symbols:admin-panel-settings-outline'},
  {
    value: 'website',
    label: 'Website',
    icon: 'streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network'
  },
  {value: 'desktop', label: 'Desktop', icon: 'material-symbols-light:desktop-windows-outline'}
]

const selected = ref('backoffice')

const isOpen = ref(false);

//


const accordionItems = [
  {
    label: 'User Management',
    icon: 'material-symbols:account-circle-full',
    defaultOpen: true,
    slot: 'user-management',
  },
  {
    label: 'Authentication',
    icon: 'arcticons:authenticator',
    slot: 'authentication',
  },
  {
    label: 'Logs',
    icon: 'icon-park-outline:upload-logs',
    slot: 'logs',
  }
]

//

const backofficeFeaturesModal = ref(false);

const closeBackofficeFeaturesPreview = () => {
  backofficeFeaturesModal.value = false;
  isOpen.value = true;
}

//

const backofficeFeatureTabs = [
  {
    label: 'Users overview',
    icon: 'i-heroicons-information-circle',
    content: 'This is the content shown for Tab1'
  }, {
    label: 'User Creation',
    icon: 'i-heroicons-arrow-down-tray',
    content: 'And, this is the content for Tab2'
  }, {
    label: 'User Details',
    icon: 'i-heroicons-eye-dropper',
    content: 'Finally, this is the content for Tab3'
  },
  {
    label: 'Activate Account Email',
    icon: 'i-heroicons-eye-dropper',
    content: 'Finally, this is the content for Tab3'
  },
  {
    label: 'Generate Password',
    icon: 'i-heroicons-eye-dropper',
    content: 'Finally, this is the content for Tab3'
  },
  {
    label: 'Logs',
    icon: 'i-heroicons-eye-dropper',
    content: 'Finally, this is the content for Tab3'
  }]
</script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1 class="align-text-bottom">Project Generator Wizard
            <UIcon name="game-icons:wizard-face" class="w-8 h-8"/>
          </h1>

          <ColorScheme>
            <USelectMenu class="w-36" v-model="$colorMode.preference" :options="['system', 'light', 'dark']"/>
          </ColorScheme>
        </div>
      </template>
      <UTabs :items="items" orientation="vertical"
             :ui="{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }">

        <template #item="{item}">
          <UCard>
            <template #header>{{ item.description }}</template>
            <div class="flex space-x-2.5">
              <URadioGroup v-model="selected" :options="projectFlavourOptions">
                <template #label="{ option }">
                  <UCard class="w-48 mb-2">
                    <template #header>
                      {{ option.label }}
                    </template>
                    <div class="flex justify-center items-center">
                      <UIcon :name="option.icon" class="w-10 h-10"/>
                    </div>
                  </UCard>

                </template>

              </URadioGroup>

              <UCard class="flex-grow">
                <template #header>
                  <div v-if="selected === 'backoffice'">
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
                      <UButton label="More info" color="gray" @click="isOpen = true">
                        <template #trailing>
                          <UIcon name="material-symbols:info-outline" class="w-5 h-5"/>
                        </template>
                      </UButton>
                    </article>

                  </div>
                  <div v-else-if="selected === 'website'">
                    website
                  </div>
                  <div v-else-if="selected === 'desktop'">
                    desktop
                  </div>

                </template>
                <template #footer>
                  <div class="flex flex-col items-end">
                    <UButton label="Next">
                      <template #trailing>
                        <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
                      </template>
                    </UButton>
                  </div>

                </template>
              </UCard>
            </div>

          </UCard>
        </template>
      </UTabs>
    </UCard>
  </UContainer>
  <USlideover v-model="isOpen">
    <UCard
        class="flex flex-col flex-1 overflow-auto"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Backoffice application features
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false"/>
        </div>
      </template>

      <div class="h-full">
        <UAccordion :items="accordionItems">
          <template #user-management>
            <article class="prose prose-sm dark:prose-invert">
              <p>Every backoffice application should have user management system.</p>
              <p>Project Generator Wizard scaffolds user dashboard with following functionalities:</p>

              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="material-symbols:person-add-outline"/>
                </UBadge>
                User creation:
              </p>
              <p>Simply create new user by entering needed data (name, surname, email)</p>
              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="fa6-solid:users"/>
                </UBadge>
                User overview:
              </p>
              <p>Overview the list of users created in the application</p>
              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="hugeicons:edit-user-02"/>
                </UBadge>
                User details page:
              </p>
              <p>Open users details page, from where user data can be edited, or user account be <span
                  class="text-red-500">deactivated</span> or <span class="text-green-500">reactivated</span>!</p>
            </article>
          </template>

          <template #authentication>
            <article class="prose prose-sm dark:prose-invert">
              <p>Every backoffice application should have reliable authentication system.</p>
              <UDivider class="mt-3 mb-3"/>
              <p>Upon user creation, an email is sent to user with instructions how to generate password and, by doing
                that, activate his account.</p>
              <p class="italic">
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="ph:warning-circle-bold"/>
                </UBadge>
                (System requires safe passwords, ex: min 8 characters, at least 1 uppercase letter, at least one number,
                at least one special character, uncompromised)
              </p>
              <p>When user generates his wanted password, he can finally log into the system.</p>
              <p>All content behind Login page is not accessible for users that are not logged in and for users whose
                accounts are deactivated from users administration!</p>
              <p>If an unauthenticated user would try to access some page behind login, he would instantly be redirected
                back to Login page!</p>

            </article>

          </template>
          <template #logs>
            <article class="prose prose-sm dark:prose-invert">
              <p>Every backoffice application should have robust logging system.</p>

              <UDivider class="mb-3 mt-3"/>

              <p>Backoffice application logs following items:</p>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="material-symbols:http"/>
                </UBadge>
                User request, including all request parameters and user data
              </p>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="mdi:code-json"/>
                </UBadge>
                User request response, including response time and response data
              </p>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="material-symbols:chat-error-outline"/>
                </UBadge>
                Failed data validations
              </p>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon
                      name="streamline:interface-user-delete-actions-close-delete-deny-fail-geometric-human-person-remove-single-up-user"/>
                </UBadge>
                Failed logins
              </p>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="ic:twotone-warning-amber"/>
                </UBadge>
                Unauthenticated access attempts
              </p>
              <p>All these logs can be viewed/queried on frontend application!</p>


            </article>

          </template>


        </UAccordion>
      </div>

      <template #footer>
        <UButton block label="Preview" @click="backofficeFeaturesModal = true">
          <template #leading>
            <UIcon name="material-symbols:preview" class="w-7 h-7"/>
          </template>
        </UButton>
      </template>
    </UCard>
  </USlideover>

  <UModal v-model="backofficeFeaturesModal" fullscreen>
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
            Modal
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                   @click="closeBackofficeFeaturesPreview"/>
        </div>
      </template>

      <UTabs :items="backofficeFeatureTabs"/>
      <!--      slika pregled korisnika-->
      <!--      slika kreiranje korisnika-->
      <!--      slika kartica korisnika-->
      <!--      slika logovi-->

      <!--      <UCarousel v-slot="{ item }" :items="backofficeFeaturesCarouselItems" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>-->
      <!--        <img :src="item" class="w-full h-5/6" draggable="false">-->
      <!--      </UCarousel>-->
    </UCard>
  </UModal>
</template>

<style scoped></style>
