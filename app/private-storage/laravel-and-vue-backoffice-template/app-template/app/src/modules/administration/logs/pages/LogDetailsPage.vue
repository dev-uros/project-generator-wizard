<script setup lang="ts">

import PageContainer from "src/modules/shared/components/PageContainer.vue";
import {useLogsStore} from "src/modules/administration/logs/store";
import {computed} from "vue";
import BaseTooltip from "src/modules/shared/components/BaseTooltip.vue";
import {copyToClipboard} from 'quasar'
import useNotificationMessage, {NotificationType} from "src/modules/shared/utils/notificationMessage";
import type {QueryArray} from "src/modules/administration/logs/types";

const logsStore = useLogsStore();

const logDetails = logsStore.apiLogEntryDetails

const badgeColor = computed(function () {
  if (logDetails) {
    switch (logDetails.context.method) {
      case 'POST':
        return 'blue'
      case 'GET':
        return 'green'
      case 'PUT':
        return 'orange'
      case 'PATCH':
        return 'orange'

      case 'DELETE':
        return 'red'
      default:
        return 'white'
    }
  } else {
    return 'white'
  }


});

const getPillColor = (requestStatus: number) => {
  switch (requestStatus) {
    case 500:
      return 'red';
    case 422:
      return 'orange';
    case 200:
      return 'green';
    default:
      return 'white'
  }
}

const copy = (text: string, allQueries = false) => {
  if (!allQueries) {
    copyToClipboard(text)
      .then(() => {
        useNotificationMessage(NotificationType.SUCCESS, 'Tekst kopiran u radnu memoriju')
      })
  } else {
    const queriesArray: QueryArray[] = JSON.parse(text);
    let formattedQueriesString = ``;
    queriesArray.forEach(query => {
      formattedQueriesString = formattedQueriesString + query.query + ";\n\n"
    })
    copyToClipboard(formattedQueriesString)
      .then(() => {
        useNotificationMessage(NotificationType.SUCCESS, 'Tekst kopiran u radnu memoriju')
      })
  }


}

</script>

