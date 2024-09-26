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
    label: 'Logs',
    icon: 'icon-park-outline:upload-logs',
    slot: 'logs',
  },
  {
    label: 'Authentication',
    icon: 'arcticons:authenticator',
    slot: 'authentication',
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
                          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5"/>
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
              </UCard>
            </div>

          </UCard>
        </template>
      </UTabs>
    </UCard>
  </UContainer>
  <USlideover v-model="isOpen">
    <UCard
        class="flex flex-col flex-1"
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
            <p>Every backoffice application should have user management system.</p>
            <p>Project Generator Wizard scaffolds user dashboard with following functionalities:</p>
            <p>User creation:</p>
            <p>Simply create new user by entering needed data (name, surname, email)</p>
            <p>User overview:</p>
            <p>Overview users of your app</p>
            <p>User details page:</p>
            <p>Open users details page, from where user data can be edited, or user account be deactivated!</p>
          </template>

          <template #logs>
            <p>Every backoffice application should have robust logging system.</p>
<!--            <p>Project Generator Wizard scaffolds user dashboard with following functionalities:</p>-->
<!--            <p>User creation:</p>-->
<!--            <p>Simply create new user by entering needed data (name, surname, email)</p>-->
<!--            <p>User overview:</p>-->
<!--            <p>Overview users of your app</p>-->
<!--            <p>User details page:</p>-->
<!--            <p>Open users details page, from where user data can be edited, or user account be deactivated!</p>-->
          </template>

          <template #authentication>
            <p>Every backoffice application should have reliable authentication system.</p>
<!--            <p>Project Generator Wizard scaffolds user dashboard with following functionalities:</p>-->
<!--            <p>User creation:</p>-->
<!--            <p>Simply create new user by entering needed data (name, surname, email)</p>-->
<!--            <p>User overview:</p>-->
<!--            <p>Overview users of your app</p>-->
<!--            <p>User details page:</p>-->
<!--            <p>Open users details page, from where user data can be edited, or user account be deactivated!</p>-->
          </template>
        </UAccordion>
      </div>

      <!--                          <template #footer>-->
      <!--                            <Placeholder class="h-8" />-->
      <!--                          </template>-->
    </UCard>
  </USlideover>

</template>

<style scoped></style>
