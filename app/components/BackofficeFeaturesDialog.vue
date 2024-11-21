<script lang="ts" setup>
const emit = defineEmits<{
  closeDialog: []
}>()

const backofficeFeatureTabs = [
  {
    label: 'Users overview',
    icon: 'material-symbols:groups',
    description: 'Select project flavour that you would like to conjure',
    previous: null,
    previousLabel: null,
    next: 1,
    nextLabel: 'User Creation'
  },
  {
    label: 'User Creation',
    icon: 'hugeicons:user-add-02',
    previous: 0,
    previousLabel: 'Users overview',
    next: 2,
    nextLabel: 'Activate Account Email'
  },
  {
    label: 'Activate Account Email',
    icon: 'material-symbols:attach-email',
    previous: 1,
    previousLabel: 'User Creation',
    next: 3,
    nextLabel: 'Activate User Account'
  },
  {
    label: 'Activate User Account',
    icon: 'material-symbols:person-check',
    previous: 2,
    previousLabel: 'Activate Account Email',
    next: 4,
    nextLabel: 'User Details'
  },
  {
    label: 'User Details',
    icon: 'mdi:account-details',
    previous: 3,
    previousLabel: 'Activate User Account',
    next: 5,
    nextLabel: 'Logs'
  },

  {
    label: 'Logs',
    icon: 'tabler:logs',
    previous: 4,
    previousLabel: 'User Details',
    next: 6,
    nextLabel: 'Settings'
  },
  {
    label: 'Settings',
    icon: 'material-symbols:settings-input-component',
    previous: 5,
    previousLabel: 'Logs',
    next: 7,
    nextLabel: 'Docs'
  },
  {
    label: 'Docs',
    icon: 'material-symbols:docs-apps-script',
    previous: 6,
    previousLabel: 'Settings',
    next: null,
    nextLabel: null
  }
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
const logImages = ['/images/logs-main-page.webp', '/images/logs-200.webp', '/images/logs-422.webp', '/images/logs-500.webp']
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
          <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Backoffice application feature details
          </h3>
          <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="emit('closeDialog')"
          />
        </div>
      </template>

      <UTabs :items="backofficeFeatureTabs" v-model="selectedStep">
        <template #default="{ item, index, selected }">
          <span class="truncate hidden lg:block md:hidden"
                :class="[selected && 'text-primary-500 dark:text-primary-400']">{{ item.label }}</span>
        </template>
        <template #item="{ item }">
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
            <div
                v-if="item.label === 'Users overview'"
                class="flex flex-col xl:flex-row w-full gap-4"
            >
              <div class="w-full xl:w-2/3">
                <img
                    alt="Users Overview Image"
                    src="/images/users-overview.webp"
                />
              </div>
              <div class="w-full xl:w-1/3">
                <article class="prose prose-sm dark:prose-invert max-w-none">
                  <h1>User Overview functionalities</h1>

                  <UDivider class="mb-3 mt-3"/>

                  <ul class="list-none">
                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="material-symbols:data-table"/>
                      </UBadge>
                      Datatable
                      <p>
                        Table shows user basic data
                        <span class="font-bold"
                        >(name, surname, email, account state)</span
                        >
                      </p>
                      <p>All fields are searchable via table search text box</p>
                      <p>
                        Table can be sorted by using icons on table column
                        headers
                      </p>
                      <p>
                        Table can also be paginated (on client side, default
                        results per page values are: [5, 7 ,10, 15, 20, 25, 50,
                        All])
                      </p>
                    </li>

                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="material-symbols:filter-list"/>
                      </UBadge>
                      Filters
                      <p>
                        Users can be filtered by their account state
                        <span class="italic"
                        >(possible filter values:
                          <span class="text-green-500">active</span>,
                          <span class="text-red-500">inactive</span>,
                          <span class="font-bold">show all</span>)</span
                        >
                      </p>
                    </li>

                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="material-symbols:person-add-outline"/>
                      </UBadge>
                      Seamlessly create new users
                      <p>
                        By leveraging add user button (on the top left corner)
                        new users can easily be created.
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div
                v-else-if="item.label === 'User Creation'"
                class="flex flex-col xl:flex-row w-full gap-4"
            >
              <div class="w-full xl:w-2/3">
                <img
                    alt="User Creation Image"
                    src="/images/user-creation.webp"
                />
              </div>
              <div class="w-full xl:w-1/3">
                <article class="prose prose-sm dark:prose-invert">
                  <h1>User Creation breakdown</h1>

                  <UDivider class="mb-3 mt-3"/>

                  <ul class="list-none">
                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="fluent:form-new-48-regular"/>
                      </UBadge>
                      User creation form
                      <p>Create new user by filling out needed data:</p>
                      <p>
                        <span class="underline">Name:</span> (required, min: 3
                        characters, max: 255 characters)
                      </p>
                      <p>
                        <span class="underline">Surname:</span> (required, min:
                        3 characters, max: 255 characters)
                      </p>
                      <p>
                        <span class="underline">Email:</span> (required, min: 3
                        characters, max: 255 characters, valid email address,
                        unique in system database)
                      </p>
                      <p>Data validation happens both on front and backend</p>
                    </li>

                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="mdi:email-fast-outline"/>
                      </UBadge>
                      Account activation email
                      <p>
                        Upon successful user creation, an email will be sent to
                        entered email address, with instructions on how user can
                        activate his account
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div
                v-else-if="item.label === 'Activate Account Email'"
                class="flex flex-col xl:flex-row w-full gap-4"
            >
              <div class="w-full xl:w-2/3">
                <img
                    alt="Activate Account Image"
                    src="/images/activate-account-email.webp"
                />
              </div>
              <div class="w-full xl:w-1/3">
                <article class="prose prose-sm dark:prose-invert">
                  <h1>Activate Account Email</h1>

                  <UDivider class="mb-3 mt-3"/>

                  <ul class="list-none">
                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="material-symbols:contact-mail"/>
                      </UBadge>
                      Email
                      <p>
                        After administrator creates a user, the user will
                        receive email with instructions on how to generate his
                        password and, by doing that, activate his account, thus
                        making him able to login with his email address and
                        defined password
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div
                v-else-if="item.label === 'Activate User Account'"
                class="flex flex-col xl:flex-row w-full gap-4"
            >
              <div class="w-full xl:w-2/3">
                <img
                    alt="User Activate Account Image"
                    src="/images/user-activate-account.webp"
                />
              </div>
              <div class="w-full xl:w-1/3">
                <article class="prose prose-sm dark:prose-invert">
                  <h1>Activate User Account</h1>

                  <UDivider class="mb-3 mt-3"/>

                  <ul class="list-none">
                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="material-symbols:person-check"/>
                      </UBadge>
                      Account Activation
                      <p>
                        After following link from account activation email, user
                        lands on a page where he can define his login password,
                        and by doing that verify his email and activate his
                        account, thus, making him able to login to the system
                      </p>
                    </li>

                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="solar:lock-password-bold"/>
                      </UBadge>
                      Password Generation
                      <p>
                        User has to enter password for his account, password
                        needs to be confirmed and pass following validation:
                      </p>
                      <p>
                        Must have at least
                        <span class="font-bold text-green-500"
                        >one upper case letter</span
                        >
                      </p>
                      <p>
                        Must have at least
                        <span class="font-bold text-green-500"
                        >one symbol (!,@,#,$,%,^,&,*)</span
                        >
                      </p>
                      <p>
                        Must have at least
                        <span class="font-bold text-green-500">one number</span>
                      </p>
                      <p>
                        Must be at least
                        <span class="font-bold text-green-500"
                        >eight characters long</span
                        >
                      </p>
                      <p>
                        Must be
                        <span class="font-bold text-green-500"
                        >uncompromised</span
                        >
                        (checked on backend)
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div
                v-if="item.label === 'User Details'"
                class="flex flex-col xl:flex-row w-full gap-4"
            >
              <div class="w-full xl:w-2/3">
                <img
                    alt="User Details Image"
                    src="/images/user-details.webp"
                />
              </div>
              <div class="w-full xl:w-1/3">
                <article class="prose prose-sm dark:prose-invert">
                  <h1>User Details functionalities</h1>

                  <UDivider class="mb-3 mt-3"/>

                  <ul class="list-none">
                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="material-symbols:edit"/>
                      </UBadge>
                      Edit User Data
                      <p>
                        Administrator can update basic user data
                        <span class="font-bold">(name, surname, email)</span>
                      </p>
                      <p>
                        <span class="underline">Name:</span> (required, min: 3
                        characters, max: 255 characters)
                      </p>
                      <p>
                        <span class="underline">Surname:</span> (required, min:
                        3 characters, max: 255 characters)
                      </p>
                      <p>
                        <span class="underline">Email:</span> (required, min: 3
                        characters, max: 255 characters, valid email address,
                        unique in system database)
                      </p>
                    </li>

                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="mdi:email-fast-outline"/>
                      </UBadge>
                      Resend Activation Email
                      <p>
                        Users can sometimes complain that they never received
                        account activation email, in that case, administrator
                        can easily resend it
                      </p>
                    </li>
                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="material-symbols:person-alert"/>
                      </UBadge>
                      Reactivate/Deactivate User Account
                      <p>
                        Administrator can easily deactivate user account if
                        there is a need for it
                      </p>
                      <p>
                        <span class="font-bold text-red-500">Deactivated</span>
                        user will
                        <span class="font-bold text-red-500"
                        >no longer be able to log in</span
                        >
                        to the system, and if he currently has active
                        authentication token, it will be
                        <span class="font-bold text-red-500">revoked</span>!
                      </p>
                      <p>
                        <span class="font-bold text-green-500"
                        >Reactivated</span
                        >
                        user will again
                        <span class="font-bold text-green-500"
                        >be able to log in</span
                        >
                        to the system with his
                        <span class="font-bold">old password</span>!
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div
                v-if="item.label === 'Logs'"
                class="flex flex-col xl:flex-row w-full gap-4"
            >
              <div class="w-full xl:w-2/3">
                <UCarousel
                    v-slot="{ item }"
                    :items="logImages"
                    :ui="{ item: 'basis-full' }"
                    class="rounded-lg overflow-hidden"
                    :next-button="{ color: 'green' }"
                    :prev-button="{ color: 'green' }"
                    arrows
                >
                  <img :src="item" class="w-full" alt="Logs Carousel Image"/>
                </UCarousel>
              </div>
              <div class="w-full xl:w-1/3">
                <article class="prose prose-sm dark:prose-invert">
                  <h1>Logs Overview</h1>

                  <UDivider class="mb-3 mt-3"/>

                  <ul class="list-none">
                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="icon-park-outline:upload-logs"/>
                      </UBadge>
                      Logs
                      <p>
                        All API endpoints have automatic logging mechanism which logs request meta data (date, time,
                        user, params, url, status, response)
                      </p>
                      <p>
                        First dropdown menu contains all endpoints which have some logs related to them
                      </p>
                      <p>
                        On selected endpoint, list of log files are generated on second dropdown menu
                      </p>
                      <p>
                        On selected both endpoint and log file dropdown menus, a list of logs with some basic info is
                        displayed inside of paginated table
                      </p>
                      <p>
                        Button details opens log details in new tab
                      </p>
                    </li>

                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="icon-park-outline:more-four"/>
                      </UBadge>
                      Log Details
                      <p>
                        Log details contains all that logged within an api call
                      </p>
                      <p>
                        Url, method, status, request date and time, user
                      </p>
                      <p>
                        All queries that were executed, with options to copy to clipboard individual query, or all of
                        the at once
                      </p>
                      <p>
                        All custom messages that were logged, with options to copy to clipboard individual message, or
                        all of the at once
                      </p>
                      <p>
                        Entire response is logged, with options to copy to clipboard
                      </p>
                      <p>
                        Server errors are logged, with options to copy to clipboard individual error, or all at once
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div
                v-if="item.label === 'Settings'"
                class="flex flex-col xl:flex-row w-full gap-4"
            >
              <div class="w-full xl:w-2/3">
                <img alt="Settings Image" src="/images/settings.webp"/>
              </div>
              <div class="w-full xl:w-1/3">
                <article class="prose prose-sm dark:prose-invert">
                  <h1>Settings functionalities</h1>

                  <UDivider class="mb-3 mt-3"/>

                  <ul class="list-none">
                    <li>
                      <UBadge
                          class="mr-3"
                          size="md"
                          :ui="{ rounded: 'rounded-full' }"
                      >
                        <UIcon name="material-symbols:alarm"/>
                      </UBadge>
                      Session Timeout
                      <p>
                        Set time needed to pass from users last interaction with
                        the system, for user to be considered inactive, and for
                        auto log out to happen!
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div
                v-if="item.label === 'Docs'"
                class="w-full gap-4"
            >
              <p class="mb-8">This Documentation app is, via iframe, embedded into main single page vue application</p>

              <iframe src="https://vitepress-documentation-preview.urosminic.com" title="Documentation Template" class="w-full min-h-screen"></iframe>
            </div>

          </UCard>
        </template>
      </UTabs>
    </UCard>
  </UModal>
</template>

<style scoped></style>