<template>
  <PageContainer icon="view_list" title="Logovi - Detalji">
    <template #content v-if="logDetails">
      <q-card-section>
        <q-toolbar>
          <q-toolbar-title class="q-gutter-x-md">
            <q-badge :color="getPillColor(logDetails.context.status)" class="text-h6">
              Status: {{ logDetails.context.status }}

            </q-badge>

            <q-badge :color="badgeColor" class="text-h6">
              Method: {{ logDetails.context.method }}
            </q-badge>

            <q-badge class="text-h6">
              Url: {{ logDetails.context.url }}
              <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md" @click="copy(logDetails.context.url)">
                <BaseTooltip tooltip="Kopiraj"/>
              </q-btn>
            </q-badge>

          </q-toolbar-title>
        </q-toolbar>
        <q-toolbar>
          <q-toolbar-title class="q-gutter-x-md">

            <q-badge class="text-h6">
              Korisnik: ({{ logDetails.context.user.id }}) {{ logDetails.context.user.name }}
              {{ logDetails.context.user.surname }}
            </q-badge>
            <q-badge class="text-h6">
              Vreme: {{ logDetails.context.request_timestamp }}
            </q-badge>
          </q-toolbar-title>
        </q-toolbar>
      </q-card-section>
      <q-card-section>
        <div>

          <q-toolbar class="bg-primary">
            <q-toolbar-title class="text-white">
              Parametri
              <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md"
                     @click="copy(JSON.stringify(logDetails.context.parameters))">
                <BaseTooltip tooltip="Kopiraj"/>
              </q-btn>
            </q-toolbar-title>
          </q-toolbar>

          <q-list bordered separator v-for="(value, key, index) in logDetails.context.parameters" :key="index">
            <q-item>
              <q-item-section style="overflow-x: auto; word-wrap: break-word">{{ key }}: {{ value }}</q-item-section>
            </q-item>
          </q-list>


        </div>
      </q-card-section>

      <q-card-section>
        <div>

          <q-toolbar class="bg-primary">
            <q-toolbar-title class="text-white">
              Upiti
              <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md"
                     @click="copy(JSON.stringify(logDetails.context.queries), true)">
                <BaseTooltip tooltip="Kopiraj"/>
              </q-btn>
            </q-toolbar-title>
          </q-toolbar>
          <q-virtual-scroll
            style="max-height: 300px;"
            :items="logDetails.context.queries"
            separator
            v-slot="{ item, index }"
          >
            <q-item
              :key="index"
            >
              <q-item-section style="overflow-x: auto; word-wrap: break-word">
                <q-item-label>{{ item.query }}
                  <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md"
                         @click="copy(item.query)">
                    <BaseTooltip tooltip="Kopiraj"/>
                  </q-btn>
                </q-item-label>
                <q-item-label caption>Execution time: {{ item.time }} ms</q-item-label>
              </q-item-section>
            </q-item>
          </q-virtual-scroll>
        </div>
      </q-card-section>

      <q-card-section>
        <div>

          <q-toolbar class="bg-primary">
            <q-toolbar-title class="text-white">
              Dodatne poruke
              <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md"
                     @click="copy(JSON.stringify(logDetails.context.additional_messages))">
                <BaseTooltip tooltip="Kopiraj"/>
              </q-btn>
            </q-toolbar-title>
          </q-toolbar>

          <q-list bordered separator v-for="(value, key, index) in logDetails.context.additional_messages" :key="index">
            <q-item>
              <q-item-section style="overflow-x: auto; word-wrap: break-word">
                <q-item-label>{{ value }}
                  <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md"
                         @click="copy(JSON.stringify(value))">
                    <BaseTooltip tooltip="Kopiraj"/>
                  </q-btn>
                </q-item-label>
              </q-item-section>

            </q-item>

          </q-list>
        </div>
      </q-card-section>

      <q-card-section v-if="logDetails.context.content">
        <div v-if="logDetails.context.content.data">

          <q-toolbar class="bg-primary">
            <q-toolbar-title class="text-white">
              Odgovor
              <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md"
                     @click="copy(JSON.stringify(logDetails.context.content.data))">
                <BaseTooltip tooltip="Kopiraj"/>
              </q-btn>
            </q-toolbar-title>
          </q-toolbar>

          <q-list bordered separator v-for="(value, key, index) in logDetails.context.content.data" :key="index">
            <q-item>
              <q-item-section style="overflow-x: auto; word-wrap: break-word">{{ key }}: {{ value }}</q-item-section>
            </q-item>

          </q-list>
        </div>
        <div v-if="logDetails.context.content.errors">

          <q-toolbar class="bg-primary">
            <q-toolbar-title class="text-white">
              Odgovor
              <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md"
                     @click="copy(JSON.stringify(logDetails.context.content.errors))">
                <BaseTooltip tooltip="Kopiraj"/>
              </q-btn>
            </q-toolbar-title>
          </q-toolbar>

          <q-list bordered separator v-for="(value, key, index) in logDetails.context.content.errors" :key="index">
            <q-item>
              <q-item-section style="overflow-x: auto; word-wrap: break-word">{{ key }}: {{ value }}</q-item-section>
            </q-item>

          </q-list>
        </div>

      </q-card-section>

      <q-card-section v-if="logDetails.context.error_details">
        <div>

          <q-toolbar class="bg-primary">
            <q-toolbar-title class="text-white">
              Greška
              <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md"
                     @click="copy(JSON.stringify(logDetails.context.error_details))">
                <BaseTooltip tooltip="Kopiraj"/>
              </q-btn>
            </q-toolbar-title>
          </q-toolbar>

          <q-list bordered separator v-for="(value, key, index) in logDetails.context.error_details" :key="index">
            <q-item>
              <q-item-section style="overflow-x: auto; word-wrap: break-word">
                <q-item-label>
                  {{ key }}: {{ value }}
                  <q-btn size="xs" dense flat icon="content_copy" class="q-ml-md"
                         @click="copy(`${key}: ${value}`)">
                    <BaseTooltip tooltip="Kopiraj"/>
                  </q-btn>
                </q-item-label>

              </q-item-section>
            </q-item>

          </q-list>
        </div>
      </q-card-section>

    </template>
  </PageContainer>
</template>

<style scoped>

</style>
