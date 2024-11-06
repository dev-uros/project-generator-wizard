<script lang="ts" setup>
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
  },
  {
    label: 'Settings',
    icon: 'material-symbols:settings',
    slot: 'settings',
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
            Backoffice application features
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="emit('closeSide')"/>
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
          <template #settings>
            <article class="prose prose-sm dark:prose-invert">
              <p>Backoffice application provides settings area.</p>

              <UDivider class="mb-3 mt-3"/>

              <p>Currently settings area contains only session timeout setup, but in the future more features can be
                added!</p>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="material-symbols:alarm"/>
                </UBadge>
                Set time needed to pass from users last interaction with the system, for user to be considered inactive,
                and for auto log out to happen!
              </p>

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
