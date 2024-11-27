<script lang="ts" setup>

const accordionItems = [
  {
    label: 'Crud',
    icon: 'material-symbols:edit-document-rounded',
    defaultOpen: true,
    slot: 'crud',
  },
  {
    label: 'Auth',
    icon: 'carbon:two-factor-authentication',
    slot: 'auth',
  },
  {
    label: 'Swagger',
    icon: 'simple-icons:swagger',
    slot: 'swagger',
  },
  {
    label: 'Postman',
    icon: 'lineicons:postman',
    slot: 'postman',
  },
  {
    label: 'Database',
    icon: 'material-symbols:database',
    slot: 'database',
  }
]

const emit = defineEmits<{
  closeSide: []
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
            Micro Service features
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="emit('closeSide')"/>
        </div>
      </template>

      <div class="h-full">
        <UAccordion :items="accordionItems">
          <template #crud>
            <article class="prose prose-sm dark:prose-invert">
              <p>Micro services can do many things, but one of the most common are database operations with crud
                functionality.</p>

              <p>Following api endpoints are included as example:</p>

              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" color="blue" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="formkit:url"/>
                </UBadge>
                [GET] - /pets:
              </p>
              <p>Retrieves a list of pets stored in the database</p>
              <p>
                <UBadge class="mr-3" color="blue" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="formkit:url"/>
                </UBadge>
                [GET] - /pets/:id:
              </p>
              <p>Returns all pet data per given pet id</p>
              <p>Input is validated, if validation fails, user receives error messages</p>
              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="formkit:url"/>
                </UBadge>
                [POST] - /pets:
              </p>
              <p>Stores a new pet to the database</p>
              <p>Input is validated, if validation fails, user receives error messages</p>

              <p>
                <UBadge class="mr-3" color="orange" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="formkit:url"/>
                </UBadge>
                [PATCH] - /pets/:id:
              </p>
              <p>Updates a pet entry per given pet id</p>
              <p>Input is validated, if validation fails, user receives error messages</p>


            </article>
          </template>
          <template #auth>
            <article class="prose prose-sm dark:prose-invert">
              <p>Authentication mechanism can be done in may ways.</p>

              <p>Here we provide example endpoint, where you can get JWT token, that is needed to access other
                routes</p>

              <p>Token generation is done for example purposes, it is not production ready in this way!</p>

              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="formkit:url"/>
                </UBadge>
                [POST] - /auth/generate-token
              </p>
              <p>In request body pass json {"name": "ADMIN"} to receive your jwt token, which needs to be passed in
                headers as Bearer token authorization to access pet routes.</p>
              <p>If wrong name is passed to request, validation error will show</p>
              <p>Again, this is just for demonstration purpose, for production, you would have some concrete token
                generation mechanism</p>

            </article>
          </template>
          <template #swagger>
            <article class="prose prose-sm dark:prose-invert">
              <p>Project Generator Wizard scaffolds swagger documentation:</p>

              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="simple-icons:swagger"/>
                </UBadge>
                Api Documentation:
              </p>
              <p>Micro service template contains swagger api documentation which is accessible on /documentation url</p>
            </article>
          </template>
          <template #postman>
            <article class="prose prose-sm dark:prose-invert">
              <p>Project Generator Wizard scaffolds postman collection:</p>
              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="lineicons:postman"/>
                </UBadge>
                Postman collection:
              </p>
              <p>All api endpoints are documented in postman collection as well, which is available for import in
                postman app itself.</p>

            </article>
          </template>
          <template #database>
            <article class="prose prose-sm dark:prose-invert">
              <p>Micro services could connect to existing database, or have each their own database</p>
              <p>Here we scaffold a database for this micro service.</p>

              <UDivider class="mb-3 mt-3"/>

              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="arcticons:nextcloud-tables"/>
                </UBadge>
                Tables:
              </p>
              <p>Example tables look like this: </p>
              <ul class="list-none">
                <li>
                  <UBadge class="mr-3" size="xs" :ui="{'rounded': 'rounded-full'}">
                    <UIcon name="material-symbols:group"/>
                  </UBadge>
                  <span class="text-blue-500">users</span>
                  <ul class="list-none">
                    <li>id - <samp class="text-orange-400">INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY</samp></li>
                    <li>name - <samp class="text-orange-400">VARCHAR(<span class="text-blue-500">50</span>) NOT
                      NULL</samp></li>
                  </ul>
                </li>
                <li>
                  <UBadge class="mr-3" size="xs" :ui="{'rounded': 'rounded-full'}">
                    <UIcon name="mdi:dog"/>
                  </UBadge>
                  <span class="text-blue-500">pets</span>
                  <ul class="list-none">
                    <li>id - <samp class="text-orange-400">INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY</samp></li>
                    <li>animal_type - <samp class="text-orange-400">VARCHAR(<span class="text-blue-500">50</span>) NOT
                      NULL</samp></li>
                    <li>name - <samp class="text-orange-400">VARCHAR(<span class="text-blue-500">50</span>) NOT
                      NULL</samp></li>
                    <li>nickname - <samp class="text-orange-400">VARCHAR(<span class="text-blue-500">50</span>)</samp>
                    </li>
                    <li>date_of_birth - <samp class="text-orange-400">DATE NOT NULL</samp></li>
                    <li>created_at - <samp class="text-orange-400">TIMESTAMP DEFAULT <span
                        class="text-black dark:text-white">CURRENT_TIMESTAMP</span></samp></li>
                    <li>updated_at - <samp class="text-orange-400">TIMESTAMP DEFAULT <span
                        class="text-black dark:text-white">CURRENT_TIMESTAMP</span></samp></li>
                  </ul>
                </li>
              </ul>
              <p>
                <UBadge class="mr-3" size="md" :ui="{'rounded': 'rounded-full'}">
                  <UIcon name="file-icons:config"/>
                </UBadge>
                Config:
              </p>
              <p>If you have already existing database, or some other database, or just dont want to use scaffolded
                example database, you can configure your database settings via .env file</p>

            </article>
          </template>

        </UAccordion>
      </div>

    </UCard>
  </USlideover>

</template>

<style scoped></style>
